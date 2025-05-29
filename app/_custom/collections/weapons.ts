import type { CollectionConfig } from "payload/types";

import { isStaff } from "../../db/collections/users/users.access";

export const Weapons: CollectionConfig = {
   slug: "weapons",
   labels: {
      singular: "Weapon",
      plural: "Weapons",
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
         name: "flavorText",
         type: "textarea",
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
            {
               name: "gachaSplash",
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
         name: "weaponType",
         type: "relationship",
         relationTo: "weapon-types",
      },
      {
         name: "levelCurve",
         type: "relationship",
         relationTo: "weapon-level-curves",
      },
      {
         name: "tuningCost",
         type: "relationship",
         relationTo: "weapon-tuning-costs",
      },
      {
         name: "potentials",
         type: "relationship",
         relationTo: "weapon-potentials",
      },
      {
         name: "skills",
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
                     name: "name",
                     type: "text",
                  },
                  {
                     name: "description",
                     type: "textarea",
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
         name: "checksum",
         type: "text",
      },
   ],
}
