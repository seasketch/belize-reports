import React, { useState } from "react";
import { SegmentControl, ReportPage } from "@seasketch/geoprocessing/client-ui";
import ViabilityPage from "../components/ViabilityPage";
import RepresentationPage from "../components/RepresentationPage";
import KeyHabitatPage from "../components/KeyHabitatPage";
import { useTranslation } from "react-i18next";
import { Translator } from "../components/TranslatorAsync";

const enableAllTabs = false;

const MpaTabReport = () => {
  const { t } = useTranslation();
  const geographyId = "belize_ocean_space";
  const viabilityId = "viability";
  const representationId = "representation";
  const keyHabitatId = "keyHabitats";
  const segments = [
    { id: viabilityId, label: t("Viability") },
    { id: representationId, label: t("Representation") },
    { id: keyHabitatId, label: t("Key Habitat") },
  ];
  const [tab, setTab] = useState<string>(viabilityId);
  return (
    <>
      <div style={{ marginTop: 5 }}>
        <SegmentControl
          value={tab}
          onClick={(segment) => setTab(segment)}
          segments={segments}
        />
      </div>
      <ReportPage hidden={!enableAllTabs && tab !== viabilityId}>
        <ViabilityPage geographyId={geographyId}/>
      </ReportPage>
      <ReportPage hidden={!enableAllTabs && tab !== representationId}>
        <RepresentationPage geographyId={geographyId}/>
      </ReportPage>
      <ReportPage hidden={!enableAllTabs && tab !== keyHabitatId}>
        <KeyHabitatPage geographyId={geographyId}/>
      </ReportPage>
    </>
  );
};

export default function () {
  // Translator must be in parent FunctionComponent in order for ReportClient to use useTranslate hook
  return (
    <Translator>
      <MpaTabReport />
    </Translator>
  );
}
