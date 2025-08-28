
import DriverActivateRide from "@/pages/Driver/DriverActivateRide";
// import DriverEarningsDashboard from "@/pages/Driver/DriverEarningsDashboard";
import DriverHome from "@/pages/Driver/DriverHome";
import DriverIncomingRideRequests from "@/pages/Driver/DriverIncomingRideRequests";
import DriverRideHistory from "@/pages/Driver/DriverRideHistory";
import type { ISideBarItems } from "@/types";

export const driverSidebarItems: ISideBarItems[] = [
  {
    title: "Driver Dashboard",
    items: [
      {
        title: "Home",
        url: "/driver/home",
        component: DriverHome,
      },
        {
        title: "Accept Ride request",
        url: "/driver/ride-request",
        component: DriverIncomingRideRequests,
      },
      {
        title: "Activated ride",
        url: "/driver/activateRide",
        component: DriverActivateRide,
      },
      // {
      //   title: "Your earing",
      //   url: "/driver/earning",
      //   component: DriverEarningsDashboard,
      // },
    
      {
        title: "Ride history",
        url: "/driver/ride-history",
        component: DriverRideHistory,
      },
      
    ],
  },
];
