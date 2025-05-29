import type { CollectionConfig } from "payload/types";

import { isStaff } from "../../db/collections/users/users.access";

export const Operators: CollectionConfig = {
   slug: "operators",
   labels: {
      singular: "Operator",
      plural: "Operators",
   },
   access: {
      create: isStaff,
      read: () => true,
      update: isStaff,
      delete: isStaff,
   },
   fields: [
      {
         name: "id",
         type: "text",
      },
      {
         name: "slug",
         type: "text",
      },
      {
         name: "name",
         type: "text",
      },
      {
         name: "assets",
         type: "group",
         fields: [
            {
               name: "icon",
               type: "upload",
               relationTo: "images",
            },
         ],
      },
      {
         name: "rarity",
         type: "relationship",
         relationTo: "rarities",
      },
      {
         name: "class",
         type: "relationship",
         relationTo: "classes",
      },
      {
         name: "element",
         type: "relationship",
         relationTo: "elements",
      },
      {
         name: "weaponType",
         type: "relationship",
         relationTo: "weapon-types",
      },
      {
         name: "attributes",
         type: "array",
         fields: [
            {
               name: "promotion",
               type: "number",
            },
            {
               name: "levels",
               type: "array",
               fields: [
                  {
                     name: "level",
                     type: "number",
                  },
                  {
                     name: "attributes",
                     type: "array",
                     fields: [
                        {
                           name: "attribute",
                           type: "relationship",
                           relationTo: "attributes",
                        },
                        {
                           name: "value",
                           type: "number",
                        },
                     ],
                  },
               ],
            },
         ],
      },
      {
         name: "mainAttribute",
         type: "relationship",
         relationTo: "attributes",
      },
      {
         name: "secondaryAttribute",
         type: "relationship",
         relationTo: "attributes",
      },
      {
         name: "promotions",
         type: "array",
         fields: [
            {
               name: "promotion",
               type: "number",
            },
            {
               name: "type",
               type: "select",
               options: [
                  {
                     label: "Promotion",
                     value: "promotion",
                  },
                  {
                     label: "Outfitting",
                     value: "outfitting",
                  },
               ],
            },
            {
               name: "requiredMaterials",
               type: "array",
               fields: [
                  {
                     name: "material",
                     type: "relationship",
                     relationTo: "items",
                  },
                  {
                     name: "amount",
                     type: "number",
                  },
               ],
            },
         ],
      },
      {
         name: "potentials",
         type: "array",
         fields: [
            {
               name: "potential",
               type: "number",
            },
            {
               name: "name",
               type: "text",
            },
            {
               name: "description",
               type: "textarea",
            },
         ],
      },
      {
         name: "attributeTalents",
         type: "array",
         fields: [
            {
               name: "name",
               type: "text",
            },
            {
               name: "description",
               type: "textarea",
            },
            {
               name: "requiredPromotion",
               type: "number",
            },
            {
               name: "requiredMaterials",
               type: "array",
               fields: [
                  {
                     name: "material",
                     type: "relationship",
                     relationTo: "items",
                  },
                  {
                     name: "amount",
                     type: "number",
                  },
               ],
            },
            {
               name: "attribute",
               type: "relationship",
               relationTo: "attributes",
            },
            {
               name: "value",
               type: "number",
            },
         ],
      },
      {
         name: "passiveTalents",
         type: "array",
         fields: [
            {
               name: "levels",
               type: "array",
               fields: [
                  {
                     name: "level",
                     type: "number",
                  },
                  {
                     name: "requiredPromotion",
                     type: "number",
                  },
                  {
                     name: "name",
                     type: "text",
                  },
                  {
                     name: "description",
                     type: "textarea",
                  },
                  {
                     name: "icon",
                     type: "upload",
                     relationTo: "images",
                  },
                  {
                     name: "requiredMaterials",
                     type: "array",
                     fields: [
                        {
                           name: "material",
                           type: "relationship",
                           relationTo: "items",
                        },
                        {
                           name: "amount",
                           type: "number",
                        },
                     ],
                  },
               ],
            },
         ],
      },
      {
         name: "nexusTalents",
         type: "array",
         fields: [
            {
               name: "levels",
               type: "array",
               fields: [
                  {
                     name: "level",
                     type: "number",
                  },
                  {
                     name: "requiredPromotion",
                     type: "number",
                  },
                  {
                     name: "skill",
                     type: "relationship",
                     relationTo: "nexus-room-skills",
                  },
                  {
                     name: "requiredMaterials",
                     type: "array",
                     fields: [
                        {
                           name: "material",
                           type: "relationship",
                           relationTo: "items",
                        },
                        {
                           name: "amount",
                           type: "number",
                        },
                     ],
                  },
               ],
            },
         ],
      },
      {
         name: "skills",
         type: "array",
         fields: [
            {
               name: "name",
               type: "text",
            },
            {
               name: "description",
               type: "textarea",
            },
            {
               name: "icon",
               type: "upload",
               relationTo: "images",
            },
            {
               name: "parameters",
               type: "array",
               fields: [
                  {
                     name: "levels",
                     type: "array",
                     fields: [
                        {
                           name: "modifiers",
                           type: "array",
                           fields: [
                              {
                                 name: "name",
                                 type: "text",
                              },
                              {
                                 name: "value",
                                 type: "text",
                              },
                           ],
                        },
                        {
                           name: "values",
                           type: "array",
                           fields: [
                              {
                                 name: "key",
                                 type: "text",
                              },
                              {
                                 name: "value",
                                 type: "number",
                              },
                              {
                                 name: "valueString",
                                 type: "text",
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
            {
               name: "upgradeCosts",
               type: "array",
               fields: [
                  {
                     name: "level",
                     type: "number",
                  },
                  {
                     name: "creditCost",
                     type: "number",
                  },
                  {
                     name: "requiredMaterials",
                     type: "array",
                     fields: [
                        {
                           name: "material",
                           type: "relationship",
                           relationTo: "items",
                        },
                        {
                           name: "amount",
                           type: "number",
                        },
                     ],
                  },
               ],
            },
         ],
      },
      {
         name: "profile",
         type: "group",
         fields: [
            {
               name: "faction",
               type: "relationship",
               relationTo: "factions",
            },
            {
               name: "race",
               type: "relationship",
               relationTo: "operator-tags",
            },
            {
               name: "expertises",
               type: "array",
               fields: [
                  {
                     name: "tag",
                     type: "relationship",
                     relationTo: "operator-tags",
                  },
                  {
                     name: "text",
                     type: "text",
                  },
               ],
            },
            {
               name: "likes",
               type: "array",
               fields: [
                  {
                     name: "tag",
                     type: "relationship",
                     relationTo: "operator-tags",
                  },
                  {
                     name: "text",
                     type: "text",
                  },
               ],
            },
            {
               name: "records",
               type: "array",
               fields: [
                  {
                     name: "title",
                     type: "text",
                  },
                  {
                     name: "text",
                     type: "textarea",
                  },
               ],
            },
            {
               name: "voiceLines",
               type: "array",
               fields: [
                  {
                     name: "title",
                     type: "text",
                  },
                  {
                     name: "text",
                     type: "textarea",
                  },
                  {
                     name: "chineseAudio",
                     type: "upload",
                     relationTo: "images",
                  },
                  {
                     name: "japaneseAudio",
                     type: "upload",
                     relationTo: "images",
                  },
                  {
                     name: "englishAudio",
                     type: "upload",
                     relationTo: "images",
                  },
                  {
                     name: "koreanAudio",
                     type: "upload",
                     relationTo: "images",
                  },
               ],
            },
         ],
      },
      {
         name: "checksum",
         type: "text",
      },
   ],
}
