import { baseApi } from "@/redux/baseApi";

const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRide: builder.mutation({
      query: (rideInfo) => ({
        url: "/ride/create-ride",
        method: "POST",
        data: rideInfo,
      }),
      invalidatesTags: ["RIDE"],
    }),
    getAllRide: builder.query({
      query: () => ({
        url: "/rides/all-rides",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
    cancelRide: builder.mutation({
      query: ({rideId, status}) => ({
        url: `/ride/cancel/${rideId}`,
        method: "PATCH",
        data: status
      }),
      invalidatesTags: ["RIDE"],
    }),
    updateRideStatus: builder.mutation({
      query: ({rideId, status}) => ({
        url: `/ride/status/${rideId}`,
        method: "PATCH",
        data: status
      }),
      invalidatesTags: ["RIDE"],
    }),
    getRideById: builder.query({
      query: (rideId) => ({
        url: `/ride/${rideId}`,
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
  
  }),
});

export const { useCreateRideMutation, useCancelRideMutation, useGetAllRideQuery, useGetRideByIdQuery, useUpdateRideStatusMutation } = rideApi;
