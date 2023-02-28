

import {bookApi, BookResponseType} from "../api/book-api";
import {AppThunkType} from "./store";


const initialState: InitialAppStateType = {
    status: 'idle',
    errorMessage: '',
    successMessage: ''
}


export const appReducer = (state: InitialAppStateType = initialState, action: AppActionsType): InitialAppStateType => {
    switch (action.type) {
        case "app/SET-APP-STATUS":
            return {...state, status: action.status}
        case "app/SET-APP-ERROR":
            return {...state, errorMessage: action.errorMessage}
        case "app/SET-APP-SUCCESS":
            // @ts-ignore
            return {...state, successMessage: action.successMessage}


        default:
            return state
    }
}


//  actions
export const setAppStatusAC = (status: AppStatusType) => ({
    type: 'app/SET-APP-STATUS',
    status
} as const)
export const setAppErrorAC = (errorMessage: string | null) => ({
    type: 'app/SET-APP-ERROR',
    errorMessage
} as const)
export const setAppSuccessMessageAC = (successMessage: string | null) => ({
    type: 'app/SET-APP-SUCCESS',
    successMessage
} as const)


//  thunk

/*export const getBookTC = (id: number): AppThunkType =>
    async (dispatch) => {

        try {
            const res = await bookApi.getBook(id)
            dispatch(setBookAC(res.data))
        } catch (e) {

        }
    }*/


//  types

export type AppActionsType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppSuccessMessageAC>


type InitialAppStateType = {
    status: AppStatusType
    errorMessage: string | null
    successMessage: string | null
}

export type AppStatusType ='idle' | 'loading' | 'succeeded' | 'failed'

