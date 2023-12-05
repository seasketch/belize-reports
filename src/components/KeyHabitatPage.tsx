import React from "react";
import { Mangroves } from "./Mangroves";
import { Seagrass } from "./Seagrass";
import { Coral } from "./Coral";
import { GeogProp } from "@seasketch/geoprocessing/client-core";
import { LittoralForests } from "./LittoralForests";

const ReportPage: React.FunctionComponent<GeogProp> = (props) => {
  return (
    <>
      <Coral geographyId={props.geographyId}/>
      <Mangroves geographyId={props.geographyId}/>
      <LittoralForests geographyId={props.geographyId}/>
      <Seagrass geographyId={props.geographyId}/>
    </>
  );
};

export default ReportPage;
