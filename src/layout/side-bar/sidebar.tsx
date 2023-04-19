import React, {useEffect, useState} from "react";
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import css from './sidebar.module.scss'
import sidebarArrowIcon from '../../assets/img/sidebar-arrow-icon.svg';
import {SidebarMainItem} from "./sidebar-main-item";
import {SidebarShowcaseItem} from "./sidebar-showcase-item";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {logoutTC} from "../../redux/auth-reducer";
import {categoriesList} from "../../mock-data/categories";

type SidebarPropsType = {
    closeSideBar?: () => void
    showMenuBtn?: boolean
}

export const Sidebar: React.FC<SidebarPropsType> = ({closeSideBar, showMenuBtn}) => {
    const categories = useAppSelector(state => state.categories.items)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(true)
    const [activeShowcase, setActiveShowcase] = useState<boolean>(true)

    const onClickLogoutHandler = () => {
        dispatch(logoutTC())
        navigate('/auth')
    }

    useEffect(() => {
        if (showMenuBtn === true) {
            setShowMenu(false)
        }
        if (showMenuBtn === true && !location.pathname.includes('books')) {
            setActiveShowcase(false)
        }
    }, [showMenuBtn, location.pathname])


    return <nav className={css.sidebar}>

        <div className={css.sidebar__upperline}>

            <h3 className={activeShowcase
                ? `${css.active_link} ${css.sidebar__showcase_active}`
                : css.sidebar__showcase_unActive}
            >
                <div className={css.sidebar__showcase_title}>
                    <NavLink to="/books/all" onClick={() => setActiveShowcase(true)}>
                        Витрина книг
                    </NavLink>
                    <button
                        type='button'
                        className={showMenu ? css.sidebar__showcase_toggleBtn : css.sidebar__showcase_toggleBtn_rotate}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <img src={sidebarArrowIcon} alt='sidebar-arrow'/>
                    </button>
                </div>
            </h3>

            {activeShowcase &&
                <div>
                    {showMenu &&
                        <div className={css.sidebar__menu}>
                            <div className={css.sidebar__menu_title}>
                                <NavLink to="/books/all"
                                         className={({isActive}) => isActive ? css.active_menu_title : ''}
                                         onClick={closeSideBar}>
                                    Все книги
                                </NavLink>
                            </div>

                            <ul>
                                {categories.map((category) =>
                                    <SidebarShowcaseItem
                                        key={category.id}
                                        categoryId={category.id}
                                        category={category.path}
                                        name={category.name}

                                        closeSideBar={closeSideBar}
                                    />
                                )}
                            </ul>
                        </div>
                    }
                </div>
            }

            <SidebarMainItem
                path="/terms"
                title='Правила пользования'
                setActiveShowcase={() => setActiveShowcase(false)}
                closeSideBar={closeSideBar}
            />
            <SidebarMainItem
                path="/contract"
                title='Договор оферты'
                setActiveShowcase={() => setActiveShowcase(false)}
                closeSideBar={closeSideBar}
            />
        </div>


        <div className={css.sidebar__underline}>
            <SidebarMainItem
                path="/profile"
                title='Профиль'
                setActiveShowcase={() => setActiveShowcase(false)}
                closeSideBar={closeSideBar}
            />
            <div onClick={onClickLogoutHandler}>
                <SidebarMainItem
                    path="/auth"
                    title='Выход'
                    setActiveShowcase={() => setActiveShowcase(false)}
                    closeSideBar={closeSideBar}
                    onClickLogoutHandler={onClickLogoutHandler}
                />
            </div>
        </div>
    </nav>
}
