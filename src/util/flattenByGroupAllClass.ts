import {
    Metric,
    NullSketchCollection,
    SketchCollection,
    firstMatchingMetric,
    groupBy,
    keyBy,
  } from "@seasketch/geoprocessing/client-core";
  
  /**
   * Returns one aggregate object for every groupId present in metrics
   * Each object includes following properties:
   * numSketches - count of child sketches in the group
   * [classId] - a percValue for each classId present in metrics for group
   * value - sum of value across all classIds present in metrics for group
   * percValue - given sum value across all classIds, contains ratio of total sum across all class IDs
   * ----- DIFFERENCES FROM flattenByGroupAllClass IN GP ------
   * Previously, groupTotal was identified by a null classId, now with new precalc it is indentified by null groupId (line 75)
   */
  export const flattenByGroupAllClass = (
    collection: SketchCollection | NullSketchCollection,
    /** Group metrics for collection and its child sketches */
    groupMetrics: Metric[],
    /** Totals by class */
    totalMetrics: Metric[]
  ): {
    value: number;
    groupId: string;
    percValue: number;
  }[] => {
    // Stratify in order by Group -> Collection -> Class. Then flatten
    const metricsByGroup = groupBy(groupMetrics, (m) => m.groupId || "undefined");
  
    return Object.keys(metricsByGroup).map((curGroupId) => {
      const collGroupMetrics = metricsByGroup[curGroupId].filter(
        (m) => m.sketchId === collection.properties.id && m.groupId === curGroupId
      );
      const collGroupMetricsByClass = keyBy(
        collGroupMetrics,
        (m) => m.classId || "undefined"
      );
  
      const classAgg = Object.keys(collGroupMetricsByClass).reduce(
        (rowsSoFar, curClassId) => {
          const groupClassSketchMetrics = groupMetrics.filter(
            (m) =>
              m.sketchId !== collection.properties.id &&
              m.groupId === curGroupId &&
              m.classId === curClassId
          );
  
          const curValue = collGroupMetricsByClass[curClassId]?.value;
  
          const classTotal = firstMatchingMetric(
            totalMetrics,
            (totalMetric) => totalMetric.classId === curClassId
          ).value;
  
          return {
            ...rowsSoFar,
            [curClassId]: curValue / classTotal,
            numSketches: groupClassSketchMetrics.length,
            value: rowsSoFar.value + curValue,
          };
        },
        { value: 0 }
      );
  
      const groupTotal = firstMatchingMetric(
        totalMetrics,
        (m) => !m.groupId
      ).value;
      return {
        groupId: curGroupId,
        percValue: classAgg.value / groupTotal,
        ...classAgg,
      };
    });
  };