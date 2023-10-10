import {
  Sketch,
  GeoprocessingHandler,
  Metric,
  Polygon,
  ReportResult,
  SketchCollection,
  toNullSketch,
  rekeyMetrics,
  sortMetrics,
  NullSketchCollection,
  NullSketch,
  getSketchFeatures,
} from "@seasketch/geoprocessing";
import project from "../../project";
import {
  overlapArea,
  overlapAreaGroupMetrics,
} from "@seasketch/geoprocessing/src";
import {
  firstMatchingMetric,
  getUserAttribute,
} from "@seasketch/geoprocessing/client-core";

const metricGroup = project.getMetricGroup("boundaryAreaOverlap");
const boundaryTotalMetrics = project.getPrecalcMetrics(
  metricGroup,
  "area"
);
const totalAreaMetric = firstMatchingMetric(
  boundaryTotalMetrics,
  (m) => m.groupId === null
);

export async function boundaryAreaOverlap(
  sketch: Sketch<Polygon> | SketchCollection<Polygon>
): Promise<ReportResult> {
  const areaMetrics = (
    await overlapArea(metricGroup.metricId, sketch, totalAreaMetric.value, {
      includePercMetric: false,
    })
  ).map(
    (metric): Metric => ({
      ...metric,
      classId: metricGroup.classes[0].classId,
    })
  );

  // Generate area metrics grouped by protection level, with area overlap within protection level removed
  // Each sketch gets one group metric for its protection level, while collection generates one for each protection level
  const sketchToMpaClass = getMpaProtectionLevel(sketch);
  const metricToLevel = (sketchMetric: Metric) => {
    return sketchToMpaClass[sketchMetric.sketchId!];
  };

  const levelMetrics = await overlapAreaGroupMetrics({
    metricId: metricGroup.metricId,
    groupIds: ["HIGH_PROTECTION", "MEDIUM_PROTECTION"],
    sketch: sketch,
    metricToGroup: metricToLevel,
    metrics: areaMetrics,
    classId: metricGroup.classes[0].classId,
    outerArea: totalAreaMetric.value,
  });

  return {
    metrics: sortMetrics(rekeyMetrics([...areaMetrics, ...levelMetrics])),
    sketch: toNullSketch(sketch),
  };
}

/**
 * Gets MPA Protection levels for all MPAs in a sketch collection from user attributes
 * @param sketch User-created Sketch | SketchCollection
 * @returns <string, string> mapping of sketchId to protection level
 */
export function getMpaProtectionLevel(
  sketch: Sketch | SketchCollection | NullSketchCollection | NullSketch
): Record<string, string> {
  const sketchFeatures = getSketchFeatures(sketch);
  const protectionLevels = sketchFeatures.reduce<Record<string, string>>(
    (levels, sketch) => {
      const designation = getUserAttribute(
        sketch.properties,
        "designation",
        ""
      );
      levels[sketch.properties.id] = designation;
      return levels;
    },
    {}
  );
  return protectionLevels;
}

export default new GeoprocessingHandler(boundaryAreaOverlap, {
  title: "boundaryAreaOverlap",
  description: "Calculate sketch overlap with boundary polygons",
  executionMode: "async",
  timeout: 40,
  requiresProperties: [],
  memory: 10240,
});