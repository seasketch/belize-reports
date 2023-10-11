import React from "react";
import {
  ResultsCard,
  ReportError,
  Collapse,
  Column,
  Table,
  ReportTableStyled,
  PointyCircle,
  RbcsMpaClassPanelProps,
  RbcsIcon,
  GroupPill,
  useSketchProperties,
} from "@seasketch/geoprocessing/client-ui";
import {
  ReportResult,
  NullSketch,
  NullSketchCollection,
  Metric,
  keyBy,
  toNullSketchArray,
  getKeys,
  Objective,
  getUserAttribute,
} from "@seasketch/geoprocessing/client-core";
import styled from "styled-components";
import project from "../../project";
import { getMinYesCountMap } from "@seasketch/geoprocessing/src";
import { Trans, useTranslation } from "react-i18next";
import { MetricGroup } from "@seasketch/geoprocessing";

// Table styling for Show by MPA table
export const SmallReportTableStyled = styled(ReportTableStyled)`
  .styled {
    font-size: 13px;
  }
`;

// Mapping groupIds to colors
const groupColorMap: Record<string, string> = {
  HIGH_PROTECTION: "#BEE4BE",
  MEDIUM_PROTECTION: "#FFE1A3",
};

// Mapping groupIds to display names
const groupDisplayMap: Record<string, string> = {
  HIGH_PROTECTION: "High Protection Biodiversity Zone",
  MEDIUM_PROTECTION: "Medium Protection Biodiversity Zone",
};

/**
 * Top level Protection report - JSX.Element
 */
export const ProtectionCard = () => {
  const { t, i18n } = useTranslation();
  const [{ isCollection }] = useSketchProperties();

  const mg = project.getMetricGroup("protectionCountOverlap", t);
  return (
    <ResultsCard title={t("Protection Level")} functionName="protection">
      {(data: ReportResult) => {
        return (
          <ReportError>
            {isCollection
              ? sketchCollectionReport(data.sketch, data.metrics, mg, t)
              : sketchReport(data.metrics, mg, t)}
          </ReportError>
        );
      }}
    </ResultsCard>
  );
};

/**
 * Report protection level for single sketch
 * @param metrics Metric[] passed from ReportResult
 * @param mg MetricGroup
 * @param t TFunction for translation
 */
const sketchReport = (metrics: Metric[], mg: MetricGroup, t: any) => {
  // Should only have only a single metric
  if (metrics.length !== 1)
    throw new Error(
      "In single sketch protection report, and getting !=1 metric"
    );

  return (
    <>
      <div
        style={{
          padding: "10px 10px 10px 0px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MpaClassPanel
          value={metrics[0].value}
          size={18}
          displayName={groupDisplayMap[metrics[0].groupId || "none"]}
          displayValue={false}
          group={metrics[0].groupId as string | undefined}
          groupColorMap={groupColorMap}
        />
      </div>

      <Collapse title={t("Learn More")}>
        <ProtectionLearnMore
          t={t}
        />
      </Collapse>
    </>
  );
};

/**
 * Report protection level for sketch collection
 * @param sketch NullSketchCollection | NullSketch passed from ReportResult
 * @param metrics Metric[] passed from ReportResult
 * @param mg MetricGroup
 * @param t TFunction for translation
 */
const sketchCollectionReport = (
  sketch: NullSketchCollection | NullSketch,
  metrics: Metric[],
  mg: MetricGroup,
  t: any
) => {
  const groupDisplayMap: Record<string, string> = {
    HIGH_PROTECTION: t("High Protection Biodiversity Zone(s)"),
    MEDIUM_PROTECTION: t("Medium Protection Biodiversity Zone(s)"),
  };

  const sketches = toNullSketchArray(sketch);
  const columns: Column<Metric>[] = [
    {
      Header: " ",
      accessor: (row) => (
        <MpaClassPanel
          value={row.value}
          size={18}
          displayName={groupDisplayMap[row.groupId || "none"]}
          group={row.groupId as string | undefined}
          groupColorMap={groupColorMap}
        />
      ),
    },
  ];

  return (
    <>
      <Table className="styled" columns={columns} data={metrics} />
      <Collapse title={t("Show by MPA")}>
        {genMpaSketchTable(sketches, t)}
      </Collapse>
      <Collapse title={t("Learn More")}>
        <ProtectionLearnMore
          t={t}
        />
      </Collapse>
    </>
  );
};

/**
 * Show by MPA sketch table for sketch collection
 */
const genMpaSketchTable = (sketches: NullSketch[], t: any) => {
  const columns: Column<NullSketch>[] = [
    {
      Header: t("MPA"),
      accessor: (row) => row.properties.name,
    },
    {
      Header: t("Protection Level"),
      accessor: (row) => (
        <GroupPill
          groupColorMap={groupColorMap}
          group={getUserAttribute(row.properties, "designation", "")}
        >
          {groupDisplayMap[getUserAttribute(row.properties, "designation", "")]}
        </GroupPill>
      ),
    },
  ];

  return (
    <SmallReportTableStyled>
      <Table
        className="styled"
        columns={columns}
        data={sketches.sort((a, b) =>
          a.properties.name.localeCompare(b.properties.name)
        )}
      />
    </SmallReportTableStyled>
  );
};

/**
 * Interface for Learn More function component
 */
interface LearnMoreProps {
  t: any;
}

/** Protection level learn more */
export const ProtectionLearnMore: React.FunctionComponent<LearnMoreProps> = ({
  t,
}) => {
  return (
    <>
        <Trans i18nKey="Protection Card - Learn more">
          <p>ℹ️ Overview: High biodiversity protection zones conserve and protect the top priority areas 
            for marine and coastal biodiversity. These zones are designated for habitats and species that 
            may be rare, endangered, unique or with narrow distribution ranges. This zone includes breeding 
            or spawning areas, key foraging habitat, fragile or sensitive species and habitats, and 
            internationally significant areas. When combined, these zones provide habitats and species 
            with long-term protection, and are sufficiently large to ensure ecological resilience and climate 
            change adaptation. This zone category is not suitable for extraction or sea-bed alteration and is 
            considered a no-take zone in common vernacular.</p>
          <p>Medium biodiversity protection and sustainable use zones are proposed to conserve areas that are 
            suitable for medium levels of biodiversity protection and are also compatible with some sustainable 
            uses. These zones include habitats and species that have some tolerance to disturbance and human 
            activities. These zones also include regionally and nationally significant areas. This zone category 
            is suitable for some level of extraction and sea-bed alteration, with appropriate management and 
            direction, depending on the objective of each designated area.</p>
          <p>🎯 Planning Objective: None</p>
          <p>🗺️ Source Data: None</p>
          <p>📈 Report: Simply counts number of zones in each protection level.</p>
        </Trans>
    </>
  );
};

/**
 * Sketch collection status panel for MPA classification
 */
const MpaClassPanel: React.FunctionComponent<RbcsMpaClassPanelProps> = ({
  value,
  displayName,
  size,
  displayValue = true,
  group,
  groupColorMap,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ paddingRight: 10 }}>
        {group && groupColorMap ? (
          <PointyCircle size={size} color={groupColorMap[group]}>
            {displayValue ? value : null}
          </PointyCircle>
        ) : (
          <RbcsIcon value={value} size={size} displayValue={displayValue} />
        )}
      </div>
      <div style={{ fontSize: 18 }}>{displayName}</div>
    </div>
  );
};
