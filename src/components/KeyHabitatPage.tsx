import React from "react";
import { Mangroves } from "./Mangroves.js";
import { Seagrass } from "./Seagrass.js";
import { Coral } from "./Coral.js";
import { LittoralForests } from "./LittoralForests.js";
import { ReportProps } from "../util/ReportProp.js";

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
