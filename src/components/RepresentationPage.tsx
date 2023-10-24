import React from "react";
import { BathymetryCard } from "./BathymetryCard";
import { Geomorphology } from "./Geomorphology";
import { Mangroves } from "./Mangroves";
import { Seagrass } from "./Seagrass";

const ReportPage = () => {
  return (
    <>
      <BathymetryCard />
      <Mangroves />
      <Seagrass />
      <Geomorphology />
    </>
  );
};

export default ReportPage;
