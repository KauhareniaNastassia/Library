import React, {useEffect, useState} from 'react';
import css from './notification.module.scss'
import error from '../../assets/img/error-icon.svg'
import success from '../../assets/img/success-icon.svg'
import close from '../../assets/img/close-error-icon.svg'
import {useAppDispatch} from "../../hooks/hooks";
import {setAppStatusAC} from "../../redux/app-reducer";

type NotificationPropsType = {
    status: string
    message: string
    onClickHandler?: () => void
}

export const Notification: React.FC<NotificationPropsType> = ({
                                                                  status,
                                                                  message, onClickHandler
                                                              }) => {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(true)

    const onClickCloseHandler = () => {
        setIsOpen(false)
        dispatch(setAppStatusAC('idle'))
        if (onClickHandler) {
            onClickHandler()
        }
    }

    useEffect(() => {
        setTimeout(() => {
            onClickCloseHandler()
        }, 5000)
    }, [])

    return (
        <div className={css.notification_block}>
            {isOpen &&
                <div>
                    {status === 'failed' &&
                        <div className={`${css.wrapper} ${css.error}`}>
                            <img src={error} alt='error-icon' className={css.error_icon}/>
                            <div className={css.message}>
                                {message}
                            </div>
                            <button type='button' onClick={onClickCloseHandler}
                                    className={`${css.button} ${css.error_button}`}>
                                <img src={close} alt='close-error'/>
                            </button>
                        </div>
                    }

                    {status === 'succeeded' &&
                        <div className={`${css.wrapper} ${css.success}`}>
                            <img src={success} alt='success-icon' className={css.error_icon}/>
                            <div className={css.message}>
                                {message}
                            </div>
                            <button type='button' onClick={onClickCloseHandler}
                                    className={`${css.button} ${css.success_button}`}>
                                <img src={close} alt='close-error'/>
                            </button>
                        </div>
                    }
                </div>}
        </div>
    );
};

