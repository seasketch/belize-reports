import {
  Sketch,
  Feature,
  Metric,
  Polygon,
  ReportResult,
  SketchCollection,
  toNullSketch,
  rekeyMetrics,
  sortMetrics,
  getFlatGeobufFilename,
  isInternalVectorDatasource,
} from "@seasketch/geoprocessing/client-core";
import {
  GeoprocessingHandler,
  getDatasourceFeatures,
  overlapFeaturesGroupMetrics,
  overlapPolygonArea,
} from "@seasketch/geoprocessing";
import { bbox } from "@turf/turf";
import project from "../../project/projectClient.js";
import {
  getMpaProtectionLevels,
  protectionLevels,
} from "../util/getMpaProtectionLevel.js";

export async function geomorphAreaOverlap(
  sketch: Sketch<Polygon> | SketchCollection<Polygon>,
): Promise<ReportResult> {
  const box = sketch.bbox || bbox(sketch);
  const metricGroup = project.getMetricGroup("geomorphAreaOverlap");

  const featuresByClass: Record<string, Feature<Polygon>[]> = {};

  const polysByBoundary = (
    await Promise.all(
      metricGroup.classes.map(async (curClass) => {
        if (!curClass.datasourceId) {
          throw new Error(`Missing datasourceId ${curClass.classId}`);
        }
        const ds = project.getDatasourceById(curClass.datasourceId);
        if (isInternalVectorDatasource(ds)) {
          const url = `${project.dataBucketUrl()}${getFlatGeobufFilename(ds)}`;

          // Fetch features overlapping with sketch, pull from cache if already fetched
          const features = await getDatasourceFeatures<Polygon>(ds, url, {
            sketch,
          });

          // If this is a sub-class, filter by class name, exclude null geometry too
          // ToDo: should do deeper match to classKey
          const finalFeatures =
            curClass.classKey && curClass.classId !== `${ds.datasourceId}_all`
              ? features.filter((feat) => {
                  return (
                    feat.geometry &&
                    feat.properties![ds.classKeys[0]] === curClass.classId
                  );
                }, [])
              : features;
          featuresByClass[curClass.classId] = finalFeatures;

          return finalFeatures;
        }
        return [];
      }),
    )
  ).reduce<Record<string, Feature<Polygon>[]>>((acc, polys, classIndex) => {
    return {
      ...acc,
      [metricGroup.classes[classIndex].classId]: polys,
    };
  }, {});

  const metrics: Metric[] = (
    await Promise.all(
      metricGroup.classes.map(async (curClass) => {
        const overlapResult: Metric[] = await overlapPolygonArea(
          metricGroup.metricId,
          polysByBoundary[curClass.classId],
          sketch,
        );

        return overlapResult.map(
          (metric): Metric => ({
            ...metric,
            classId: curClass.classId,
          }),
        );
      }),
    )
  ).reduce(
    // merge
    (metricsSoFar, curClassMetrics) => [...metricsSoFar, ...curClassMetrics],
    [],
  );

  // Calculate group metrics - from individual sketch metrics
  const sketchCategoryMap = getMpaProtectionLevels(sketch);
  const metricToGroup = (sketchMetric: Metric) =>
    sketchCategoryMap[sketchMetric.sketchId!];

  const groupMetrics = await overlapFeaturesGroupMetrics({
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

export default new GeoprocessingHandler(geomorphAreaOverlap, {
  title: "geomorphAreaOverlap",
  description: "Calculate sketch overlap with geomorphology polygons",
  executionMode: "async",
  timeout: 600,
  memory: 4096,
  requiresProperties: [],
});
