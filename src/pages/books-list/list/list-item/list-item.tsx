import React, {useCallback, useState} from 'react';
import {NavLink} from "react-router-dom";
import css from "./list-item.module.scss";
import defaultBookCover from "../../../../assets/img/default-book-cover.svg";
import {Rating} from "../../../../features/rating";
import {Button} from "../../../../features/button";
import {AuthorsType, BookingType, BookListResponseType, DeliveryType, ImageType} from "../../../../api/books-list-api";
import {UserBookingType, UserDeliveryType} from "../../../../api/user-api";
import {RedMask} from "../../../profile/red-mask/red-mask";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {Highlighter} from "../../../../utils/helpers/highlighter/highlighter";
import {CreateBookingRequestDataType} from "../../../../api/book-api";
import {createOrderTC, deleteOrderTC, getBookTC, updateOrderTC} from "../../../../redux/book-reducer";
import {BaseModal} from "../../../../common/modals/base-modal/base-modal";
import OrderModal from "../../../../common/modals/order-modal/order-modal";
import {getBooksTC} from "../../../../redux/books-reducer";

type ListItemPropsType = {
    image?: ImageType | null
    title: string
    id?: number
    authors: AuthorsType | null | undefined
    issueYear: string | null
    rating: number | null
    booking?: BookingType | null
    delivery?: DeliveryType | null
    onClickHandler?: () => void
    searchValue?: string
    //==props for ordered book from profile
    bookingImage?: string | null
    bookingForProfile?: UserBookingType | null
    //==props for delivered book from profile
    deliveryForProfile?: UserDeliveryType | null

}

export const ListItem: React.FC<ListItemPropsType> = ({
                                                          image,
                                                          rating,
                                                          authors,
                                                          title,
                                                          id,
                                                          issueYear,
                                                          delivery,
                                                          booking,
                                                          bookingImage, bookingForProfile,
                                                          onClickHandler,
                                                          deliveryForProfile, searchValue
                                                      }) => {
    const userId = useAppSelector(state => state.auth.profile?.id)
    const [orderModalIsOpen, setOrderModalIsOpen] = useState(false)
    const dispatch = useAppDispatch()

    const highLight = useCallback((string: string) => {
        if (searchValue) {
            return Highlighter(searchValue, string)
        } else return string
    }, [searchValue])

    const onClickCreateNewOrderHandler = (date: string) => {

        if (id && userId) {
            const data: CreateBookingRequestDataType = {
                data: {
                    order: true,
                    dateOrder: date,
                    book: id.toString(),
                    customer: userId.toString()
                }
            }
            dispatch(createOrderTC(data))
            dispatch(getBooksTC())
        }
    }

    const onClickUpdateOrderHandler = (date: string) => {

        if (id && userId && booking?.id) {
            const data: CreateBookingRequestDataType = {
                data: {
                    order: true,
                    dateOrder: date,
                    book: id.toString(),
                    customer: userId.toString()
                }
            }
            dispatch(updateOrderTC(booking?.id, data))
            dispatch(getBooksTC())
        }
    }

    const onClickDeleteOrderHandler = () => {
        if (booking?.id) {
            dispatch(deleteOrderTC(booking?.id))
            dispatch(getBookTC(Number(id)))
        }
    }

    const onClickOpenModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setOrderModalIsOpen(true)
    }

    return (
        <div className={css.bookList__item}>

            <div className={css.bookList__item_coverWrapper}>
                <img src={image?.url.length
                    ? `https://strapi.cleverland.by${image.url}`
                    : bookingImage
                        ? `https://strapi.cleverland.by${bookingImage}`
                        : defaultBookCover}
                     alt="Book cover"
                     className={css.bookList__item_cover}/>
            </div>

            <div className={css.bookList__item_infoWrapper}>

                <div className={css.bookList__item_info}>
                    <div className={css.bookList__item_info_title}>
                        {highLight(title)}
                    </div>

                    <div className={css.bookList__item_info_author}>
                        {authors}, {issueYear}
                    </div>
                </div>


                <div className={css.bookList__item_buttonBlock}>
                    <div className={css.bookList__item_rating}>
                        <Rating rating={rating}/>
                    </div>

                    <div className={css.bookList__item_button}>
                        <Button
                            isBooked={booking?.order}//забронирована
                            dateHanded={delivery?.dateHandedFrom?.toString()}
                            handed={delivery?.handed}
                            orderByAuthUser={booking?.customerId === userId}
                            onClickHandler={onClickHandler}
                            onClickOpenModalHandler={onClickOpenModalHandler}//for open order modal
                            bookingForProfile={bookingForProfile}
                            deliveryForProfile={deliveryForProfile}
                        />
                    </div>
                </div>
            </div>

            { orderModalIsOpen && <BaseModal
                    onCloseHandler={() => setOrderModalIsOpen(false)}>
                    <OrderModal
                        customerId={booking?.customerId === userId}
                        onCloseHandler={() => setOrderModalIsOpen(false)}
                        onClickCreateHandler={onClickCreateNewOrderHandler}
                        onClickUpdateHandler={onClickUpdateOrderHandler}
                        onClickDeleteHandler={onClickDeleteOrderHandler}
                    />
                </BaseModal>}

        </div>

    );
};

