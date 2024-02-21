import React from "react";
import { BathymetryCard } from "./BathymetryCard";
import { Geomorphology } from "./Geomorphology";
import { ReportProps } from "../util/ReportProp";

const ReportPage: React.FunctionComponent<ReportProps> = (props) => {
  return (
    <>
      <BathymetryCard printing={props.printing} />
      <Geomorphology printing={props.printing} />
    </>
  );
};

export default ReportPage;
