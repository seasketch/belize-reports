import React from "react";
import {
  Collapse,
  ResultsCard,
  useSketchProperties,
  SketchClassTable,
  ReportChartFigure,
  HorizontalStackedBar,
  ObjectiveStatus,
  Column,
  Table,
  SmallReportTableStyled,
  GroupCircleRow,
  GroupPill,
  ReportError,
  ClassTable,
  RowConfig,
  LayerToggle,
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
  squareMeterToKilometer,
  roundDecimal,
  valueFormatter,
  flattenBySketchAllClass,
  metricsWithSketchId,
  MetricGroup,
} from "@seasketch/geoprocessing/client-core";
import project from "../../project";
import Translator from "./TranslatorAsync";
import { Trans, useTranslation } from "react-i18next";
import { getMetricGroupObjectiveIds } from "@seasketch/geoprocessing";
import { groupColorMap } from "../util/getMpaProtectionLevel";

const Number = new Intl.NumberFormat("en", { style: "decimal" });

export const Mangroves: React.FunctionComponent<GeogProp> = (props) => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const curGeography = project.getGeographyById(props.geographyId, {
    fallbackGroup: "default-boundary",
  });

  const metricGroup = project.getMetricGroup("mangroveAreaOverlap", t);
  const objectiveIds = getMetricGroupObjectiveIds(metricGroup);
  const precalcMetrics = project.getPrecalcMetrics(
    metricGroup,
    "area",
    curGeography.geographyId
  );

  const mapLabel = t("Map");
  const areaWithin = t("Within Plan");
  const percAreaWithin = t("% Within Plan");
  const sqKmLabel = t("km²");

  return (
    <>
      <ResultsCard
        title={t("Mangroves")}
        functionName="mangroveAreaOverlap"
      >
        {(data: ReportResult) => {
          let singleMetrics = data.metrics.filter(
            (m) => m.sketchId === data.sketch.properties.id
          );

          const finalMetrics = [
            ...singleMetrics,
            ...toPercentMetric(
              singleMetrics,
              precalcMetrics,
              {metricIdOverride: project.getMetricGroupPercId(metricGroup)}
            ),
          ];

          const mangroveClassId = "Mangrove";
          const nonMangroveMetrics = finalMetrics.filter(
            (m) => m.classId !== mangroveClassId
          )

          return (
            <ReportError>
              <p>
                <Trans i18nKey="Mangroves Card 1">
                  This report summarizes the amount of mangroves within this plan, 
                  measuring progress to the 30x30 target of 30% mangrove protection.
                </Trans>
              </p>
              <LayerToggle
                layerId={metricGroup.classes[2].layerId}
                label={t("Show Mangrove Layer")}
              />
              <Translator>
                {isCollection
                ? collectionReport(data, precalcMetrics, objectiveIds, t)
                : sketchReport(data, precalcMetrics, objectiveIds, t)}
              <p>
                <Trans>
                  Priority mangrove areas and cleared mangrove areas were identified. 
                  The following table summarizes this plan's overlap with those areas.
                </Trans>
              </p>
              <ClassTable
                  rows={nonMangroveMetrics}
                  metricGroup={metricGroup}
                  columnConfig={[
                    {
                      columnLabel: " ",
                      type: "class",
                      width: 35,
                    },
                    {
                      columnLabel: areaWithin,
                      type: "metricValue",
                      metricId: metricGroup.metricId,
                      valueFormatter: (val: string | number) => {
                        const valueKm = squareMeterToKilometer(typeof val === "string" ? parseInt(val) : val);
                        return valueKm && valueKm < 0.5 
                        ? Number.format(roundDecimal(valueKm, 2))
                        : Number.format( Math.round(valueKm))
                      },
                      valueLabel: sqKmLabel,
                      width: 20,
                    },
                    {
                      columnLabel: percAreaWithin,
                      type: "metricChart",
                      metricId: project.getMetricGroupPercId(metricGroup),
                      valueFormatter: "percent",
                      chartOptions: {
                        showTitle: true,
                        targetLabelPosition: "bottom",
                        targetLabelStyle: "tight",
                        barHeight: 11,
                      },
                      width: 35,
                      targetValueFormatter: (
                        value: number,
                        row: number,
                        numRows: number
                      ) => {
                        if (row === 0) {
                          return (value: number) =>
                            `${valueFormatter(value / 100, "percent0dig")} ${t(
                              "Target"
                            )}`;
                        } else {
                          return (value: number) =>
                            `${valueFormatter(value / 100, "percent0dig")}`;
                        }
                      },
                    },
                    {
                      columnLabel: mapLabel,
                      type: "layerToggle",
                      width: 10,
                    },
                  ]}
                />
              </Translator>

              {isCollection && (
                <>
                  <Collapse title={t("Show by Protection Level")}>
                    {genGroupLevelTable(data, precalcMetrics, t)}
                  </Collapse>
                  <Collapse title={t("Show by MPA")}>
                    {genSketchTable(data, precalcMetrics, metricGroup)}
                  </Collapse>
                </>
              )}

              <Collapse title={t("Learn more")}>
                <Trans i18nKey="Mangroves Card - learn more">
                  <p>
                    ℹ️ Overview: Mangrove Priority Areas identified under the updated 
                    mangrove regulations of 2018. Mangroves were identified comparing
                    data from 1980 and 2019. 
                  </p>
                  <p>
                    🎯 Planning Objective: 30% mangroves protected and 4000 hectares mangroves 
                    restored by 2035.
                  </p>
                  <p>
                    🗺️ Source Data: Mangrove Priority Areas from the mangrove regulations of 2018. 
                    Mangrove and Cleared Mangrove data from Cherrington & Griffin (2020).
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
            </ReportError>
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
const sketchReport = (data: ReportResult, 
  precalcMetrics: Metric[],
  objectiveIds: string[],
  t: any) => {

  // Get total planning area
  const totalArea = firstMatchingMetric(
    precalcMetrics,
    (m) => m.groupId === null && m.classId === "Mangrove"
  ).value;
  
  // Filter down to metrics which have groupIds and classId mangroves
  const levelMetrics = data.metrics.filter(
    (m) => (m.groupId === "HIGH_PROTECTION" || m.groupId === "MEDIUM_PROTECTION") && m.classId === "Mangrove"
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

  return (
    <>
      {genObjectiveReport(objectiveIds, totalsByObjective, t)}
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

  // Filter down to metrics which have groupIds and are for Mangroves
  const mangroveLevelMetrics = data.metrics.filter(
    (m) => (m.groupId === "HIGH_PROTECTION" || m.groupId === "MEDIUM_PROTECTION") && m.classId === "Mangrove"
  );

  const precalcMangroveMetrics = precalcMetrics.filter(
    (m) => m.classId === "Mangrove"
  );

  const mangroveGroupLevelAggs: GroupMetricAgg[] = flattenByGroupAllClass(
    data.sketch,
    mangroveLevelMetrics,
    precalcMangroveMetrics
  );

  // Filter down grouped metrics to ones that count for each objective
  const totalsByObjective = objectiveIds.reduce<Record<string, number[]>>(
    (acc, objectiveId) => {
      // Protection levels which count for objective
      const yesAggs: GroupMetricAgg[] = mangroveGroupLevelAggs.filter((levelAgg) => {
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

  return(
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
            title: t("Mangroves"),
          },
        ];

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
  )
}

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
  Mangrove: (
    objective: Objective,
    objectiveMet: ObjectiveAnswer,
    t: any
  ) => {
    if (objectiveMet === OBJECTIVE_YES) {
      return (
        <>
          {t("This plan meets the objective of protecting")}{" "}
          <b>{percentWithEdge(objective.target)}</b> {t("of mangroves in the Belize Ocean Space.")}
        </>
      );
    } else if (objectiveMet === OBJECTIVE_NO) {
      return (
        <>
          {t("This plan does not meet the objective of protecting")}{" "}
          <b>{percentWithEdge(objective.target)}</b> {t("of mangroves in the Belize Ocean Space.")}
        </>
      );
    }
  }
};

const genSketchTable = (
  data: ReportResult,
  precalcMetrics: Metric[],
  metricGroup: MetricGroup
) => {
  // Build agg metric objects for each child sketch in collection with percValue for each class
  const childSketches = toNullSketchArray(data.sketch);
  const childSketchIds = childSketches.map((sk) => sk.properties.id);
  const childSketchMetrics = toPercentMetric(
    metricsWithSketchId(
      data.metrics.filter((m) => m.metricId === metricGroup.metricId),
      childSketchIds
    ),
    precalcMetrics
  );
  const sketchRows = flattenBySketchAllClass(
    childSketchMetrics,
    metricGroup.classes,
    childSketches
  );
  return (
    <SketchClassTable rows={sketchRows} metricGroup={metricGroup} formatPerc />
  );
};

/**
 * Report protection level for sketch collection
 * @param data ReportResult
 * @param precalcMetrics Metric[] from precalc.json
 * @param t TFunction
 * @returns JSX.Element
 */
const genGroupLevelTable = (
  data: ReportResult,
  precalcMetrics: Metric[],
  t: any
) => {
  const groupDisplayMap: Record<string, string> = {
    HIGH_PROTECTION: t("High Protection Biodiversity Zone(s)"),
    MEDIUM_PROTECTION: t("Medium Protection Biodiversity Zone(s)"),
  };

  if (!isSketchCollection(data.sketch)) throw new Error("NullSketch");

  // Filter down to metrics which have groupIds
  const levelMetrics = data.metrics.filter(
    (m) => (m.groupId === "HIGH_PROTECTION" || m.groupId === "MEDIUM_PROTECTION")
  );

  const levelAggs: GroupMetricAgg[] = flattenByGroupAllClass(
    data.sketch,
    levelMetrics,
    precalcMetrics
  );

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
      Header: t("% Priority Mangroves"),
      accessor: (row) => {
        return (
          <GroupPill groupColorMap={groupColorMap} group={row.groupId}>
            {percentWithEdge(row["mangrove_priority"] as number)}
          </GroupPill>
        );
      },
    },
    {
      Header: t("% Mangroves"),
      accessor: (row) => {
        return (
          <GroupPill groupColorMap={groupColorMap} group={row.groupId}>
            {percentWithEdge(row["Mangrove"] as number)}
          </GroupPill>
        );
      },
    },
    {
      Header: t("% Cleared Mangroves"),
      accessor: (row) => {
        return (
          <GroupPill groupColorMap={groupColorMap} group={row.groupId}>
            {percentWithEdge(row["Non-mangrove"] as number)}
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