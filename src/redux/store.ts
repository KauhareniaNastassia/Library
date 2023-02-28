import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CategoriesListActionTypes, categoryReducer} from './category-reducer';
import {BookListActionTypes, booksReducer} from './books-reducer';
import {BookActionsType, bookReducer} from './book-reducer';
import {appReducer} from "./app-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";


const RootReducer = combineReducers({
    books: booksReducer,
    book: bookReducer,
    categories: categoryReducer,
    app: appReducer,
    auth: authReducer,


})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)))


export type AppRootStateType = ReturnType<typeof store.getState>


export type AppActionsType =
    | BookListActionTypes
    | BookActionsType
    | CategoriesListActionTypes
    | AuthActionsType


export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionsType>


// @ts-ignore
window.store = store
