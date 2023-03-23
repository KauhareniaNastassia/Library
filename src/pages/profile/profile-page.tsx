import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useNavigate} from "react-router-dom";
import {getUserDataTC} from "../../redux/user-reducer";
import userAvatar from "../../assets/img/avatar.svg";
import css from './profile-page.module.scss'
import {ButtonForProfile} from "./button-for-profile/button-for-profile";
import AvatarBlock from "./avatar-block/avatar-block";
import {UserDataBlock} from "./user-data-block/user-data-block";
import {BlockWrapper} from "./block-wrapper/block-wrapper";

export const ProfilePage: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const user = useAppSelector(state => state.user.user)
    const bookingBook = useAppSelector(state => state.user.user.booking?.book)

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

            <BlockWrapper
                title='Учетные данные'
                description='Здесь вы можете отредактировать информацию о себе'
            >
                <UserDataBlock/>
            </BlockWrapper>

            <BlockWrapper
                title='Забронированная книга'
                description='Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь'
            >
                <UserDataBlock/>
            </BlockWrapper>


        </section>
    )
}

