import {customInstance} from "./instance";
import {bool} from "yup";
import {AuthorsType} from "./books-list-api";


export const userApi = {
    me() {
        return customInstance.get<MeResponseType>('/api/users/me')
    },
    updateUserData(id: number, data: UpdateUserDataRequestType) {
        return customInstance.put<MeResponseType>(`/api/users/${id}`, data)
    },
    addUserAvatar(files: FormData) {
        return customInstance.post<AddUserAvatarType[]>('/api/upload', files)
    }, //download avatar to server
    updateUserAvatar(id: number, avatar: number) {
        return customInstance.put<MeResponseType>(`/api/users/${id}`, avatar)
    }
}

export type MeResponseType = {
    id: number, //this user id
    username: string,
    email: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string,
    firstName: string,
    lastName: string,
    phone: string,
    role: {
        id: number,
        name: string,
        description: string,
        type: string
    },
    comments: UserCommentType[] | null,
    avatar: string | null,
    booking: UserBookingType | null,
    delivery: UserDeliveryType | null,
    history: UserHistoryType | null
}
export type UserCommentType = {
    id: number,
    rating: number,
    text: null | string,
    bookId: number
}
export type UserBookingType = {
    id: number,//bookingId
    order: boolean,
    dateOrder: string,
    book: UserOrderedBookType
}
export type UserOrderedBookType = {
    id: number,
    title: string,
    rating: number | null,
    issueYear: string  | null
    authors: AuthorsType | null,
    image: null | string
}
export type UserDeliveryType = {
    id: number | null,
    handed: boolean | null,
    dateHandedFrom: string | null,
    dateHandedTo: string | null,
    book: UserOrderedBookType | null
}
export type UserHistoryType = {
    id: number,
    books: UserOrderedBookType[]
}
export type UpdateUserDataRequestType = {
    email?: string,
    username?: string,
    password?: string,
    firstName?: string,
    lastName?: string,
    phone?: string
}
export type AddUserAvatarResponseType = AddUserAvatarType[]
export type AddUserAvatarType = {
    id: number,//avatar id
    name: string,
    alternativeText: null | string,
    caption: null,
    width: string,
    height: string,
    formats: FormatsType,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: null,
    provider: string,
    provider_metadata: null,
    createdAt: string,
    updatedAt: string
}
export type FormatsType = {
    thumbnail: FormatType,
    large:FormatType,
    medium: FormatType,
    small: FormatType
}
export type FormatType = {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path: null,
    width: number,
    height: number,
    size: number,
    url: string
}
