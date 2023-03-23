import React from 'react';
import css from "./user-data-block.module.scss";
import {ButtonForProfile} from "../button-for-profile/button-for-profile";

export const UserDataBlock = () => {
    return (
        <div className={css.profile__data_block}>

            <div className={css.profile__data}>

            </div>

            <div className={css.profile__data_buttons}>
                <ButtonForProfile
                    title='редактировать'
                />
                <ButtonForProfile
                    disabled={true}
                    title='Сохранить изменения'
                />

            </div>


        </div>
    );
};
