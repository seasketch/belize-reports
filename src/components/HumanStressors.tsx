import React from "react";
import {
  Collapse,
  ResultsCard,
  useSketchProperties,
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

export const HumanStressors: React.FunctionComponent<GeogProp> = (props) => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const curGeography = project.getGeographyById(props.geographyId, {
    fallbackGroup: "default-boundary",
  });

  const metricGroup = project.getMetricGroup("humanStressorsAreaOverlap", t);
  const precalcMetrics = project.getPrecalcMetrics(
    metricGroup,
    "area",
    curGeography.geographyId
  );

  const mapLabel = t("Map");
  const categoryLabel = t("Sector");
  const areaWithin = t("Area Within Plan");
  const percAreaWithin = t("% Area Within Plan");
  const sqKmLabel = t("km²");

  return (
    <>
      <ResultsCard
        title={t("Human Use")}
        functionName="humanStressorsAreaOverlap"
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

          return (
            <>
              <p>
                <Trans i18nKey="Human Stressors Card 1">
                This report summarizes the amount of human use sectors that overlap 
                with this plan. Plans should consider the potential impact to sectors 
                if access or activities are restricted.
                </Trans>
              </p>
              <Translator>
                <ClassTable
                  rows={finalMetrics}
                  metricGroup={metricGroup}
                  columnConfig={[
                    {
                      columnLabel: categoryLabel,
                      type: "class",
                      width: 25,
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
                      width: 30,
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
                <Trans i18nKey="Human Stressors Card - learn more">
                  <p>
                    ℹ️ Overview: Plans should consider how these areas of human use and human 
                    stress should be navigated in the ocean plan. 
                  </p>
                  <p>
                    🎯 Planning Objective: No specific planning objectives for human use areas.
                  </p>
                  <p>
                    🗺️ Source Data: 2020
                  </p>
                  <p>
                  📈 Report: The total area of the plan was calculated, along with the total 
                  area under high protection and total area under medium protection. Overlap 
                  was only counted once, and if zones of different protection levels overlap, 
                  only the highest protection level is counted.
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
