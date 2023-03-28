import React, {CSSProperties, MouseEventHandler} from 'react';
import css from './button.module.scss'
import {UserBookingType, UserCommentType, UserDeliveryType} from "../../api/user-api";
import {formatDateForButton} from "../../utils/helpers/format-date-for-button/format-date-for-button";


type ButtonPropsType = {
    isBooked?: boolean
    dateHanded?: string
    handed?: boolean
    buttonStyle?: CSSProperties
    onClickHandler?: () => void
    onClickOpenModalHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
    orderByAuthUser?: boolean


}

export const Button: React.FC<ButtonPropsType> = ({
                                                      isBooked,
                                                      dateHanded,
                                                      handed,
                                                      buttonStyle,
                                                      onClickHandler,
                                                      orderByAuthUser, onClickOpenModalHandler
                                                  }) => {

    const onClickButtonHandler = () => {
        if (onClickHandler) {
            onClickHandler()
        }
    }
    const onClickButtonOpenModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClickOpenModalHandler) {
            onClickOpenModalHandler(e)
        }
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
        onClick={onClickHandler ? onClickButtonHandler : (e) => onClickButtonOpenModalHandler(e)}//for buttons to open order modal in list/tile and in book page
        type="button"
        style={buttonStyle}
        className={css.button_active}> забронировать </button>
}


