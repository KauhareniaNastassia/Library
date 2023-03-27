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
    bookingForProfile?: UserBookingType | null
    deliveryForProfile?: UserDeliveryType | null
    searchComment?: UserCommentType | null
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
                                                      searchComment,
                                                      historyId,
                                                      onClickToOpenCommentModal, onClickOpenModalHandler
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

    if (searchComment && historyId) {
        return <button
            onClick={onClickButtonForModalHandler}
            type="button"
            style={buttonStyle}
            className={css.button_reserved_by_user}>изменить оценку</button>
        //for books with comments from you from history block from profile
    }

    if (!searchComment && historyId) {
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
        onClick={onClickHandler ? onClickButtonHandler : (e) => onClickButtonOpenModalHandler(e)}//for buttons to open order modal in list/tile and in book page
        type="button"
        style={buttonStyle}
        className={css.button_active}> забронировать </button>
}


