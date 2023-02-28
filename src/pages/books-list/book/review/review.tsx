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
                                                  }) => {

    let arr = date?.slice(0, 10).split('-');
    if (arr) {
        [arr[0], arr[2]] = [arr[2], arr[0]];
        if(arr[1] === '01') {
          arr[1] = 'января'
        } else if(arr[1] === '02') {
            arr[1] = 'февраля'
        } else if(arr[1] === '03') {
            arr[1] = 'марта'
        } else if(arr[1] === '04') {
            arr[1] = 'апреля'
        } else if(arr[1] === '05') {
            arr[1] = 'мая'
        } else if(arr[1] === '06') {
            arr[1] = 'июня'
        } else if(arr[1] === '07') {
            arr[1] = 'июля'
        } else if(arr[1] === '08') {
            arr[1] = 'августа'
        } else if(arr[1] === '09') {
            arr[1] = 'сентября'
        } else if(arr[1] === '10') {
            arr[1] = 'октября'
        } else if(arr[1] === '11') {
            arr[1] = 'ноября'
        } else if(arr[1] === '12') {
            arr[1] = 'декабря'
        }
    }

    let newDate = arr?.join(' ')

    return (
        <section className={css.wrapper}>

            <div className={css.review__userInfo}>
                <img
                    src={userPhoto ? userPhoto : defaultUserPhoto}
                    alt="user avatar"
                    className={css.review__userInfo_avatar}/>
                <div className={css.review__userInfo_userData}>
                    <span className={css.review__userInfo_name}>{firstName}</span>
                    <span className={css.review__userInfo_name}>{lastName}</span>
                    <span className={css.review__userInfo_date}>{newDate}</span>
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

    )
}





