import React from 'react';
import css from './button-for-modal.module.scss'

type ButtonForModalPropsType = {
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
    title: string
    disabled?: boolean
}

export const ButtonForModal: React.FC<ButtonForModalPropsType> = ({title, onClickHandler, disabled}) => {
    return (
        <button
            className={css.button}
            type='button'
            onClick={onClickHandler}
            disabled={disabled}>
            {title}
        </button>
    );
};

