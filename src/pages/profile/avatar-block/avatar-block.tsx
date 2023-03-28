import React, {ChangeEvent} from 'react';
import css from "./avatar-block.module.scss";
import userAvatar from "../../../assets/img/avatar.svg";
import cameraIcon from '../../../assets/img/camera-icon.svg'
import {useAppDispatch} from "../../../hooks/hooks";
import {UpdateUserAvatarTC} from "../../../redux/user-reducer";


type AvatarBlockPropsType = {
    firstName: string
    lastName: string
    avatar: string | null
    userId: number
}

export const AvatarBlock: React.FC<AvatarBlockPropsType> = ({
                                                                firstName,
                                                                lastName,
                                                                avatar,
                                                                userId
                                                            }) => {
    const dispatch = useAppDispatch()

    const onClickAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = new FormData()
            files.append('files', e.target.files[0])

            dispatch(UpdateUserAvatarTC(userId, files))
        }
    }

    return (
        <div className={css.profile__avatar_block}>
            <div className={css.profile__avatar_img}>

                <img
                    src={avatar !== null ? `https://strapi.cleverland.by${avatar}` : userAvatar}
                    alt='User avatar'
                    className={css.profile__avatar_img}
                />
                <input
                    className={css.profile__avatar_input}
                    accept='image/*'
                    id='file-input'
                    type='file'
                    onChange={onClickAvatarChange}/>
                <div className={css.profile__avatar_button}>
                    <img src={cameraIcon} alt='camera icon'/>

                </div>
            </div>

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

