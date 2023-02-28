import {customInstance, instance} from "./instance";
import {
    AuthorsType,
    BookingType,
    CategoriesType,
    DeliveryType,
    HistoriesType,
    ImageType
} from "./books-list-api";


export const bookApi = {
    getBook(id: number) {
        return customInstance.get<BookResponseType>(`/api/books/${id}`)
    }
}



//===========TYPES=========

export type BookResponseType = {
    id: number,
    title: string,
    rating: number | null,
    issueYear: string  | null,
    description: string  | null,
    publish: string | null,
    pages: string | null,
    cover: string | null,
    weight: string | null,
    format: string | null,
    ISBN: string | null,
    producer: string | null,
    authors: AuthorsType | null,
    images: ImageType[] | null,
    categories: CategoriesType | null,
    comments: CommentsType[] | null,
    booking: BookingType | null,
    delivery: DeliveryType | null,
    histories: HistoriesType | null
}

export type CommentsType = {
    id: number | null,
    rating: number,
    text: string | null,
    createdAt: string,
    user: UserCommentType
}
export type UserCommentType = {
    commentUserId: number,
    firstName: string,
    lastName: string,
    avatarUrl: string | null
}
