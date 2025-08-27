import AllDriver from "@/pages/Admin/AllDriver";
import AllRider from "@/pages/Admin/AllRider";
import AllUser from "@/pages/Admin/AllUser";
import type { ISideBarItems } from "@/types";

export const adminSidebarItems: ISideBarItems[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "User management",
        url: "/admin/all-users",
        component: AllUser,
      },
      {
        title: "Ride management",
        url: "/admin/all-riders",
        component: AllRider,
      },
      {
        title: "Driver management",
        url: "/admin/all-drivers",
        component: AllDriver,
      },
    ],
  },
];
