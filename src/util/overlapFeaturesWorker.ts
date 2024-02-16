import {
  Sketch,
  Feature,
  Metric,
  MultiPolygon,
  Polygon,
  SketchCollection,
} from "@seasketch/geoprocessing/client-core";
import { overlapFeatures } from "@seasketch/geoprocessing";
import { expose } from "threads/worker";

// Not exported so copied
interface OverlapFeatureOptions {
  /** Operation to perform, supports area or sum.  Defaults to area */
  operation: "area" | "sum";
  /** Intersection calls are chunked to avoid infinite loop error, defaults to 5000 features */
  chunkSize: number;
  /** If sketch collection, will include its child sketch metrics in addition to collection metrics, defaults to true */
  includeChildMetrics?: boolean;
  /** Name of feature property to sum */
  sumProperty?: string;
  /** Truncates results to 6 digits, defaults to true */
  truncate?: boolean;
}

export async function overlapFeaturesWorker(
  metricId: string,
  /** features to intersect and get overlap stats */
  features: Feature<Polygon | MultiPolygon>[],
  /** the sketches.  If empty will return 0 result. */
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>
    | Sketch<Polygon | MultiPolygon>[],
  options?: Partial<OverlapFeatureOptions>
): Promise<Metric[]> {
  const results = await overlapFeatures(metricId, features, sketch, options);
  return results;
}

export type OverlapFeaturesWorker = typeof overlapFeaturesWorker;

expose(overlapFeaturesWorker);
