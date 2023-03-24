import React from 'react';
import css from "./red-mask.module.scss";

type ListItemWrapperPropsType = {
    title: string
    description: string
}


export const RedMask: React.FC<ListItemWrapperPropsType> = ({
                                                                title, description
                                                            }) => {
    return (
        <div className={css.red_mask}>
            <p className={css.red_mask_title}>{title}</p>
            <p className={css.red_mask_description}>{description}</p>
        </div>


    );
};