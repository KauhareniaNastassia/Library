import React from 'react';
import css from "./block-wrapper.module.scss";

type BlockWrapperPropsType = {
    title: string
    description: string,
    children: any
}

export const BlockWrapper: React.FC<BlockWrapperPropsType> = ({title, description, children}) => {
    return (
        <div className={css.profile__block_wrapper}>

            <div className={css.profile__block_wrapper_title}>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>

            {children}

        </div>
    );
};

