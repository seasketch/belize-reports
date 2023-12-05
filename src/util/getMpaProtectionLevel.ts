import { 
  Sketch, 
  SketchCollection, 
  NullSketchCollection, 
  NullSketch, 
  getSketchFeatures,
  getUserAttribute
} from "@seasketch/geoprocessing/client-core";

// Designations of high and medium protection levels
const highProtectionLevels = ['Ia','Ib','II','HIGH_PROTECTION'];
const mediumProtectionLevels = ['IV','V','VI','OECM','LMMA','MEDIUM_PROTECTION'];

/**
 * Gets MPA Protection levels for all MPAs in a sketch collection from user attributes
 * @param sketch User-created Sketch | SketchCollection
 * @returns <string, string> mapping of sketchId to protection level
 */
export function getMpaProtectionLevel(
    sketch: Sketch | SketchCollection | NullSketchCollection | NullSketch
  ): Record<string, string> {
    const sketchFeatures = getSketchFeatures(sketch);
    const protectionLevels = sketchFeatures.reduce<Record<string, string>>(
      (levels, sketch) => {
        const designation = getUserAttribute(
          sketch.properties,
          "designation",
          ""
        ).toString();
        
        if(highProtectionLevels.includes(designation)) levels[sketch.properties.id] = "HIGH_PROTECTION";
        else if(mediumProtectionLevels.includes(designation)) levels[sketch.properties.id] = "MEDIUM_PROTECTION";
        else levels[sketch.properties.id] = "MEDIUM_PROTECTION";
  
        return levels;
      },
      {}
    );
    console.log(protectionLevels);
    
    return protectionLevels;
}