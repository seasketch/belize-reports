
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
    "sketchName": "large-hpbz",
    "results": {
      "min": -4502,
      "max": 0,
      "mean": -2849.741041854863,
      "units": "meters"
    },
    "functionName": "bathymetry"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20652",
          "groupId": null,
          "value": 16157192185.632914,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 16157192185.632914,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "boundaryAreaOverlap"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "coralAreaOverlap",
          "classId": "coral",
          "sketchId": "20652",
          "groupId": null,
          "value": 313026196.605107,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "coralAreaOverlap"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20652",
          "groupId": "band-0",
          "value": 1229452,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 1229452,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "coralValueOverlap"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20652",
          "groupId": null,
          "value": 8761913732.154343,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 8761913732.154343,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20652",
          "groupId": null,
          "value": 682028003.934037,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 682028003.934037,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20652",
          "groupId": null,
          "value": 1210923300.136698,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 1210923300.136698,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20652",
          "groupId": null,
          "value": 2719926118.252327,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 2719926118.252327,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20652",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20652",
          "groupId": null,
          "value": 8762102892.08187,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 8762102892.08187,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20652",
          "groupId": null,
          "value": 1306782058.561758,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 1306782058.561758,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20652",
          "groupId": null,
          "value": 229066387.184223,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 229066387.184223,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20652",
          "groupId": null,
          "value": 76034607.518431,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 76034607.518431,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20652",
          "groupId": null,
          "value": 3065712220.530813,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 3065712220.530813,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "geomorphAreaOverlap"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20652",
          "groupId": null,
          "value": 96205396.505296,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 96205396.505296,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20652",
          "groupId": null,
          "value": 6681.004732,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 6681.004732,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20652",
          "groupId": null,
          "value": 30739679.415805,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 30739679.415805,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20652",
          "groupId": null,
          "value": 1378222441.515989,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 1378222441.515989,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "humanStressorsAreaOverlap"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20652",
          "groupId": null,
          "value": 486465.330042,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 486465.330042,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "littoralAreaOverlap"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20652",
          "groupId": null,
          "value": 7822370.696837,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 7822370.696837,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20652",
          "groupId": null,
          "value": 71452395.299309,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 71452395.299309,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20652",
          "groupId": null,
          "value": 13577.276851,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 13577.276851,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "mangroveAreaOverlap"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20652",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20652",
          "groupId": "band-0",
          "value": 919150.666387,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 919150.666387,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20652",
          "groupId": "band-0",
          "value": 5783734.45197,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 5783734.45197,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20652",
          "groupId": "band-0",
          "value": 366005.986865,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 366005.986865,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20652",
          "groupId": "band-0",
          "value": 9866512.632718,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 9866512.632718,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20652",
          "groupId": "band-0",
          "value": 25323063.724028,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 25323063.724028,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20652",
          "groupId": "band-0",
          "value": 130822402.38518,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 130822402.38518,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "ous"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "belize_city",
          "sketchId": "20652",
          "groupId": null,
          "value": 85
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "caye_caulker_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 20
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "chunox_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 159
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "copper_bank_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 95
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "corozal_town",
          "sketchId": "20652",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "dangriga_town",
          "sketchId": "20652",
          "groupId": null,
          "value": 69
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Diving",
          "sketchId": "20652",
          "groupId": null,
          "value": 265
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Fisheries & Aquaculture",
          "sketchId": "20652",
          "groupId": null,
          "value": 454
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "gales_point_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "General Use",
          "sketchId": "20652",
          "groupId": null,
          "value": 13
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "hopkins_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 21
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "ladyville_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 18
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Lines",
          "sketchId": "20652",
          "groupId": null,
          "value": 272
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "mango_creek_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Marine & Coastal Development",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Marine & Coastal Ecosystems",
          "sketchId": "20652",
          "groupId": null,
          "value": 68
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Maritime Administration",
          "sketchId": "20652",
          "groupId": null,
          "value": 44
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Net",
          "sketchId": "20652",
          "groupId": null,
          "value": 52
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "other",
          "sketchId": "20652",
          "groupId": null,
          "value": 36
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "ousPeopleCount_all",
          "sketchId": "20652",
          "groupId": null,
          "value": 664
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "placencia_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 8
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "punta_gorda_town",
          "sketchId": "20652",
          "groupId": null,
          "value": 8
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "san_pedro_town",
          "sketchId": "20652",
          "groupId": null,
          "value": 13
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "sarteneja_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 9
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "sittee_river_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Spears",
          "sketchId": "20652",
          "groupId": null,
          "value": 264
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "st_george_s_caye",
          "sketchId": "20652",
          "groupId": null,
          "value": 15
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Tourism",
          "sketchId": "20652",
          "groupId": null,
          "value": 241
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Traps",
          "sketchId": "20652",
          "groupId": null,
          "value": 73
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "unknown_community",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "unknown-gear",
          "sketchId": "20652",
          "groupId": null,
          "value": 410
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "belize_city",
          "sketchId": "20652",
          "groupId": null,
          "value": 26
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "caye_caulker_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 11
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "chunox_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 23
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "copper_bank_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 18
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "corozal_town",
          "sketchId": "20652",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "dangriga_town",
          "sketchId": "20652",
          "groupId": null,
          "value": 7
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Diving",
          "sketchId": "20652",
          "groupId": null,
          "value": 37
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Fisheries & Aquaculture",
          "sketchId": "20652",
          "groupId": null,
          "value": 73
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "gales_point_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "General Use",
          "sketchId": "20652",
          "groupId": null,
          "value": 10
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "hopkins_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 4
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "ladyville_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 9
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Lines",
          "sketchId": "20652",
          "groupId": null,
          "value": 47
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "mango_creek_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Marine & Coastal Development",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Marine & Coastal Ecosystems",
          "sketchId": "20652",
          "groupId": null,
          "value": 8
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Maritime Administration",
          "sketchId": "20652",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Net",
          "sketchId": "20652",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "other",
          "sketchId": "20652",
          "groupId": null,
          "value": 12
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "ousRespondentCount_all",
          "sketchId": "20652",
          "groupId": null,
          "value": 108
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "placencia_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "punta_gorda_town",
          "sketchId": "20652",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "san_pedro_town",
          "sketchId": "20652",
          "groupId": null,
          "value": 13
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "sarteneja_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "sittee_river_village",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Spears",
          "sketchId": "20652",
          "groupId": null,
          "value": 35
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "st_george_s_caye",
          "sketchId": "20652",
          "groupId": null,
          "value": 4
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Tourism",
          "sketchId": "20652",
          "groupId": null,
          "value": 23
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Traps",
          "sketchId": "20652",
          "groupId": null,
          "value": 8
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "unknown_community",
          "sketchId": "20652",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "unknown-gear",
          "sketchId": "20652",
          "groupId": null,
          "value": 56
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "ousDemographicOverlap"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "protectionCountOverlap",
          "classId": "HIGH_PROTECTION",
          "sketchId": null,
          "groupId": "HIGH_PROTECTION",
          "value": 1
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "protection"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "seagrassAreaOverlap",
          "classId": "seagrass",
          "sketchId": "20652",
          "groupId": null,
          "value": 252999189.287889,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
            }
          ]
        },
        "geometry": null
      }
    },
    "functionName": "seagrassAreaOverlap"
  },
  {
    "sketchName": "large-hpbz",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20652",
          "groupId": "band-0",
          "value": 249178,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20652",
          "groupId": "HIGH_PROTECTION",
          "value": 249178,
          "extra": {
            "sketchName": "large-hpbz"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20652",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "large-hpbz"
          }
        }
      ],
      "sketch": {
        "id": 20652,
        "bbox": [
          -88.023674,
          16.775734,
          -85.97308,
          17.890213
        ],
        "type": "Feature",
        "properties": {
          "2931": "HIGH_PROTECTION",
          "2932": "large-hpbz",
          "2934": "abby",
          "id": "20652",
          "name": "large-hpbz",
          "postId": null,
          "userId": "531",
          "authors": "abby",
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T22:16:30.080299+00:00",
          "updatedAt": "2023-10-10T22:16:30.080299+00:00",
          "designation": "HIGH_PROTECTION",
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
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": "abby",
              "exportId": "authors",
              "fieldType": "ShortText",
              "valueLabel": null,
              "formElementId": 2934,
              "alternateLanguages": {}
            },
            {
              "label": "Designation",
              "value": "HIGH_PROTECTION",
              "exportId": "designation",
              "fieldType": "ComboBox",
              "valueLabel": "High Protection",
              "formElementId": 2931,
              "alternateLanguages": {}
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
  "2931": "HIGH_PROTECTION",
  "2932": "large-hpbz",
  "2934": "abby",
  "id": "20652",
  "name": "large-hpbz",
  "postId": null,
  "userId": "531",
  "authors": "abby",
  "comments": null,
  "userSlug": "Abby",
  "createdAt": "2023-10-10T22:16:30.080299+00:00",
  "updatedAt": "2023-10-10T22:16:30.080299+00:00",
  "designation": "HIGH_PROTECTION",
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
      "alternateLanguages": {}
    },
    {
      "label": "Author(s)",
      "value": "abby",
      "exportId": "authors",
      "fieldType": "ShortText",
      "valueLabel": null,
      "formElementId": 2934,
      "alternateLanguages": {}
    },
    {
      "label": "Designation",
      "value": "HIGH_PROTECTION",
      "exportId": "designation",
      "fieldType": "ComboBox",
      "valueLabel": "High Protection",
      "formElementId": 2931,
      "alternateLanguages": {}
    }
  ]
},
        projectUrl: "https://example.com/project",
        geometryUri: 'https://localhost/64141d30-b33c-48b6-9c51-1a92d0d72b4e',
        visibleLayers: [],
        language: "en"
      });

      export const large_hpbz = () => (
        <Translator>
          <SizeReport />
        </Translator>
      );

      export default {
        component: SizeReport,
        title: 'Project/ReportClients/SizeReport',
        name: 'large-hpbz',
        decorators: [createReportDecorator(contextValue)],
      };
    