import React, {useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import css from './list.module.scss'
import bookCover from '../../../assets/img/book-cover.png'
import defaultBookCover from '../../../assets/img/default-book-cover.svg'
import {getBooksTC} from '../../../redux/books-reducer';
import {Rating} from '../../../features/rating';
import {Button} from '../../../features/button';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {BookListResponseType} from "../../../api/books-list-api";

type ListPropsType = {
    selectCategoryBooks: BookListResponseType[]
}

export const List:React.FC<ListPropsType> = ({selectCategoryBooks}) => {

    return <div className={css.wrapper_list}>

        {selectCategoryBooks.map((item) =>

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
