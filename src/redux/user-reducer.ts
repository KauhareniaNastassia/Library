import {MeResponseType, userApi} from "../api/user-api";
import {setBookAC} from "./book-reducer";
import {bookApi, BookResponseType} from "../api/book-api";
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

}

export const userReducer = (state: InitialUserStateType = initialState, action: UserActionsType): InitialUserStateType => {
    switch (action.type) {
        case "user/SET-USER":
            return {...state, user: action.user}

        default:
            return state
    }
}


//  actions
export const setUserAC = (user: MeResponseType) => ({
    type: 'user/SET-USER',
    user
} as const)



//  thunk

export const getUserDataTC = (): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await userApi.me()
            dispatch(setUserAC(res.data))
            console.log(res.data)
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        }
    }


//  types

export type UserActionsType =
    | ReturnType<typeof setUserAC>


type InitialUserStateType = {
    user: MeResponseType
}