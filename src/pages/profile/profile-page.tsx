import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useNavigate} from "react-router-dom";
import {getUserDataTC} from "../../redux/user-reducer";
import userAvatar from "../../assets/img/avatar.svg";
import css from './profile-page.module.scss'
import {ButtonForProfile} from "./button-for-profile/button-for-profile";
import AvatarBlock from "./avatar-block/avatar-block";
import {UserDataBlock} from "./user-data-block/user-data-block";

export const ProfilePage: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const user = useAppSelector(state => state.user.user)

    useEffect(() => {
        dispatch(getUserDataTC())
    }, [dispatch])


    return (
        <section className={css.profile__wrapper}>
            <AvatarBlock
                firstName={user.firstName}
                lastName={user.lastName}
                avatar={user.avatar}
            />

           <UserDataBlock/>

        </section>
    )
}

