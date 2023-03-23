import React from 'react';
import {NavLink} from "react-router-dom";
import css from "./list-item.module.scss";
import defaultBookCover from "../../../../assets/img/default-book-cover.svg";
import {Rating} from "../../../../features/rating";
import {Button} from "../../../../features/button";
import {
    AuthorsType,
    BookingType, BookListResponseType,
    CategoriesType,
    DeliveryType,
    HistoriesType,
    ImageType
} from "../../../../api/books-list-api";

type ListItemPropsType = {
    item: BookListResponseType
    key?: number

}

export const ListItem: React.FC<ListItemPropsType> = ({
                                                          key,
                                                         item
                                                      }) => {
    return (
        <div key={key}>

            <NavLink to={`/books/${item.categories}/${item.id}`}>

                <div className={css.bookList__item}>

                    <div className={css.bookList__item_coverWrapper}>
                        <img src={item.image?.url.length
                            ? `https://strapi.cleverland.by${item.image.url}`
                            : defaultBookCover}
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
                                    isBooked={item.booking?.order}//забронирована
                                    dateHanded={item.delivery?.dateHandedFrom?.toString()}
                                    handed={item.delivery?.handed}/>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

