import {bookApi, BookResponseType, CommentRequestData, CreateBookingRequestDataType} from "../api/book-api";
import {AppThunkType} from "./store";
import {setAppErrorAC, setAppStatusAC, setAppSuccessMessageAC} from "./app-reducer";
import {AxiosError} from "axios";
import {BookingType} from "../api/books-list-api";
import {bookInfo} from "../mock-data/books-info";


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
    } as BookResponseType,
    createCommentSuccess: null,
    updateCommentSuccess: null,
    createOrder: false,
    createOrderSuccess: null,
    updateOrderSuccess: null,
    deleteOrderSuccess: null,
}


export const bookReducer = (state: InitialBookStateType = initialState, action: BookActionsType): InitialBookStateType => {
    switch (action.type) {
        case "book/SET-BOOK":
            return {...state, book: action.book}
        case "book/SET-CREATE-ORDER":
            return {...state, createOrder: action.createOrder}


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
export const setCreateOrderAC = (createOrder: boolean) => ({
    type: 'book/SET-CREATE-ORDER',
    createOrder
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

export const getBookTC = (bookId: number): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const book = bookInfo.find(el => el.id === Number(bookId))
            book && dispatch(setBookAC(book))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        }
    }

export const createCommentTC = (commentData: CommentRequestData): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            if (commentData.data.book) {
                    localStorage.setItem('commentMessage', JSON.stringify(commentData.data.text))
                    localStorage.setItem('commentRating', JSON.stringify(commentData.data.rating))
                    localStorage.setItem('commentByMe', JSON.stringify(commentData.data.book))
                    localStorage.setItem('commentDate', JSON.stringify(new Date()))
            }

            dispatch(setCreateCommentSuccessAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setCreateCommentSuccessAC(false))
        }
    }

export const updateCommentTC = (commentData: CommentRequestData): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            if (commentData.data.book) {
                localStorage.removeItem('commentMessage');
                localStorage.removeItem('commentRating');
                localStorage.removeItem('commentDate');
                localStorage.setItem('commentMessage', JSON.stringify(commentData.data.text))
                localStorage.setItem('commentRating', JSON.stringify(commentData.data.rating))
                localStorage.setItem('commentDate', JSON.stringify(new Date()))
            }
            dispatch(setUpdateCommentAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setUpdateCommentAC(false))
        }
    }

export const createOrderTC = (id: number | undefined, bookingByMe: string | null): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            if (id ) {
                if (!bookingByMe) {
                    localStorage.setItem('booking', JSON.stringify(+id))
                }
                if (bookingByMe) {
                    localStorage.removeItem('booking');
                    localStorage.setItem('booking', JSON.stringify(+id))
                }
            }
            dispatch(setCreateOrderSuccessAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            dispatch(setAppStatusAC('failed'))
            dispatch(setCreateOrderSuccessAC(true))
        }
    }


export const updateOrderTC = (id: number | undefined, bookingByMe: string | null): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            if (id && bookingByMe) {
                const bookingParced = JSON.parse(bookingByMe);
                if (+bookingParced === id) {
                    localStorage.removeItem('booking');
                    localStorage.setItem('booking', JSON.stringify(+id));
                } else {
                    localStorage.setItem('booking', JSON.stringify(bookingParced))
                }
            }
            dispatch(setUpdateOrderSuccessAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setUpdateOrderSuccessAC(false))
        }
    }

export const deleteOrderTC = (id: number | undefined, bookingByMe: string | null): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            if (id && bookingByMe) {
                localStorage.removeItem('booking');
            }
            dispatch(setDeleteOrderSuccessAC(true))
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
    | ReturnType<typeof setCreateOrderAC>

    | ReturnType<typeof setUpdateCommentAC>
    | ReturnType<typeof setCreateCommentSuccessAC>
    | ReturnType<typeof setUpdateOrderSuccessAC>
    | ReturnType<typeof setCreateOrderSuccessAC>
    | ReturnType<typeof setDeleteOrderSuccessAC>


type InitialBookStateType = {
    book: BookResponseType
    updateCommentSuccess: null | boolean
    createCommentSuccess: null | boolean
    createOrder: boolean
    createOrderSuccess: null | boolean
    updateOrderSuccess: null | boolean
    deleteOrderSuccess: null | boolean
}

export type BookImage = {
    imageId: string;
    image: string;
}

export type CreateBookingDataType = {
    data: {
        order: boolean,
        dateOrder: string,
        book: string, // book id
        customer: number //user id, who has booked
    }
}



