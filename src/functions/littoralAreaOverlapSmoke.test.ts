/**
 * @jest-environment node
 * @group smoke
 */
import { littoralAreaOverlap } from "./littoralAreaOverlap";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof littoralAreaOverlap).toBe("function");
  });
  test("littoralAreaOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await littoralAreaOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "littoralAreaOverlap", example.properties.name);
    }
  }, 120000);
});
