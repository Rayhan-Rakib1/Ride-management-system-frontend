import { baseApi } from "@/redux/baseApi";

const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDriver: builder.mutation({
      query: (driverInfo) => ({
        url: "/driver/create-driver",
        method: "POST",
        data: driverInfo,
      }),
      invalidatesTags: ["DRIVER"],
    }),
    allDriver: builder.query({
      query: () => ({
        url: "/driver/all-drivers",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),
    getSingleDriverById: builder.query({
      query: (driverId) => ({
        url: `/driver/${driverId}`,
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),
    updateDriverApproval: builder.mutation({
      query: ({driverId, approvalStatus}) => ({
        url: `/driver/${driverId}/approve`,
        method: "PATCH",
        data: approvalStatus,
      }),
      invalidatesTags: ["DRIVER"],
    }),
    updateDriverAvailability: builder.mutation({
      query: ({driverId, availability}) => ({
        url: `/driver/${driverId}/availability`,
        method: "PATCH",
        data: availability,
      }),
      invalidatesTags: ["DRIVER"],
    }),
    getDriverRideHistory: builder.query({
      query: () => ({
        url: '/driver/ride-history/driver',
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),
    getDriverEarning: builder.query({
      query: () => ({
        url: '/driver/earnings/driver',
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),
    driverAcceptRideRequest: builder.mutation({
      query: (rideId) => ({
        url: `/driver/rides/${rideId}/accept`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),
    driverUpdateRideStatus: builder.mutation({
      query: ({rideId, status}) => ({
        url: `/driver/rides/${rideId}/status`,
        method: "PATCH",
        data: status
      }),
      invalidatesTags: ["DRIVER"],
    }),
  }),
});

export const { useCreateDriverMutation, useAllDriverQuery, useDriverAcceptRideRequestMutation, useDriverUpdateRideStatusMutation, useGetDriverEarningQuery, useGetDriverRideHistoryQuery, useGetSingleDriverByIdQuery, useUpdateDriverApprovalMutation, useUpdateDriverAvailabilityMutation } = driverApi;
