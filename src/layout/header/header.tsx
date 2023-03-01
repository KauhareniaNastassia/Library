import {NavLink} from 'react-router-dom';
import userAvatar from '../../assets/img/avatar.svg'
import css from './header.module.scss'
import clevertecLogoImg from '../../assets/img/logo-clevertec.svg'
import {BurgerMenu} from '../../features/burger-menu';
import React from "react";
import {useAppSelector} from "../../hooks/hooks";
import {ErrorNotification} from "../../common/error-notification/error-notification";

export const Header:React.FC = () => {
    const status = useAppSelector(state => state.app.status)
    const profile = useAppSelector(state => state.auth.userInfo.profile)

    return (
        <section className={css.header}>

            {status === 'failed' && <ErrorNotification/>}

        <div className={css.header__logo}>
            <NavLink to='/'>
                 <img src={clevertecLogoImg} alt='Cleverland logo'/>
            </NavLink>
        </div>
        <div className={css.header__title}>

            <div className={css.header__title_burger}>
                <BurgerMenu/>
            </div>

            Библиотека
        </div>
        <div className={css.header__user}>
            <span>Привет, {profile.firstName}!</span>
            <NavLink to='/profile'>
                <img src={userAvatar} alt='User avatar'/>
            </NavLink>
        </div>
    </section>
)};
