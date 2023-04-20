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
    createCommentTC,
    createOrderTC,
    deleteOrderTC,
    getBookTC,
    updateCommentTC,
    updateOrderTC
} from "../../../redux/book-reducer";
import {CreateCommentModal} from "../../../common/modals/create-comment-modal/create-comment-modal";
import {CommentRequestData} from "../../../api/book-api";
import {BaseModal} from "../../../common/modals/base-modal/base-modal";
import {OrderModal} from "../../../common/modals/order-modal/order-modal";
import {Breadcrumbs} from "../../../common/breadcrumbs/breadcrumbs";
import {Notification} from "../../../common/notification/notification";
import {onClickClearNotificationHandler} from "../../../utils/onClickClearNotificationHandler";


export const BookPage = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const {bookId} = useParams()
    const book = useAppSelector(state => state.book.book)
    const user = useAppSelector(state => state.user.userProfile)
    const userId = useAppSelector(state => state.user.userId)
    const avatar = useAppSelector(state => state.user.avatar)
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
    let bookingByMe = localStorage.getItem('booking');
    let commentByMe = localStorage.getItem('commentByMe');
    if(commentByMe) {
        commentByMe = JSON.parse(commentByMe)
    }
    let commentMessage = localStorage.getItem('commentMessage');
    let commentRating = localStorage.getItem('commentRating');
    let commentDate = localStorage.getItem('commentDate');
    let bookingDate = localStorage.getItem('bookingDate');

    const onClickCreateCommentHandler = (rating: null | number, comment: string) => {
        if (bookId) {
            const commentData: CommentRequestData = {
                data: {
                    rating: rating ? rating : 0,
                    text: comment,
                    book: bookId,
                }
            }
            if (commentByMe === bookId) {
                dispatch(updateCommentTC(commentData))
            } else {
                dispatch(createCommentTC(commentData))
            }
        }
    }

    let myComment = {
        id: 999,
        rating: Number(commentRating),
        text: commentMessage?.substring(1, commentMessage.length-1),
        createdAt: commentDate && JSON.parse(commentDate),
        user: {
            commentUserId: userId,
            firstName: user?.firstName,
            lastName: user?.lastName,
            avatarUrl: avatar,
        }}

    let commentsForBook = book?.comments?.slice()
    if (commentByMe === bookId && myComment) {
        // @ts-ignore
        commentsForBook?.push(myComment)
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
                onClickHandler={() => onClickClearNotificationHandler(dispatch, "createCommentSuccess")}/>}
        {!createCommentSuccess && status === 'failed' &&
            <Notification
                status='failed'
                message='Оценка не была отправлена. Попробуйте позже!'
                onClickHandler={() => onClickClearNotificationHandler(dispatch, "createCommentSuccess")}/>}

        {updateCommentSuccess && status === 'succeeded' &&
            <Notification
                status='succeeded'
                message='Спасибо, что нашли время изменить оценку!'
                onClickHandler={() => onClickClearNotificationHandler(dispatch, "updateCommentSuccess")}/>}
        {!updateCommentSuccess && status === 'failed' &&
            <Notification
                status='failed'
                message='Изменения не были сохранены. Попробуйте позже!'
                onClickHandler={() => onClickClearNotificationHandler(dispatch, "updateCommentSuccess")}/>}

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

        <Breadcrumbs categories={book?.categories} title={book?.title}/>

        <div className={css.bookPage__info}>
            <div className={css.bookPage__info_cover}>
                {book?.images?.length && <BookCoverImage id={book?.id} image={book?.images}/>}
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
                        orderByAuthUser={bookingByMe !== null && +JSON.parse(bookingByMe) === book?.id}
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
                                className={css.bookPage__review_blockTitle_count}>{commentsForBook?.length}</span>
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

                    {commentsForBook?.reverse().map((r) => <Review key={r.id}
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
                className={commentByMe === bookId ? `${css.bookPage__review_button} ${css.bookPage__review_button_unActive}` : `${css.bookPage__review_button} ${css.bookPage__review_button_active}`}
                onClick={() => setCreateCommentModalIsOpen(true)}
            > {commentByMe === bookId ? 'изменить оценку' : 'оценить книгу'}
            </button>

        </div>
        {orderModalIsOpen &&
            <BaseModal
                onCloseHandler={() => setOrderModalIsOpen(false)}>
                <OrderModal
                    customerId={bookingByMe !== null && +JSON.parse(bookingByMe) === book.id}
                    dateOrder={bookingDate}
                    onCloseHandler={() => setOrderModalIsOpen(false)}
                    onClickCreateHandler={(selectedDay) => dispatch(createOrderTC(book.id, bookingByMe, selectedDay))}
                    onClickUpdateHandler={(selectedDay) => dispatch(updateOrderTC(book.id, bookingByMe, selectedDay))}
                    onClickDeleteHandler={() => dispatch(deleteOrderTC(book.id, bookingByMe))}
                />
            </BaseModal>}

        {createCommentModalIsOpen && commentByMe === bookId && commentRating &&
            <BaseModal
                onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                <CreateCommentModal
                    commentRating={+commentRating}
                    commentText={commentMessage}
                    onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                    onClickHandler={onClickCreateCommentHandler}/>
            </BaseModal>}

        {createCommentModalIsOpen && (!commentByMe || commentByMe !== bookId) &&
            <BaseModal
                onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                <CreateCommentModal
                    onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                    onClickHandler={onClickCreateCommentHandler}/>
            </BaseModal>}
    </section>
}





