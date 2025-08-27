import { useMyUserInfoQuery } from "@/redux/features/user/user.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { data, isLoading } = useMyUserInfoQuery(undefined);

    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/signIn"></Navigate>;
    }

    if (!isLoading && requiredRole !== data.data.role) {
      return <Navigate to="/unauthorized"></Navigate>;
    }

    <Component></Component>;
  };
};
