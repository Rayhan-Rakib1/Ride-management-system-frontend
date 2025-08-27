import AllDriver from "@/pages/Admin/AllDriver";
import AllRider from "@/pages/Admin/AllRider";
import AllUser from "@/pages/Admin/AllUser";
import type { ISideBarItems } from "@/types";

export const riderSidebarItems: ISideBarItems[] = [
  {
    title: "Rider Dashboard",
    items: [
      {
        title: "User management",
        url: "/rider/all-users",
        component: AllUser,
      },
      {
        title: "Ride management",
        url: "/rider/all-riders",
        component: AllRider,
      },
      {
        title: "Driver management",
        url: "/rider/all-drivers",
        component: AllDriver,
      },
    ],
  },
];
