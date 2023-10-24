import React from "react";
import { SizeCard } from "./SizeCard";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";
import { ProtectionCard } from "./ProtectionCard";
import { HumanStressors } from "./HumanStressors";

const ReportPage = () => {
  return (
    <>
      <ProtectionCard />
      <SizeCard />
      <HumanStressors />
      <SketchAttributesCard autoHide />
    </>
  );
};

export default ReportPage;
