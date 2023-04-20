import {MeResponseType, UpdateUserDataType} from "../api/user-api";
import {AppThunkType} from "./store";
import {setAppStatusAC, setAppSuccessMessageAC} from "./app-reducer";
import {UserDataType} from "../api/auth-api";


const initialState: InitialUserStateType = {
    userProfile: {
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: ''
    },
    avatar: null,
    userId: 0,
    avatarChangeSuccess: null,
    userDataChangeSuccess: null,

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
}

export const userReducer = (state: InitialUserStateType = initialState, action: UserActionsType): InitialUserStateType => {
    switch (action.type) {
        case "user/SET-USER-PROFILE-DATA":
            return {
                ...state, userProfile: action.userProfile
            }
        case "user/SET-AVATAR-CHANGE":
            return {...state, avatar: action.avatar}
        case "user/SET-USER-ID":
            return {...state, userId: action.userId}
        case "user/SET-AVATAR-CHANGE-SUCCESS":
            return {...state, avatarChangeSuccess: action.avatarChangeSuccess}
        case "user/SET-USER-DATA-CHANGE-SUCCESS":
            return {...state, userDataChangeSuccess: action.userDataChangeSuccess}
        default:
            return state
    }
}


//  actions
export const setUserProfileAC = (userProfile: UserDataType | UpdateUserDataType | null) => ({
    type: 'user/SET-USER-PROFILE-DATA',
    userProfile
} as const)
export const setAvatarChangeAC = (avatar: null | string) => ({
    type: 'user/SET-AVATAR-CHANGE',
    avatar
} as const)
export const setUserIdAC = (userId: number) => ({
    type: 'user/SET-USER-ID',
    userId
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

export const UpdateUserDataTC = (data: UpdateUserDataType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            dispatch(setUserDataChangeSuccessAC(true))
            localStorage.setItem('user', JSON.stringify(data))
            dispatch(setUserProfileAC(data))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            dispatch(setAppStatusAC('failed'))
            dispatch(setUserDataChangeSuccessAC(false))
        }
    }

export const UpdateUserAvatarTC = (files: string): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            localStorage.setItem('avatarIsChanged', files)
            dispatch(setAvatarChangeAC(files))
            dispatch(setAvatarChangeSuccessAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            dispatch(setAppStatusAC('failed'))
            dispatch(setAvatarChangeSuccessAC(false))
        }
    }


//  types

export type UserActionsType =
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setAvatarChangeAC>
    | ReturnType<typeof setUserIdAC>
    | ReturnType<typeof setAvatarChangeSuccessAC>
    | ReturnType<typeof setUserDataChangeSuccessAC>

type InitialUserStateType = {
    userProfile: UserDataType | UpdateUserDataType | null
    avatar: null | string,
    userId: number
    user: MeResponseType
    avatarChangeSuccess: boolean | null
    userDataChangeSuccess: boolean | null
}