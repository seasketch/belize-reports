import React from "react";
import { SizeCard } from "./SizeCard";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";
import { ProtectionCard } from "./ProtectionCard";

const ReportPage = () => {
  return (
    <>
      <ProtectionCard />
      <SizeCard />
      {/* <HabitatCard /> */}
      <SketchAttributesCard autoHide />
    </>
  );
};

export default ReportPage;
