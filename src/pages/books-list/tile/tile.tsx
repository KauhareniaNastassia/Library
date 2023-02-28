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
import {BookListResponseType} from "../../../api/books-list-api";
import {converterURLImages} from "../../../hooks/converter-URL-images";
import {instance} from "../../../api/instance";

type TilePropsType = {
    selectCategoryBooks: BookListResponseType[]
}

export const Tile: React.FC<TilePropsType> = ({selectCategoryBooks}) => {

    return <div className={css.wrapper_tile}>

        {selectCategoryBooks.map((item) =>
            <div key={item.id}>
                <NavLink to={`/books/${item.categories}/${item.id}`}>

                    <div

                        className={css.bookList__item}
                        data-test-id="card">


                        <div className={css.bookList__item_coveWrapper}>

                            <img
                                src={item.image?.url.length
                                    ? `https://strapi.cleverland.by${item.image.url}`
                                    : defaultBookCover}
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
                                isBooked={item.booking?.order}//забронирована
                                dateHanded={item.delivery?.dateHandedFrom?.toString()}
                                handed={item.delivery?.handed}
                            />
                        </div>
                    </div>
                </NavLink>

            </div>
        )
        }
    </div>

}

