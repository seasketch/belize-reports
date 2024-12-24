/**
 * @jest-environment node
 * @group smoke
 */
import { coralValueOverlap } from "./coralValueOverlap.js";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";
import { describe, test, expect } from "vitest";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof coralValueOverlap).toBe("function");
  });
  test("coralValueOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await coralValueOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "coralValueOverlap", example.properties.name);
    }
  }, 200000);
});
