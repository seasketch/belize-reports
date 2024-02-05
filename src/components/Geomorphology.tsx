import React from "react";
import {
  Collapse,
  ResultsCard,
  useSketchProperties,
  ReportError,
  ToolbarCard,
  DataDownload,
} from "@seasketch/geoprocessing/client-ui";
import { ReportResult, GeogProp } from "@seasketch/geoprocessing/client-core";
import { Download } from "@styled-icons/bootstrap/Download/Download";
import project from "../../project";
import Translator from "./TranslatorAsync";
import { Trans, useTranslation } from "react-i18next";
import {
  genAreaGroupLevelTable,
  genAreaSketchTable,
  groupedCollectionReport,
  groupedSketchReport,
} from "../util/ProtectionLevelOverlapReports";

const Number = new Intl.NumberFormat("en", { style: "decimal" });

export const Geomorphology: React.FunctionComponent<GeogProp> = (props) => {
  const [{ isCollection }] = useSketchProperties();
  const { t } = useTranslation();

  const curGeography = project.getGeographyById(props.geographyId, {
    fallbackGroup: "default-boundary",
  });

  const mg = project.getMetricGroup("geomorphAreaOverlap", t);
  const precalcMetrics = project.getPrecalcMetrics(
    mg,
    "area",
    curGeography.geographyId
  );

  return (
    <>
      <ResultsCard
        title={t("Geomorphology")}
        functionName="geomorphAreaOverlap"
        useChildCard
      >
        {(data: ReportResult) => {
          return (
            <ReportError>
              <ToolbarCard
                title={t("Geomorphology")}
                items={
                  <DataDownload
                    filename="geomorphology"
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
                }
              >
                <p>
                  <Trans i18nKey="Geomorphology Card 1">
                    The seafloor has many unique physical geomorphological
                    features, each creating habitats that support different
                    ecological communities. Plans should ensure the
                    representative coverage of each seafloor type. This report
                    summarizes the percentage of each geomorphological feature
                    found in this plan.
                  </Trans>
                </p>

                <Translator>
                  {isCollection
                    ? groupedCollectionReport(data, precalcMetrics, mg, t)
                    : groupedSketchReport(data, precalcMetrics, mg, t)}

                  {isCollection && (
                    <>
                      <Collapse title={t("Show by Protection Level")}>
                        {genAreaGroupLevelTable(data, precalcMetrics, mg, t)}
                      </Collapse>
                      <Collapse title={t("Show by MPA")}>
                        {genAreaSketchTable(data, precalcMetrics, mg, t)}
                      </Collapse>
                    </>
                  )}
                </Translator>

                <Collapse title={t("Learn more")}>
                  <Trans i18nKey="Geomorphology Card - learn more">
                    <p>
                      ℹ️ Overview: Seafloor features were identified based on
                      geomorphology, which classifies features using depth,
                      seabed slope, and other environmental characteristics.
                    </p>
                    <p>
                      In the Seafloor Geomorphic Features dataset, the seafloor
                      is split into shelves (shallowest), slopes, and abysses
                      (deepest). These three features are mutually exclusive.
                      Basins, canyons, escarpments, plateaus, rises, and sills
                      occur within these three features.
                    </p>
                    <p>
                      🎯 Planning Objective: No identified planning objectives
                      for geomorphic features.
                    </p>
                    <p>
                      🗺️ Source Data: Seafloor Geomorphic Features Map.{" "}
                      <a
                        href="https://doi.org/10.1016/j.margeo.2014.01.011"
                        target="_blank"
                      >
                        Harris, P.T., Macmillan-Lawler, M., Rupp, J. and Baker,
                        E.K. 2014. Geomorphology of the oceans. Marine Geology,
                        352: 4-24.
                      </a>{" "}
                      <a href="https://bluehabitats.org/" target="_blank">
                        https://bluehabitats.org/
                      </a>
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
            </ReportError>
          );
        }}
      </ResultsCard>
    </>
  );
};
