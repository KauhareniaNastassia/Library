import React from 'react';
import emptyStar from '../../assets/img/empty-star.svg'
import css from './stars-rating-for-modal.module.scss'

type StarsRatingForModalPropsType = {
    rating: null | number
    setRating: any
}

export const StarsRatingForModal:React.FC<StarsRatingForModalPropsType> = ({rating, setRating}) => {
    return (
        <div className={css.stars_wrapper}>
            {[...Array(5)].map((star, index) => {
                const value = index + 1;

                return (
                    <div key={value}>

                        <img src={emptyStar}/>
                    </div>
                )
            })}
        </div>
    );
};

