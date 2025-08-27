import { baseApi } from "../../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "/users/all-users",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    myUserInfo: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    updateUserStatus: builder.mutation({
      query: ({ userId, status }) => ({
        url: `/users/user-status/${userId}`,
        method: "PATCH",
        data: status,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});


export const {useGetAllUserQuery, useUpdateUserStatusMutation, useMyUserInfoQuery} = userApi;