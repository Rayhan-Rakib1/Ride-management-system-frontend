import { role } from "@/constant/role";
import { adminSidebarItems } from "@/routes/AdminSideBarItems";
import { driverSidebarItems } from "@/routes/DriverSideBarItems";
import { riderSidebarItems } from "@/routes/riderSideBarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.admin:
      return [...adminSidebarItems];
    case role.driver:
      return [...driverSidebarItems];
    case role.rider:
      return [...riderSidebarItems];

    default:
      return [];
  }
};
