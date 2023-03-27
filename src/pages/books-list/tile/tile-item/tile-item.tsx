import React, {useCallback, useState} from 'react';
import css from "./tile-item.module.scss";
import defaultBookCover from "../../../../assets/img/default-book-cover.svg";
import {Rating} from "../../../../features/rating";
import {Button} from "../../../../features/button";
import {AuthorsType, BookingType, DeliveryType, ImageType} from "../../../../api/books-list-api";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {BaseModal} from "../../../../common/modals/base-modal/base-modal";
import CreateCommentModal from "../../../../common/modals/create-comment-modal/create-comment-modal";
import {Highlighter} from "../../../../utils/helpers/highlighter/highlighter";
import {UserCommentType} from "../../../../api/user-api";
import OrderModal from "../../../../common/modals/order-modal/order-modal";
import {CreateBookingRequestDataType} from "../../../../api/book-api";
import {
    createOrderTC,
    deleteOrderTC,
    setCreateOrderSuccessAC,
    setDeleteOrderSuccessAC,
    setUpdateOrderSuccessAC,
    updateOrderTC
} from "../../../../redux/book-reducer";
import {getBooksTC} from "../../../../redux/books-reducer";
import {Notification} from "../../../../common/notification/notification";


type TileItemPropsType = {
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
    //==props for history block in profile
    historyBookImage?: string | null
    historyId?: number
    searchComment?: UserCommentType | null
    onClickCreateCommentHandler?: (rating: null | number, comment: string) => void
}

const TileItem: React.FC<TileItemPropsType> = ({
                                                   image,
                                                   rating,
                                                   authors,
                                                   title,
                                                   issueYear,
                                                   delivery,
                                                   booking,
                                                   historyBookImage,
                                                   onClickHandler,
                                                   historyId,
                                                   onClickCreateCommentHandler,
                                                   searchValue,
                                                   searchComment,
                                                   id
                                               }) => {
    const [createCommentModalIsOpen, setCreateCommentModalIsOpen] = useState(false)
    const [orderModalIsOpen, setOrderModalIsOpen] = useState(false)
    const dispatch = useAppDispatch()
    const userId = useAppSelector(state => state.auth.profile?.id)
    const status = useAppSelector(state => state.app.status)
    const createOrderSuccess = useAppSelector(state => state.book.createOrderSuccess)
    const updateOrderSuccess = useAppSelector(state => state.book.updateOrderSuccess)
    const deleteOrderSuccess = useAppSelector(state => state.book.deleteOrderSuccess)

    let titleForTile
    if (title.length > 50) {
        titleForTile = `${title.substring(0, 50).trim()}...`
    } else {
        titleForTile = title
    }

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
            dispatch(getBooksTC())
        }
    }
    const onClickOpenModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setOrderModalIsOpen(true)
    }

    const onClickClearNotificationHandler = () => {
        if (createOrderSuccess) {
            dispatch(setCreateOrderSuccessAC(null))
        } if (updateOrderSuccess) {
            dispatch(setUpdateOrderSuccessAC(null))
        } if (deleteOrderSuccess) {
            dispatch(setDeleteOrderSuccessAC(null))
        }
    }


    return (
        <>
            {createOrderSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Книга забронирована. Подробности можно посмотреть на странице Профиль'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {!createOrderSuccess  && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Что-то пошло не так, книга не забронирована. Попробуйте позже!'
                    onClickHandler={onClickClearNotificationHandler}/>}

            {updateOrderSuccess  && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Бронирование новой даты успешно изменено. Подробности можно посмотреть на странице Профиль'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {!updateOrderSuccess  && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Что-то пошло не так, дату бронирования не удалось изменить. Попробуйте позже!'
                    onClickHandler={onClickClearNotificationHandler}/>}

            {deleteOrderSuccess  && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Бронирование книги успешно отменено!'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {!deleteOrderSuccess  && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Не удалось отменить бронирование книги. Попробуйте позже!'
                    onClickHandler={onClickClearNotificationHandler}/>}

            <div className={css.bookList__item}>

            <div className={css.bookList__item_coveWrapper}>
                <img src={image?.url.length
                    ? `https://strapi.cleverland.by${image.url}`
                    : historyBookImage
                        ? `https://strapi.cleverland.by${historyBookImage}`
                        : defaultBookCover}
                     alt="Book cover"
                     className={css.bookList__item_cover}/>
            </div>

            <div className={css.bookList__item_rating}>
                <Rating rating={rating}/>
            </div>

            <div className={css.bookList__item_info}>
                <div className={css.bookList__item_info_title}>
                    {highLight(titleForTile)}
                    {/*{titleForTile}*/}

                </div>

                <div className={css.bookList__item_info_author}>
                    {authors}, {issueYear}
                </div>
            </div>

            <div className={css.bookList__item_button}>
                <Button
                    isBooked={booking?.order}//забронирована
                    dateHanded={delivery?.dateHandedFrom?.toString()}
                    handed={delivery?.handed}
                    orderByAuthUser={booking?.customerId === userId}
                    onClickOpenModalHandler={onClickOpenModalHandler}//for open order modal
                    onClickHandler={onClickHandler}
                />
            </div>

            {orderModalIsOpen &&
                <BaseModal
                    onCloseHandler={() => setOrderModalIsOpen(false)}>
                    <OrderModal
                        customerId={booking?.customerId === userId}
                        onCloseHandler={() => setOrderModalIsOpen(false)}
                        onClickCreateHandler={onClickCreateNewOrderHandler}
                        onClickUpdateHandler={onClickUpdateOrderHandler}
                        onClickDeleteHandler={onClickDeleteOrderHandler}
                    />
                </BaseModal>}

            {createCommentModalIsOpen && searchComment && onClickCreateCommentHandler &&
                <BaseModal
                    onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                    <CreateCommentModal
                        searchComment={searchComment}
                        onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                        onClickHandler={onClickCreateCommentHandler}/>
                </BaseModal>}

            {createCommentModalIsOpen && onClickCreateCommentHandler &&
                <BaseModal
                    onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                    <CreateCommentModal
                        onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                        onClickHandler={onClickCreateCommentHandler}/>
                </BaseModal>}

        </div>
        </>

    );
};

export default TileItem;