import React, {CSSProperties} from 'react';
import css from './button.module.scss'
import {format} from 'date-fns'
import {bool} from "yup";

type ButtonPropsType = {
    isBooked?: boolean
    dateHanded?: string
    handed?: boolean
    buttonStyle?: CSSProperties
    onClickHandler?: () => void
    orderByAuthUser?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({isBooked, dateHanded, handed, buttonStyle, onClickHandler, orderByAuthUser}) => {

    let arr = dateHanded?.slice(5, 10).split('-');
    if (arr) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    let date = arr?.join('.')

    if (orderByAuthUser) {
        return <button
            onClick={onClickHandler}
            type="button"
            style={buttonStyle}
            className={css.button_reserved_by_user}>забронирована</button>
    }
    if (isBooked) {
        return <button
            onClick={onClickHandler}
            type="button"
            style={buttonStyle}
            className={css.button_reserved}>забронирована</button>
    }
    if (handed === true) {
        return <button
            onClick={onClickHandler}
            type="button"
            style={buttonStyle}
            className={css.button_unactive}>занята до {date} </button>
    }

    return <button
        onClick={onClickHandler}
        type="button"
        style={buttonStyle}
        className={css.button_active}> забронировать </button>


}


