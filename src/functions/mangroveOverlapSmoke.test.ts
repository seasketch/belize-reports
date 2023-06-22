/**
 * @jest-environment node
 * @group smoke
 */
import { mangroveOverlap } from "./mangroveOverlap";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof mangroveOverlap).toBe("function");
  });
  test("mangroveOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await mangroveOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "mangroveOverlap", example.properties.name);
    }
  }, 120000);
});
