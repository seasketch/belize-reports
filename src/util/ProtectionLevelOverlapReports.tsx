import React from "react";
import {
  Collapse,
  SketchClassTable,
  ReportChartFigure,
  Column,
  GroupPill,
  Table,
  GroupCircleRow,
  SketchClassTableStyled,
} from "@seasketch/geoprocessing/client-ui";
import {
  ReportResult,
  toNullSketchArray,
  flattenBySketchAllClass,
  metricsWithSketchId,
  Metric,
  MetricGroup,
  toPercentMetric,
  GroupMetricAgg,
  firstMatchingMetric,
  flattenByGroupAllClass,
  isSketchCollection,
  percentWithEdge,
} from "@seasketch/geoprocessing/client-core";
import { groupColorMap, groupDisplayMapPl } from "./getMpaProtectionLevel";
import { HorizontalStackedBar, RowConfig } from "./HorizontalStackedBar";

/**
 * Creates grouped overlap report for sketch
 * @param data data returned from lambda
 * @param precalcMetrics metrics from precalc.json
 * @param metricGroup metric group to get stats for
 * @param t TFunction
 */
export const groupedSketchReport = (
  data: ReportResult,
  precalcMetrics: Metric[],
  metricGroup: MetricGroup,
  t: any
) => {
  const classIds = metricGroup.classes.map((curClass) => curClass.classId);

  // Get total precalc areas
  const totalAreas = classIds.reduce<Record<string, number>>((acc, classId) => {
    return {
      ...acc,
      [classId]: firstMatchingMetric(
        precalcMetrics,
        (m) => m.groupId === null && m.classId === classId
      ).value,
    };
  }, {});

  // Filter down to metrics which have groupIds
  const levelMetrics = data.metrics.filter(
    (m) => m.groupId === "HIGH_PROTECTION" || m.groupId === "MEDIUM_PROTECTION"
  );

  // Filter down grouped metrics to ones that count for each class
  const totalsByClass = classIds.reduce<Record<string, number[]>>(
    (acc, classId) => {
      // Extract percent value from metric
      const groupValues = levelMetrics
        .filter((m) => m.classId === classId)
        .map((group) => group.value / totalAreas[classId]);
      return { ...acc, [classId]: groupValues };
    },
    {}
  );

  return genHorizBarReport(metricGroup, totalsByClass, t);
};

/**
 * Creates grouped overlap report for sketch collection
 * @param data data returned from lambda
 * @param precalcMetrics metrics from precalc.json
 * @param metricGroup metric group to get stats for
 * @param t TFunction
 */
export const groupedCollectionReport = (
  data: ReportResult,
  precalcMetrics: Metric[],
  metricGroup: MetricGroup,
  t: any
) => {
  if (!isSketchCollection(data.sketch)) throw new Error("NullSketch");
  const classIds = metricGroup.classes.map((curClass) => curClass.classId);

  // Filter down to metrics which have groupIds
  const levelMetrics = data.metrics.filter(
    (m) => m.groupId === "HIGH_PROTECTION" || m.groupId === "MEDIUM_PROTECTION"
  );

  const groupLevelAggs: GroupMetricAgg[] = flattenByGroupAllClass(
    data.sketch,
    levelMetrics,
    precalcMetrics
  );

  // Filter down grouped metrics to ones that count for each class
  const totalsByClass = classIds.reduce<Record<string, number[]>>(
    (acc, classId) => {
      // Extract percent value from metric
      const groupValues = groupLevelAggs.map(
        (group) => group[classId] as number
      );
      return { ...acc, [classId]: groupValues };
    },
    {}
  );

  return (
    <>
      {genHorizBarReport(metricGroup, totalsByClass, t)}
      <Collapse title={t("Show by Protection Level")}>
        {genGroupLevelTable(data, precalcMetrics, metricGroup, t)}
      </Collapse>
    </>
  );
};

/**
 * Creates grouped overlap report for sketch collection
 * @param metricGroup metric group to get stats for
 * @param totalsByClass percent overlap for each class for each protection level
 * @param t TFunction
 */
export const genHorizBarReport = (
  metricGroup: MetricGroup,
  totalsByClass: Record<string, number[]>,
  t: any
) => {
  // Coloring and styling for horizontal bars
  const groupColors = Object.values(groupColorMap);
  const blockGroupNames = [t("High"), t("Medium")];
  const blockGroupStyles = groupColors.map((curBlue) => ({
    backgroundColor: curBlue,
  }));
  const valueFormatter = (value: number) => percentWithEdge(value / 100);

  const classIds = metricGroup.classes.map((curClass) => curClass.classId);
  const rowConfig: RowConfig[] = [];
  metricGroup.classes.forEach((curClass) => {
    rowConfig.push({
      title: curClass.display,
      layerId: curClass.layerId || "",
    });
  });

  const config = {
    rows: classIds.map((classId) =>
      totalsByClass[classId].map((value) => [value * 100])
    ),
    rowConfigs: rowConfig,
    max: 100,
  };

  return (
    <>
      <React.Fragment>
        <ReportChartFigure>
          <HorizontalStackedBar
            {...config}
            blockGroupNames={blockGroupNames}
            blockGroupStyles={blockGroupStyles}
            showLegend={true}
            showLayerToggles={true}
            valueFormatter={valueFormatter}
          />
        </ReportChartFigure>
      </React.Fragment>
    </>
  );
};

/**
 * Creates "Show by Protection Level" report
 * @param data data returned from lambda
 * @param precalcMetrics metrics from precalc.json
 * @param metricGroup metric group to get stats for
 * @param t TFunction
 */
export const genGroupLevelTable = (
  data: ReportResult,
  precalcMetrics: Metric[],
  metricGroup: MetricGroup,
  t: any
) => {
  if (!isSketchCollection(data.sketch)) throw new Error("NullSketch");

  // Filter down to metrics which have groupIds
  const levelMetrics = data.metrics.filter(
    (m) => m.groupId === "HIGH_PROTECTION" || m.groupId === "MEDIUM_PROTECTION"
  );

  const levelAggs: GroupMetricAgg[] = flattenByGroupAllClass(
    data.sketch,
    levelMetrics,
    precalcMetrics
  );

  const classColumns: Column<Record<string, string | number>>[] =
    metricGroup.classes.map((curClass) => ({
      Header: curClass.display,
      accessor: (row) => {
        return (
          <GroupPill
            groupColorMap={groupColorMap}
            group={row.groupId.toString()}
          >
            {percentWithEdge(row[curClass.classId] as number)}
          </GroupPill>
        );
      },
    }));

  const columns: Column<Record<string, string | number>>[] = [
    {
      Header: t("This plan contains") + ":",
      accessor: (row) => (
        <GroupCircleRow
          group={row.groupId.toString()}
          groupColorMap={groupColorMap}
          circleText={`${row.numSketches}`}
          rowText={t(groupDisplayMapPl[row.groupId])}
        />
      ),
    },
    ...classColumns,
  ];
  return (
    <SketchClassTableStyled>
      <Table
        className="styled"
        columns={columns}
        data={levelAggs.sort((a, b) => a.groupId.localeCompare(b.groupId))}
      />
    </SketchClassTableStyled>
  );
};

/**
 * Creates "Show by MPA" report
 * @param data data returned from lambda
 * @param precalcMetrics metrics from precalc.json
 * @param metricGroup metric group to get stats for
 * @param t TFunction
 */
export const genSketchTable = (
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
