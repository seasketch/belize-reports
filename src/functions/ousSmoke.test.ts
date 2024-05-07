/**
 * @jest-environment node
 * @group smoke
 */
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";
import { ous } from "./ous";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof ous).toBe("function");
  });
  test("ous - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await ous(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "ous", example.properties.name);
    }
  }, 60000);
});
