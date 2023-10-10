import React from "react";
import {
  ResultsCard,
  ReportError,
  Collapse,
  Column,
  Table,
  ReportTableStyled,
  GroupCircleRow,
  GroupPill,
  KeySection,
  HorizontalStackedBar,
  ReportChartFigure,
  ObjectiveStatus,
  useSketchProperties,
} from "@seasketch/geoprocessing/client-ui";
import {
  ReportResult,
  NullSketch,
  Metric,
  firstMatchingMetric,
  keyBy,
  toNullSketchArray,
  percentWithEdge,
  GroupMetricAgg,
  roundLower,
  squareMeterToKilometer,
  OBJECTIVE_NO,
  OBJECTIVE_YES,
  getKeys,
  Objective,
  getUserAttribute,
  ObjectiveAnswer,
  toPercentMetric,
  genSketchCollection,
} from "@seasketch/geoprocessing/client-core";
import {
  getMetricGroupObjectiveIds,
  getMinYesCountMap,
  getObjectiveById,
  isSketchCollection,
} from "@seasketch/geoprocessing";
import { Trans, useTranslation } from "react-i18next";
import styled from "styled-components";
import project from "../../project";
import { flattenByGroupAllClass } from "../util/flattenByGroupAllClass";

// Mapping groupIds to colors
const groupColorMap: Record<string, string> = {
  HIGH_PROTECTION: "#BEE4BE",
  MEDIUM_PROTECTION: "#FFE1A3",
};

// Mapping groupIds to display names
const groupDisplayMap: Record<string, string> = {
  HIGH_PROTECTION: "High Protection Area",
  MEDIUM_PROTECTION: "Medium Protection Area",
};

// Styling for 'Show by --' tables
export const SmallReportTableStyled = styled(ReportTableStyled)`
  .styled {
    font-size: 13px;
  }
`;

/**
 * Top level SizeCard element
 * @returns React.FunctionComponent
 */
export const SizeCard: React.FunctionComponent = (props) => {
  const { t, i18n } = useTranslation();
  const [{ isCollection }] = useSketchProperties();
  const mg = project.getMetricGroup("boundaryAreaOverlap", t);
  const objectiveIds = getMetricGroupObjectiveIds(mg);
  const objectives = objectiveIds.map((o) => project.getObjectiveById(o));

  return (
    <ResultsCard
      title={t("Size")}
      functionName="boundaryAreaOverlap"
    >
      {(data: ReportResult) => {
        // Get overall area of sketch metric
        const areaMetric = firstMatchingMetric(
          data.metrics,
          (m) => m.sketchId === data.sketch.properties.id && m.groupId === null
        );

        // Get precalcalulated total metrics from precalc.json
        const boundaryTotalMetrics = project.getPrecalcMetrics(
          mg,
          "area"
        );

        // Grab overall size precalc metric
        const totalAreaMetric = firstMatchingMetric(
          boundaryTotalMetrics,
          (m) => m.groupId === null
        );

        // Format area metrics for key section display
        const areaDisplay = roundLower(
          squareMeterToKilometer(areaMetric.value)
        );
        const percDisplay = percentWithEdge(
          areaMetric.value / totalAreaMetric.value
        );
        const areaUnitDisplay = t("sq. km");

        return (
          <ReportError>
            <>
              <KeySection>
                {t("This plan is")}{" "}
                <b>
                  {areaDisplay} {areaUnitDisplay}
                </b>
                {", "}
                {t("which is")} <b>{percDisplay}</b> {t("of")}{" "}
                {t("the Belize Ocean Space")}.
              </KeySection>
              {isCollection
                ? collectionReport(
                    data,
                    boundaryTotalMetrics,
                    objectiveIds,
                    t
                  )
                : sketchReport(data, boundaryTotalMetrics, objectiveIds, t)}

              <Collapse title={t("Learn More")}>
                {genLearnMore(objectives)}
              </Collapse>
            </>
          </ReportError>
        );
      }}
    </ResultsCard>
  );
};

/**
 * Report protection level for single sketch
 * @param data ReportResult
 * @param t TFunction
 * @returns JSX.Element
 */
const sketchReport = (data: ReportResult, 
  precalcMetrics: Metric[],
  objectiveIds: string[],
  t: any) => {
  const levels = ["HIGH_PROTECTION", "MEDIUM_PROTECTION"];
  const level = getUserAttribute(
    data.sketch.properties,
    "designation"
  );

  const area = firstMatchingMetric(
    data.metrics,
    (m) => m.groupId === null
  ).value;

  const totalArea = firstMatchingMetric(
    precalcMetrics,
    (m) => m.groupId === null
  ).value;

  const percArea = area/totalArea;

    // Coloring and styling for horizontal bars
    const groupColors = Object.values(groupColorMap);
    const blockGroupNames = ["High", "Medium"];
    const blockGroupStyles = groupColors.map((curBlue) => ({
      backgroundColor: curBlue,
    }));
    const valueFormatter = (value: number) => percentWithEdge(value / 100);

    return (
      <>
        {objectiveIds.map((objectiveId: string) => {
          const objective = project.getObjectiveById(objectiveId);
          const isMet = percArea >= objective.target ? OBJECTIVE_YES : OBJECTIVE_NO;

          // Create horizontal bar config
          const config = {
            rows: [levels.map((l) => l===level ? [percArea * 100] : [0])],
            rowConfigs: [
              {
                title: "",
              },
            ],
            target: objective.target * 100,
            max: 100,
          };
  
          const targetLabel = t("Target");
  
          return (
            <React.Fragment key={objectiveId}>
              <CollectionObjectiveStatus
                objective={objective}
                objectiveMet={isMet}
                t={t}
                renderMsg={collectionMsgs[objectiveId](
                  objective,
                  isMet,
                  t
                )}
              />
              <ReportChartFigure>
                <HorizontalStackedBar
                  {...config}
                  blockGroupNames={blockGroupNames}
                  blockGroupStyles={blockGroupStyles}
                  showLegend={true}
                  valueFormatter={valueFormatter}
                  targetValueFormatter={(value) =>
                    targetLabel + ` - ` + value + `%`
                  }
                />
              </ReportChartFigure>
            </React.Fragment>
          );
        })}
      </>
    );
};

/**
 * Report protection level for sketch collection
 * @param data ReportResult
 * @param precalcMetrics Metric[] from precalc.json
 * @param t TFunction
 * @returns JSX.Element
 */
const collectionReport = (
  data: ReportResult,
  precalcMetrics: Metric[],
  objectiveIds: string[],
  t: any
) => {
  if (!isSketchCollection(data.sketch)) throw new Error("NullSketch");
  const sketches = toNullSketchArray(data.sketch);
  const sketchesById = keyBy(sketches, (sk) => sk.properties.id);

  // Filter down to metrics which have groupIds
  const levelMetrics = data.metrics.filter(
    (m) => m.groupId === "HIGH_PROTECTION" || m.groupId === "MEDIUM_PROTECTION"
  );

  const groupLevelAggs: GroupMetricAgg[] = flattenByGroupAllClass(
    data.sketch,
    levelMetrics,
    precalcMetrics
  );

  // Filter down grouped metrics to ones that count for each objective
  const totalsByObjective = objectiveIds.reduce<Record<string, number[]>>(
    (acc, objectiveId) => {
      // Protection levels which count for objective
      const yesAggs: GroupMetricAgg[] = groupLevelAggs.filter((levelAgg) => {
        const level = levelAgg.groupId;
        return (
          project.getObjectiveById(objectiveId).countsToward[level] ===
          OBJECTIVE_YES
        );
      });
      // Extract percent value from metric
      const yesValues = yesAggs.map((yesAgg) => yesAgg.percValue);
      return { ...acc, [objectiveId]: yesValues };
    },
    {}
  );

  // Child sketch table for 'Show By MPA'
  const childAreaMetrics = levelMetrics.filter(
    (m) => m.sketchId !== data.sketch.properties.id && m.groupId
  );
  const childAreaPercMetrics = toPercentMetric(
    childAreaMetrics,
    precalcMetrics
  );

  // Coloring and styling for horizontal bars
  const groupColors = Object.values(groupColorMap);
  const blockGroupNames = ["High", "Medium"];
  const blockGroupStyles = groupColors.map((curBlue) => ({
    backgroundColor: curBlue,
  }));
  const valueFormatter = (value: number) => percentWithEdge(value / 100);

  return (
    <>
      {objectiveIds.map((objectiveId: string) => {
        const objective = project.getObjectiveById(objectiveId);

        // Get total percentage within sketch
        const percSum = totalsByObjective[objectiveId].reduce(
          (sum, value) => sum + value,
          0
        );

        // Checks if the objective is met
        const isMet =
          percSum >= objective.target ? OBJECTIVE_YES : OBJECTIVE_NO;

        // Create horizontal bar config
        const config = {
          rows: [totalsByObjective[objectiveId].map((value) => [value * 100])],
          rowConfigs: [
            {
              title: "",
            },
          ],
          target: objective.target * 100,
          max: 100,
        };

        const targetLabel = t("Target");

        return (
          <React.Fragment key={objectiveId}>
            <CollectionObjectiveStatus
              objective={objective}
              objectiveMet={isMet}
              t={t}
              renderMsg={collectionMsgs[objectiveId](
                objective,
                isMet,
                t
              )}
            />
            <ReportChartFigure>
              <HorizontalStackedBar
                {...config}
                blockGroupNames={blockGroupNames}
                blockGroupStyles={blockGroupStyles}
                showLegend={true}
                valueFormatter={valueFormatter}
                targetValueFormatter={(value) =>
                  targetLabel + ` - ` + value + `%`
                }
              />
            </ReportChartFigure>
          </React.Fragment>
        );
      })}

      <Collapse title={t("Show by Protection Level")}>
        {genGroupLevelTable(groupLevelAggs, t)}
      </Collapse>

      <Collapse title={t("Show by MPA")}>
        {genMpaSketchTable(sketchesById, childAreaPercMetrics, t)}
      </Collapse>
    </>
  );
};

// SKETCH COLLECTION TYPES AND ELEMENTS

/**
 * Properties for getting objective status for sketch collection
 * @param objective Objective
 * @param objectiveMet ObjectiveAnswer
 * @param renderMsg function that takes (objective, groupId)
 */
interface CollectionObjectiveStatusProps {
  objective: Objective;
  objectiveMet: ObjectiveAnswer;
  t: any;
  renderMsg: any;
}

/**
 * Presents objectives for single sketch
 * @param CollectionObjectiveStatusProps containing objective, objective
 */
const CollectionObjectiveStatus: React.FunctionComponent<CollectionObjectiveStatusProps> =
  ({ objective, objectiveMet, t }) => {
    const msg = collectionMsgs[objective.objectiveId](
      objective,
      objectiveMet,
      t
    );

    return <ObjectiveStatus status={objectiveMet} msg={msg} />;
  };

/**
 * Renders messages beased on objective and if objective is met for sketch collections
 */
const collectionMsgs: Record<string, any> = {
  ocean_space_protected: (
    objective: Objective,
    objectiveMet: ObjectiveAnswer,
    t: any
  ) => {
    if (objectiveMet === OBJECTIVE_YES) {
      return (
        <>
          {t("This plan meets the objective of protecting")}{" "}
          <b>{percentWithEdge(objective.target)}</b> {t("of the Belize Ocean Space.")}
        </>
      );
    } else if (objectiveMet === OBJECTIVE_NO) {
      return (
        <>
          {t("This plan does not meet the objective of protecting")}{" "}
          <b>{percentWithEdge(objective.target)}</b> {t("of the Belize Ocean Space.")}
        </>
      );
    }
  }
};

/**
 * Generates Show By MPA sketch table
 * @param sketchesById Record<string, NullSketch>
 * @param regMetrics Metric[]
 * @returns
 */
const genMpaSketchTable = (
  sketchesById: Record<string, NullSketch>,
  regMetrics: Metric[],
  t: any
) => {
  const columns: Column<Metric>[] = [
    {
      Header: t("MPA"),
      accessor: (row) => (
        <GroupPill groupColorMap={groupColorMap} group={row.groupId!}>
          {sketchesById[row.sketchId!].properties.name}
        </GroupPill>
      ),
    },
    {
      Header: "% Belize Ocean Space",
      accessor: (row) => percentWithEdge(row.value),
    },
  ];

  return (
    <SmallReportTableStyled>
      <Table
        className="styled"
        columns={columns}
        data={regMetrics.sort((a, b) => {
          return a.value > b.value ? 1 : -1;
        })}
      />
    </SmallReportTableStyled>
  );
};

const genGroupLevelTable = (
  levelAggs: GroupMetricAgg[],
  t: any
) => {
  const groupDisplayMap: Record<string, string> = {
    HIGH_PROTECTION: t("High Protection Biodiversity Zone(s)"),
    MEDIUM_PROTECTION: t("Medium Protection Biodiversity Zone(s)"),
  };

  const columns: Column<GroupMetricAgg>[] = [
    {
      Header: t("This plan contains") + ":",
      accessor: (row) => (
        <GroupCircleRow
          group={row.groupId}
          groupColorMap={groupColorMap}
          circleText={`${row.numSketches}`}
          rowText={
            <>
              <b>{groupDisplayMap[row.groupId]}</b>
            </>
          }
        />
      ),
    },
    {
      Header: "% Belize Ocean Space",
      accessor: (row) => {
        return (
          <GroupPill groupColorMap={groupColorMap} group={row.groupId}>
            {percentWithEdge(row.percValue as number)}
          </GroupPill>
        );
      },
    },
  ];

  return (
    <SmallReportTableStyled>
      <Table
        className="styled"
        columns={columns}
        data={levelAggs.sort((a, b) => a.groupId.localeCompare(b.groupId))}
      />
    </SmallReportTableStyled>
  );
};

/**
 * Generates Learn More for Size Card
 * @param objectives Objective[]
 * @returns JSX.Element
 */
const genLearnMore = (objectives: Objective[]) => {
  const objectiveMap = keyBy(objectives, (obj) => obj.objectiveId);
  const minYesCounts = getMinYesCountMap(objectives);
  return (
    <>
      <p>
        An MPA counts toward an objective if it meets the minimum level of
        protection for that objective.
      </p>
      <table>
        <thead>
          <tr>
            <th>Objective</th>
            <th>Minimum MPA Classification Required</th>
          </tr>
        </thead>
        <tbody>
          {getKeys(objectiveMap).map((objectiveId, index) => {
            return (
              <tr key={index}>
                <td>{objectiveMap[objectiveId].shortDesc}</td>
                <td>{groupDisplayMap[minYesCounts[objectiveId]]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>
        <Trans i18nKey="Size Card - Learn more">
          Overlap is only counted once. If MPAs of different protection levels
          overlap, only the highest protection level is counted.
        </Trans>
      </p>
    </>
  );
};