import React, {useCallback, useState} from 'react';
import css from "./tile-item.module.scss";
import defaultBookCover from "../../../../assets/img/default-book-cover.svg";
import {Rating} from "../../../../features/rating";
import {Button} from "../../../../features/button";
import {AuthorsType, BookingType, DeliveryType, ImageType} from "../../../../api/books-list-api";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {BaseModal} from "../../../../common/modals/base-modal/base-modal";
import {Highlighter} from "../../../../utils/helpers/highlighter/highlighter";
import {OrderModal} from "../../../../common/modals/order-modal/order-modal";
import {createOrderTC, deleteOrderTC, updateOrderTC} from "../../../../redux/book-reducer";
import {Notification} from "../../../../common/notification/notification";
import {onClickClearNotificationHandler} from "../../../../utils/onClickClearNotificationHandler";


type TileItemPropsType = {
    key: number
    image?: ImageType[] | null,
    title: string
    id?: number
    authors: AuthorsType | null | undefined
    issueYear: string | null
    rating: number | null
    booking?: BookingType | null
    delivery?: DeliveryType | null
    onClickHandler?: () => void
    searchValue?: string
    show: boolean
}

export const TileItem: React.FC<TileItemPropsType> = ({
                                                          image,
                                                          rating,
                                                          authors,
                                                          title,
                                                          issueYear,
                                                          delivery,
                                                          booking,
                                                          onClickHandler,
                                                          searchValue,
                                                          id,
                                                          show,
                                                          key
                                                      }) => {

    const [orderModalIsOpen, setOrderModalIsOpen] = useState(false)
    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.app.status)
    const createOrderSuccess = useAppSelector(state => state.book.createOrderSuccess)
    const updateOrderSuccess = useAppSelector(state => state.book.updateOrderSuccess)
    const deleteOrderSuccess = useAppSelector(state => state.book.deleteOrderSuccess)
    let bookingDate = localStorage.getItem('bookingDate');

    let titleForTile
    if (title.length > 50) {
        titleForTile = `${title.substring(0, 47).trim()}...`
    } else {
        titleForTile = title
    }

    const highLight = useCallback((string: string) => {
        if (searchValue) {
            return Highlighter(searchValue, string)
        } else return string
    }, [searchValue])

    let bookingByMe = localStorage.getItem('booking');

    const onClickOpenModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setOrderModalIsOpen(true)
    }

    return (
        <>
            {createOrderSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Книга забронирована. Подробности можно посмотреть на странице Профиль'
                    onClickHandler={
                        () => onClickClearNotificationHandler(dispatch, 'createOrderSuccess')}
                />}
            {!createOrderSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Что-то пошло не так, книга не забронирована. Попробуйте позже!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "createOrderSuccess")}/>}

            {updateOrderSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Бронирование новой даты успешно изменено. Подробности можно посмотреть на странице Профиль'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "updateOrderSuccess")}/>}
            {!updateOrderSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Что-то пошло не так, дату бронирования не удалось изменить. Попробуйте позже!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "updateOrderSuccess")}/>}

            {deleteOrderSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Бронирование книги успешно отменено!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "deleteOrderSuccess")}/>}
            {!deleteOrderSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Не удалось отменить бронирование книги. Попробуйте позже!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "deleteOrderSuccess")}/>}

            <div key={key} className={show ? css.bookTile__item : css.bookList__item}>

                <div className={css.bookList__item_coverWrapper}>
                    <img src={image?.length
                        ? process.env.PUBLIC_URL + `/covers/${id}.webp`
                        : defaultBookCover}
                         alt="Book cover"
                         className={css.bookList__item_cover}/>
                </div>

                <div className={css.bookList__item_infoWrapper}>

                    <div className={css.bookList__item_info}>
                        <div className={css.bookList__item_info_title}>
                            {highLight(titleForTile)}
                        </div>

                        <div className={css.bookList__item_info_author}>
                            {authors}, {issueYear}
                        </div>
                    </div>

                    <div className={css.bookList__item_rating}>
                        <Rating rating={rating}/>
                    </div>

                    <div className={css.bookList__item_button}>
                        <Button
                            isBooked={booking?.order}//забронирована
                            dateHanded={delivery?.dateHandedFrom?.toString()}
                            handed={delivery?.handed}
                            orderByAuthUser={bookingByMe !== null && +JSON.parse(bookingByMe) === id}
                            onClickOpenModalHandler={onClickOpenModalHandler}//for open order modal
                            onClickHandler={onClickHandler}
                        />
                    </div>
                </div>

                {orderModalIsOpen &&
                    <BaseModal
                        onCloseHandler={() => setOrderModalIsOpen(false)}>
                        <OrderModal
                            customerId={bookingByMe !== null && +JSON.parse(bookingByMe) === id}
                            dateOrder={bookingDate}
                            onCloseHandler={() => setOrderModalIsOpen(false)}
                            onClickCreateHandler={(selectedDay) => dispatch(createOrderTC(id, bookingByMe, selectedDay))}
                            onClickUpdateHandler={(selectedDay) => dispatch(updateOrderTC(id, bookingByMe, selectedDay))}
                            onClickDeleteHandler={() => dispatch(deleteOrderTC(id, bookingByMe))}
                        />
                    </BaseModal>}
            </div>
        </>
    );
};
