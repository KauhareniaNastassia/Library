import {bookApi, BookResponseType, CommentRequestData, CreateBookingRequestDataType} from "../api/book-api";
import {AppThunkType} from "./store";
import {setAppErrorAC, setAppStatusAC, setAppSuccessMessageAC} from "./app-reducer";
import {AxiosError} from "axios";


const initialState: InitialBookStateType = {
    book: {
        id: 0,
        title: '',
        rating: 0,
        issueYear: '',
        description: '',
        publish: '',
        pages: '',
        cover: '',
        weight: '',
        format: '',
        ISBN: '',
        producer: '',
        authors: [],
        images: [
            {
                url: ''
            }
        ],
        categories: [],
        comments: null,
        booking: null,
        delivery: null,
        histories: null,
    },
    createCommentSuccess: null,
    updateCommentSuccess: null,
    createOrderSuccess: null,
    updateOrderSuccess: null,
    deleteOrderSuccess: null,
}


export const bookReducer = (state: InitialBookStateType = initialState, action: BookActionsType): InitialBookStateType => {
    switch (action.type) {
        case "book/SET-BOOK":
            return {...state, book: action.book}
        case "book/SET-UPDATE-COMMENT-SUCCESS":
            return {...state, updateCommentSuccess: action.updateCommentSuccess}
        case "book/SET-CREATE-COMMENT-SUCCESS":
            return {...state, createCommentSuccess: action.createCommentSuccess}
        case "book/SET-UPDATE-ORDER-SUCCESS":
            return {...state, updateOrderSuccess: action.updateOrderSuccess}
        case "book/SET-CREATE-ORDER-SUCCESS":
            return {...state, createOrderSuccess: action.createOrderSuccess}
        case "book/SET-DELETE-ORDER-SUCCESS":
            return {...state, deleteOrderSuccess: action.deleteOrderSuccess}
        default:
            return state
    }
}


//  actions
export const setBookAC = (book: BookResponseType) => ({
    type: 'book/SET-BOOK',
    book
} as const)
export const setUpdateCommentAC = (updateCommentSuccess: boolean | null) => ({
    type: 'book/SET-UPDATE-COMMENT-SUCCESS',
    updateCommentSuccess
} as const)
export const setCreateCommentSuccessAC = (createCommentSuccess: boolean | null) => ({
    type: 'book/SET-CREATE-COMMENT-SUCCESS',
    createCommentSuccess
} as const)
export const setCreateOrderSuccessAC = (createOrderSuccess: boolean | null) => ({
    type: 'book/SET-CREATE-ORDER-SUCCESS',
    createOrderSuccess
} as const)
export const setUpdateOrderSuccessAC = (updateOrderSuccess: boolean | null) => ({
    type: 'book/SET-UPDATE-ORDER-SUCCESS',
    updateOrderSuccess
} as const)
export const setDeleteOrderSuccessAC = (deleteOrderSuccess: boolean | null) => ({
    type: 'book/SET-DELETE-ORDER-SUCCESS',
    deleteOrderSuccess
} as const)


//  thunk

export const getBookTC = (id: number): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.getBook(id)
            dispatch(setBookAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        }
    }

export const createCommentTC = (data: CommentRequestData, cb?: () => void): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.createComment(data)
            dispatch(setCreateCommentSuccessAC(true))
            cb && cb()
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setCreateCommentSuccessAC(false))
        }
    }

export const updateCommentTC = (commentId: number, data: CommentRequestData, cb?: () => void): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.updateComment(commentId, data)
            dispatch(setUpdateCommentAC(true))
            cb && cb()
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setUpdateCommentAC(false))
        }
    }

export const createOrderTC = (data: CreateBookingRequestDataType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.createBooking(data)
            dispatch(setCreateOrderSuccessAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setCreateOrderSuccessAC(true))
        }
    }


export const updateOrderTC = (bookingId: number, data: CreateBookingRequestDataType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.updateBooking(bookingId, data)
            dispatch(setUpdateOrderSuccessAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setUpdateOrderSuccessAC(false))
        }
    }

export const deleteOrderTC = (bookingId: number, cb?: () => void): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.deleteBooking(bookingId)
            dispatch(setDeleteOrderSuccessAC(true))
            cb && cb()
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setDeleteOrderSuccessAC(false))
        }
    }


//  types

export type BookActionsType =
    | ReturnType<typeof setBookAC>
    | ReturnType<typeof setUpdateCommentAC>
    | ReturnType<typeof setCreateCommentSuccessAC>
    | ReturnType<typeof setUpdateOrderSuccessAC>
    | ReturnType<typeof setCreateOrderSuccessAC>
    | ReturnType<typeof setDeleteOrderSuccessAC>


type InitialBookStateType = {
    book: BookResponseType
    updateCommentSuccess: null | boolean
    createCommentSuccess: null | boolean
    createOrderSuccess: null | boolean
    updateOrderSuccess: null | boolean
    deleteOrderSuccess: null | boolean
}

export type BookImage = {
    imageId: string;
    image: string;
}




