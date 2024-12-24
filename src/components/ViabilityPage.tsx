import React from "react";
import { SizeCard } from "./SizeCard.js";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";
import { ProtectionCard } from "./ProtectionCard.js";
import { HumanStressors } from "./HumanStressors.js";
import { ReportProps } from "../util/ReportProp.js";
import { OusDemographics } from "./OusDemographic.js";
import { Ous } from "./Ous.js";

const ReportPage: React.FunctionComponent<ReportProps> = (props) => {
  return (
    <>
      <ProtectionCard printing={props.printing} />
      <SizeCard printing={props.printing} />
      <HumanStressors printing={props.printing} />
      <Ous printing={props.printing} />
      <OusDemographics printing={props.printing} />
      {!props.printing && <SketchAttributesCard autoHide />}
    </>
  );
};

export default ReportPage;
