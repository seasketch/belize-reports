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

export const LittoralForests: React.FunctionComponent<GeogProp> = (props) => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const curGeography = project.getGeographyById(props.geographyId, {
    fallbackGroup: "default-boundary",
  });

  const mg = project.getMetricGroup("littoralAreaOverlap", t);
  const precalcMetrics = project.getPrecalcMetrics(
    mg,
    "area",
    curGeography.geographyId
  );

  const mapLabel = t("Map");

  return (
    <>
      <ResultsCard
        title={t("Littoral Forests")}
        functionName="littoralAreaOverlap"
        useChildCard
      >
        {(data: ReportResult) => {
          return (
            <ReportError>
              <ToolbarCard
                title={t("Littoral Forests")}
                items={
                  <>
                    <LayerToggle label={mapLabel} layerId={mg.layerId} simple />
                    <DataDownload
                      filename="littoral-forest"
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
                  <Trans i18nKey="Littoral Forests Card 1">
                    This report summarizes the amount of littoral forests within
                    this plan, measuring progress to the target of 90% high
                    protection of littoral forests by 2035.
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
                  <Trans i18nKey="Littoral Forests Card - learn more">
                    <p>
                      ℹ️ Overview: Littoral forest was identified comparing data
                      from 1980 and 2019.
                    </p>
                    <p>
                      🎯 Planning Objective: Littoral forest extent in HPZ is
                      increased by 14.5% in 2025. Littoral forest extent in HPZ
                      is increased to 60% in 2030. Littoral forest extent in HPZ
                      is increased to 90% in 2035.
                    </p>
                    <p>
                      🗺️ Source Data: Littoral Forest data from Cherrington &
                      Griffin (2020).
                    </p>
                    <p>
                      📈 Report: Only features within the Belize Ocean Space are
                      counted. The percentage of each feature type within this
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
