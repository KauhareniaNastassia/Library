import React from 'react';
import css from "./empty-block-for-wrapper.module.scss";

type EmptyBlockForWrapperPropsType = {
    title: string
}

export const EmptyBlockForWrapper: React.FC<EmptyBlockForWrapperPropsType> = ({title}) => {
    return (
        <div className={css.message_block}>
            <p>
                {title}
            </p>
        </div>
    );
};

