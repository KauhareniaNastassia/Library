import React from 'react';
import css from './button-for-modal.module.scss'

type ButtonForModalPropsType = {
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
    title: string
    disabled?: boolean
}

export const ButtonForModal: React.FC<ButtonForModalPropsType> = ({
                                                                      title, onClickHandler, disabled
                                                                  }) => {
    return (
        <button
            className={title === 'отменить бронь' ? `${css.button} ${css.button_cancel}` : `${css.button} ${css.button_active}`}
            type='button'
            onClick={onClickHandler}
            disabled={disabled}>
            {title}
        </button>
    );
};

