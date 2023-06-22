import React from "react";
import { SizeCard } from "./SizeCard";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";
import { MangroveCard } from "./MangroveCard";

const ReportPage = () => {
  return (
    <>
      <SizeCard />
      <MangroveCard />
      <SketchAttributesCard autoHide />
    </>
  );
};

export default ReportPage;
