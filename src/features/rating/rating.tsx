import React, {useEffect} from 'react';
import css from './rating.module.scss'
import {Star} from './star/star';
import star from "../../assets/img/star.svg";
import defaultStar from "../../assets/img/default-star.svg";

type RatingPropsType = {
    rating: number | null
}


export const Rating: React.FC<RatingPropsType> = ({...props}) => <div className={css.rating}>
        {props.rating ? (
                <div>
                    {[...Array(5)].map((_, index) => (
                        <img
                            // @ts-ignore
                            src={props.rating >= index + 1 ? star : defaultStar}
                            alt='star'
                            className={css.star}
                            key={`${index + 1}`}
                        />
                    ))}
                </div>
            )
            : (
                <div className={css.message}>ещё нет оценок</div>
            )
        }
    </div>
