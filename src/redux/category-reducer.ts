import {CategoryItemType} from "../api/categories-api";
import {AppThunkType} from "./store";
import {setAppErrorAC, setAppStatusAC, setAppSuccessMessageAC} from "./app-reducer";
import {AxiosError} from "axios/index";
import {categoriesList} from "../mock-data/categories";

const initialState: InitialCategoryStateType = {
    items: [] as CategoryItemType[]
}

export const categoryReducer = (state: InitialCategoryStateType = initialState, action: CategoriesListActionTypes): InitialCategoryStateType => {
    switch (action.type) {
        case 'categoriesList/SET-CATEGORIES':
            return {...state, items: [...action.categories]}

        default:
            return state
    }
}

//  actions

export const setCategoriesListAC = (categories: CategoryItemType[]) => ({
    type: 'categoriesList/SET-CATEGORIES',
    categories
} as const)


// thunk

export const getCategoriesListTC = (): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            dispatch(setCategoriesListAC(categoriesList.categories))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        }
    }

// action types
export type CategoriesListActionTypes =
    | ReturnType<typeof setCategoriesListAC>


//  types
type InitialCategoryStateType = {
    items: CategoryItemType[]
}
export type categoriesListType = {
    categories: CategoryItemType[]
}









