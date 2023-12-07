import {
  Sketch,
  GeoprocessingHandler,
  Metric,
  Polygon,
  ReportResult,
  SketchCollection,
  toNullSketch,
  rekeyMetrics,
  getCogFilename,
  overlapRaster,
  sortMetrics,
} from "@seasketch/geoprocessing";
import project from "../../project";
import { loadCog } from "@seasketch/geoprocessing/dataproviders";
import {
  getMpaProtectionLevels,
  protectionLevels,
} from "../util/getMpaProtectionLevel";
import { overlapRasterGroupMetrics } from "../util/overlapRasterGroupMetrics";
import { Georaster } from "@seasketch/geoprocessing/client-core";

export async function coralValueOverlap(
  sketch: Sketch<Polygon> | SketchCollection<Polygon>
): Promise<ReportResult> {
  const metricGroup = project.getMetricGroup("coralValueOverlap");
  const featuresByClass: Record<string, Georaster> = {};

  const metrics: Metric[] = (
    await Promise.all(
      metricGroup.classes.map(async (curClass) => {
        // start raster load and move on in loop while awaiting finish
        if (!curClass.datasourceId)
          throw new Error(`Expected datasourceId for ${curClass}`);
        const url = `${project.dataBucketUrl()}${getCogFilename(
          project.getInternalRasterDatasourceById(curClass.datasourceId)
        )}`;
        const raster = await loadCog(url);
        featuresByClass[curClass.classId] = raster;

        // start analysis as soon as source load done
        const overlapResult = await overlapRaster(
          metricGroup.metricId,
          raster,
          sketch
        );
        return overlapResult.map(
          (metrics): Metric => ({
            ...metrics,
            classId: curClass.classId,
          })
        );
      })
    )
  ).reduce(
    // merge
    (metricsSoFar, curClassMetrics) => [...metricsSoFar, ...curClassMetrics],
    []
  );

  // Calculate group metrics - from individual sketch metrics
  const sketchCategoryMap = getMpaProtectionLevels(sketch);
  const metricToGroup = (sketchMetric: Metric) =>
    sketchCategoryMap[sketchMetric.sketchId!];

  const groupMetrics = await overlapRasterGroupMetrics({
    metricId: metricGroup.metricId,
    groupIds: protectionLevels,
    sketch,
    metricToGroup,
    metrics: metrics,
    featuresByClass,
  });

  return {
    metrics: sortMetrics(rekeyMetrics([...metrics, ...groupMetrics])),
    sketch: toNullSketch(sketch, true),
  };
}

export default new GeoprocessingHandler(coralValueOverlap, {
  title: "coralValueOverlap",
  description: "Calculate sketch overlap with coral polygons",
  executionMode: "async",
  timeout: 900,
  memory: 8192,
  requiresProperties: [],
});
