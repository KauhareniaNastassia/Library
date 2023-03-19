import React from 'react';
import css from './button-for-modal.module.scss'

type ButtonForModalPropsType = {
    onClickHandler: () => void
    title: string
}

export const ButtonForModal: React.FC<ButtonForModalPropsType> = ({title, onClickHandler}) => {
    return (
        <button
            className={css.button}
            type='button'
            onClick={onClickHandler}>
            {title}
        </button>
    );
};

