import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import css from './book-page.module.scss'
import {Rating} from '../../../features/rating';

import {BookInfo} from './book-info';
import {Review} from './review';
import {Button} from '../../../features/button';
import reviewArrowUpIcon from '../../../assets/img/review-arrow-up.svg';
import {useAppSelector} from "../../../hooks/hooks";
import {BookSlider} from "./slider";
import {BookCoverImage} from "./book-image/book-cover-image";

export const BookPage = () => {

    const params = useParams()

   // const book = useAppSelector((state) => state.books.books.find(book => book.bookId === params.bookId))
    const reviews = useAppSelector((state) => state.reviews.reviews)

    const [showReviews, setShowReviews] = useState(true)

    return <div>BOOK PAGE</div>

            /*  <section className={css.wrapper}>

        {book &&
            <>
                <div className={css.bookPage__path}>
                    <span>{book.categoryForPath}</span><span>/</span><span>{book.title}</span>
                </div>
                <div className={css.bookPage__info}>
                    <div className={css.bookPage__info_cover}>

                        {book.image.length > 1 && <BookCoverImage image={book.image}/>
                           /!*
                           : <BookSlider image={book.image}
                           *!/
                        }

                    </div>

                    <div className={css.bookPage__info_about}>

                        <div className={css.bookPage__info_title}>
                            {book.title}
                        </div>

                        <div className={css.bookPage__info_author}>
                            {book.author}, {book.year}
                        </div>

                        <div className={css.bookPage__info_button}>
                            <Button
                                buttonStyle={{
                                    fontSize: '16px',
                                    lineHeight: '24px'
                                }}
                                isBooked={book.isBooked}
                                bookedTill={book.bookedTill}/>
                        </div>

                    </div>

                    <div className={css.bookPage__info_summary}>
                        <div className={css.bookPage__info_summary_title}>
                            О книге
                        </div>
                        <div className={css.bookPage__info_summary_content}>
                            <p>
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
                                publisher="Питер"
                                year={book.year}
                                pages={288}
                                bookBinding="Мягкая обложка"
                                size="70х100"
                                category="Компьютерная литература"
                                weight={370}
                                isbn="978-5-4461-0923-4"
                                manufacture="ООО«Питер Мейл». РФ, 198206, г.Санкт-Петербург, Петергофское ш, д.73, лит. А29"/>
                        </div>
                    </div>

                    <div>

                        <div className={css.bookPage__review_blockTitle}>

                            <div className={css.bookPage__review_blockTitle_toggle}>
                                <div>
                                    <span>Отзывы</span>
                                    <span
                                        className={css.bookPage__review_blockTitle_count}>{reviews.length}</span>
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

                            {reviews.map((r) => <Review key={r.reviewId}
                                                        userPhoto={r.userPhoto}
                                                        name={r.userName}
                                                        date={r.date}
                                                        rating={r.rating}
                                                        message={r.message}/>
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
            </>
        }



    </section>*/
}




