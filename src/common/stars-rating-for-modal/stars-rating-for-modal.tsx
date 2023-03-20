import React from 'react';
import emptyStar from '../../assets/img/empty-star.svg'
import fullStar from '../../assets/img/full-star.svg'
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

                const onClickHandler = () => {
                    setRating(value)
                    console.log(value)
                }


                return (
                    <div key={value}>


                        <img
                            alt='star'
                            src={(rating && rating >= value )? fullStar : emptyStar }
                            onClick={onClickHandler}
                        />
                    </div>
                )
            })}
        </div>
    );
};

