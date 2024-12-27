
      import React from "react";
      import { SizeReport } from '.././SizeReport.jsx';
      import {
        createReportDecorator,
        sampleSketchReportContextValue,
      } from "@seasketch/geoprocessing/client-ui";
      import Translator from "/workspaces/belize-reports/src/components/TranslatorAsync.js";

      const contextValue = sampleSketchReportContextValue({
        exampleOutputs: [
  {
    "sketchName": "littoral-medium",
    "results": {
      "min": -2247,
      "max": -1,
      "mean": -237.55115511551156,
      "units": "meters"
    },
    "functionName": "bathymetry"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23569",
          "groupId": null,
          "value": 134217787.1482544,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 134217787.1482544,
          "extra": {
            "sketchName": "littoral-medium"
          }
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        }
      }
    },
    "functionName": "boundaryAreaOverlap"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23569",
          "groupId": "band-0",
          "value": 47201,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 47201,
          "extra": {
            "sketchName": "littoral-medium"
          }
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "coralValueOverlap"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23569",
          "groupId": null,
          "value": 38641643.611121,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 38641643.611121,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23569",
          "groupId": null,
          "value": 93388472.737602,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 93388472.737602,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23569",
          "groupId": null,
          "value": 38321826.81696,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 38321826.81696,
          "extra": {
            "sketchName": "littoral-medium"
          }
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "geomorphAreaOverlap"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23569",
          "groupId": null,
          "value": 27633650.606018,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 27633650.606018,
          "extra": {
            "sketchName": "littoral-medium"
          }
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "humanStressorsAreaOverlap"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23569",
          "groupId": null,
          "value": 2839144.232903,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 2839144.232903,
          "extra": {
            "sketchName": "littoral-medium"
          }
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "littoralAreaOverlap"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23569",
          "groupId": null,
          "value": 12595600.083873,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 12595600.083873,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23569",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "mangroveAreaOverlap"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23569",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23569",
          "groupId": "band-0",
          "value": 68229.26196,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 68229.26196,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23569",
          "groupId": "band-0",
          "value": 2029087.802847,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 2029087.802847,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23569",
          "groupId": "band-0",
          "value": 6286.953524,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 6286.953524,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23569",
          "groupId": "band-0",
          "value": 1615.882009,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 1615.882009,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23569",
          "groupId": "band-0",
          "value": 7625906.29248,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 7625906.29248,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23569",
          "groupId": "band-0",
          "value": 48967834.723364,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 48967834.723364,
          "extra": {
            "sketchName": "littoral-medium"
          }
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "ous"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "belize_city",
          "sketchId": "23569",
          "groupId": null,
          "value": 56
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "caye_caulker_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 7
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "chunox_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 139
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "copper_bank_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 62
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "corozal_town",
          "sketchId": "23569",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "dangriga_town",
          "sketchId": "23569",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Diving",
          "sketchId": "23569",
          "groupId": null,
          "value": 181
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Fisheries & Aquaculture",
          "sketchId": "23569",
          "groupId": null,
          "value": 217
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "General Use",
          "sketchId": "23569",
          "groupId": null,
          "value": 9
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "hopkins_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 14
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "ladyville_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 14
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Lines",
          "sketchId": "23569",
          "groupId": null,
          "value": 150
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "mango_creek_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Marine & Coastal Development",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Marine & Coastal Ecosystems",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Maritime Administration",
          "sketchId": "23569",
          "groupId": null,
          "value": 38
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Net",
          "sketchId": "23569",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "other",
          "sketchId": "23569",
          "groupId": null,
          "value": 23
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "ousPeopleCount_all",
          "sketchId": "23569",
          "groupId": null,
          "value": 414
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "placencia_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "punta_gorda_town",
          "sketchId": "23569",
          "groupId": null,
          "value": 8
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "san_pedro_town",
          "sketchId": "23569",
          "groupId": null,
          "value": 8
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "sarteneja_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "sittee_river_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Spears",
          "sketchId": "23569",
          "groupId": null,
          "value": 171
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Tourism",
          "sketchId": "23569",
          "groupId": null,
          "value": 176
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Traps",
          "sketchId": "23569",
          "groupId": null,
          "value": 16
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "unknown_community",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "unknown-gear",
          "sketchId": "23569",
          "groupId": null,
          "value": 236
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "belize_city",
          "sketchId": "23569",
          "groupId": null,
          "value": 14
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "caye_caulker_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "chunox_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 19
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "copper_bank_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 13
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "corozal_town",
          "sketchId": "23569",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "dangriga_town",
          "sketchId": "23569",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Diving",
          "sketchId": "23569",
          "groupId": null,
          "value": 28
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Fisheries & Aquaculture",
          "sketchId": "23569",
          "groupId": null,
          "value": 39
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "General Use",
          "sketchId": "23569",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "hopkins_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "ladyville_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Lines",
          "sketchId": "23569",
          "groupId": null,
          "value": 24
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "mango_creek_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Marine & Coastal Development",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Marine & Coastal Ecosystems",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Maritime Administration",
          "sketchId": "23569",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Net",
          "sketchId": "23569",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "other",
          "sketchId": "23569",
          "groupId": null,
          "value": 7
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "ousRespondentCount_all",
          "sketchId": "23569",
          "groupId": null,
          "value": 59
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "placencia_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "punta_gorda_town",
          "sketchId": "23569",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "san_pedro_town",
          "sketchId": "23569",
          "groupId": null,
          "value": 8
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "sarteneja_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "sittee_river_village",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Spears",
          "sketchId": "23569",
          "groupId": null,
          "value": 23
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Tourism",
          "sketchId": "23569",
          "groupId": null,
          "value": 12
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Traps",
          "sketchId": "23569",
          "groupId": null,
          "value": 5
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "unknown_community",
          "sketchId": "23569",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "unknown-gear",
          "sketchId": "23569",
          "groupId": null,
          "value": 29
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "ousDemographicOverlap"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "protectionCountOverlap",
          "classId": "IV",
          "sketchId": null,
          "groupId": "IV",
          "value": 1
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        }
      }
    },
    "functionName": "protection"
  },
  {
    "sketchName": "littoral-medium",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23569",
          "groupId": "band-0",
          "value": 19163,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23569",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "littoral-medium"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23569",
          "groupId": "MEDIUM_PROTECTION",
          "value": 19163,
          "extra": {
            "sketchName": "littoral-medium"
          }
        }
      ],
      "sketch": {
        "id": 23569,
        "bbox": [
          -87.628784,
          17.15198,
          -87.49012,
          17.25795
        ],
        "type": "Feature",
        "properties": {
          "2931": "IV",
          "2932": "littoral-medium",
          "2934": "abby",
          "id": "23569",
          "name": "littoral-medium",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-05T22:02:59.617023+00:00",
          "updatedAt": "2023-12-05T22:02:59.617023+00:00",
          "designation": "IV",
          "collectionId": null,
          "isCollection": false,
          "sharedInForum": false,
          "sketchClassId": "196",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 2933,
              "alternateLanguages": {
                "es": {
                  "label": "Comentarios",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {
                "es": {
                  "label": "Autor(es)",
                  "valueLabel": null
                }
              }
            },
            {
              "label": "Designation",
              "value": "IV",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "IUCN IV: Habitat/Species Management Area",
              "formElementId": 2931,
              "alternateLanguages": {
                "es": {
                  "label": "Designación",
                  "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
                }
              }
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "seagrassValueOverlap"
  }
],
        sketchProperties: {
  "2931": "IV",
  "2932": "littoral-medium",
  "2934": "abby",
  "id": "23569",
  "name": "littoral-medium",
  "postId": null,
  "userId": "531",
  "authors": "abby",
  "comments": null,
  "userSlug": "Abby",
  "createdAt": "2023-12-05T22:02:59.617023+00:00",
  "updatedAt": "2023-12-05T22:02:59.617023+00:00",
  "designation": "IV",
  "collectionId": null,
  "isCollection": false,
  "sharedInForum": false,
  "sketchClassId": "196",
  "userAttributes": [
    {
      "label": "Comments",
      "value": null,
      "exportId": "comments",
      "fieldType": "TextArea",
      "valueLabel": null,
      "formElementId": 2933,
      "alternateLanguages": {
        "es": {
          "label": "Comentarios",
          "valueLabel": null
        }
      }
    },
    {
      "label": "Author(s)",
      "value": "abby",
      "exportId": "authors",
      "fieldType": "ShortText",
      "valueLabel": null,
      "formElementId": 2934,
      "alternateLanguages": {
        "es": {
          "label": "Autor(es)",
          "valueLabel": null
        }
      }
    },
    {
      "label": "Designation",
      "value": "IV",
      "exportId": "designation",
      "fieldType": "ComboBox",
      "valueLabel": "IUCN IV: Habitat/Species Management Area",
      "formElementId": 2931,
      "alternateLanguages": {
        "es": {
          "label": "Designación",
          "valueLabel": "UICN IV: Área de Manejo de Hábitat/Especies"
        }
      }
    }
  ]
},
        projectUrl: "https://example.com/project",
        geometryUri: 'https://localhost/ef06a28c-2af2-4036-8ed5-4face81d9750',
        visibleLayers: [],
        language: "en"
      });

      export const littoral_medium = () => (
        <Translator>
          <SizeReport />
        </Translator>
      );

      export default {
        component: SizeReport,
        title: 'Project/ReportClients/SizeReport',
        name: 'littoral-medium',
        decorators: [createReportDecorator(contextValue)],
      };
    