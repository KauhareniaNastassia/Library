import React from 'react';
import {NavLink} from "react-router-dom";
import css from "./list-item.module.scss";
import defaultBookCover from "../../../../assets/img/default-book-cover.svg";
import {Rating} from "../../../../features/rating";
import {Button} from "../../../../features/button";
import {AuthorsType, BookingType, BookListResponseType, DeliveryType, ImageType} from "../../../../api/books-list-api";
import {UserBookingType, UserDeliveryType} from "../../../../api/user-api";
import {RedMask} from "../../../profile/red-mask/red-mask";
import {useAppSelector} from "../../../../hooks/hooks";

type ListItemPropsType = {
    image?: ImageType | null
    title: string | null
    authors: AuthorsType | null | undefined
    issueYear: string | null
    rating: number | null
    booking?: BookingType | null
    delivery?: DeliveryType | null
    onClickHandler?: () => void
    //==props for ordered book from profile
    bookingImage?: string | null
    bookingForProfile?: UserBookingType | null
    //==props for delivered book from profile
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
                                                          bookingImage, bookingForProfile,
                                                          onClickHandler,
                                                          deliveryForProfile
                                                      }) => {
    const userId = useAppSelector(state => state.auth.profile?.id)

    return (
        /*<div key={key}>

            <NavLink to={`/books/${item.categories}/${item.id}`}>
*/
        <div className={css.bookList__item}>



            <div className={css.bookList__item_coverWrapper}>
                <img src={image?.url.length
                    ? `https://strapi.cleverland.by${image.url}`
                    : bookingImage
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
                        <Button
                            isBooked={booking?.order}//забронирована
                            dateHanded={delivery?.dateHandedFrom?.toString()}
                            handed={delivery?.handed}
                            orderByAuthUser={booking?.customerId === userId}
                            onClickHandler={onClickHandler}

                            bookingForProfile={bookingForProfile}
                            deliveryForProfile={deliveryForProfile}
                        />
                    </div>
                </div>
            </div>
        </div>
        /* </NavLink>
     </div>*/
    );
};

