import React from "react";
import {
  ReportResult,
  percentWithEdge,
  keyBy,
  toNullSketchArray,
  nestMetrics,
  valueFormatter,
  toPercentMetric,
  Metric,
  MetricGroup,
  metricsWithSketchId,
  flattenBySketchAllClass,
} from "@seasketch/geoprocessing/client-core";
import {
  ClassTable,
  Collapse,
  Column,
  ReportTableStyled,
  ResultsCard,
  Table,
  useSketchProperties,
  ToolbarCard,
  DataDownload,
  LayerToggle,
  SketchClassTable,
} from "@seasketch/geoprocessing/client-ui";
import styled from "styled-components";
import project from "../../project";
import { squareMeterToKilometer } from "@seasketch/geoprocessing";
import { Trans, useTranslation } from "react-i18next";
import Translator from "./TranslatorAsync";

const Number = new Intl.NumberFormat("en", { style: "decimal" });

export const HabitatCard = () => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const mapLabel = t("Map");
  const benthicLabel = t("Habitat Type");
  const areaWithin = t("Area Within Plan");
  const percAreaWithin = t("% Area Within Plan");
  const sqKmLabel = t("km²");

  const metricGroup = project.getMetricGroup("habitatOverlap", t);
  const precalcMetrics = project.getPrecalcMetrics(
    metricGroup,
    "area",
  );


  return (
    <ResultsCard title={t("Key Habitat")} functionName="habitatOverlap">
      {(data: ReportResult) => {
        if (Object.keys(data).length === 0)
          throw new Error("Protection results not found");

        let singleMetrics = data.metrics.filter(
          (m) => m.sketchId === data.sketch.properties.id
        );

        const finalMetrics = [
          ...singleMetrics,
          ...toPercentMetric(
            singleMetrics,
            precalcMetrics,
            project.getMetricGroupPercId(metricGroup)
          ),
        ];

        return (
            <>
              <p>
                <Trans i18nKey="Habitat Card 1">
                  Protection of key habitats is integral to sustaining species communities. 
                  This report summarizes the percentage of each key habitat found in this plan.
                </Trans>
              </p>

              <Translator>
                <ClassTable
                  rows={finalMetrics}
                  metricGroup={metricGroup}
                  columnConfig={[
                    {
                      columnLabel: benthicLabel,
                      type: "class",
                      width: 30,
                    },
                    {
                      columnLabel: areaWithin,
                      type: "metricValue",
                      metricId: metricGroup.metricId,
                      valueFormatter: (val: string | number) =>
                        Number.format(
                          Math.round(
                            squareMeterToKilometer(
                              typeof val === "string" ? parseInt(val) : val
                            )
                          )
                        ),
                      valueLabel: sqKmLabel,
                      width: 25,
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
                <Collapse title={t("Show by MPA")}>
                  {genSketchTable(data, precalcMetrics, metricGroup)}
                </Collapse>
              )}

              <Collapse title={t("Learn more")}>
                <Trans i18nKey="Habitat Card - learn more">
                  <p>
                    ℹ️ Overview:
                  </p>
                  <p>
                    🎯 Planning Objective: No identified planning objectives for
                    habitats.
                  </p>
                  <p>
                    🗺️ Source Data:
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
