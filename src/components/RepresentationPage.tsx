import React from "react";
import { BathymetryCard } from "./BathymetryCard";
import { Geomorphology } from "./Geomorphology";
import { Mangroves } from "./Mangroves";
import { Seagrass } from "./Seagrass";
import { Coral } from "./Coral";

const ReportPage = () => {
  return (
    <>
      <BathymetryCard />
      <Mangroves />
      <Seagrass />
      <Coral />
      <Geomorphology />
    </>
  );
};

export default ReportPage;
