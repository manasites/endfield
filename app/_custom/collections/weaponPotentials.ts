import type { CollectionConfig } from "payload/types";

import { isStaff } from "../../db/collections/users/users.access";

export const WeaponPotentials: CollectionConfig = {
   slug: "weapon-potentials",
   labels: {
      singular: "Weapon Potential",
      plural: "Weapon Potentials",
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
         name: "potentials",
         type: "array",
         fields: [
            {
               name: "potential",
               type: "number",
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
