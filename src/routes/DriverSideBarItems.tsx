import AllDriver from "@/pages/Admin/AllDriver";
import AllRider from "@/pages/Admin/AllRider";
import AllUser from "@/pages/Admin/AllUser";
import type { ISideBarItems } from "@/types";

export const driverSidebarItems: ISideBarItems[] = [
  {
    title: "Driver Dashboard",
    items: [
      {
        title: "User management",
        url: "/driver/all-users",
        component: AllUser,
      },
      {
        title: "Ride management",
        url: "/driver/all-riders",
        component: AllRider,
      },
      {
        title: "Driver management",
        url: "/driver/all-drivers",
        component: AllDriver,
      },
    ],
  },
];
