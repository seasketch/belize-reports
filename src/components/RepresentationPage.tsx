import React from "react";
import { BathymetryCard } from "./BathymetryCard.js";
import { Geomorphology } from "./Geomorphology.js";
import { ReportProps } from "../util/ReportProp.js";

const ReportPage: React.FunctionComponent<ReportProps> = (props) => {
  return (
    <>
      <BathymetryCard printing={props.printing} />
      <Geomorphology printing={props.printing} />
    </>
  );
};

export default ReportPage;
