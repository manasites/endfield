import type { CollectionConfig } from "payload/types";

import { isStaff } from "../../db/collections/users/users.access";

export const Rarities: CollectionConfig = {
   slug: "rarities",
   labels: {
      singular: "Rarity",
      plural: "Rarities",
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
         name: "color",
         type: "text",
      },
      {
         name: "checksum",
         type: "text",
      },
   ],
}
