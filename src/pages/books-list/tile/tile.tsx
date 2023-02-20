import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getBooksTC} from '../../../redux/books-reducer';
import css from './tile.module.scss'
import bookCover from '../../../assets/img/book-cover.png'
import defaultBookCover from '../../../assets/img/default-book-cover.svg'
import {Rating} from '../../../features/rating';
import {Button} from '../../../features/button';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";


export const Tile = () => {
    const dispatch = useAppDispatch()
    const books = useAppSelector((state) => state.books.books)



    useEffect( () => {
       dispatch(getBooksTC())
    }, [dispatch])

    return <div className={css.wrapper_tile}>

        {books.map((item) =>
            <div key={item.id}>
                <NavLink to={`/books/${item.categories}/${item.id}`}>

                    <div

                        className={css.bookList__item}
                        data-test-id="card">


                        <div className={css.bookList__item_coveWrapper}>
                            <img src={item.image?.url.length ? bookCover : defaultBookCover}
                                 alt="Book cover"
                                 className={css.bookList__item_cover}/>
                        </div>

                        <div className={css.bookList__item_rating}>
                            <Rating rating={item.rating}/>
                        </div>

                        <div className={css.bookList__item_info}>
                            <div className={css.bookList__item_info_title}>
                                {item.title.length > 54 ? `${item.title.substring(0, 54).trim()}...` : item.title}
                            </div>

                            <div className={css.bookList__item_info_author}>
                                {item.authors}, {item.issueYear}
                            </div>
                        </div>

                        <div className={css.bookList__item_button}>
                            <Button
                                isBooked={item.booking?.order}
                                bookedTill={item.booking?.dateOrder?.toString()}/>
                        </div>
                    </div>
                </NavLink>

            </div>
        )
        }
    </div>

}

