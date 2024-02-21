import React from "react";
import { SizeCard } from "./SizeCard";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";
import { ProtectionCard } from "./ProtectionCard";
import { HumanStressors } from "./HumanStressors";
import { ReportProps } from "../util/ReportProp";

const ReportPage: React.FunctionComponent<ReportProps> = (props) => {
  return (
    <>
      <ProtectionCard printing={props.printing} />
      <SizeCard printing={props.printing} />
      <HumanStressors printing={props.printing} />
      {!props.printing && <SketchAttributesCard autoHide />}
    </>
  );
};

export default ReportPage;
