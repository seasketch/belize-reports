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
  firstMatchingMetric
} from "@seasketch/geoprocessing";
import project from "../../project";
import { loadCog } from "@seasketch/geoprocessing/dataproviders";

export async function coralValueOverlap(
  sketch: Sketch<Polygon> | SketchCollection<Polygon>
): Promise<ReportResult> {
  const metricGroup = project.getMetricGroup("coralValueOverlap");
  const totalMetrics = project.getPrecalcMetrics(
    metricGroup,
    "area",
    "belize_ocean_space"
  )
  const totalAreaMetric = firstMatchingMetric(
    totalMetrics,
    (m) => m.groupId === null
  );

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
        // start analysis as soon as source load done
        const overlapResult = await overlapRaster(
          metricGroup.metricId,
          raster,
          sketch
        );
        return overlapResult.map(
          (metrics): Metric => ({
            ...metrics,
            classId: curClass.classId
          })
        );
      })
    )
  ).reduce(
    // merge
    (metricsSoFar, curClassMetrics) => [...metricsSoFar, ...curClassMetrics],
    []
  );

  return {
    metrics: sortMetrics(rekeyMetrics(metrics)),
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
