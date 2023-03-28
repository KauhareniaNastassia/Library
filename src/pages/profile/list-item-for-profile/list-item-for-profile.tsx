import React from 'react';
import css from "./list-item-for-profile.module.scss";
import defaultBookCover from "../../../assets/img/default-book-cover.svg";
import {AuthorsType} from "../../../api/books-list-api";
import {UserDeliveryType} from "../../../api/user-api";
import {Rating} from "../../../features/rating";
import {formatDateForButton} from "../../../utils/helpers/format-date-for-button/format-date-for-button";


type ListItemPropsType = {
    bookingImage?: string | null
    title: string
    authors: AuthorsType | null | undefined
    issueYear: string | null
    rating: number | null
    onClickHandler?: () => void
    deliveryForProfile?: UserDeliveryType | null
}

export const ListItemForProfile: React.FC<ListItemPropsType> = ({
                                                                    rating,
                                                                    authors,
                                                                    title,
                                                                    issueYear,
                                                                    bookingImage,
                                                                    deliveryForProfile,
                                                                    onClickHandler
                                                                }) => {

    return (
        <div className={css.bookList__item}>

            <div className={css.bookList__item_coverWrapper}>
                <img src={bookingImage
                    ? `https://strapi.cleverland.by${bookingImage}`
                    : defaultBookCover}
                     alt="Book cover"
                     className={css.bookList__item_cover}/>
            </div>

            <div className={css.bookList__item_infoWrapper}>

                <div className={css.bookList__item_info}>
                    <div className={css.bookList__item_info_title}>
                        {title}
                    </div>

                    <div className={css.bookList__item_info_author}>
                        {authors}, {issueYear}
                    </div>
                </div>

                <div className={css.bookList__item_buttonBlock}>
                    <div className={css.bookList__item_rating}>
                        <Rating rating={rating}/>
                    </div>

                    <div className={css.bookList__item_button}>
                        {
                            deliveryForProfile
                                ? <div className={css.deliveryInfo}>
                                    возврат {formatDateForButton(deliveryForProfile.dateHandedTo)}
                                </div>
                                : <button
                                    className={css.delete_order_button}
                                    type='button'
                                    onClick={onClickHandler}>
                                    Отменить бронь
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


