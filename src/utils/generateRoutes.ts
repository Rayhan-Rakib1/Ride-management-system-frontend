import type { ISideBarItems } from "@/types";

export const generateRoutes = (sidebarItems: ISideBarItems[]) => {
  return sidebarItems.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
      component: route.component,
    }))
  );
};
