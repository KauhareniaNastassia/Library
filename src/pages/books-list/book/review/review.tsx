import React from 'react';
import css from './review.module.scss'

import defaultUserPhoto from '../../../../assets/img/default-user-photo.svg'
import {Rating} from '../../../../features/rating';

type ReviewPropsType = {
    userPhoto: string | null
    firstName: string
    lastName: string
    date: string
    rating: number
    message: string | null
}

export const Review: React.FC<ReviewPropsType> = ({
                                                      userPhoto,
                                                      firstName,
                                                      lastName,
                                                      date,
                                                      rating,
                                                      message
                                                  }) => <section className={css.wrapper}>

    <div className={css.review__userInfo}>
        <img
            src={userPhoto ? userPhoto : defaultUserPhoto}
            alt="user avatar"
            className={css.review__userInfo_avatar}/>
        <div className={css.review__userInfo_userData}>
            <span className={css.review__userInfo_name}>{firstName}</span>
            <span className={css.review__userInfo_name}>{lastName}</span>
            <span className={css.review__userInfo_date}>{date}</span>
        </div>

    </div>
    <div>
        <Rating rating={rating}/>
    </div>
    {message ?
        <div className={css.review__message}>
            {message}
        </div> : ''}


</section>






