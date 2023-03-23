import React from 'react';
import css from "./avatar-block.module.scss";
import userAvatar from "../../../assets/img/avatar.svg";


type AvatarBlockPropsType = {
    firstName: string
    lastName: string
    avatar: string | null
}

export const AvatarBlock:React.FC<AvatarBlockPropsType> = ({firstName, lastName, avatar}) => {
    return (
        <div className={css.profile__avatar_block}>
            <img
                src={avatar !== null ? `https://strapi.cleverland.by${avatar}` : userAvatar}
                //src={userAvatar}
                alt='User avatar'
                className={css.profile__avatar_img}
            />

            <div className={css.profile__avatar_name}>
                   <span>
                        {firstName}
                   </span>
                <span>
                        {lastName}
                   </span>
            </div>
        </div>
    );
};

export default AvatarBlock;