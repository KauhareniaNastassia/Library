import {NavLink, useNavigate} from 'react-router-dom';
import userAvatar from '../../assets/img/avatar.svg'
import css from './header.module.scss'
import clevertecLogoImg from '../../assets/img/logo-clevertec.svg'
import {BurgerMenu} from '../../features/burger-menu';
import React, {useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Notification} from "../../common/notification/notification";
import {logoutTC} from "../../redux/auth-reducer";
import {useOnClickOutside} from "../../hooks/use-on-click-outside";

export const Header: React.FC = () => {
    const status = useAppSelector(state => state.app.status)
    const appError = useAppSelector(state => state.app.appError)
    const profile = useAppSelector(state => state.auth.profile)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [popUpClose, setPopUpClose] = useState(false)
    const node = useRef<HTMLDivElement>(null);

    const onClickOutsideClose = () => {
        setPopUpClose(false)
    }

    const onClickLogoutHandler = () => {
        console.log('logout')
        dispatch(logoutTC())
    }
   useOnClickOutside(node, onClickOutsideClose);

    return (
        <section className={css.header}>

            {status === 'failed' && appError && <Notification
                status={status}
                message='Что-то пошло не так. Обновите страницу через некоторое время.'
            />}

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

            <div className={css.header__user} onClick={() => setPopUpClose(!popUpClose)}>
                <span>Привет, {profile?.firstName}!</span>
                <img src={userAvatar} alt='User avatar'/>
            </div>

            {popUpClose &&
                <div className={css.popUp_wrapper} ref={node} >
                    <button className={css.popUp_button} type='button' onClick={() => navigate('/profile')}>Профиль
                    </button>
                    <button className={css.popUp_button} type='button' onClick={onClickLogoutHandler}>Выход
                    </button>
                </div>
            }
        </section>
    )
};
