import React from "react";
import {
  Collapse,
  ResultsCard,
  useSketchProperties,
  ReportChartFigure,
  HorizontalStackedBar,
  Column,
  Table,
  SmallReportTableStyled,
  GroupCircleRow,
  GroupPill,
  SketchClassTableStyled,
  ToolbarCard,
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
  GroupMetricAgg,
  flattenByGroupAllClass,
  percentWithEdge,
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

export const Seagrass: React.FunctionComponent<GeogProp> = (props) => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const curGeography = project.getGeographyById(props.geographyId, {
    fallbackGroup: "default-boundary",
  });

  const metricGroup = project.getMetricGroup("seagrassValueOverlap", t);
  const classIds = metricGroup.classes.map((curClass) => curClass.classId);
  const precalcMetrics = project.getPrecalcMetrics(
    metricGroup,
    "sum",
    curGeography.geographyId
  );

  const mapLabel = t("Map");

  return (
    <>
      <ResultsCard
        title={t("Seagrass")}
        functionName="seagrassValueOverlap"
        useChildCard
      >
        {(data: ReportResult) => {
          return (
            <ToolbarCard
              title={t("Seagrass")}
              items={
                <LayerToggle
                  label={mapLabel}
                  layerId={metricGroup.layerId}
                  simple
                />
              }
            >
              <p>
                <Trans i18nKey="Seagrass Card 1">
                  Seagrass beds are a key marine ecosystem, providing food and
                  shelter for many marine organisms. This report shows the total
                  seagrass area protected by this plan.
                </Trans>
              </p>
              <Translator>
                {isCollection
                  ? collectionReport(data, precalcMetrics, classIds, t)
                  : sketchReport(data, precalcMetrics, classIds, t)}
              </Translator>

              {isCollection && (
                <Collapse title={t("Show by MPA")}>
                  {genMpaSketchTable(data, precalcMetrics, t)}
                </Collapse>
              )}

              <Collapse title={t("Learn more")}>
                <Trans i18nKey="Seagrass Card - learn more">
                  <p>
                    🎯 Planning Objective: No specific planning objective for
                    seagrass.
                  </p>
                  <p>🗺️ Source Data: ?</p>
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
      // Extract percent value from metric
      const yesValues = levelMetrics.map((yesAgg) => yesAgg.value / totalArea);
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
      // Extract percent value from metric
      const yesValues = groupLevelAggs.map((yesAgg) => yesAgg.percValue);
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

        // Create horizontal bar config
        const config = {
          rows: [totalsByObjective[objectiveId].map((value) => [value * 100])],
          rowConfigs: [
            {
              title: t("Seagrass"),
            },
          ],
          max: 100,
        };

        return (
          <React.Fragment key={objectiveId}>
            <ReportChartFigure>
              <HorizontalStackedBar
                {...config}
                blockGroupNames={blockGroupNames}
                blockGroupStyles={blockGroupStyles}
                showLegend={true}
                valueFormatter={valueFormatter}
              />
            </ReportChartFigure>
          </React.Fragment>
        );
      })}
    </>
  );
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
      Header: t("% Seagrass"),
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

/**
 * Generates Show By Protection level table
 */
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
      Header: t("% Seagrass"),
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
