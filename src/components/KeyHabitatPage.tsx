import React from "react";
import { Mangroves } from "./Mangroves";
import { Seagrass } from "./Seagrass";
import { Coral } from "./Coral";
import { LittoralForests } from "./LittoralForests";
import { ReportProps } from "../util/ReportProp";

const ReportPage: React.FunctionComponent<ReportProps> = (props) => {
  return (
    <>
      <Coral printing={props.printing} />
      <Mangroves printing={props.printing} />
      <LittoralForests printing={props.printing} />
      <Seagrass printing={props.printing} />
    </>
  );
};

export default ReportPage;
