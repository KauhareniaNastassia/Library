import {customInstance, instance} from "./instance";


export const booksListApi = {
    getBookList() {
        return customInstance.get<BookListResponseType[]>(`/api/books`)
    }
}



//  ===========TYPES=========

export type BookListResponseType = {
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


export type AuthorsType = string[]
export type CategoriesType = string[]
export type ImageType = {
    url: string
}
export type BookingType = {
    id: number,
    order: boolean,
    dateOrder: string | null,
    customerId: number | null,
    customerFirstName: string | null,
    customerLastName: string | null
}
export type DeliveryType = {
    id: number,
    handed: boolean,
    dateHandedFrom: string | null,
    dateHandedTo: string | null,
    recipientId: number | null,
    recipientFirstName: string | null,
    recipientLastName: string | null
}
export type HistoriesType = HistoriesItemType[]
type HistoriesItemType = {
    id: number | null,
    userId: number | null
}


type ErrorType = {
    data: null;
    error: {
        status: number;
        name: string;
        message: string;
        details: {}
    }

}
