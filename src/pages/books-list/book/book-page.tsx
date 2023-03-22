import React, {useEffect, useState} from 'react';
import {Link, NavLink, useNavigate, useParams} from "react-router-dom";
import css from './book-page.module.scss'
import {Rating} from '../../../features/rating';

import {BookInfo} from './book-info';
import {Review} from './review';
import {Button} from '../../../features/button';
import reviewArrowUpIcon from '../../../assets/img/review-arrow-up.svg';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {BookCoverImage} from "./book-image/book-cover-image";
import {
    createCommentTC, createOrderTC,
    getBookTC,
    setCreateCommentErrorAC,
    setCreateCommentSuccessAC
} from "../../../redux/book-reducer";

import CreateCommentModal from "../../../common/modals/create-comment-modal/create-comment-modal";
import {Notification} from "../../../common/notification/notification";
import {CommentRequestData, CreateBookingRequestDataType} from "../../../api/book-api";
import {BaseModal} from "../../../common/modals/base-modal/base-modal";
import {getBooksTC} from "../../../redux/books-reducer";
import OrderModal from "../../../common/modals/order-modal/order-modal";

export const BookPage = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const book = useAppSelector((state) => state.book.book)
    const status = useAppSelector(state => state.app.status)
    const createCommentError = useAppSelector(state => state.book.createCommentError)
    const createCommentSuccess = useAppSelector(state => state.book.createCommentSuccess)
    const userId = useAppSelector(state => state.auth.profile?.id)
    const createOrderStatus = useAppSelector((state) => state.book.createOrderStatus)
    const createOrderError = useAppSelector((state) => state.book.createOrderError)

    const dispatch = useAppDispatch()
    const {bookId, category} = useParams()
    const navigate = useNavigate()

    const [showReviews, setShowReviews] = useState(false)
    const [createCommentModalIsOpen, setCreateCommentModalIsOpen] = useState(false)
    const [orderModalIsOpen, setOrderModalIsOpen] = useState(false)

    const onClickNavigateToCategoryBooksHandler = () => {
        navigate(`/books/${category}`);
    }

    const onClickClearNotificationHandler = () => {
        if (createCommentSuccess) {
            dispatch(setCreateCommentSuccessAC(null))
        } else if (createCommentError) {
            dispatch(setCreateCommentErrorAC(null))
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
            dispatch(createCommentTC(commentData))
        }
    }

    const onClickCreateNewOrderHandler = (date: string) => {

        if (bookId && userId) {
            const data: CreateBookingRequestDataType = {
                data: {
                    order: true,
                    dateOrder: date,
                    book: bookId,
                    customer: userId.toString()
                }
            }
            dispatch(createOrderTC(data))
            //dispatch(createNewOrderTC(data))
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

        {createCommentSuccess !== null && status === 'succeeded' &&
            <Notification
                status='succeeded'
                message='Спасибо,что нашли время оценить книгу!'
                onClickHandler={onClickClearNotificationHandler}/>}
        {createCommentError && status === 'failed' &&
            <Notification
                status='failed'
                message='Оценка не была отправлена. Попробуйте позже!'
                onClickHandler={onClickClearNotificationHandler}/>}
        {createOrderStatus === 200 && status === 'succeeded' &&
            <Notification
                status='succeeded'
                message='Книга забронирована. Подробности можно посмотреть на странице Профиль'
                onClickHandler={onClickClearNotificationHandler}/>}
        {createOrderError && status === 'failed' &&
            <Notification
                status='failed'
                message='Что-то пошло не так, книга не забронирована. Попробуйте позже!'
                onClickHandler={onClickClearNotificationHandler}/>}



        <div className={css.bookPage__path}>
            <span onClick={() => navigate(-1)}>
                <span>{book.categories ? book.categories[0] : 'all'}</span>
            </span>

            <span>/</span>
            <span>{book.title}</span>
        </div>
        <div className={css.bookPage__info}>
            <div className={css.bookPage__info_cover}>

                {book.images?.length && <BookCoverImage image={book.images}/>
                    /*
                    : <BookSlider image={book.image}
                    */
                }

            </div>

            <div className={css.bookPage__info_about}>

                <div className={css.bookPage__info_title}>
                    {book.title}
                </div>

                <div className={css.bookPage__info_author}>
                    {book.authors}, {book.issueYear}
                </div>

                <div className={css.bookPage__info_button}>
                    <Button
                        buttonStyle={{
                            fontSize: '16px',
                            lineHeight: '24px'
                        }}
                        orderByAuthUser={book.booking?.customerId === userId}
                        isBooked={book.booking?.order}//забронирована
                        dateHanded={book.delivery?.dateHandedFrom?.toString()}
                        handed={book.delivery?.handed}
                        onClickHandler={() => setOrderModalIsOpen(true)}/>
                </div>

            </div>

            <div className={css.bookPage__info_summary}>
                <div className={css.bookPage__info_summary_title}>
                    О книге
                </div>
                <div className={css.bookPage__info_summary_content}>
                    <p>
                        {book.description}
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
                        <Rating rating={book.rating}/>
                    </div>
                    <div>{book.rating}</div>
                </div>

            </div>

            <div>
                <div className={css.bookPage__review_blockTitle}>
                    <span>Подробная информация</span>
                </div>
                <div>
                    <BookInfo
                        publish={book.publish}
                        year={book.issueYear}
                        pages={book.pages}
                        cover={book.cover}
                        format={book.format}
                        category={book.categories}
                        weight={book.weight}
                        isbn={book.ISBN}
                        producer={book.producer}/>
                </div>
            </div>

            <div>

                <div className={css.bookPage__review_blockTitle}>

                    <div className={css.bookPage__review_blockTitle_toggle}>
                        <div>
                            <span>Отзывы</span>
                            <span
                                className={css.bookPage__review_blockTitle_count}>{book.comments?.length}</span>
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

                    {book.comments && [...book.comments].reverse().map((r) => <Review key={r.id}
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
                className={css.bookPage__review_button}
                onClick={() => setCreateCommentModalIsOpen(true)}
                disabled={book.comments?.map(comment => comment.user.commentUserId === userId).includes(true)}
            > оценить книгу
            </button>

        </div>
        {orderModalIsOpen &&
            <BaseModal
                onCloseHandler={() => setOrderModalIsOpen(false)}>
                <OrderModal
                    onCloseHandler={() => setOrderModalIsOpen(false)}
                    onClickHandler={onClickCreateNewOrderHandler}/>
            </BaseModal>}

        {createCommentModalIsOpen &&
            <BaseModal
                onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                <CreateCommentModal
                    onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                    onClickHandler={onClickCreateCommentHandler}/>
            </BaseModal>}
    </section>
}




