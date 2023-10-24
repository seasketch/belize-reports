/**
 * @jest-environment node
 * @group smoke
 */
import { humanStressorsAreaOverlap } from "./humanStressorsAreaOverlap";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof humanStressorsAreaOverlap).toBe("function");
  });
  test("humanStressorsAreaOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await humanStressorsAreaOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "humanStressorsAreaOverlap", example.properties.name);
    }
  }, 120000);
});
