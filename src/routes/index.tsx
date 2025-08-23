import App from "@/App";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router";

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
        Component: SignIn,
        path: '/signIn'
      },
      {
        Component: SignUp,
        path: '/signUp'
      },
      {
        Component: NotFound,
        path: '*'
      }
    ],
  },
]);
