import React, {CSSProperties} from 'react';
import css from './button.module.scss'

type ButtonPropsType = {
    isBooked?: boolean
    bookedTill?: string
    buttonStyle?: CSSProperties
}

export const Button = (props: ButtonPropsType) => {

    if (props.isBooked) {
        return <button
            type="button"
            style={props.buttonStyle}
            className={css.button_reserved}>забронирована</button>
    }
    if (!props.isBooked && props.bookedTill !== '') {
        return <button
            type="button"
            style={props.buttonStyle}
            className={css.button_unactive}>занята до {props.bookedTill} </button>
    }

    return <button
        type="button"
        style={props.buttonStyle}
        className={css.button_active}> забронировать </button>


}


