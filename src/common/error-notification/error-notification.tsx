import React from 'react';
import css from './error-notification.module.scss'
import error from '../../assets/img/error-icon.svg'
import closeError from '../../assets/img/close-error-icon.svg'
import {useAppDispatch} from "../../hooks/hooks";
import {setAppErrorAC, setAppStatusAC} from "../../redux/app-reducer";

export const ErrorNotification: React.FC = () => {
    const dispatch = useAppDispatch()

    const onClickCloseHandler = () => {
        dispatch(setAppStatusAC('idle'))
    }

    return (
        <div className={css.wrapper_error}>

            <img src={error} alt='error-icon' className={css.error_icon}/>

            <div className={css.error_message}>
                Что-то пошло не так. Обновите страницу через некоторое время.
            </div>
            <button type='button' onClick={onClickCloseHandler} className={css.error_button}>
                <img src={closeError} alt='close-error'/>
            </button>
        </div>
    );
};

