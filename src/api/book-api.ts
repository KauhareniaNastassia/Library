import {customInstance, instance} from "./instance";
import {
    AuthorsType,
    BookingType,
    CategoriesType,
    DeliveryType,
    HistoriesType,
    ImageType
} from "./books-list-api";
import {boolean, string} from "yup";


export const bookApi = {
    getBook(id: number) {
        return customInstance.get<BookResponseType>(`/api/books/${id}`)
    },
    createBooking(data: CreateBookingRequestDataType) {
        return customInstance.post<BookingResponseType>('/api/bookings', data)
    },
    updateBooking(bookingId: number, data: CreateBookingRequestDataType) {
        return customInstance.put<BookingResponseType>(`/api/bookings/${bookingId}`, data)
    },
    deleteBooking(bookingId: number) {
        return customInstance.delete<BookingResponseType>(`/api/bookings/${bookingId}`)
    },
    createComment(data: CommentRequestData) {
        return customInstance.post<CommentResponseType>(`/api/comments`, data)
    },
    updateComment(commentId: number, data: CommentRequestData) {
        return customInstance.put<CommentResponseType>(`/api/comments/${commentId}`, data)
    },
}


//===========TYPES=========

export type BookResponseType = {
    id: number,
    title: string,
    rating: number | null,
    issueYear: string | null,
    description: string | null,
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
export type CreateBookingRequestDataType = {
    order: boolean,
    dateOrder: string,
    book: string, // book id
    customer: string //user id, who has booked
}
export type BookingResponseType = {
    id: number, //bookingId
    attributes: {
        order: boolean,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        dateOrder: string //till when booked
    }
}
export type CommentRequestData = {
        rating: number,
        text: string,
        book: string,
        user: string
}
export type CommentResponseType = {
    id: number,
    attributes: {
        rating: number,
        text: string | null,
        createdAt: string,
        updatedAt:string,
        publishedAt: string
    }
}
