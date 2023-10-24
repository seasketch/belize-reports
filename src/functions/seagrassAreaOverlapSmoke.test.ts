/**
 * @jest-environment node
 * @group smoke
 */
import { seagrassAreaOverlap } from "./seagrassAreaOverlap";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof seagrassAreaOverlap).toBe("function");
  });
  test("seagrassAreaOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await seagrassAreaOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "seagrassAreaOverlap", example.properties.name);
    }
  }, 120000);
});
