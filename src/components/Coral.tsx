import React from "react";
import {
  Collapse,
  ResultsCard,
  useSketchProperties,
  ToolbarCard,
  LayerToggle,
  ReportChartFigure,
  HorizontalStackedBar,
  ObjectiveStatus,
  Column,
  Table,
  SmallReportTableStyled,
  GroupCircleRow,
  GroupPill,
  SketchClassTableStyled,
  RowConfig,
} from "@seasketch/geoprocessing/client-ui";
import {
  ReportResult,
  toNullSketchArray,
  Metric,
  toPercentMetric,
  GeogProp,
  isSketchCollection,
  firstMatchingMetric,
  OBJECTIVE_YES,
  GroupMetricAgg,
  flattenByGroupAllClass,
  percentWithEdge,
  OBJECTIVE_NO,
  Objective,
  ObjectiveAnswer,
  keyBy,
  getUserAttribute,
} from "@seasketch/geoprocessing/client-core";
import project from "../../project";
import Translator from "./TranslatorAsync";
import { Trans, useTranslation } from "react-i18next";
import { getMetricGroupObjectiveIds } from "@seasketch/geoprocessing";
import {
  groupColorMap,
  groupDisplayMapPl,
} from "../util/getMpaProtectionLevel";

const Number = new Intl.NumberFormat("en", { style: "decimal" });

export const Coral: React.FunctionComponent<GeogProp> = (props) => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const curGeography = project.getGeographyById(props.geographyId, {
    fallbackGroup: "default-boundary",
  });

  const metricGroup = project.getMetricGroup("coralValueOverlap", t);
  const objectiveIds = getMetricGroupObjectiveIds(metricGroup);
  const precalcMetrics = project.getPrecalcMetrics(
    metricGroup,
    "sum",
    curGeography.geographyId
  );

  const mapLabel = t("Map");

  return (
    <>
      <ResultsCard
        title={t("Coral Reef")}
        functionName="coralValueOverlap"
        useChildCard
      >
        {(data: ReportResult) => {
          return (
            <ToolbarCard
              title={t("Coral Reef")}
              items={
                <LayerToggle
                  label={mapLabel}
                  layerId={metricGroup.layerId}
                  simple
                />
              }
            >
              <p>
                <Trans i18nKey="Coral Card 1">
                  This planning process has the goal of promoting the growth and
                  survival of coral species. This report shows progress towards
                  the objective of 20% of coral reefs highly protected.
                </Trans>
              </p>
              <Translator>
                {isCollection
                  ? collectionReport(data, precalcMetrics, objectiveIds, t)
                  : sketchReport(data, precalcMetrics, objectiveIds, t)}
              </Translator>

              {isCollection && (
                <Collapse title={t("Show by MPA")}>
                  {genMpaSketchTable(data, precalcMetrics, t)}
                </Collapse>
              )}

              <Collapse title={t("Learn more")}>
                <Trans i18nKey="Coral Card - learn more">
                  <p>
                    ℹ️ Overview: Coral reef restoration is the intentional and
                    active process of assisting the recovery and regeneration of
                    coral reefs that have been damaged or degraded. It involves
                    various techniques and interventions aimed at promoting the
                    growth and survival of coral species, enhancing reef
                    structure, and restoring ecosystem functionality. 7% of
                    Belizean coral reefs are currently within HBPZs.
                  </p>
                  <p>🎯 Planning Objective: 20% of coral reefs in HBPZs</p>
                  <p>
                    🗺️ Source Data: Coral cover for 2021 from the Smart Coasts
                    project, derived from the GEOBON project from CZMAI.
                  </p>
                  <p>
                    📈 Report: The percentage of each feature type within this
                    plan is calculated by finding the overlap of each feature
                    type with the plan, summing its area, then dividing it by
                    the total area of each feature type found within the
                    selected nearshore planning area. If the plan includes
                    multiple areas that overlap, the overlap is only counted
                    once.
                  </p>
                </Trans>
              </Collapse>
            </ToolbarCard>
          );
        }}
      </ResultsCard>
    </>
  );
};

/**
 * Report protection level for single sketch
 * @param data ReportResult
 * @param t TFunction
 * @returns JSX.Element
 */
const sketchReport = (
  data: ReportResult,
  precalcMetrics: Metric[],
  objectiveIds: string[],
  t: any
) => {
  // Get total planning area
  const totalArea = firstMatchingMetric(
    precalcMetrics,
    (m) => m.groupId === null
  ).value;

  // Filter down to metrics which have groupIds
  const levelMetrics = data.metrics.filter(
    (m) => m.groupId === "HIGH_PROTECTION" || m.groupId === "MEDIUM_PROTECTION"
  );

  // Filter down grouped metrics to ones that count for each objective
  const totalsByObjective = objectiveIds.reduce<Record<string, number[]>>(
    (acc, objectiveId) => {
      // Protection levels which count for objective
      const yesAggs = levelMetrics.filter((levelAgg) => {
        const level = levelAgg.groupId;
        return (
          project.getObjectiveById(objectiveId).countsToward[level!] ===
          OBJECTIVE_YES
        );
      });
      // Extract percent value from metric
      const yesValues = yesAggs.map((yesAgg) => yesAgg.value / totalArea);
      return { ...acc, [objectiveId]: yesValues };
    },
    {}
  );

  return <>{genObjectiveReport(objectiveIds, totalsByObjective, t)}</>;
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

  return (
    <>
      {genObjectiveReport(objectiveIds, totalsByObjective, t)}

      <Collapse title={t("Show by Protection Level")}>
        {genGroupLevelTable(groupLevelAggs, t)}
      </Collapse>
    </>
  );
};

/**
 * Generates Show By MPA sketch table
 */
const genObjectiveReport = (
  objectiveIds: string[],
  totalsByObjective: Record<string, number[]>,
  t: any
) => {
  // Coloring and styling for horizontal bars
  const groupColors = Object.values(groupColorMap);
  const blockGroupNames = [t("High"), t("Medium")];
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
        const rowConfig: RowConfig[] = [
          {
            title: t("Coral Reef"),
          },
        ];

        return (
          <React.Fragment key={objectiveId}>
            <CollectionObjectiveStatus
              objective={objective}
              objectiveMet={isMet}
              t={t}
              renderMsg={collectionMsgs[objectiveId](objective, isMet, t)}
            />
            <ReportChartFigure>
              <HorizontalStackedBar
                {...config}
                blockGroupNames={blockGroupNames}
                blockGroupStyles={blockGroupStyles}
                showLegend={true}
                rowConfigs={rowConfig}
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
  coral: (objective: Objective, objectiveMet: ObjectiveAnswer, t: any) => {
    if (objectiveMet === OBJECTIVE_YES) {
      return (
        <>
          {t("This plan meets the objective of protecting")}{" "}
          <b>{percentWithEdge(objective.target)}</b>{" "}
          {t("of coral reefs in High Protection Zones.")}
        </>
      );
    } else if (objectiveMet === OBJECTIVE_NO) {
      return (
        <>
          {t("This plan does not meet the objective of protecting")}{" "}
          <b>{percentWithEdge(objective.target)}</b>{" "}
          {t("of coral reefs in High Protection Zones.")}
        </>
      );
    }
  },
};

/**
 * Generates Show By MPA sketch table
 */
const genMpaSketchTable = (
  data: ReportResult,
  precalcMetrics: Metric[],
  t: any
) => {
  const sketches = toNullSketchArray(data.sketch);
  const sketchesById = keyBy(sketches, (sk) => sk.properties.id);

  // Filter down to metrics which have groupIds
  const levelMetrics = data.metrics.filter(
    (m) => m.groupId === "HIGH_PROTECTION" || m.groupId === "MEDIUM_PROTECTION"
  );

  // Child sketch table for 'Show By MPA'
  const childAreaMetrics = levelMetrics.filter(
    (m) => m.sketchId !== data.sketch.properties.id && m.groupId
  );
  const childAreaPercMetrics = toPercentMetric(
    childAreaMetrics,
    precalcMetrics
  );

  const columns: Column<Metric>[] = [
    {
      Header: t("MPA"),
      accessor: (row) => (
        <GroupPill groupColorMap={groupColorMap} group={row.groupId!}>
          {sketchesById[row.sketchId!].properties.name}
        </GroupPill>
      ),
      width: 50,
    },
    {
      Header: t("IUCN Level"),
      accessor: (row) =>
        t(
          groupDisplayMapPl[
            getUserAttribute(
              sketchesById[row.sketchId!].properties,
              "designation",
              ""
            ).toString()
          ]
        ),
      width: 20,
    },
    {
      Header: t("% Coral Reef"),
      accessor: (row) => percentWithEdge(row.value),
      width: 40,
    },
  ];

  return (
    <SketchClassTableStyled>
      <Table
        className="styled"
        columns={columns}
        data={childAreaPercMetrics.sort((a, b) => {
          return a.value > b.value ? 1 : -1;
        })}
      />
    </SketchClassTableStyled>
  );
};

const genGroupLevelTable = (levelAggs: GroupMetricAgg[], t: any) => {
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
              <b>{t(groupDisplayMapPl[row.groupId])}</b>
            </>
          }
        />
      ),
    },
    {
      Header: t("% Coral Reef"),
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
