import {NavLink} from 'react-router-dom';
import userAvatar from '../../assets/img/avatar.svg'
import css from './header.module.scss'
import clevertecLogoImg from '../../assets/img/logo-clevertec.svg'
import {BurgerMenu} from '../../features/burger-menu';

export const Header = () => (
    <section className={css.header}>
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
            <span>Привет, Иван!</span>
            <NavLink to='/profile'>
                <img src={userAvatar} alt='User avatar'/>
            </NavLink>
        </div>
    </section>
);
