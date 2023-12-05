import React from "react";
import { BathymetryCard } from "./BathymetryCard";
import { Geomorphology } from "./Geomorphology";
import { GeogProp } from "@seasketch/geoprocessing/client-core";

const ReportPage: React.FunctionComponent<GeogProp> = (props) => {
  return (
    <>
      <BathymetryCard />
      <Geomorphology geographyId={props.geographyId}/>
    </>
  );
};

export default ReportPage;
