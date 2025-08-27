import type { ComponentType } from "react";

export type { ISendOtp, IVerifyOtp, ILogin } from "./auth.types";


export interface IResponse<T>{
    message: string,
    success: boolean,
    statusCode: number,
    data: T
}

export interface ISideBarItems{
    title: string;
    items: {
        title: string;
        url: string,
        component: ComponentType
    }[],
}

export type TRole =  "SUPER_ADMIN" | "ADMIN" | "RIDER" | "DRIVER";