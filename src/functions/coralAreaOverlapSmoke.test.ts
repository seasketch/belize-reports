/**
 * @jest-environment node
 * @group smoke
 */
import { coralAreaOverlap } from "./coralAreaOverlap";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof coralAreaOverlap).toBe("function");
  });
  test("coralAreaOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await coralAreaOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "coralAreaOverlap", example.properties.name);
    }
  }, 120000);
});
