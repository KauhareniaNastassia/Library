import {customInstance} from "./instance";
import {bool} from "yup";


export const userApi = {
    me() {
        return customInstance.get<MeResponseType>('/api/users/me')
    },
    updateUserData(id: number, data: UpdateUserDataRequestType) {
        return customInstance.put<MeResponseType>(`/api/users/${id}`, data)
    },
    addUserAvatar(data: File) {
        return customInstance.post<AddUserAvatarResponseType>('/api/upload', data)
    }, //download avatar to server
    updateUserAvatar(avatar: number, id: number) {
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
    rating: number,
    issueYear: string,
    authors: string[],
    image: null | string
}
export type UserDeliveryType = {
    id: number,
    handed: boolean,
    dateHandedFrom: string,
    dateHandedTo: string,
    book: UserOrderedBookType
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
export type AddUserAvatarResponseType = [
    {
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
]
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