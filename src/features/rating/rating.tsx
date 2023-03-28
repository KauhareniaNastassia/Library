import React from 'react';
import css from './rating.module.scss'
import star from "../../assets/img/star.svg";
import defaultStar from "../../assets/img/default-star.svg";

type RatingPropsType = {
    rating: number | null
}

export const Rating: React.FC<RatingPropsType> = ({
                                                      rating
                                                  }) => <div className={css.rating}>
    {rating
        ? (<div className={css.rating__stars}>
                {[...Array(5)].map((_, index) => (
                    <img
                        src={rating && rating >= index + 1 ? star : defaultStar}
                        alt='star'
                        className={css.star}
                        key={`${index + 1}`}
                    />
                ))}
            </div>
        )
        :
        (
            <div className={css.message}>ещё нет оценок</div>
        )
    }
</div>
