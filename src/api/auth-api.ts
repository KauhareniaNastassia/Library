import {instance} from "./instance";
import {AxiosResponse} from "axios";


export const authApi = {
    registration(data: RegistrationDataType) {
        return instance.post<AuthResponseType>(`/api/auth/local/register`, data)
    },
    login(data: LoginRequestDataType) {
        return instance.post<LoginRequestDataType, AxiosResponse<AuthResponseType>>(`/api/auth/local`, data)
    },
    logout() {
        return instance.delete<AxiosResponse>(`/api/auth/local`)
    },
    forgotPassword(email: string) {
        return instance.post<ForgotPasswordRequestType>(`/api/auth/forgot-password`, email)
    },
    resetPassword(data: ResetPasswordRequestData) {
        return instance.post<AuthUserResponseType>(` /api/auth/reset-password`, data)
    }
}


//===========TYPES=========


export type RegistrationDataType = {
    email: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string
}

export type AuthResponseType = {
    jwt: string,
    user: AuthUserResponseType
}

export type AuthUserResponseType = {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string,
    firstName: string,
    lastName: string,
    phone: string
}

export type LoginRequestDataType = {
    identifier: string,
    password: string
}

export type ForgotPasswordRequestType = {
    ok: boolean
}


export type ResetPasswordRequestData = {
    password: string,
    passwordConfirmation: string,
    code: string
}

export type ErrorResponseType = {
    data: null;
    error: {
        status: number;
        name: string;
        message: string;
        details: {}
    }

}