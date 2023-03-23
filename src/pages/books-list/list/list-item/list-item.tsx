import React from 'react';
import {NavLink} from "react-router-dom";
import css from "./list-item.module.scss";
import defaultBookCover from "../../../../assets/img/default-book-cover.svg";
import {Rating} from "../../../../features/rating";
import {Button} from "../../../../features/button";
import {AuthorsType, BookingType, BookListResponseType, DeliveryType, ImageType} from "../../../../api/books-list-api";
import {UserBookingType, UserDeliveryType} from "../../../../api/user-api";

type ListItemPropsType = {
    image?: ImageType | null
    title: string | null
    authors: AuthorsType | null | undefined
    issueYear: string | null
    rating: number | null
    booking?: BookingType | null
    delivery?: DeliveryType | null

    bookingImage?: string | null
    bookingForProfile?: UserBookingType | null
    deliveryForProfile?: UserDeliveryType | null
}

export const ListItem: React.FC<ListItemPropsType> = ({
                                                          image,
                                                          rating,
                                                          authors,
                                                          title,
                                                          issueYear,
                                                          delivery,
                                                          booking,
                                                          bookingForProfile,
                                                          deliveryForProfile
                                                      }) => {
    return (
        /*<div key={key}>

            <NavLink to={`/books/${item.categories}/${item.id}`}>
*/
        <div className={css.bookList__item}>

            <div className={css.bookList__item_coverWrapper}>
                <img src={image?.url.length
                    ? `https://strapi.cleverland.by${image.url}`
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
                        <Button
                            isBooked={booking?.order}//забронирована
                            dateHanded={delivery?.dateHandedFrom?.toString()}
                            handed={delivery?.handed}
                            bookingForProfile={bookingForProfile}
                            //deliveryForProfile={deliveryForProfile}
                        />
                    </div>
                </div>
            </div>
        </div>
        /* </NavLink>
     </div>*/
    );
};

