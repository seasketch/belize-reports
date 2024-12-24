/**
 * @group smoke
 */
import { protection } from "./protection.js";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";
import { describe, test, expect } from "vitest";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof protection).toBe("function");
  });
  test("protectionLevelSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await protection(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "protection", example.properties.name);
    }
  });
});
