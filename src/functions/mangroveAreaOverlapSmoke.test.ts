/**
 * @jest-environment node
 * @group smoke
 */
import { mangroveAreaOverlap } from "./mangroveAreaOverlap";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof mangroveAreaOverlap).toBe("function");
  });
  test("mangroveAreaOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await mangroveAreaOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "mangroveAreaOverlap", example.properties.name);
    }
  }, 120000);
});
