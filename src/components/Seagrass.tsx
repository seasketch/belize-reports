import React from "react";
import {
  Collapse,
  ResultsCard,
  useSketchProperties,
  ToolbarCard,
  LayerToggle,
  ReportError,
  DataDownload,
} from "@seasketch/geoprocessing/client-ui";
import { ReportResult, GeogProp } from "@seasketch/geoprocessing/client-core";
import project from "../../project";
import Translator from "./TranslatorAsync";
import { Trans, useTranslation } from "react-i18next";
import {
  genAreaSketchTable,
  groupedCollectionReport,
  groupedSketchReport,
} from "../util/ProtectionLevelOverlapReports";
import { Download } from "@styled-icons/bootstrap/Download/Download";

export const Seagrass: React.FunctionComponent<GeogProp> = (props) => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const curGeography = project.getGeographyById(props.geographyId, {
    fallbackGroup: "default-boundary",
  });

  const mg = project.getMetricGroup("seagrassValueOverlap", t);
  const precalcMetrics = project.getPrecalcMetrics(
    mg,
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
            <ReportError>
              <ToolbarCard
                title={t("Seagrass")}
                items={
                  <>
                    <LayerToggle label={mapLabel} layerId={mg.layerId} simple />
                    <DataDownload
                      filename="seagrass"
                      data={data.metrics}
                      formats={["csv", "json"]}
                      titleElement={
                        <Download
                          size={18}
                          color="#999"
                          style={{ cursor: "pointer" }}
                        />
                      }
                    />
                  </>
                }
              >
                <p>
                  <Trans i18nKey="Seagrass Card 1">
                    Seagrass beds are a key marine ecosystem, providing food and
                    shelter for many marine organisms. This report shows the
                    total seagrass area protected by this plan.
                  </Trans>
                </p>
                <Translator>
                  {isCollection
                    ? groupedCollectionReport(data, precalcMetrics, mg, t)
                    : groupedSketchReport(data, precalcMetrics, mg, t)}

                  {isCollection && (
                    <Collapse title={t("Show by MPA")}>
                      {genAreaSketchTable(data, precalcMetrics, mg, t)}
                    </Collapse>
                  )}
                </Translator>

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
            </ReportError>
          );
        }}
      </ResultsCard>
    </>
  );
};
