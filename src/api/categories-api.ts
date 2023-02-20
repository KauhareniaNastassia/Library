import {instance} from "./instance";


export const categoriesApi = {
    getCategoriesList() {
        instance.get<CategoriesListResponseType>(`/api/categories`)
            .then(res => res.data)
    }
}


//===========TYPES=========

type CategoriesListResponseType = CategoryItemType[]

type CategoryItemType = {
    name: string,
    path: string,
    id: number,
}
