import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    refreshToken: builder.mutation({
      query: (token) => ({
        url: "/auth/refresh-token",
        method: "POST",
        data: token,
      }),
      invalidatesTags: ["USER"],
    }),
    resetPassword: builder.mutation({
      query: (resetPassword) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        data: resetPassword,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshTokenMutation, useResetPasswordMutation } = authApi;
