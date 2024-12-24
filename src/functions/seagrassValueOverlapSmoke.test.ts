/**
 * @jest-environment node
 * @group smoke
 */
import { seagrassValueOverlap } from "./seagrassValueOverlap.js";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";
import { describe, test, expect } from "vitest";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof seagrassValueOverlap).toBe("function");
  });
  test("seagrassValueOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await seagrassValueOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(
        result,
        "seagrassValueOverlap",
        example.properties.name,
      );
    }
  }, 120000);
});
