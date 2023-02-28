import {useEffect, useState} from "react";

import {NavLink, useLocation} from 'react-router-dom';
import css from './sidebar.module.scss'
import {getCategoriesListTC} from '../../redux/category-reducer';
import sidebarArrowIcon from '../../assets/img/sidebar-arrow-icon.svg';
import {SidebarMainItem} from "./sidebar-main-item";
import {SidebarShowcaseItem} from "./sidebar-showcase-item";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {loginTC, logoutTC} from "../../redux/auth-reducer";


type SidebarPropsType = {
    closeSideBar?: () => void
    showMenuBtn?: boolean
}

export const Sidebar = (props: SidebarPropsType) => {

    const categories = useAppSelector(state => state.categories.items)
    const dispatch = useAppDispatch()
    const location = useLocation()

    const [showMenu, setShowMenu] = useState(true)
    const [activeShowcase, setActiveShowcase] = useState<boolean>(true)


    const onClickLogoutHandler = () => {
        console.log('logout')
        dispatch(logoutTC())
    }


    useEffect(() => {
        if (props.showMenuBtn === true) {
            setShowMenu(false)
        }
        if (props.showMenuBtn === true && !location.pathname.includes('books')) {
            setActiveShowcase(false)
        }

    }, [props.showMenuBtn, location.pathname])


    /*useEffect(() => {
        dispatch(getCategoriesListTC())
    }, [])*/


    return <nav className={css.sidebar}>

        <div className={css.sidebar__upperline}>

            <h3>
                <NavLink to="/books/all"

                         className={activeShowcase
                             ? `${css.active_link} ${css.sidebar__showcase_active}`
                             : css.sidebar__showcase_unActive}
                         onClick={() => setActiveShowcase(true)}
                >

                    <div className={css.sidebar__showcase_title}>
                        <div>
                            Витрина книг
                        </div>
                        <button
                            type='button'
                            className={showMenu ? css.sidebar__showcase_toggleBtn : css.sidebar__showcase_toggleBtn_rotate}
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <img src={sidebarArrowIcon} alt='sidebar-arrow'/>
                        </button>
                    </div>

                </NavLink>
            </h3>

            {activeShowcase &&
                <div>
                    {showMenu &&
                        <div className={css.sidebar__menu}>
                            <div className={css.sidebar__menu_title}>
                                <NavLink to="/books/all"
                                         className={({isActive}) => isActive ? css.active_menu_title : ''}
                                         onClick={props.closeSideBar}>
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

                                        closeSideBar={props.closeSideBar}
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
                closeSideBar={props.closeSideBar}
            />
            <SidebarMainItem
                path="/contract"
                title='Договор оферты'
                setActiveShowcase={() => setActiveShowcase(false)}
                closeSideBar={props.closeSideBar}
            />
        </div>


        <div className={css.sidebar__underline}>
            <SidebarMainItem
                path="/profile"
                title='Профиль'
                setActiveShowcase={() => setActiveShowcase(false)}
                closeSideBar={props.closeSideBar}
            />
            <div onClick={onClickLogoutHandler}>
                <SidebarMainItem
                    path="/login"
                    title='Выход'
                    setActiveShowcase={() => setActiveShowcase(false)}
                    closeSideBar={props.closeSideBar}
                    onClickLogoutHandler={onClickLogoutHandler}
                />
            </div>

        </div>

    </nav>
}
