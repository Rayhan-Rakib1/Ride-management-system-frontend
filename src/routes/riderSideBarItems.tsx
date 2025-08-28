
import RideHistory from "@/pages/Rider/RideHistory";
import type { ISideBarItems } from "@/types";

export const riderSidebarItems: ISideBarItems[] = [
  {
    title: "Rider Dashboard",
    items: [
      {
        title: "User management",
        url: "/rider/ride-history",
        component: RideHistory,
      },
    
    ],
  },
];
