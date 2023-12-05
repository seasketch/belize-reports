import React from "react";
import {
  Collapse,
  ResultsCard,
  useSketchProperties,
  ToolbarCard,
  LayerToggle,
  ClassTable,
  SketchClassTable,
} from "@seasketch/geoprocessing/client-ui";
import {
  ReportResult,
  toNullSketchArray,
  flattenBySketchAllClass,
  metricsWithSketchId,
  squareMeterToKilometer,
  valueFormatter,
  Metric,
  MetricGroup,
  toPercentMetric,
  GeogProp,
  roundDecimal,
} from "@seasketch/geoprocessing/client-core";

import project from "../../project";
import Translator from "./TranslatorAsync";
import { Trans, useTranslation } from "react-i18next";

const Number = new Intl.NumberFormat("en", { style: "decimal" });

export const Mangroves: React.FunctionComponent<GeogProp> = (props) => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const curGeography = project.getGeographyById(props.geographyId, {
    fallbackGroup: "default-boundary",
  });

  const metricGroup = project.getMetricGroup("mangroveAreaOverlap", t);
  const precalcMetrics = project.getPrecalcMetrics(
    metricGroup,
    "area",
    curGeography.geographyId
  );

  const mapLabel = t("Map");
  const benthicLabel = t("Feature");
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
          const mangroveTotalMetrics = finalMetrics.filter(
            (m) => m.classId === mangroveClassId
          )

          const nonMangroveMetrics = finalMetrics.filter(
            (m) => m.classId !== mangroveClassId
          )

          return (
            <>
              <p>
                <Trans i18nKey="Mangroves Card 1">
                  Plans should consider protection of mangroves with the 
                  goal of restoring and reestablishing mangrove ecosystems that have been 
                  degraded, damaged, or lost. Restoration aims to regenerate and 
                  rehabilitate mangroves to their natural state or enhance their 
                  ecological functions and values. This report measures progress towards the
                  goal of 30% of mangrove ecosystems protected by 2035.
                </Trans>
              </p>
              <Translator>
              <ClassTable
                  rows={mangroveTotalMetrics}
                  metricGroup={metricGroup}
                  objective={project.getObjectiveById(mangroveClassId)}
                  columnConfig={[
                    {
                      columnLabel: benthicLabel,
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
                <ClassTable
                  rows={nonMangroveMetrics}
                  metricGroup={metricGroup}
                  columnConfig={[
                    {
                      columnLabel: "    ",
                      type: "class",
                      width: 35,
                    },
                    {
                      columnLabel: " ",
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
                      columnLabel: "  ",
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
                      columnLabel: "   ",
                      type: "layerToggle",
                      width: 10,
                    },
                  ]}
                />
              </Translator>

              {isCollection && (
                <Collapse title={t("Show by MPA")}>
                  {genSketchTable(data, precalcMetrics, metricGroup)}
                </Collapse>
              )}

              <Collapse title={t("Learn more")}>
                <Trans i18nKey="Mangroves Card - learn more">
                  <p>
                    ℹ️ Overview: Mangrove Priority Areas identified under the updated 
                    mangrove regulations of 2018. Mangroves were identified comparing
                    data from 1980 and 2019. 
                  </p>
                  <p>
                    🎯 Planning Objective: 30% mangroves protected and 4000 hectares mangroves restored.
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
            </>
          );
        }}
      </ResultsCard>
    </>
  );
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
