import React from "react";
import {
  ResultsCard,
  KeySection,
  Collapse,
  ToolbarCard,
  LayerToggle,
  DataDownload,
  VerticalSpacer,
} from "@seasketch/geoprocessing/client-ui";
import { BathymetryResults } from "../functions/bathymetry";
import { Trans, useTranslation } from "react-i18next";
import project from "../../project";
import { Download } from "@styled-icons/bootstrap/Download/Download";
import { ReportProps } from "../util/ReportProp";

const formatDepth = (val: number) => {
  if (!val) return "0m";
  const baseVal = Math.abs(parseInt(val.toString()));
  return val <= 0 ? `-${baseVal}m` : `+${baseVal}m`;
};

export const BathymetryCard: React.FunctionComponent<ReportProps> = (props) => {
  const { t } = useTranslation();
  const mg = project.getMetricGroup("bathymetry", t);
  const mapLabel = t("Map");

  return (
    <div style={{ breakInside: "avoid" }}>
      <ResultsCard title={t("Depth")} functionName="bathymetry" useChildCard>
        {(data: BathymetryResults) => {
          return (
            <ToolbarCard
              title={t("Depth")}
              items={
                <>
                  <LayerToggle label={mapLabel} layerId={mg.layerId} simple />
                  <DataDownload
                    filename="depth"
                    data={[data]}
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
              <VerticalSpacer />
              <KeySection
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <span>
                  {t("Min")}: <b>{formatDepth(data.max)}</b>
                </span>
                <span>
                  {t("Avg")}: <b>{formatDepth(data.mean)}</b>
                </span>
                <span>
                  {t("Max")}: <b>{formatDepth(data.min)}</b>
                </span>
              </KeySection>
              {!props.printing && (
                <Collapse title={t("Learn More")}>
                  <BathymetryLearnMore />
                </Collapse>
              )}
            </ToolbarCard>
          );
        }}
      </ResultsCard>
    </div>
  );
};

/** Protection level learn more */
export const BathymetryLearnMore: React.FunctionComponent = () => {
  return (
    <>
      <Trans i18nKey="Bathymetry Card - Learn more">
        <p>
          ℹ️ Overview: Ocean depth is useful in determining where fish and other
          marine life feed, live, and breed. Plans should consider protecting a
          wide range of water depths.
        </p>
        <p>🎯 Planning Objective: None</p>
        <p>
          🗺️ Source Data:{" "}
          <a href="https://download.gebco.net/" target="_blank">
            GEBCO
          </a>
        </p>
        <p>
          📈 Report: Calculates the minimum, average, and maximum ocean depth
          within the plan.
        </p>
      </Trans>
    </>
  );
};
