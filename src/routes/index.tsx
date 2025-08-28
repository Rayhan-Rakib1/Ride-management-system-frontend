import App from "@/App";
import { role } from "@/constant/role";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import unauthorized from "@/pages/unauthorized";
import { VerifyOtp } from "@/pages/VerifyOtp";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./AdminSideBarItems";
import { driverSidebarItems } from "./DriverSideBarItems";
import { riderSidebarItems } from "./riderSideBarItems";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CreateRideForm } from "@/pages/CreateRideForm";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: HomePage,
        index: true,
      },

      {
        Component: CreateRideForm,
        path: "/create-ride",
      },
      {
        Component: AboutUs,
        path: "/aboutUs",
      },
      {
        Component: Features,
        path: "/features",
      },
      {
        Component: Contact,
        path: "/contact",
      },
      {
        Component: Faq,
        path: "/faq",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/admin",
    children: [
      {
        index: true,
        element: <Navigate to="/admin/all-users"></Navigate>,
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.driver as TRole),
    path: "/driver",
    children: [
      {
        index: true,
        element: <Navigate to="/driver/home"></Navigate>,
      },
      ...generateRoutes(driverSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.rider as TRole),
    path: "/rider",
    children: [
      {
        index: true,
        element: <Navigate to="/rider/ride-history"></Navigate>,
      },
      ...generateRoutes(riderSidebarItems),
    ],
  },
  {
    Component: SignIn,
    path: "/signIn",
  },
  {
    Component: SignUp,
    path: "/signUp",
  },
  {
    Component: unauthorized,
    path: "/unauthorized",
  },
  {
    Component: VerifyOtp,
    path: "/verify-otp",
  },
  {
    Component: NotFound,
    path: "*",
  },
]);
