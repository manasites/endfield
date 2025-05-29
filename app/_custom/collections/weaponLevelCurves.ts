import type { CollectionConfig } from "payload/types";

import { isStaff } from "../../db/collections/users/users.access";

export const WeaponLevelCurves: CollectionConfig = {
   slug: "weapon-level-curves",
   labels: {
      singular: "Weapon Level Curve",
      plural: "Weapon Level Curves",
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
         name: "levels",
         type: "array",
         fields: [
            {
               name: "level",
               type: "number",
            },
            {
               name: "baseAttack",
               type: "number",
            },
            {
               name: "experienceRequired",
               type: "number",
            },
            {
               name: "creditCost",
               type: "number",
            },
         ],
      },
      {
         name: "checksum",
         type: "text",
      },
   ],
}
