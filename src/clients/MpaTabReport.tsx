import React, { useState, useRef } from "react";
import { SegmentControl, ReportPage } from "@seasketch/geoprocessing/client-ui";
import ViabilityPage from "../components/ViabilityPage";
import RepresentationPage from "../components/RepresentationPage";
import KeyHabitatPage from "../components/KeyHabitatPage";
import { useTranslation } from "react-i18next";
import { Translator } from "../components/TranslatorAsync";
import { Printer, PrinterFill, Download } from "@styled-icons/bootstrap";
import ReactToPrint from "react-to-print";

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
  const [enableAllTabs, setEnableAllTabs] = useState<boolean>(false);
  const [showSegmentControl, setShowSegmentControl] = useState<boolean>(true);

  const printRef = useRef(null);
  return (
    <>
      {enableAllTabs ? (
        <div
          style={{
            display: "flex",
          }}
        >
          <ReactToPrint
            trigger={() => (
              <Download
                size={18}
                color="#999"
                title="Download reports"
                style={{
                  margin: "10px 5px 5px 5px",
                  cursor: "pointer",
                  marginLeft: "auto",
                }}
              />
            )}
            content={() => printRef.current}
          />
          <PrinterFill
            size={18}
            color="#999"
            title="Return to Standard View"
            style={{
              margin: "10px 5px 5px 5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setEnableAllTabs(false);
              setShowSegmentControl(true);
            }}
          />
        </div>
      ) : (
        <Printer
          size={18}
          color="#999"
          title="Print View"
          style={{
            float: "right",
            position: "relative",
            margin: "10px 5px 5px 5px",
            cursor: "pointer",
          }}
          onClick={() => {
            setEnableAllTabs(true);
            setShowSegmentControl(false);
          }}
        />
      )}

      {showSegmentControl && (
        <div style={{ marginTop: 5 }}>
          <SegmentControl
            value={tab}
            onClick={(segment) => setTab(segment)}
            segments={segments}
          />
        </div>
      )}

      <div ref={printRef}>
        <ReportPage hidden={!enableAllTabs && tab !== viabilityId}>
          <ViabilityPage geographyId={geographyId} />
        </ReportPage>
        <ReportPage hidden={!enableAllTabs && tab !== representationId}>
          <RepresentationPage geographyId={geographyId} />
        </ReportPage>
        <ReportPage hidden={!enableAllTabs && tab !== keyHabitatId}>
          <KeyHabitatPage geographyId={geographyId} />
        </ReportPage>
      </div>
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
