import {customInstance, instance} from "./instance";



export const categoriesApi = {
    getCategoriesList() {
        return customInstance.get<CategoryItemType[]>(`/api/categories`)
    }
}


//===========TYPES=========


export type CategoryItemType = {
    name: string,
    path: string,
    id: number,
}
