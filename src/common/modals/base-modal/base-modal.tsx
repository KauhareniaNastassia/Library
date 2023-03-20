import React from 'react';
import closeIcon from '../../../assets/img/close-modal-icon.svg'
import css from './base-modal.module.scss'

type BaseModalPropsType = {
    children: JSX.Element | React.ReactNode | string;
    onCloseHandler: () => void
}

export const BaseModal: React.FC<BaseModalPropsType> = ({children, onCloseHandler}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.modal_wrapper}>
                <button onClick={onCloseHandler} className={css.modal_button}>
                    <img src={closeIcon} alt='close icon'/>
                </button>
                {children}
            </div>

        </div>
    );
};

