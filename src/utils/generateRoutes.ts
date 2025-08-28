import type { ISideBarItems } from "@/types";
import React from "react";

export const generateRoutes = (sidebarItems: ISideBarItems[]) => {
  return sidebarItems.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
     element: React.createElement(route.component),
    }))
  );
};
