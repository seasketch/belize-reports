import React from "react";
import { SizeCard } from "./SizeCard";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";
import { ProtectionCard } from "./ProtectionCard";
import { HumanStressors } from "./HumanStressors";
import { GeogProp } from "@seasketch/geoprocessing/client-core";

const ReportPage: React.FunctionComponent<GeogProp> = (props) => {
  return (
    <>
      <ProtectionCard />
      <SizeCard />
      <HumanStressors geographyId={props.geographyId}/>
      <SketchAttributesCard autoHide />
    </>
  );
};

export default ReportPage;
