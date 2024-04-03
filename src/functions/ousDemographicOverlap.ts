import {
  Sketch,
  GeoprocessingHandler,
  Polygon,
  ReportResult,
  SketchCollection,
  toNullSketch,
  rekeyMetrics,
  genFeatureCollection,
  getFlatGeobufPath,
  MultiPolygon,
} from "@seasketch/geoprocessing";
import {
  OusFeature,
  OusFeatureCollection,
  overlapOusDemographic,
} from "../util/overlapOusDemographic";
import { fgbFetchAll } from "@seasketch/geoprocessing/dataproviders";
import { sortMetrics } from "@seasketch/geoprocessing/client-core";
import project from "../../project";

/** Calculate sketch area overlap inside and outside of multiple planning area boundaries */
export async function ousDemographicOverlap(
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>
): Promise<ReportResult> {
  const sh = await fgbFetchAll<OusFeature>(
    getFlatGeobufPath(project.dataBucketUrl(), "ous_demographics")
  );

  const metrics = (
    await overlapOusDemographic(
      genFeatureCollection(sh) as OusFeatureCollection,
      sketch
    )
  ).metrics;

  return {
    metrics: sortMetrics(rekeyMetrics(metrics)),
    sketch: toNullSketch(sketch, true),
  };
}

export default new GeoprocessingHandler(ousDemographicOverlap, {
  title: "ousDemographicOverlap",
  description: "Calculates ous overlap metrics",
  timeout: 900, // seconds
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  memory: 10240,
  requiresProperties: [],
});
