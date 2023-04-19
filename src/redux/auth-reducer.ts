import {AppThunkType} from "./store";
import {
    authApi,
    AuthUserResponseType,
    ForgotPasswordRequestType,
    LoginRequestDataType,

    ResetPasswordRequestData, UserDataType
} from "../api/auth-api";
import {setAppStatusAC, setAppSuccessMessageAC} from "./app-reducer";
import {AxiosError} from "axios/index";
import {setAvatarChangeAC, setUserIdAC, setUserProfileAC} from "./user-reducer";

const initialState: InitialAuthStateType = {
    isRegistrationSuccess: null,
    isLoggedIn: false,
    isAuthError: false,
    //userProfile: null,


    authError: null,
    registrationStatus: null,
    profile: null,
    forgotPasswordOk: false,
    resetPasswordOk: false,
    forgotPasswordError: null,
    registrationError: null,
}

export const authReducer = (state: InitialAuthStateType = initialState, action: AuthActionsType): InitialAuthStateType => {
    switch (action.type) {
        case "auth/IS-LOGGED-IN":
            return {
                ...state, isLoggedIn: action.isLoggedIn
            }
        case 'auth/IS-REGISTRATION-SUCCESS':
            return {
                ...state, isRegistrationSuccess: action.value
            }
        case "auth/IS-AUTH-ERROR":
            return {
                ...state, isAuthError: action.isAuthError
            }
        /*case "auth/SET-USER-PROFILE-DATA":
            return {
                ...state, userProfile: action.userProfile
            }*/




        case "auth/SET-LOGIN-DATA":
            return {
                ...state, profile: action.profile
            }
        case 'auth/SET-REGISTRATION-STATUS':
            return {
                ...state, registrationStatus: action.registrationStatus
            }
        case 'auth/SET-AUTH-ERROR':
            return {
                ...state, authError: action.authError
            }
        case 'auth/SET-FORGET-PASSWORD-OK':
            return {
                ...state, forgotPasswordOk: action.forgotPasswordOk
            }
        case 'auth/SET-RESET-PASSWORD-OK':
            return {
                ...state, resetPasswordOk: action.resetPasswordOk
            }
        case 'auth/SET-FORGET-PASSWORD-ERROR':
            return {
                ...state, forgotPasswordError: action.forgotPasswordError
            }
        case 'auth/SET-REGISTRATION-ERROR':
            return {
                ...state, registrationError: action.registrationError
            }

        default:
            return state
    }
}


//  actions
export const isLoggedInAC = (isLoggedIn: boolean) => ({
    type: 'auth/IS-LOGGED-IN',
    isLoggedIn
} as const)
export const isRegistrationSuccessAC = (value: boolean) => ({
    type: 'auth/IS-REGISTRATION-SUCCESS',
    value
} as const)
export const isAuthErrorAC = (isAuthError: boolean) => ({
    type: 'auth/IS-AUTH-ERROR',
    isAuthError
} as const)
/*export const setUserProfileAC = (userProfile: RegistrationDataType | null) => ({
    type: 'auth/SET-USER-PROFILE-DATA',
    userProfile
} as const)*/





export const setLoginDataAC = (profile: AuthUserResponseType | null) => ({
    type: 'auth/SET-LOGIN-DATA',
    profile
} as const)

export const setRegistrationStatusAC = (registrationStatus: number | null | undefined) => ({
    type: 'auth/SET-REGISTRATION-STATUS',
    registrationStatus
} as const)
export const setAuthErrorAC = (authError: string | null) => ({
    type: 'auth/SET-AUTH-ERROR',
    authError
} as const)
export const setForgetPasswordOkAC = (forgotPasswordOk: boolean) => ({
    type: 'auth/SET-FORGET-PASSWORD-OK',
    forgotPasswordOk
} as const)
export const setResetPasswordOkAC = (resetPasswordOk: boolean) => ({
    type: 'auth/SET-RESET-PASSWORD-OK',
    resetPasswordOk
} as const)
export const setForgotPasswordErrorAC = (forgotPasswordError: string | null) => ({
    type: 'auth/SET-FORGET-PASSWORD-ERROR',
    forgotPasswordError
} as const)
export const setRegistrationErrorAC = (registrationError: string | null) => ({
    type: 'auth/SET-REGISTRATION-ERROR',
    registrationError
} as const)


//  thunk

export const loginTC = (data: UserDataType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            dispatch(isLoggedInAC(true))
            dispatch(isAuthErrorAC(false))
            localStorage.removeItem('token');
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiI')
            dispatch(setUserProfileAC(data))
            dispatch(setUserIdAC(123456))
            dispatch(setAvatarChangeAC(localStorage.getItem('avatarIsChanged')))

            /*localStorage.setItem('user', JSON.stringify(user))
            localStorage.getItem('user')
            dispatch(setLoginDataAC(data.))*/

            //localStorage.setItem('user', JSON.stringify(res.data.user));
            dispatch(setAppStatusAC('succeeded'))

        } catch (err) {
            dispatch(isAuthErrorAC(true))
            dispatch(setAppStatusAC('failed'))
        }
    }

export const logoutTC = (): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {

            localStorage.removeItem('token');
            dispatch(isLoggedInAC(false))

            dispatch(setUserProfileAC(null))
            dispatch(setLoginDataAC(null))
            dispatch(setAppStatusAC('succeeded'))

        } catch (err) {
            dispatch(setAppStatusAC('failed'))
        }
    }


/*export const loginTC = (data: LoginRequestDataType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await authApi.login(data)
            dispatch(isLoggedInAC(true))
            dispatch(setLoginDataAC(res.data.user))
            localStorage.setItem('token', JSON.stringify(res.data.jwt))
            localStorage.setItem('user', JSON.stringify(res.data.user));
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAuthErrorAC(error.message))
            dispatch(setRegistrationStatusAC(error.response?.status))
        }
    }*/

/*export const logoutTC = (): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            dispatch(isLoggedInAC(false))
            dispatch(setLoginDataAC(null))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAuthErrorAC(error.message))
        }
    }*/

export const registrationTC = (data: UserDataType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))

        try {
            const res = await authApi.registration(data)
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setRegistrationStatusAC(res.status))
            dispatch(setAppSuccessMessageAC('success'))
            dispatch(isRegistrationSuccessAC(true))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setRegistrationErrorAC(error.message))
            dispatch(setRegistrationStatusAC(error.response?.status))
        }
    }

export const forgetPasswordTC = (data: ForgotPasswordRequestType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))

        try {
            const res = await authApi.forgotPassword(data)
            dispatch(setForgetPasswordOkAC(res.data.ok))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setForgotPasswordErrorAC(error.message))
        }
    }

export const resetPasswordTC = (data: ResetPasswordRequestData): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await authApi.resetPassword(data)
            dispatch(setResetPasswordOkAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setForgotPasswordErrorAC(error.message))
        }
    }


//  types

export type AuthActionsType =
    | ReturnType<typeof isLoggedInAC>
    | ReturnType<typeof isRegistrationSuccessAC>
    | ReturnType<typeof isAuthErrorAC>
    //| ReturnType<typeof setUserProfileAC>



    | ReturnType<typeof setLoginDataAC>
    | ReturnType<typeof setRegistrationStatusAC>
    | ReturnType<typeof setAuthErrorAC>
    | ReturnType<typeof setForgetPasswordOkAC>
    | ReturnType<typeof setResetPasswordOkAC>
    | ReturnType<typeof setForgotPasswordErrorAC>
    | ReturnType<typeof setRegistrationErrorAC>


type InitialAuthStateType = {
    isLoggedIn: boolean
    isRegistrationSuccess: null | boolean
    isAuthError: boolean
   // userProfile: null | RegistrationDataType


    registrationStatus: null | number | undefined
    profile: null | AuthUserResponseType
    authError: null | string
    forgotPasswordOk: boolean
    resetPasswordOk: boolean
    forgotPasswordError: null | string
    registrationError: null | string
}
