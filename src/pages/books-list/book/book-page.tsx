import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import css from './book-page.module.scss'
import {Rating} from '../../../features/rating';
import {BookInfo} from './book-info';
import {Review} from './review';
import {Button} from '../../../features/button';
import reviewArrowUpIcon from '../../../assets/img/review-arrow-up.svg';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {BookCoverImage} from "./book-image/book-cover-image";
import {
    CreateBookingDataType,
    createCommentTC,
    createOrderTC,
    deleteOrderTC,
    getBookTC,
    setCreateCommentSuccessAC,
    setCreateOrderSuccessAC,
    setDeleteOrderSuccessAC,
    setUpdateCommentAC,
    setUpdateOrderSuccessAC,
    updateCommentTC,
    updateOrderTC
} from "../../../redux/book-reducer";
import {CreateCommentModal} from "../../../common/modals/create-comment-modal/create-comment-modal";
import {Notification} from "../../../common/notification/notification";
import {CommentRequestData, CreateBookingRequestDataType} from "../../../api/book-api";
import {BaseModal} from "../../../common/modals/base-modal/base-modal";
import {OrderModal} from "../../../common/modals/order-modal/order-modal";
import {Breadcrumbs} from "../../../common/breadcrumbs/breadcrumbs";
import {bookInfo} from "../../../mock-data/books-info";


export const BookPage = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const {bookId} = useParams()
    const book = bookInfo.find(el => el.id === Number(bookId))

    const bookingId = useAppSelector((state) => state.book.book.booking?.id)
    const userId = useAppSelector(state => state.auth.profile?.id)
    const status = useAppSelector(state => state.app.status)
    const createCommentSuccess = useAppSelector(state => state.book.createCommentSuccess)
    const updateCommentSuccess = useAppSelector(state => state.book.updateCommentSuccess)
    const createOrderSuccess = useAppSelector(state => state.book.createOrderSuccess)
    const updateOrderSuccess = useAppSelector(state => state.book.updateOrderSuccess)
    const deleteOrderSuccess = useAppSelector(state => state.book.deleteOrderSuccess)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [showReviews, setShowReviews] = useState(false)
    const [createCommentModalIsOpen, setCreateCommentModalIsOpen] = useState(false)
    const [orderModalIsOpen, setOrderModalIsOpen] = useState(false)

    console.log(book?.booking)

    const commentByUser = book?.comments?.find(comment => comment.user.commentUserId === userId)

    const onClickClearNotificationHandler = () => {
        if (createCommentSuccess) {
            dispatch(setCreateCommentSuccessAC(null))
        }
        if (updateCommentSuccess) {
            dispatch(setUpdateCommentAC(null))
        }
        if (createOrderSuccess) {
            dispatch(setCreateOrderSuccessAC(null))
        }
        if (updateOrderSuccess) {
            dispatch(setUpdateOrderSuccessAC(null))
        }
        if (deleteOrderSuccess) {
            dispatch(setDeleteOrderSuccessAC(null))
        }
    }

    const onClickCreateCommentHandler = (rating: null | number, comment: string) => {
        if (bookId && userId) {
            const commentData: CommentRequestData = {
                data: {
                    rating: rating ? rating : 0,
                    text: comment,
                    book: bookId,
                    user: userId.toString(),
                }
            }
            if (commentByUser?.id) {
                dispatch(updateCommentTC(commentByUser.id, commentData, () => dispatch(getBookTC(Number(bookId)))))
            } else {
                dispatch(createCommentTC(commentData, () => dispatch(getBookTC(Number(bookId)))))
            }
        }
    }

    const onClickCreateNewOrderHandler = (date: string) => {

        if (bookId && userId) {
            const data: CreateBookingDataType = {
                data: {
                    order: true,
                    dateOrder: date,
                    book: bookId,
                    customer: userId
                }
            }
            dispatch(createOrderTC(data))
            dispatch(getBookTC(Number(bookId)))
        }
    }

    const onClickUpdateOrderHandler = (date: string) => {

        if (bookId && userId && bookingId) {
            const data: CreateBookingRequestDataType = {
                data: {
                    order: true,
                    dateOrder: date,
                    book: bookId,
                    customer: userId.toString()
                }
            }
            dispatch(updateOrderTC(bookingId, data))
            dispatch(getBookTC(Number(bookId)))
        }
    }

    const onClickDeleteOrderHandler = () => {
        if (bookingId) {
            dispatch(deleteOrderTC(bookingId))
            dispatch(getBookTC(Number(bookId)))
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getBookTC(Number(bookId)))
        } else {
            navigate('/auth')
        }
    }, [isLoggedIn, dispatch, bookId])

    return <section className={css.wrapper}>

        {createCommentSuccess && status === 'succeeded' &&
            <Notification
                status='succeeded'
                message='Спасибо,что нашли время оценить книгу!'
                onClickHandler={onClickClearNotificationHandler}/>}
        {!createCommentSuccess && status === 'failed' &&
            <Notification
                status='failed'
                message='Оценка не была отправлена. Попробуйте позже!'
                onClickHandler={onClickClearNotificationHandler}/>}

        {updateCommentSuccess && status === 'succeeded' &&
            <Notification
                status='succeeded'
                message='Спасибо, что нашли время изменить оценку!'
                onClickHandler={onClickClearNotificationHandler}/>}
        {!updateCommentSuccess && status === 'failed' &&
            <Notification
                status='failed'
                message='Изменения не были сохранены. Попробуйте позже!'
                onClickHandler={onClickClearNotificationHandler}/>}

        {createOrderSuccess && status === 'succeeded' &&
            <Notification
                status='succeeded'
                message='Книга забронирована. Подробности можно посмотреть на странице Профиль'
                onClickHandler={onClickClearNotificationHandler}/>}
        {!createOrderSuccess && status === 'failed' &&
            <Notification
                status='failed'
                message='Что-то пошло не так, книга не забронирована. Попробуйте позже!'
                onClickHandler={onClickClearNotificationHandler}/>}

        {updateOrderSuccess && status === 'succeeded' &&
            <Notification
                status='succeeded'
                message='Бронирование новой даты успешно изменено. Подробности можно посмотреть на странице Профиль'
                onClickHandler={onClickClearNotificationHandler}/>}
        {!updateOrderSuccess && status === 'failed' &&
            <Notification
                status='failed'
                message='Что-то пошло не так, дату бронирования не удалось изменить. Попробуйте позже!'
                onClickHandler={onClickClearNotificationHandler}/>}

        {deleteOrderSuccess && status === 'succeeded' &&
            <Notification
                status='succeeded'
                message='Бронирование книги успешно отменено!'
                onClickHandler={onClickClearNotificationHandler}/>}
        {!deleteOrderSuccess && status === 'failed' &&
            <Notification
                status='failed'
                message='Не удалось отменить бронирование книги. Попробуйте позже!'
                onClickHandler={onClickClearNotificationHandler}/>}

        <Breadcrumbs categories={book?.categories} title={book?.title}/>

        <div className={css.bookPage__info}>
            <div className={css.bookPage__info_cover}>

                {book?.images?.length && <BookCoverImage image={book?.images}/>}

            </div>

            <div className={css.bookPage__info_about}>

                <div className={css.bookPage__info_title}>
                    {book?.title}
                </div>

                <div className={css.bookPage__info_author}>
                    {book?.authors}, {book?.issueYear}
                </div>

                <div className={css.bookPage__info_button}>
                    <Button
                        buttonStyle={{
                            fontSize: '16px',
                            lineHeight: '24px'
                        }}
                        orderByAuthUser={book?.booking?.customerId === userId}
                        isBooked={book?.booking?.order}//забронирована
                        dateHanded={book?.delivery?.dateHandedFrom?.toString()}
                        handed={book?.delivery?.handed}
                        onClickHandler={() => setOrderModalIsOpen(true)}/>
                </div>

            </div>

            <div className={css.bookPage__info_summary}>
                <div className={css.bookPage__info_summary_title}>
                    О книге
                </div>
                <div className={css.bookPage__info_summary_content}>
                    <p>
                        {book?.description}
                    </p>
                </div>
            </div>
        </div>
        <div className={css.bookPage__review}>

            <div className={css.bookPage__review_rating}>
                <div className={css.bookPage__review_blockTitle}>
                    <span>Рейтинг</span>
                </div>

                <div className={css.bookPage__review_rating_count}>
                    <div>
                        <Rating rating={book?.rating}/>
                    </div>
                    <div>{book?.rating}</div>
                </div>
            </div>

            <div>
                <div className={css.bookPage__review_blockTitle}>
                    <span>Подробная информация</span>
                </div>
                <div>
                    <BookInfo
                        publish={book?.publish}
                        year={book?.issueYear}
                        pages={book?.pages}
                        cover={book?.cover}
                        format={book?.format}
                        category={book?.categories}
                        weight={book?.weight}
                        isbn={book?.ISBN}
                        producer={book?.producer}/>
                </div>
            </div>

            <div>

                <div className={css.bookPage__review_blockTitle}>

                    <div className={css.bookPage__review_blockTitle_toggle}>
                        <div>
                            <span>Отзывы</span>
                            <span
                                className={css.bookPage__review_blockTitle_count}>{book?.comments?.length}</span>
                        </div>

                        <button
                            type='button'
                            className={showReviews ? css.bookPage__review_blockTitle_toggleBtn : css.bookPage__review_blockTitle_toggleBtn_rotate}
                            onClick={() => setShowReviews(!showReviews)}>

                            <img
                                src={reviewArrowUpIcon}
                                alt='review-arrow-up-icon'/>
                        </button>

                    </div>

                </div>

                {showReviews && <div className={css.bookPage__review_items}>

                    {book?.comments && [...book?.comments].reverse().map((r) => <Review key={r.id}
                                                                                      userPhoto={r.user.avatarUrl}
                                                                                      firstName={r.user.firstName}
                                                                                      lastName={r.user.lastName}
                                                                                      date={r.createdAt}
                                                                                      rating={r.rating}
                                                                                      message={r.text}/>
                    )}
                </div>}
            </div>

            <button
                type="button"
                className={commentByUser ? `${css.bookPage__review_button} ${css.bookPage__review_button_unActive}` : `${css.bookPage__review_button} ${css.bookPage__review_button_active}`}
                onClick={() => setCreateCommentModalIsOpen(true)}
            > {commentByUser ? 'изменить оценку' : 'оценить книгу'}
            </button>

        </div>
        {orderModalIsOpen &&
            <BaseModal
                onCloseHandler={() => setOrderModalIsOpen(false)}>
                <OrderModal
                    customerId={book?.booking?.customerId === userId}
                    dateOrder={book?.booking?.dateOrder}
                    onCloseHandler={() => setOrderModalIsOpen(false)}
                    onClickCreateHandler={onClickCreateNewOrderHandler}
                    onClickUpdateHandler={onClickUpdateOrderHandler}
                    onClickDeleteHandler={onClickDeleteOrderHandler}
                />
            </BaseModal>}

        {createCommentModalIsOpen && commentByUser &&
            <BaseModal
                onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                <CreateCommentModal
                    commentRating={commentByUser.rating}
                    commentText={commentByUser.text}
                    onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                    onClickHandler={onClickCreateCommentHandler}/>
            </BaseModal>}

        {createCommentModalIsOpen && !commentByUser &&
            <BaseModal
                onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                <CreateCommentModal
                    onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                    onClickHandler={onClickCreateCommentHandler}/>
            </BaseModal>}
    </section>
}




