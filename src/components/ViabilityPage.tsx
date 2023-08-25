import React from "react";
import { SizeCard } from "./SizeCard";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";
import { HabitatCard } from "./HabitatCard";

const ReportPage = () => {
  return (
    <>
      <SizeCard />
      {/* <HabitatCard /> */}
      <SketchAttributesCard autoHide />
    </>
  );
};

export default ReportPage;
