import React from 'react';
import star from '../../../assets/img/star.svg'
import defaultStar from '../../../assets/img/default-star.svg'
import css from './star.module.scss'

type StarPropsType = {
    selected: boolean
}

export const Star = (props: StarPropsType) => <img
    src={props.selected ? star : defaultStar}
    alt="star"
    className={css.star}/>




