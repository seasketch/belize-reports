import React from "react";
import { HabitatCard } from "./HabitatCard";
import { BathymetryCard } from "./BathymetryCard";
import { Geomorphology } from "./Geomorphology";

const ReportPage = () => {
  return (
    <>
      <BathymetryCard />
      <Geomorphology />
      <HabitatCard />
    </>
  );
};

export default ReportPage;
