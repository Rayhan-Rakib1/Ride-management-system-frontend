import AllDriver from "@/pages/Admin/AllDriver";
import AllRider from "@/pages/Admin/AllRider";
import AllUser from "@/pages/Admin/AllUser";
import Analytics from "@/pages/Admin/Analytics";
import type { ISideBarItems } from "@/types";

export const adminSidebarItems: ISideBarItems[] = [
  {
    title: "Admin Dashboard",
    items: [
            {
        title: "Analytics",
        url: "/admin/Analytics",
        component: Analytics,
      },
      {
        title: "User management",
        url: "/admin/all-users",
        component: AllUser,
      },
      {
        title: "Rider management",
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
