import React from 'react';
import css from "./tile-item.module.scss";
import defaultBookCover from "../../../../assets/img/default-book-cover.svg";
import {Rating} from "../../../../features/rating";
import {Button} from "../../../../features/button";
import {AuthorsType, BookingType, DeliveryType, ImageType} from "../../../../api/books-list-api";

type TileItemPropsType = {
    image?: ImageType | null
    title: string
    authors: AuthorsType | null | undefined
    issueYear: string | null
    rating: number | null
    booking?: BookingType | null
    delivery?: DeliveryType | null
}

const TileItem: React.FC<TileItemPropsType> = ({
                                                   image,
                                                   rating,
                                                   authors,
                                                   title,
                                                   issueYear,
                                                   delivery, booking
                                               }) => {

    return (
        <div className={css.bookList__item}>

            <div className={css.bookList__item_coveWrapper}>

                <img
                    src={image?.url.length
                        ? `https://strapi.cleverland.by${image.url}`
                        : defaultBookCover}
                    alt="Book cover"
                    className={css.bookList__item_cover}/>
            </div>

            <div className={css.bookList__item_rating}>
                <Rating rating={rating}/>
            </div>

            <div className={css.bookList__item_info}>
                <div className={css.bookList__item_info_title}>
                    {title.length > 54 ? `${title.substring(0, 54).trim()}...` : title}
                </div>

                <div className={css.bookList__item_info_author}>
                    {authors}, {issueYear}
                </div>
            </div>

            <div className={css.bookList__item_button}>
                <Button
                    isBooked={booking?.order}//забронирована
                    dateHanded={delivery?.dateHandedFrom?.toString()}
                    handed={delivery?.handed}
                />
            </div>
        </div>
    );
};

export default TileItem;