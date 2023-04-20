import {
    AuthorsType,
    BookingType,
    BookListResponseType,
    booksListApi,
    CategoriesType, DeliveryType, HistoriesType,
    ImageType
} from "../api/books-list-api";
import {AppThunkType} from "./store";
import {setAppErrorAC, setAppStatusAC, setAppSuccessMessageAC} from "./app-reducer";
import {AxiosError} from "axios/index";
import {booksArray} from "../mock-data/books";
import {bookInfo} from "../mock-data/books-info";
import {BookResponseType} from "../api/book-api";

const initialState: InitialBooksStateType = {
    books: [] as BookResponseType[]
}

export const booksReducer = (state: InitialBooksStateType = initialState, action: BookListActionTypes): InitialBooksStateType => {
    switch (action.type) {
        case 'bookList/SET-BOOKLIST':
            return {...state, books: [...action.books]}

        default:
            return state
    }
}

//  actions

export const setBooksAC = (books:  BookResponseType[]) => ({
        type: 'bookList/SET-BOOKLIST',
        books
    } as const)


//  thunk

export const getBooksTC = (): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            dispatch(setBooksAC(bookInfo))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        }
    }

//  types

export type BookListActionTypes =
    | ReturnType<typeof setBooksAC>

type InitialBooksStateType = {
    books: BookResponseType[]
}

export type Book = {
    issueYear: string | null,
    rating: number | null,
    title: string,
    authors: AuthorsType | null,
    image: ImageType | null,
    categories: CategoriesType | null,
    id: number,
    booking: BookingType | null,
    delivery: DeliveryType | null,
    histories: HistoriesType | null
}