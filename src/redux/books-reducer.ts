import {ReviewType} from "./reviews-reducer";
import {BookListResponseType, booksListApi} from "../api/books-list-api";
import {AppThunkType} from "./store";

const initialState: InitialBooksStateType = {
    books: [] as BookListResponseType[]
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

export const setBooksAC = (books: BookListResponseType[]) => ({
        type: 'bookList/SET-BOOKLIST',
        books
    } as const)




//  thunk

export const getBooksTC = (): AppThunkType =>
    async (dispatch) => {

        try {
            const res = await booksListApi.getBookList()
            dispatch(setBooksAC(res.data))

        } catch (e) {
            console.log(e)
        }
    }


//  types

export type BookListActionTypes =
    | ReturnType<typeof setBooksAC>


type InitialBooksStateType = {
    books: BookListResponseType[]
}


export type BookType = {
    bookId: string,
    image: BookImage[],
    category: string,
    categoryForPath: string,
    author: string,
    title: string,
    rating: number,
    year: number,
    isBooked: boolean,
    bookedTill: string
    review: ReviewType[]
}



export type BookImage = {
    imageId: string;
    image: string;
}

