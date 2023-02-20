import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import css from './list.module.scss'
import bookCover from '../../../assets/img/book-cover.png'
import defaultBookCover from '../../../assets/img/default-book-cover.svg'
import {AppRootStateType} from '../../../redux/store';
import {BookType, getBooksTC} from '../../../redux/books-reducer';
import {Rating} from '../../../features/rating';
import {Button} from '../../../features/button';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";


export const List = () => {
    const dispatch = useAppDispatch()
    const books = useAppSelector((state) => state.books.books)



    useEffect( () => {
        dispatch(getBooksTC())
    }, [dispatch])
    return <div className={css.wrapper_list}>

        {books.map((item) =>

            <div key={item.id}>

                <NavLink to={`/books/${item.categories}/${item.id}`}>

                    <div className={css.bookList__item}>

                        <div className={css.bookList__item_coverWrapper}>
                            <img src={item.image?.url.length ? bookCover : defaultBookCover}
                                 alt="Book cover"
                                 className={css.bookList__item_cover}/>
                        </div>

                        <div className={css.bookList__item_infoWrapper}>

                            <div className={css.bookList__item_info}>
                                <div className={css.bookList__item_info_title}>
                                    {item.title}
                                </div>

                                <div className={css.bookList__item_info_author}>
                                    {item.authors}, {item.issueYear}
                                </div>
                            </div>


                            <div className={css.bookList__item_buttonBlock}>
                                <div className={css.bookList__item_rating}>
                                    <Rating rating={item.rating}/>
                                </div>

                                <div className={css.bookList__item_button}>
                                    <Button
                                        isBooked={item.booking?.order}
                                        bookedTill={item.booking?.dateOrder?.toString()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        )
        }
    </div>
}
