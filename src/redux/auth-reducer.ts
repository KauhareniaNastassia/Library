import {AppThunkType} from "./store";
import {
    authApi,
    AuthUserResponseType,
    ForgotPasswordRequestType,
    ResetPasswordRequestData,
    UserDataType
} from "../api/auth-api";
import {setAppStatusAC, setAppSuccessMessageAC} from "./app-reducer";
import {AxiosError} from "axios/index";
import {setAvatarChangeAC, setUserIdAC, setUserProfileAC} from "./user-reducer";

const initialState: InitialAuthStateType = {
    isRegistrationSuccess: null,
    isLoggedIn: false,
    isAuthError: false,
    authError: null,
    profile: null,
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
        case "auth/SET-LOGIN-DATA":
            return {
                ...state, profile: action.profile
            }
        case 'auth/SET-AUTH-ERROR':
            return {
                ...state, authError: action.authError
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
export const setLoginDataAC = (profile: AuthUserResponseType | null) => ({
    type: 'auth/SET-LOGIN-DATA',
    profile
} as const)
export const setAuthErrorAC = (authError: string | null) => ({
    type: 'auth/SET-AUTH-ERROR',
    authError
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


export const registrationTC = (data: UserDataType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            localStorage.clear()
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiI');
            localStorage.setItem('user', JSON.stringify(data));
            dispatch(isRegistrationSuccessAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
            dispatch(isRegistrationSuccessAC(true))
        } catch (err) {
            dispatch(setAppStatusAC('failed'))
        }
    }


//  types
export type AuthActionsType =
    | ReturnType<typeof isLoggedInAC>
    | ReturnType<typeof isRegistrationSuccessAC>
    | ReturnType<typeof isAuthErrorAC>
    | ReturnType<typeof setLoginDataAC>
    | ReturnType<typeof setAuthErrorAC>

type InitialAuthStateType = {
    isLoggedIn: boolean
    isRegistrationSuccess: null | boolean
    isAuthError: boolean
    profile: null | AuthUserResponseType
    authError: null | string
}
