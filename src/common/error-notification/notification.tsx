import React from 'react';
import css from './notification.module.scss'
import error from '../../assets/img/error-icon.svg'
import success from '../../assets/img/success-icon.svg'
import close from '../../assets/img/close-error-icon.svg'
import {useAppDispatch} from "../../hooks/hooks";
import {setAppErrorAC, setAppStatusAC} from "../../redux/app-reducer";

type NotificationPropsType = {
    status: string
    message: string
}


export const Notification: React.FC<NotificationPropsType> = ({status, message}) => {
    const dispatch = useAppDispatch()

    const onClickCloseHandler = () => {
        dispatch(setAppStatusAC('idle'))
    }

    return (
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

                    <div className={css.error_message}>
                        {message}
                    </div>
                    <button type='button' onClick={onClickCloseHandler}
                            className={`${css.button} ${css.success_button}`}>
                        <img src={close} alt='close-error'/>
                    </button>
                </div>
            }


        </div>

    );
};

