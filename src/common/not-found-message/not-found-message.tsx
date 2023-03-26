import React from 'react';
import css from "./not-found-message.module.scss";

type NotFoundMessagePropsType = {
    message: string
}

export const NotFoundMessage:React.FC<NotFoundMessagePropsType> = ({message}) => {
    return (
        <div className={css.wrapper_message}>
            {message}
        </div>
    );
};

