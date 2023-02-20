import React from 'react';
import css from './review.module.scss'

import defaultUserPhoto from '../../../../assets/img/default-user-photo.svg'
import {Rating} from '../../../../features/rating';

type ReviewPropsType = {
    userPhoto: string
    name: string
    date: string
    rating: number
    message: string
}

export const Review = (props: ReviewPropsType) => <section className={css.wrapper}>

    <div className={css.review__userInfo}>
        <img
            src={props.userPhoto ? props.userPhoto : defaultUserPhoto}
            alt="user avatar"
            className={css.review__userInfo_avatar}/>
        <div className={css.review__userInfo_userData}>
            <span className={css.review__userInfo_name}>{props.name}</span>
            <span className={css.review__userInfo_date}>{props.date}</span>
        </div>

    </div>
    <div>
        <Rating rating={props.rating}/>
    </div>
    {props.message ?
        <div className={css.review__message}>
            {props.message}
        </div> : ''}


</section>






