import type { CollectionConfig } from "payload/types";

import { isStaff } from "../../db/collections/users/users.access";

export const WeaponTuningCosts: CollectionConfig = {
   slug: "weapon-tuning-costs",
   labels: {
      singular: "Weapon Tuning Cost",
      plural: "Weapon Tuning Costs",
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
         name: "tuningStages",
         type: "array",
         fields: [
            {
               name: "stage",
               type: "number",
            },
            {
               name: "requiredLevel",
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
            {
               name: "skillLimits",
               type: "array",
               fields: [
                  {
                     name: "skillIndex",
                     type: "number",
                  },
                  {
                     name: "lowerLimit",
                     type: "number",
                  },
                  {
                     name: "upperLimit",
                     type: "number",
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
