import { baseApi } from "@/redux/baseApi";
import type { IResponse, ISendOtp, IVerifyOtp } from "@/types";

const otpApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (otp) => ({
        url: "/otp/send-otp",
        method: "POST",
        data: otp,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (otp) => ({
        url: "/otp/verify-otp",
        method: "POST",
        data: otp,
      }),
    }),
  }),
});

export const { useSendOtpMutation, useVerifyOtpMutation } = otpApi;
