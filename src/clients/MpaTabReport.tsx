import React, { useState, useRef, useEffect } from "react";
import { SegmentControl, ReportPage } from "@seasketch/geoprocessing/client-ui";
import ViabilityPage from "../components/ViabilityPage";
import RepresentationPage from "../components/RepresentationPage";
import KeyHabitatPage from "../components/KeyHabitatPage";
import { useTranslation } from "react-i18next";
import { Translator } from "../components/TranslatorAsync";
import { Printer } from "@styled-icons/bootstrap";
import { useReactToPrint } from "react-to-print";

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

  // Adding support for printing reports
  const printRef = useRef(null);
  const promiseResolveRef = useRef<any>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    if (isPrinting && promiseResolveRef.current) {
      // Resolves the Promise, letting `react-to-print` know that the DOM updates are completed
      promiseResolveRef.current();
    }
  }, [isPrinting]);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onBeforeGetContent: () => {
      return new Promise((resolve) => {
        promiseResolveRef.current = resolve;
        setIsPrinting(true);
      });
    },
    onAfterPrint: () => {
      // Reset the Promise resolve so we can print again
      promiseResolveRef.current = null;
      setIsPrinting(false);
    },
  });

  return (
    <>
      <Printer
        size={18}
        color="#999"
        title="Print/Save to PDF"
        style={{
          float: "right",
          position: "relative",
          margin: "5px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
        onClick={() => handlePrint()}
      />

      {!isPrinting && (
        <div style={{ marginTop: 5 }}>
          <SegmentControl
            value={tab}
            onClick={(segment) => setTab(segment)}
            segments={segments}
          />
        </div>
      )}

      <div ref={printRef} style={{ breakInside: "avoid" }}>
        <ReportPage hidden={!isPrinting && tab !== viabilityId}>
          <ViabilityPage geographyId={geographyId} printing={isPrinting} />
        </ReportPage>
        <ReportPage hidden={!isPrinting && tab !== representationId}>
          <RepresentationPage geographyId={geographyId} printing={isPrinting} />
        </ReportPage>
        <ReportPage hidden={!isPrinting && tab !== keyHabitatId}>
          <KeyHabitatPage geographyId={geographyId} printing={isPrinting} />
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
