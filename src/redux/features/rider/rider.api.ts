import { baseApi } from "@/redux/baseApi";

const riderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createRider: builder.mutation({
            query: (userInfo) => ({
                url: '/rider/create-rider',
                method: 'POST',
                data: userInfo
            }),
        invalidatesTags: ['RIDER']
        }),
        getAllRiders: builder.query({
            query: () => ({
                url: '/rider/all-riders',
                method: 'GET',
            }),
            providesTags: ["RIDER"]
        }),
        getMe: builder.query({
            query: () => ({
                url: '/rider/me',
                method: 'GET',
            }),
            providesTags: ["RIDER"]
        }),
        updateMyOwnProfile: builder.mutation({
            query: (updatedData) => ({
                url: '/rider/me',
                method: 'PUT',
                data: updatedData
            }),
            invalidatesTags: ["RIDER"]
        }),
        getMyHistory: builder.query({
            query: () => ({
                url: '/rider/me/history',
                method: 'GET',
            }),
            providesTags: ["RIDER"]
        }),
        getMyById: builder.query({
            query: (riderId) => ({
                url: `/rider/${riderId}`,
                method: 'GET',
            }),
            providesTags: ["RIDER"]
        }),
        deleteRiderAccount: builder.mutation({
            query: () => ({
                url: '/rider/me',
                method: 'DELETE',
            }),
            invalidatesTags: ["RIDER"]
        }),
        deleteRiderAccountById: builder.mutation({
            query: (riderId) => ({
                url: `/rider/${riderId}`,
                method: 'DELETE',
                data: riderId
            }),
            invalidatesTags: ["RIDER"]
        }),
       
        
    })
})


export const {useCreateRiderMutation, useDeleteRiderAccountByIdMutation, useDeleteRiderAccountMutation, useGetAllRidersQuery, useGetMeQuery, useGetMyByIdQuery, useGetMyHistoryQuery, useUpdateMyOwnProfileMutation, } = riderApi;