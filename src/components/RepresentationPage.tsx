import React from "react";
import { BathymetryCard } from "./BathymetryCard";
import { Geomorphology } from "./Geomorphology";
import { Mangroves } from "./Mangroves";

const ReportPage = () => {
  return (
    <>
      <BathymetryCard />
      <Mangroves />
      <Geomorphology />
    </>
  );
};

export default ReportPage;
