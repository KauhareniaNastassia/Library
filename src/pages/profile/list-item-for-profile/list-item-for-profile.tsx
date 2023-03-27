import React, {useCallback, useState} from 'react';
import css from "./list-item-for-profile.module.scss";
import defaultBookCover from "../../../assets/img/default-book-cover.svg";
import {AuthorsType, BookingType, DeliveryType, ImageType} from "../../../api/books-list-api";
import {UserBookingType, UserDeliveryType} from "../../../api/user-api";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {deleteOrderTC, setDeleteOrderSuccessAC} from "../../../redux/book-reducer";
import {getUserDataTC} from "../../../redux/user-reducer";
import {Rating} from "../../../features/rating";
import {Button} from "../../../features/button";
import {Notification} from "../../../common/notification/notification";
import {formatDateForButton} from "../../../utils/helpers/format-date-for-button/format-date-for-button";


type ListItemPropsType = {
    bookingImage?: string | null
    title: string
    authors: AuthorsType | null | undefined
    issueYear: string | null
    rating: number | null
    onClickHandler?: () => void
    deliveryForProfile?: UserDeliveryType | null
}

export const ListItemForProfile: React.FC<ListItemPropsType> = ({

                                                                    rating,
                                                                    authors,
                                                                    title,
                                                                    issueYear,
                                                                    bookingImage,
                                                                    deliveryForProfile,
                                                                    onClickHandler
                                                                }) => {

    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.app.status)
    const deleteOrderSuccess = useAppSelector(state => state.book.deleteOrderSuccess)

    const onClickClearNotificationHandler = () => {
        if (deleteOrderSuccess) {
            dispatch(setDeleteOrderSuccessAC(null))
        }
    }

    return (
        <>
            {deleteOrderSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Бронирование книги успешно отменено!' onClickHandler={onClickClearNotificationHandler}/>
            }

            {!deleteOrderSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Не удалось отменить бронирование книги. Попробуйте позже!'
                    onClickHandler={onClickClearNotificationHandler}/>}

            <div className={css.bookList__item}>

                <div className={css.bookList__item_coverWrapper}>
                    <img src={bookingImage
                            ? `https://strapi.cleverland.by${bookingImage}`
                            : defaultBookCover}
                         alt="Book cover"
                         className={css.bookList__item_cover}/>
                </div>

                <div className={css.bookList__item_infoWrapper}>

                    <div className={css.bookList__item_info}>
                        <div className={css.bookList__item_info_title}>
                            {title}
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
                            {
                                deliveryForProfile
                                    ? <div className={css.deliveryInfo}>
                                        возврат {formatDateForButton(deliveryForProfile.dateHandedTo)}
                                    </div>
                                    : <button
                                        className={css.delete_order_button}
                                        type='button'
                                        onClick={onClickHandler}>
                                        Отменить бронь
                                    </button>
                            }
                        </div>
                    </div>
                </div>


            </div>
        </>


    );
};


