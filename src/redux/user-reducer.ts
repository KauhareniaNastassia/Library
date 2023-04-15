import {MeResponseType, UpdateUserDataRequestType, userApi} from "../api/user-api";
import {AppThunkType} from "./store";
import {setAppErrorAC, setAppStatusAC, setAppSuccessMessageAC} from "./app-reducer";
import {AxiosError} from "axios/index";


const initialState: InitialUserStateType = {
    user: {
        id: 0, //this user id
        username: '',
        email: '',
        confirmed: true,
        blocked: false,
        createdAt: '',
        updatedAt: '',
        firstName: '',
        lastName: '',
        phone: '',
        role: {
            id: 0,
            name: '',
            description: '',
            type: ''
        },
        comments: null,
        avatar: null,
        booking: null,
        delivery: null,
        history: null
    },

    avatarChangeSuccess: null,
    userDataChangeSuccess: null
}

export const userReducer = (state: InitialUserStateType = initialState, action: UserActionsType): InitialUserStateType => {
    switch (action.type) {
        case "user/SET-USER":
            return {...state, user: action.user}
        case "user/SET-AVATAR-CHANGE-SUCCESS":
            return {...state, avatarChangeSuccess: action.avatarChangeSuccess}
        case "user/SET-USER-DATA-CHANGE-SUCCESS":
            return {...state, userDataChangeSuccess: action.userDataChangeSuccess}
        default:
            return state
    }
}


//  actions
export const setUserAC = (user: MeResponseType) => ({
    type: 'user/SET-USER',
    user
} as const)
export const setAvatarChangeSuccessAC = (avatarChangeSuccess: null | boolean) => ({
    type: 'user/SET-AVATAR-CHANGE-SUCCESS',
    avatarChangeSuccess
} as const)
export const setUserDataChangeSuccessAC = (userDataChangeSuccess: null | boolean) => ({
    type: 'user/SET-USER-DATA-CHANGE-SUCCESS',
    userDataChangeSuccess
} as const)


//  thunk

export const getUserDataTC = (): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await userApi.me()
            dispatch(setUserAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        }
    }

export const UpdateUserAvatarTC = (userId: number, files: FormData): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const {data} = await userApi.addUserAvatar(files)
            const res = await userApi.updateUserAvatar(userId, data[0].id)
            dispatch(setAvatarChangeSuccessAC(true))
            dispatch(setUserAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAvatarChangeSuccessAC(false))
        }
    }

export const UpdateUserDataTC = (id: number, data: UpdateUserDataRequestType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await userApi.updateUserData(id, data)
            dispatch(setUserDataChangeSuccessAC(true))
            localStorage.setItem('password', JSON.stringify(data.password))
            dispatch(setUserAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setUserDataChangeSuccessAC(false))
        }
    }


//  types

export type UserActionsType =
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setAvatarChangeSuccessAC>
    | ReturnType<typeof setUserDataChangeSuccessAC>

type InitialUserStateType = {
    user: MeResponseType
    avatarChangeSuccess: boolean | null
    userDataChangeSuccess: boolean | null
}