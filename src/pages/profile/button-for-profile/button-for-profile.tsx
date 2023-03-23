import React from 'react';
import css from './button-for-profile.module.scss'

type ButtonForModalPropsType = {
    onClickHandler?: () => void
    title: string
    disabled?: boolean
}

export const ButtonForProfile: React.FC<ButtonForModalPropsType> = ({title, onClickHandler, disabled}) => {
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

