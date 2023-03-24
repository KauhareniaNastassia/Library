import React, {CSSProperties} from 'react';
import css from './button.module.scss'
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

export const Button: React.FC<ButtonPropsType> = ({
                                                      isBooked,
                                                      dateHanded,
                                                      handed,
                                                      buttonStyle,
                                                      onClickHandler,
                                                      orderByAuthUser,
                                                      bookingForProfile,
                                                      deliveryForProfile
                                                  }) => {


    const formatDateForButton = (date: string | undefined | null) => {
        let arr = date?.slice(5, 10).split('-');
        if (arr) {
            [arr[0], arr[1]] = [arr[1], arr[0]];
        }
        return arr?.join('.')
    }


    const onClickButtonHandler = () => {
        if (onClickHandler) {
            onClickHandler()
        }
    }

    if (deliveryForProfile) {
        return <div className={css.deliveryInfo}>
            возврат {formatDateForButton(deliveryForProfile.dateHandedTo)}
        </div>
    }

    if (bookingForProfile) {
        return <button
            onClick={onClickButtonHandler}
            type="button"
            style={buttonStyle}
            className={css.button_active}>отменить бронь</button>
    }

    if (orderByAuthUser) {
        return <button
            onClick={onClickButtonHandler}
            type="button"
            style={buttonStyle}
            className={css.button_reserved_by_user}>забронирована</button>
    }
    if (isBooked) {
        return <button
            disabled
            onClick={onClickButtonHandler}
            type="button"
            style={buttonStyle}
            className={css.button_reserved}>забронирована</button>
    }
    if (handed === true) {
        return <button
            disabled
            onClick={onClickButtonHandler}
            type="button"
            style={buttonStyle}
            className={css.button_unactive}>занята до {formatDateForButton(dateHanded)} </button>
    }

    return <button
        onClick={onClickButtonHandler}
        type="button"
        style={buttonStyle}
        className={css.button_active}> забронировать </button>


}


