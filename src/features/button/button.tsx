import React, {CSSProperties} from 'react';
import css from './button.module.scss'
import {UserBookingType, UserDeliveryType} from "../../api/user-api";
import {formatDateForButton} from "../../utils/helpers/format-date-for-button/format-date-for-button";

type ButtonPropsType = {
    isBooked?: boolean
    dateHanded?: string
    handed?: boolean
    buttonStyle?: CSSProperties
    onClickHandler?: () => void
    orderByAuthUser?: boolean
    bookingForProfile?: UserBookingType | null
    deliveryForProfile?: UserDeliveryType | null
    commentedBookId?: number
    historyId?: number
    onClickToOpenCommentModal?: () => void

}

export const Button: React.FC<ButtonPropsType> = ({
                                                      isBooked,
                                                      dateHanded,
                                                      handed,
                                                      buttonStyle,
                                                      onClickHandler,
                                                      orderByAuthUser,
                                                      bookingForProfile,
                                                      deliveryForProfile,
                                                      commentedBookId,
                                                      historyId,
                                                      onClickToOpenCommentModal
                                                  }) => {


    const onClickButtonHandler = () => {
        if (onClickHandler) {
            onClickHandler()
        }
    }
    const onClickButtonForModalHandler = () => {
        if (onClickToOpenCommentModal) {
            onClickToOpenCommentModal()
        }
    }


    if (deliveryForProfile) {
        return <div className={css.deliveryInfo}>
            возврат {formatDateForButton(deliveryForProfile.dateHandedTo)}
        </div>
    }

    if (commentedBookId && historyId) {
        return <button
            onClick={onClickButtonForModalHandler}
            type="button"
            style={buttonStyle}
            className={css.button_reserved_by_user}>изменить оценку</button>
        //for books with comments from you from history block from profile
    }

    if (!commentedBookId && historyId) {
        return <button
            onClick={onClickButtonForModalHandler}
            type="button"
            style={buttonStyle}
            className={css.button_active}> оценить </button>
        //for books without comments from you from history block from profile
    }

    if (bookingForProfile) {
        return <button
            onClick={onClickButtonHandler}
            type="button"
            style={buttonStyle}
            className={css.button_active}>отменить бронь</button>
        //for books for delete order from ordered books block from profile
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


