
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
    "sketchName": "test-network",
    "results": {
      "min": -3640,
      "max": 0,
      "mean": -839.6023739046893,
      "units": "meters"
    },
    "functionName": "bathymetry"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20646",
          "groupId": null,
          "value": 1150058826.9977787,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 1150058826.9977787,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20647",
          "groupId": null,
          "value": 1476053937.032696,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 1476053937.032696,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20648",
          "groupId": null,
          "value": 2626112764.0304747,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 1150058826.9977787,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 1476053937.032696,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            }
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            }
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "boundaryAreaOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "coralAreaOverlap",
          "classId": "coral",
          "sketchId": "20646",
          "groupId": null,
          "value": 100666488.729519,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralAreaOverlap",
          "classId": "coral",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralAreaOverlap",
          "classId": "coral",
          "sketchId": "20648",
          "groupId": null,
          "value": 100666488.729519,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20646,
            "bbox": [
              -88.0052,
              16.765121,
              -87.60986,
              17.005533
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-10-25T17:48:19.521793+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {}
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20647,
            "bbox": [
              -87.56553,
              17.485428,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-10-25T17:48:25.183511+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {}
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-10-25T17:48:25.183511+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": null
        }
      }
    },
    "functionName": "coralAreaOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20646",
          "groupId": "band-0",
          "value": 785940,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 785940,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20647",
          "groupId": "band-0",
          "value": 243149,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 243149,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20648",
          "groupId": "band-0",
          "value": 1029089,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 785940,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 243149,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "coralValueOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20646",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20647",
          "groupId": null,
          "value": 63374744.087638,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 63374744.087638,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20648",
          "groupId": null,
          "value": 63374744.087638,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 63374744.087638,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20646",
          "groupId": null,
          "value": 98975584.543595,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 98975584.543595,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20648",
          "groupId": null,
          "value": 98975584.543595,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 98975584.543595,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20646",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20647",
          "groupId": null,
          "value": 89849505.927616,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 89849505.927616,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20648",
          "groupId": null,
          "value": 89849505.927616,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 89849505.927616,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20646",
          "groupId": null,
          "value": 111579381.896305,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 111579381.896305,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20647",
          "groupId": null,
          "value": 821933372.714091,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 821933372.714091,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20648",
          "groupId": null,
          "value": 933512754.610397,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 111579381.896305,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 821933372.714091,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20646",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20648",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20646",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20647",
          "groupId": null,
          "value": 63377875.811732,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 63377875.811732,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20648",
          "groupId": null,
          "value": 63377875.811732,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 63377875.811732,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20646",
          "groupId": null,
          "value": 615852949.332891,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 615852949.332891,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20647",
          "groupId": null,
          "value": 350194001.079039,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 350194001.079039,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20648",
          "groupId": null,
          "value": 966046950.41193,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 615852949.332891,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 350194001.079039,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20646",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20648",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20646",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20648",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20646",
          "groupId": null,
          "value": 530603203.718393,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 530603203.718393,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20647",
          "groupId": null,
          "value": 1055419311.319962,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 1055419311.319962,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20648",
          "groupId": null,
          "value": 1586022515.038356,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 530603203.718393,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 1055419311.319962,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "geomorphAreaOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "metricId": "habitatOverlap",
          "sketchId": "20646",
          "classId": "coral_degraded",
          "groupId": null,
          "geographyId": null,
          "value": 36770135.617823,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20647",
          "classId": "coral_degraded",
          "groupId": null,
          "geographyId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20648",
          "classId": "coral_degraded",
          "groupId": null,
          "geographyId": null,
          "value": 36770135.617823,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20646",
          "classId": "coral_healthy",
          "groupId": null,
          "geographyId": null,
          "value": 98609436.183778,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20647",
          "classId": "coral_healthy",
          "groupId": null,
          "geographyId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20648",
          "classId": "coral_healthy",
          "groupId": null,
          "geographyId": null,
          "value": 98609436.183778,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20646",
          "classId": "mangrove_degraded",
          "groupId": null,
          "geographyId": null,
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20647",
          "classId": "mangrove_degraded",
          "groupId": null,
          "geographyId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20648",
          "classId": "mangrove_degraded",
          "groupId": null,
          "geographyId": null,
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20646",
          "classId": "mangrove_healthy",
          "groupId": null,
          "geographyId": null,
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20647",
          "classId": "mangrove_healthy",
          "groupId": null,
          "geographyId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "metricId": "habitatOverlap",
          "sketchId": "20648",
          "classId": "mangrove_healthy",
          "groupId": null,
          "geographyId": null,
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20646,
            "bbox": [
              -88.0052,
              16.765121,
              -87.60986,
              17.005533
            ],
            "type": "Feature",
            "properties": {
              "2931": "HIGH_PROTECTION",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-10-10T21:22:47.456686+00:00",
              "designation": "HIGH_PROTECTION",
              "collectionId": "20648",
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
          },
          {
            "id": 20647,
            "bbox": [
              -87.56553,
              17.485428,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "MEDIUM_PROTECTION",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-10-10T21:22:48.436039+00:00",
              "designation": "MEDIUM_PROTECTION",
              "collectionId": "20648",
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
                  "value": "MEDIUM_PROTECTION",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "Medium Protection",
                  "formElementId": 2931,
                  "alternateLanguages": {}
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-10-10T21:22:48.436039+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": null
        }
      }
    },
    "functionName": "habitatOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20646",
          "groupId": null,
          "value": 265140013.451789,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 265140013.451789,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20648",
          "groupId": null,
          "value": 265140013.451789,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 265140013.451789,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20646",
          "groupId": null,
          "value": 24430.506241,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 24430.506241,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20648",
          "groupId": null,
          "value": 24430.506241,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 24430.506241,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20646",
          "groupId": null,
          "value": 62692830.520685,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 62692830.520685,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20648",
          "groupId": null,
          "value": 62692830.520685,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 62692830.520685,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20646",
          "groupId": null,
          "value": 335142883.678031,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 335142883.678031,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20647",
          "groupId": null,
          "value": 288229305.259831,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 288229305.259831,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20648",
          "groupId": null,
          "value": 623372188.937862,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 335142883.678031,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 288229305.259831,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "humanStressorsAreaOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20646",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20647",
          "groupId": null,
          "value": 2839144.232903,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 2839144.232903,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20648",
          "groupId": null,
          "value": 2839144.232903,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 2839144.232903,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "littoralAreaOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20646",
          "groupId": null,
          "value": 4996512.944829,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 4996512.944829,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20647",
          "groupId": null,
          "value": 3083172.260853,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 3083172.260853,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20648",
          "groupId": null,
          "value": 8079685.205681,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 4996512.944829,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 3083172.260853,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20646",
          "groupId": null,
          "value": 5692698.261504,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 5692698.261504,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20647",
          "groupId": null,
          "value": 51722691.212749,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 51722691.212749,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20648",
          "groupId": null,
          "value": 57415389.474254,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 5692698.261504,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 51722691.212749,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20646",
          "groupId": null,
          "value": 241217.064929,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 241217.064929,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20648",
          "groupId": null,
          "value": 241217.064929,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 241217.064929,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "mangroveAreaOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20646",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20647",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20648",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20646",
          "groupId": "band-0",
          "value": 172353.275617,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 172353.275617,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20647",
          "groupId": "band-0",
          "value": 387296.61436,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 387296.61436,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20648",
          "groupId": "band-0",
          "value": 559649.889977,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 172353.275617,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 387296.61436,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20646",
          "groupId": "band-0",
          "value": 6822841.776872,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 6822841.776872,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20647",
          "groupId": "band-0",
          "value": 3407522.627435,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 3407522.627435,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20648",
          "groupId": "band-0",
          "value": 10230364.404307,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 6822841.776872,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 3407522.627435,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20646",
          "groupId": "band-0",
          "value": 54603.660268,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 54603.660268,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20647",
          "groupId": "band-0",
          "value": 70062.750174,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 70062.750174,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20648",
          "groupId": "band-0",
          "value": 124666.410442,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 54603.660268,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 70062.750174,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20646",
          "groupId": "band-0",
          "value": 21908050.160108,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 21908050.160108,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20647",
          "groupId": "band-0",
          "value": 18006.141173,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 18006.141173,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20648",
          "groupId": "band-0",
          "value": 21926056.301281,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 21908050.160108,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 18006.141173,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20646",
          "groupId": "band-0",
          "value": 3916689.893269,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 3916689.893269,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20647",
          "groupId": "band-0",
          "value": 8220486.008423,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 8220486.008423,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20648",
          "groupId": "band-0",
          "value": 12137175.901692,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 3916689.893269,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 8220486.008423,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20646",
          "groupId": "band-0",
          "value": 62193415.441869,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 62193415.441869,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20647",
          "groupId": "band-0",
          "value": 74669960.996241,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 74669960.996241,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20648",
          "groupId": "band-0",
          "value": 136863376.438109,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 62193415.441869,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 74669960.996241,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "ous"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "belize_city",
          "sketchId": "20648",
          "groupId": null,
          "value": 74
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "caye_caulker_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 26
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "chunox_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 145
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "copper_bank_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 81
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "corozal_town",
          "sketchId": "20648",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "dangriga_town",
          "sketchId": "20648",
          "groupId": null,
          "value": 121
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Diving",
          "sketchId": "20648",
          "groupId": null,
          "value": 299
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Fisheries & Aquaculture",
          "sketchId": "20648",
          "groupId": null,
          "value": 545
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "gales_point_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 9
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "General Use",
          "sketchId": "20648",
          "groupId": null,
          "value": 39
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "hopkins_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 92
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "independence_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 16
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "ladyville_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 15
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Lines",
          "sketchId": "20648",
          "groupId": null,
          "value": 358
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "mango_creek_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 14
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Marine & Coastal Development",
          "sketchId": "20648",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Marine & Coastal Ecosystems",
          "sketchId": "20648",
          "groupId": null,
          "value": 70
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Maritime Administration",
          "sketchId": "20648",
          "groupId": null,
          "value": 61
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "maya_beach_community",
          "sketchId": "20648",
          "groupId": null,
          "value": 12
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "monkey_river_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Net",
          "sketchId": "20648",
          "groupId": null,
          "value": 62
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "other",
          "sketchId": "20648",
          "groupId": null,
          "value": 51
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "ousPeopleCount_all",
          "sketchId": "20648",
          "groupId": null,
          "value": 899
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "placencia_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 65
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "punta_gorda_town",
          "sketchId": "20648",
          "groupId": null,
          "value": 14
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "riversdale_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "san_pedro_town",
          "sketchId": "20648",
          "groupId": null,
          "value": 10
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "sarteneja_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 22
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "seine_bight_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 13
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "sittee_river_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Spears",
          "sketchId": "20648",
          "groupId": null,
          "value": 262
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "st_george_s_caye",
          "sketchId": "20648",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Tourism",
          "sketchId": "20648",
          "groupId": null,
          "value": 359
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Traps",
          "sketchId": "20648",
          "groupId": null,
          "value": 108
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "unknown_community",
          "sketchId": "20648",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "unknown-gear",
          "sketchId": "20648",
          "groupId": null,
          "value": 544
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "belize_city",
          "sketchId": "20648",
          "groupId": null,
          "value": 21
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "caye_caulker_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 8
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "chunox_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 20
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "copper_bank_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 15
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "corozal_town",
          "sketchId": "20648",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "dangriga_town",
          "sketchId": "20648",
          "groupId": null,
          "value": 21
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Diving",
          "sketchId": "20648",
          "groupId": null,
          "value": 44
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Fisheries & Aquaculture",
          "sketchId": "20648",
          "groupId": null,
          "value": 97
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "gales_point_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "General Use",
          "sketchId": "20648",
          "groupId": null,
          "value": 11
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "hopkins_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 22
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "independence_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 7
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "ladyville_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 7
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Lines",
          "sketchId": "20648",
          "groupId": null,
          "value": 62
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "mango_creek_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 4
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Marine & Coastal Development",
          "sketchId": "20648",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Marine & Coastal Ecosystems",
          "sketchId": "20648",
          "groupId": null,
          "value": 8
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Maritime Administration",
          "sketchId": "20648",
          "groupId": null,
          "value": 7
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "maya_beach_community",
          "sketchId": "20648",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "monkey_river_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Net",
          "sketchId": "20648",
          "groupId": null,
          "value": 5
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "other",
          "sketchId": "20648",
          "groupId": null,
          "value": 14
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "ousRespondentCount_all",
          "sketchId": "20648",
          "groupId": null,
          "value": 150
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "placencia_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 14
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "punta_gorda_town",
          "sketchId": "20648",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "riversdale_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 3
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "san_pedro_town",
          "sketchId": "20648",
          "groupId": null,
          "value": 10
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "sarteneja_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 5
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "seine_bight_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "sittee_river_village",
          "sketchId": "20648",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Spears",
          "sketchId": "20648",
          "groupId": null,
          "value": 31
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "st_george_s_caye",
          "sketchId": "20648",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Tourism",
          "sketchId": "20648",
          "groupId": null,
          "value": 49
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Traps",
          "sketchId": "20648",
          "groupId": null,
          "value": 15
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "unknown_community",
          "sketchId": "20648",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "unknown-gear",
          "sketchId": "20648",
          "groupId": null,
          "value": 83
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "ousDemographicOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "protectionCountOverlap",
          "classId": "Ib",
          "sketchId": null,
          "groupId": "Ib",
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "protectionCountOverlap",
          "classId": "V",
          "sketchId": null,
          "groupId": "V",
          "value": 1
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            }
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            }
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "protection"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "seagrassAreaOverlap",
          "classId": "seagrass",
          "sketchId": "20646",
          "groupId": null,
          "value": 51044319.890262,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassAreaOverlap",
          "classId": "seagrass",
          "sketchId": "20647",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassAreaOverlap",
          "classId": "seagrass",
          "sketchId": "20648",
          "groupId": null,
          "value": 51044319.890262,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20646,
            "bbox": [
              -88.0052,
              16.765121,
              -87.60986,
              17.005533
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-10-25T17:48:19.521793+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {}
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20647,
            "bbox": [
              -87.56553,
              17.485428,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-10-25T17:48:25.183511+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {}
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-10-25T17:48:25.183511+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": null
        }
      }
    },
    "functionName": "seagrassAreaOverlap"
  },
  {
    "sketchName": "test-network",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20646",
          "groupId": "band-0",
          "value": 104657,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20646",
          "groupId": "HIGH_PROTECTION",
          "value": 104657,
          "extra": {
            "sketchName": "high-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20647",
          "groupId": "band-0",
          "value": 113352,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20647",
          "groupId": "MEDIUM_PROTECTION",
          "value": 113352,
          "extra": {
            "sketchName": "medium-protection-zone"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20648",
          "groupId": "band-0",
          "value": 218009,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20648",
          "groupId": "HIGH_PROTECTION",
          "value": 104657,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "20648",
          "groupId": "MEDIUM_PROTECTION",
          "value": 113352,
          "extra": {
            "sketchName": "test-network",
            "isCollection": true
          }
        }
      ],
      "sketch": {
        "id": 20648,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 20647,
            "bbox": [
              -87.656166,
              17.151253,
              -87.22561,
              17.798794
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "medium-protection-zone",
              "2934": "abby",
              "id": "20647",
              "name": "medium-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:22:33.978226+00:00",
              "updatedAt": "2023-12-05T23:16:32.755845+00:00",
              "designation": "V",
              "collectionId": "20648",
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
                  "value": "V",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN V: Protected Landscape or Seascape",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 20646,
            "bbox": [
              -88.18616,
              16.765121,
              -87.60986,
              17.056587
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ib",
              "2932": "high-protection-zone",
              "2934": "abby",
              "id": "20646",
              "name": "high-protection-zone",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-10-10T21:18:57.746626+00:00",
              "updatedAt": "2023-12-05T23:16:13.439867+00:00",
              "designation": "Ib",
              "collectionId": "20648",
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
                  "value": "Ib",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ib: Wilderness Area",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ib: Área silvestre"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "test-network",
          "id": "20648",
          "name": "test-network",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-10-10T21:22:41.550657+00:00",
          "updatedAt": "2023-12-05T23:16:32.755845+00:00",
          "collectionId": null,
          "isCollection": true,
          "sharedInForum": false,
          "sketchClassId": "232",
          "userAttributes": [
            {
              "label": "Comments",
              "value": null,
              "exportId": "comments",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5784,
              "alternateLanguages": {}
            },
            {
              "label": "Author(s)",
              "value": null,
              "exportId": "authors",
              "fieldType": "TextArea",
              "valueLabel": null,
              "formElementId": 5785,
              "alternateLanguages": {}
            }
          ]
        }
      }
    },
    "functionName": "seagrassValueOverlap"
  }
],
        sketchProperties: {
  "3094": "test-network",
  "id": "20648",
  "name": "test-network",
  "postId": null,
  "userId": "531",
  "authors": null,
  "comments": null,
  "userSlug": "Abby",
  "createdAt": "2023-10-10T21:22:41.550657+00:00",
  "updatedAt": "2023-12-05T23:16:32.755845+00:00",
  "collectionId": null,
  "isCollection": true,
  "sharedInForum": false,
  "sketchClassId": "232",
  "userAttributes": [
    {
      "label": "Comments",
      "value": null,
      "exportId": "comments",
      "fieldType": "TextArea",
      "valueLabel": null,
      "formElementId": 5784,
      "alternateLanguages": {}
    },
    {
      "label": "Author(s)",
      "value": null,
      "exportId": "authors",
      "fieldType": "TextArea",
      "valueLabel": null,
      "formElementId": 5785,
      "alternateLanguages": {}
    }
  ],
  "childProperties": [
    {
      "2931": "V",
      "2932": "medium-protection-zone",
      "2934": "abby",
      "id": "20647",
      "name": "medium-protection-zone",
      "postId": null,
      "userId": "531",
      "authors": "abby",
      "comments": null,
      "userSlug": "Abby",
      "createdAt": "2023-10-10T21:22:33.978226+00:00",
      "updatedAt": "2023-12-05T23:16:32.755845+00:00",
      "designation": "V",
      "collectionId": "20648",
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
          "value": "V",
          "exportId": "designation",
          "fieldType": "ComboBox",
          "valueLabel": "IUCN V: Protected Landscape or Seascape",
          "formElementId": 2931,
          "alternateLanguages": {
            "es": {
              "label": "Designación",
              "valueLabel": "UICN V: Paisaje o Paisaje Marino Protegido"
            }
          }
        }
      ]
    },
    {
      "2931": "Ib",
      "2932": "high-protection-zone",
      "2934": "abby",
      "id": "20646",
      "name": "high-protection-zone",
      "postId": null,
      "userId": "531",
      "authors": "abby",
      "comments": null,
      "userSlug": "Abby",
      "createdAt": "2023-10-10T21:18:57.746626+00:00",
      "updatedAt": "2023-12-05T23:16:13.439867+00:00",
      "designation": "Ib",
      "collectionId": "20648",
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
          "value": "Ib",
          "exportId": "designation",
          "fieldType": "ComboBox",
          "valueLabel": "IUCN Ib: Wilderness Area",
          "formElementId": 2931,
          "alternateLanguages": {
            "es": {
              "label": "Designación",
              "valueLabel": "UICN Ib: Área silvestre"
            }
          }
        }
      ]
    }
  ]
},
        projectUrl: "https://example.com/project",
        geometryUri: 'https://localhost/3372ca08-1891-4752-99cc-dbe183df7df2',
        visibleLayers: [],
        language: "en"
      });

      export const test_network = () => (
        <Translator>
          <SizeReport />
        </Translator>
      );

      export default {
        component: SizeReport,
        title: 'Project/ReportClients/SizeReport',
        name: 'test-network',
        decorators: [createReportDecorator(contextValue)],
      };
    