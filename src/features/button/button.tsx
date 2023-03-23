import React, {CSSProperties} from 'react';
import css from './button.module.scss'
import {format} from 'date-fns'
import {bool} from "yup";
import {UserBookingType, UserDeliveryType} from "../../api/user-api";

type ButtonPropsType = {
    isBooked?: boolean
    dateHanded?: string
    handed?: boolean
    buttonStyle?: CSSProperties
    onClickHandler?: () => void
    orderByAuthUser?: boolean
    bookingForProfile?: UserBookingType | null
    deliveryForProfile?: UserDeliveryType | null
}

export const Button: React.FC<ButtonPropsType> = ({isBooked, dateHanded, handed, buttonStyle, onClickHandler, orderByAuthUser, bookingForProfile, deliveryForProfile}) => {



    let arr = dateHanded?.slice(5, 10).split('-');
    if (arr) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    let date = arr?.join('.')



   /* if(deliveryForProfile?.book !== null ) {
        return <div className={css.deliveryInfo}>
            возврат {date}
        </div>
    }*/

    if (bookingForProfile) {
        return <button
            onClick={onClickHandler}
            type="button"
            style={buttonStyle}
            className={css.button_active}>отменить бронь</button>
    }

    if (orderByAuthUser) {
        return <button
            onClick={onClickHandler}
            type="button"
            style={buttonStyle}
            className={css.button_reserved_by_user}>забронирована</button>
    }
    if (isBooked) {
        return <button
            disabled
            onClick={onClickHandler}
            type="button"
            style={buttonStyle}
            className={css.button_reserved}>забронирована</button>
    }
    if (handed === true) {
        return <button
            disabled
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


