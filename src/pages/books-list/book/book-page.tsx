import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import css from './book-page.module.scss'
import {Rating} from '../../../features/rating';

import {BookInfo} from './book-info';
import {Review} from './review';
import {Button} from '../../../features/button';
import reviewArrowUpIcon from '../../../assets/img/review-arrow-up.svg';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {BookCoverImage} from "./book-image/book-cover-image";
import {getBookTC} from "../../../redux/book-reducer";
import BaseModal from "../../../common/modals/base-modal/base-modal";
import CreateCommentModal from "../../../common/modals/create-comment-modal/create-comment-modal";

export const BookPage = () => {
    const dispatch = useAppDispatch()
    const {bookId, category} = useParams()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const book = useAppSelector((state) => state.book.book)
    const navigate = useNavigate()

    const [showReviews, setShowReviews] = useState(true)
    const [createCommentModalIsOpen, setCreateCommentModalIsOpen] = useState(false)


    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getBookTC(Number(bookId)))
        } else {
            navigate('/auth')
        }

    }, [isLoggedIn, dispatch, bookId])


    return <section className={css.wrapper}>
        <div className={css.bookPage__path}>
            <Link to={`/books/${category}`}><span>{book.categories}</span></Link>
            <span>/</span><span>{book.title}</span>
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
                        onClickHandler={() => setCreateCommentModalIsOpen(true)}
                        buttonStyle={{
                            fontSize: '16px',
                            lineHeight: '24px'
                        }}
                        isBooked={book.booking?.order}//забронирована
                        dateHanded={book.delivery?.dateHandedFrom?.toString()}
                        handed={book.delivery?.handed}/>
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

                    {/*<p>
                                Алгоритмы— это всего лишь пошаговые алгоритмы решения задач, и
                                большинство таких задач уже были кем-то решены, протестированы и
                                проверены. Можно, конечно, погрузится в глубокую философию
                                гениального
                                Кнута, изучить многостраничные фолианты с доказательствами и
                                обоснованиями, но хотите ли вы тратить на это свое время?
                            </p>
                            <p>
                                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что
                                алгоритмы — это просто. А грокать алгоритмы — это веселое и
                                увлекательное занятие.
                            </p>*/}
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
                            onClick={() => setShowReviews(!showReviews)}
                            data-test-id='button-hide-reviews'>

                            <img
                                src={reviewArrowUpIcon}
                                alt='review-arrow-up-icon'/>
                        </button>

                    </div>

                </div>

                {showReviews && <div className={css.bookPage__review_items}>

                    {book.comments?.map((r) => <Review key={r.id}
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
                data-test-id='button-rating'
            > оценить книгу
            </button>


        </div>
        {createCommentModalIsOpen &&
            <BaseModal
                onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                <CreateCommentModal/>
            </BaseModal>}


    </section>
}




