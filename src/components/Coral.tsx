import React from "react";
import {
  Collapse,
  ResultsCard,
  useSketchProperties,
  ToolbarCard,
  LayerToggle,
} from "@seasketch/geoprocessing/client-ui";
import { ReportResult, GeogProp } from "@seasketch/geoprocessing/client-core";
import project from "../../project";
import Translator from "./TranslatorAsync";
import { Trans, useTranslation } from "react-i18next";
import {
  genSketchTable,
  groupedCollectionReport,
  groupedSketchReport,
} from "../util/ProtectionLevelOverlapReports";

export const Coral: React.FunctionComponent<GeogProp> = (props) => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const curGeography = project.getGeographyById(props.geographyId, {
    fallbackGroup: "default-boundary",
  });

  const mg = project.getMetricGroup("coralValueOverlap", t);
  const precalcMetrics = project.getPrecalcMetrics(
    mg,
    "sum",
    curGeography.geographyId
  );

  const mapLabel = t("Map");
  const titleLabel = t("Coral Reef");
  const layerId = mg.layerId;

  return (
    <>
      <ResultsCard
        title={titleLabel}
        functionName="coralValueOverlap"
        useChildCard
      >
        {(data: ReportResult) => {
          return (
            <ToolbarCard
              title={titleLabel}
              items={<LayerToggle label={mapLabel} layerId={layerId} simple />}
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
                  ? groupedCollectionReport(data, precalcMetrics, mg, t)
                  : groupedSketchReport(data, precalcMetrics, mg, t)}

                {isCollection && (
                  <Collapse title={t("Show by MPA")}>
                    {genSketchTable(data, precalcMetrics, mg)}
                  </Collapse>
                )}
              </Translator>

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
