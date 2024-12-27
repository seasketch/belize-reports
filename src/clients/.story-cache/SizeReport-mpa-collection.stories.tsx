
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
    "sketchName": "mpa-collection",
    "results": {
      "min": -4366,
      "max": 0,
      "mean": -1605.764970625782,
      "units": "meters"
    },
    "functionName": "bathymetry"
  },
  {
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23746",
          "groupId": null,
          "value": 5579418542.999466,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 1790487974.7575574,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 3788930568.2419086,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23747",
          "groupId": null,
          "value": 598130837.4810549,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 598130837.4810549,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23748",
          "groupId": null,
          "value": 2151089509.16422,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 2151089509.16422,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23749",
          "groupId": null,
          "value": 1192357137.2765024,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 1192357137.2765024,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23750",
          "groupId": null,
          "value": 1637841059.0776887,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "boundaryAreaOverlap",
          "classId": "belize_ocean_space",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 1637841059.0776887,
          "extra": {
            "sketchName": "souther"
          }
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            }
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            }
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            }
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23746",
          "groupId": "band-0",
          "value": 1095729,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 1095729,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23747",
          "groupId": "band-0",
          "value": 157337,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 157337,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23748",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23749",
          "groupId": "band-0",
          "value": 938392,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 938392,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23750",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "coralValueOverlap",
          "classId": "coral",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23746",
          "groupId": null,
          "value": 3789017692.852902,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 3789017692.852902,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23747",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23748",
          "groupId": null,
          "value": 2151075421.471882,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 2151075421.471882,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23749",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23750",
          "groupId": null,
          "value": 1637942271.38102,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "abyss",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 1637942271.38102,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23746",
          "groupId": null,
          "value": 706070998.651179,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 86838668.097495,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 619232330.553684,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23747",
          "groupId": null,
          "value": 32907325.438696,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 32907325.438696,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23748",
          "groupId": null,
          "value": 619232330.553684,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 619232330.553684,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23749",
          "groupId": null,
          "value": 53931342.658798,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 53931342.658798,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "basins",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23746",
          "groupId": null,
          "value": 202131713.965145,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 117976179.509495,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 84155534.45565,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23747",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23748",
          "groupId": null,
          "value": 20558358.437871,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 20558358.437871,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23749",
          "groupId": null,
          "value": 117976179.509495,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 117976179.509495,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23750",
          "groupId": null,
          "value": 63597176.017779,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "canyons",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 63597176.017779,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23746",
          "groupId": null,
          "value": 666127739.060683,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 169466468.964226,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 496661270.096458,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23747",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23748",
          "groupId": null,
          "value": 373778392.816823,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 373778392.816823,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23749",
          "groupId": null,
          "value": 169466468.964226,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 169466468.964226,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23750",
          "groupId": null,
          "value": 122882877.279634,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "escarpments",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 122882877.279634,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23746",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23747",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23749",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "plateaus",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23746",
          "groupId": null,
          "value": 3788931972.674236,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 3788931972.674236,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23747",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23748",
          "groupId": null,
          "value": 2151091069.799825,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 2151091069.799825,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23749",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23750",
          "groupId": null,
          "value": 1637840902.874411,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "rises",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 1637840902.874411,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23746",
          "groupId": null,
          "value": 1136720244.423545,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 1136720244.423545,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23747",
          "groupId": null,
          "value": 552355857.449901,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 552355857.449901,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23749",
          "groupId": null,
          "value": 584364386.973643,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 584364386.973643,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23746",
          "groupId": null,
          "value": 66696859.823367,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 66696859.823367,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23747",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23749",
          "groupId": null,
          "value": 66696859.823367,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 66696859.823367,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "shelf_valleys",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23746",
          "groupId": null,
          "value": 76034607.518431,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 76034607.518431,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23747",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23748",
          "groupId": null,
          "value": 76034607.518431,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 76034607.518431,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23749",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "sills",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23746",
          "groupId": null,
          "value": 232994841.204581,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 232994841.204581,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23747",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23749",
          "groupId": null,
          "value": 232994841.204581,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 232994841.204581,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "geomorphAreaOverlap",
          "classId": "slope",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23746",
          "groupId": null,
          "value": 220891423.403815,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 220556416.951555,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 335006.45226,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23747",
          "groupId": null,
          "value": 220556416.951555,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 220556416.951555,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23749",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23750",
          "groupId": null,
          "value": 335006.45226,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "ag_runoff",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 335006.45226,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23746",
          "groupId": null,
          "value": 3394340.439741,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 3394340.439741,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23747",
          "groupId": null,
          "value": 3344656.733886,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 3344656.733886,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23749",
          "groupId": null,
          "value": 49683.705855,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 49683.705855,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "coastal_dev",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23746",
          "groupId": null,
          "value": 169240649.821002,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 169240649.821002,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23747",
          "groupId": null,
          "value": 129177442.951297,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 129177442.951297,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23749",
          "groupId": null,
          "value": 40063206.869705,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 40063206.869705,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_dredging",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23746",
          "groupId": null,
          "value": 690953857.242088,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 585198310.04041,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 105755547.201678,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23747",
          "groupId": null,
          "value": 412343835.526886,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 412343835.526886,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23749",
          "groupId": null,
          "value": 172854474.513523,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 172854474.513523,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23750",
          "groupId": null,
          "value": 105755547.201678,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "humanStressorsAreaOverlap",
          "classId": "marine_trans",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 105755547.201678,
          "extra": {
            "sketchName": "souther"
          }
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23746",
          "groupId": null,
          "value": 1007464.254776,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 1007464.254776,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23747",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23749",
          "groupId": null,
          "value": 1007464.254776,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 1007464.254776,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "littoralAreaOverlap",
          "classId": "Littoral",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23746",
          "groupId": null,
          "value": 85505628.584487,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 85505628.584487,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23747",
          "groupId": null,
          "value": 20822649.069985,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 20822649.069985,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23749",
          "groupId": null,
          "value": 64682979.514502,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 64682979.514502,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Mangrove",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23746",
          "groupId": null,
          "value": 169673870.917378,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 169673870.917378,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23747",
          "groupId": null,
          "value": 40016773.568706,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 40016773.568706,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23749",
          "groupId": null,
          "value": 129657097.348672,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 129657097.348672,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "mangrove_priority",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23746",
          "groupId": null,
          "value": 2194799.141659,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 2194799.141659,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23747",
          "groupId": null,
          "value": 1895739.733827,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 1895739.733827,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23748",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23749",
          "groupId": null,
          "value": 299059.407832,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 299059.407832,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23750",
          "groupId": null,
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "mangroveAreaOverlap",
          "classId": "Non-mangrove",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23746",
          "groupId": "band-0",
          "value": 16810646.307129,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 16810646.307129,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23747",
          "groupId": "band-0",
          "value": 16810646.307129,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 16810646.307129,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23748",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23749",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23750",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "energy",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23746",
          "groupId": "band-0",
          "value": 4768957.220449,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 4768701.174016,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 256.046433,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23747",
          "groupId": "band-0",
          "value": 4513083.681467,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 4513083.681467,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23748",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23749",
          "groupId": "band-0",
          "value": 255617.492549,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 255617.492549,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23750",
          "groupId": "band-0",
          "value": 256.046433,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "fisheries_aquaculture",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 256.046433,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23746",
          "groupId": "band-0",
          "value": 5943038922.15043,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 5942040486.132605,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 998436.054693,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23747",
          "groupId": "band-0",
          "value": 5940486059.984764,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 5940486059.984764,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23748",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23749",
          "groupId": "band-0",
          "value": 1554426.143897,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 1554426.143897,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23750",
          "groupId": "band-0",
          "value": 998436.054693,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "general_use",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 998436.054693,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23746",
          "groupId": "band-0",
          "value": 85605.509452,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 57454.999349,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 28150.510103,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23747",
          "groupId": "band-0",
          "value": 5996.461027,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 5996.461027,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23748",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23749",
          "groupId": "band-0",
          "value": 51458.538322,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 51458.538322,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23750",
          "groupId": "band-0",
          "value": 28150.510103,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_development",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 28150.510103,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23746",
          "groupId": "band-0",
          "value": 1741732598.839378,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 1734657650.721452,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 7074948.133193,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23747",
          "groupId": "band-0",
          "value": 1730927017.769708,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 1730927017.769708,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23748",
          "groupId": "band-0",
          "value": 25530.346666,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 25530.346666,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23749",
          "groupId": "band-0",
          "value": 3730632.952744,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 3730632.952744,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23750",
          "groupId": "band-0",
          "value": 7049417.786527,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "marine_coastal_ecosystems",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 7049417.786527,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23746",
          "groupId": "band-0",
          "value": 646259927.237186,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 646259927.237186,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23747",
          "groupId": "band-0",
          "value": 636407283.527849,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 636407283.527849,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23748",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23749",
          "groupId": "band-0",
          "value": 9852643.709337,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 9852643.709337,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23750",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "maritime_administration",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23746",
          "groupId": "band-0",
          "value": 265914116.736497,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 259490893.46829,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 6423223.268208,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23747",
          "groupId": "band-0",
          "value": 214722376.933146,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 214722376.933146,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23748",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23749",
          "groupId": "band-0",
          "value": 44768516.535143,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 44768516.535143,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23750",
          "groupId": "band-0",
          "value": 6423223.268208,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "ous",
          "classId": "tourism",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 6423223.268208,
          "extra": {
            "sketchName": "souther"
          }
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "belize_city",
          "sketchId": "23746",
          "groupId": null,
          "value": 114
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "cattle_landing_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "caye_caulker_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 161
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "chunox_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 124
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "copper_bank_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 79
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "corozal_town",
          "sketchId": "23746",
          "groupId": null,
          "value": 11
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "dangriga_town",
          "sketchId": "23746",
          "groupId": null,
          "value": 62
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Diving",
          "sketchId": "23746",
          "groupId": null,
          "value": 305
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Energy",
          "sketchId": "23746",
          "groupId": null,
          "value": 5
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Fisheries & Aquaculture",
          "sketchId": "23746",
          "groupId": null,
          "value": 578
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "forest_home_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "gales_point_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "General Use",
          "sketchId": "23746",
          "groupId": null,
          "value": 130
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "hopkins_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 21
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "independence_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 21
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "ladyville_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 19
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Lines",
          "sketchId": "23746",
          "groupId": null,
          "value": 305
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "mango_creek_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Marine & Coastal Development",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Marine & Coastal Ecosystems",
          "sketchId": "23746",
          "groupId": null,
          "value": 132
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Maritime Administration",
          "sketchId": "23746",
          "groupId": null,
          "value": 161
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "monkey_river_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 32
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Net",
          "sketchId": "23746",
          "groupId": null,
          "value": 109
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "other",
          "sketchId": "23746",
          "groupId": null,
          "value": 60
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "ousPeopleCount_all",
          "sketchId": "23746",
          "groupId": null,
          "value": 1165
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "placencia_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 15
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "punta_gorda_town",
          "sketchId": "23746",
          "groupId": null,
          "value": 25
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "punta_negra_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 4
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "san_pedro_town",
          "sketchId": "23746",
          "groupId": null,
          "value": 63
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "sarteneja_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 63
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "sittee_river_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Spears",
          "sketchId": "23746",
          "groupId": null,
          "value": 305
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "st_george_s_caye",
          "sketchId": "23746",
          "groupId": null,
          "value": 21
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Tourism",
          "sketchId": "23746",
          "groupId": null,
          "value": 550
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "Traps",
          "sketchId": "23746",
          "groupId": null,
          "value": 167
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "unknown_community",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousPeopleCount",
          "classId": "unknown-gear",
          "sketchId": "23746",
          "groupId": null,
          "value": 919
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "belize_city",
          "sketchId": "23746",
          "groupId": null,
          "value": 36
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "cattle_landing_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "caye_caulker_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 68
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "chunox_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 18
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "copper_bank_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 15
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "corozal_town",
          "sketchId": "23746",
          "groupId": null,
          "value": 4
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "dangriga_town",
          "sketchId": "23746",
          "groupId": null,
          "value": 4
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Diving",
          "sketchId": "23746",
          "groupId": null,
          "value": 40
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Energy",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Fisheries & Aquaculture",
          "sketchId": "23746",
          "groupId": null,
          "value": 103
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "forest_home_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "gales_point_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "General Use",
          "sketchId": "23746",
          "groupId": null,
          "value": 48
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "hopkins_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 4
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "independence_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "ladyville_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 10
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Lines",
          "sketchId": "23746",
          "groupId": null,
          "value": 48
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "mango_creek_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Marine & Coastal Development",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Marine & Coastal Ecosystems",
          "sketchId": "23746",
          "groupId": null,
          "value": 19
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Maritime Administration",
          "sketchId": "23746",
          "groupId": null,
          "value": 28
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "monkey_river_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Net",
          "sketchId": "23746",
          "groupId": null,
          "value": 5
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "other",
          "sketchId": "23746",
          "groupId": null,
          "value": 21
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "ousRespondentCount_all",
          "sketchId": "23746",
          "groupId": null,
          "value": 231
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "placencia_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 5
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "punta_gorda_town",
          "sketchId": "23746",
          "groupId": null,
          "value": 5
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "punta_negra_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 2
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "san_pedro_town",
          "sketchId": "23746",
          "groupId": null,
          "value": 63
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "sarteneja_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 10
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "sittee_river_village",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Spears",
          "sketchId": "23746",
          "groupId": null,
          "value": 39
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "st_george_s_caye",
          "sketchId": "23746",
          "groupId": null,
          "value": 6
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Tourism",
          "sketchId": "23746",
          "groupId": null,
          "value": 84
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "Traps",
          "sketchId": "23746",
          "groupId": null,
          "value": 24
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "unknown_community",
          "sketchId": "23746",
          "groupId": null,
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "ousRespondentCount",
          "classId": "unknown-gear",
          "sketchId": "23746",
          "groupId": null,
          "value": 178
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "protectionCountOverlap",
          "classId": "Ia",
          "sketchId": null,
          "groupId": "Ia",
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "protectionCountOverlap",
          "classId": "III",
          "sketchId": null,
          "groupId": "III",
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "protectionCountOverlap",
          "classId": "V",
          "sketchId": null,
          "groupId": "V",
          "value": 1
        },
        {
          "geographyId": null,
          "metricId": "protectionCountOverlap",
          "classId": "VI",
          "sketchId": null,
          "groupId": "VI",
          "value": 1
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            }
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            }
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            }
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
    "sketchName": "mpa-collection",
    "results": {
      "metrics": [
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23746",
          "groupId": "band-0",
          "value": 500272,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23746",
          "groupId": "HIGH_PROTECTION",
          "value": 500272,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23746",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "mpa-collection",
            "isCollection": true
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23747",
          "groupId": "band-0",
          "value": 382476,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23747",
          "groupId": "HIGH_PROTECTION",
          "value": 382476,
          "extra": {
            "sketchName": "coastal"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23748",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23748",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "offshore"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23749",
          "groupId": "band-0",
          "value": 117796,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23749",
          "groupId": "HIGH_PROTECTION",
          "value": 117796,
          "extra": {
            "sketchName": "turneffe"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23750",
          "groupId": "band-0",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        },
        {
          "geographyId": null,
          "metricId": "seagrassValueOverlap",
          "classId": "seagrass",
          "sketchId": "23750",
          "groupId": "MEDIUM_PROTECTION",
          "value": 0,
          "extra": {
            "sketchName": "souther"
          }
        }
      ],
      "sketch": {
        "id": 23746,
        "type": "FeatureCollection",
        "features": [
          {
            "id": 23750,
            "bbox": [
              -87.97787,
              16.219738,
              -87.45354,
              16.68526
            ],
            "type": "Feature",
            "properties": {
              "2931": "VI",
              "2932": "souther",
              "2934": "abby",
              "id": "23750",
              "name": "souther",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:03:14.823323+00:00",
              "updatedAt": "2023-12-13T23:03:17.679221+00:00",
              "designation": "VI",
              "collectionId": "23746",
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
                  "value": "VI",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23749,
            "bbox": [
              -88.02067,
              17.151064,
              -87.614044,
              17.6208
            ],
            "type": "Feature",
            "properties": {
              "2931": "III",
              "2932": "turneffe",
              "2934": "abby",
              "id": "23749",
              "name": "turneffe",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:52.63869+00:00",
              "updatedAt": "2023-12-14T00:46:50.891222+00:00",
              "designation": "III",
              "collectionId": "23746",
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
                  "value": "III",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN III: Natural Monument or Feature",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN III: Monumento o Característica Natural"
                    }
                  }
                }
              ]
            },
            "geometry": null
          },
          {
            "id": 23748,
            "bbox": [
              -86.79895,
              17.228289,
              -86.205666,
              17.823345
            ],
            "type": "Feature",
            "properties": {
              "2931": "V",
              "2932": "offshore",
              "2934": "abby",
              "id": "23748",
              "name": "offshore",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:34.911638+00:00",
              "updatedAt": "2023-12-13T23:02:37.230936+00:00",
              "designation": "V",
              "collectionId": "23746",
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
            "id": 23747,
            "bbox": [
              -88.20793,
              17.513683,
              -87.95111,
              17.972303
            ],
            "type": "Feature",
            "properties": {
              "2931": "Ia",
              "2932": "coastal",
              "2934": "abby",
              "id": "23747",
              "name": "coastal",
              "postId": null,
              "userId": "531",
              "authors": "abby",
              "comments": null,
              "userSlug": "Abby",
              "createdAt": "2023-12-13T23:02:20.132533+00:00",
              "updatedAt": "2023-12-13T23:02:23.405725+00:00",
              "designation": "Ia",
              "collectionId": "23746",
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
                  "value": "Ia",
                  "exportId": "designation",
                  "fieldType": "ComboBox",
                  "valueLabel": "IUCN Ia: Strict Nature Reserve",
                  "formElementId": 2931,
                  "alternateLanguages": {
                    "es": {
                      "label": "Designación",
                      "valueLabel": "UICN Ia: Reserva Natural Estricta"
                    }
                  }
                }
              ]
            },
            "geometry": null
          }
        ],
        "properties": {
          "3094": "mpa-collection",
          "id": "23746",
          "name": "mpa-collection",
          "postId": null,
          "userId": "531",
          "authors": null,
          "comments": null,
          "userSlug": "Abby",
          "createdAt": "2023-12-13T23:02:00.449408+00:00",
          "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
  "3094": "mpa-collection",
  "id": "23746",
  "name": "mpa-collection",
  "postId": null,
  "userId": "531",
  "authors": null,
  "comments": null,
  "userSlug": "Abby",
  "createdAt": "2023-12-13T23:02:00.449408+00:00",
  "updatedAt": "2024-02-21T16:41:02.895404+00:00",
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
      "2931": "VI",
      "2932": "souther",
      "2934": "abby",
      "id": "23750",
      "name": "souther",
      "postId": null,
      "userId": "531",
      "authors": "abby",
      "comments": null,
      "userSlug": "Abby",
      "createdAt": "2023-12-13T23:03:14.823323+00:00",
      "updatedAt": "2023-12-13T23:03:17.679221+00:00",
      "designation": "VI",
      "collectionId": "23746",
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
          "value": "VI",
          "exportId": "designation",
          "fieldType": "ComboBox",
          "valueLabel": "IUCN VI: Protected Area with Sustainable Use",
          "formElementId": 2931,
          "alternateLanguages": {
            "es": {
              "label": "Designación",
              "valueLabel": "UICN VI: Área Protegida con Uso Sostenible"
            }
          }
        }
      ]
    },
    {
      "2931": "III",
      "2932": "turneffe",
      "2934": "abby",
      "id": "23749",
      "name": "turneffe",
      "postId": null,
      "userId": "531",
      "authors": "abby",
      "comments": null,
      "userSlug": "Abby",
      "createdAt": "2023-12-13T23:02:52.63869+00:00",
      "updatedAt": "2023-12-14T00:46:50.891222+00:00",
      "designation": "III",
      "collectionId": "23746",
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
          "value": "III",
          "exportId": "designation",
          "fieldType": "ComboBox",
          "valueLabel": "IUCN III: Natural Monument or Feature",
          "formElementId": 2931,
          "alternateLanguages": {
            "es": {
              "label": "Designación",
              "valueLabel": "UICN III: Monumento o Característica Natural"
            }
          }
        }
      ]
    },
    {
      "2931": "V",
      "2932": "offshore",
      "2934": "abby",
      "id": "23748",
      "name": "offshore",
      "postId": null,
      "userId": "531",
      "authors": "abby",
      "comments": null,
      "userSlug": "Abby",
      "createdAt": "2023-12-13T23:02:34.911638+00:00",
      "updatedAt": "2023-12-13T23:02:37.230936+00:00",
      "designation": "V",
      "collectionId": "23746",
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
      "2931": "Ia",
      "2932": "coastal",
      "2934": "abby",
      "id": "23747",
      "name": "coastal",
      "postId": null,
      "userId": "531",
      "authors": "abby",
      "comments": null,
      "userSlug": "Abby",
      "createdAt": "2023-12-13T23:02:20.132533+00:00",
      "updatedAt": "2023-12-13T23:02:23.405725+00:00",
      "designation": "Ia",
      "collectionId": "23746",
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
          "value": "Ia",
          "exportId": "designation",
          "fieldType": "ComboBox",
          "valueLabel": "IUCN Ia: Strict Nature Reserve",
          "formElementId": 2931,
          "alternateLanguages": {
            "es": {
              "label": "Designación",
              "valueLabel": "UICN Ia: Reserva Natural Estricta"
            }
          }
        }
      ]
    }
  ]
},
        projectUrl: "https://example.com/project",
        geometryUri: 'https://localhost/6568c28e-1aac-4c63-9b9d-974b2354efa2',
        visibleLayers: [],
        language: "en"
      });

      export const mpa_collection = () => (
        <Translator>
          <SizeReport />
        </Translator>
      );

      export default {
        component: SizeReport,
        title: 'Project/ReportClients/SizeReport',
        name: 'mpa-collection',
        decorators: [createReportDecorator(contextValue)],
      };
    