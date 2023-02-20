import {useSelector} from 'react-redux';
import {useEffect, useState} from "react";

import {NavLink, useLocation} from 'react-router-dom';
import css from './sidebar.module.scss'
import {AppRootStateType} from '../../redux/store';
import {GenreBarItemType} from '../../redux/category-reducer';
import sidebarArrowIcon from '../../assets/img/sidebar-arrow-icon.svg';
import {SidebarMainItem} from "./sidebar-main-item";
import {SidebarShowcaseItem} from "./sidebar-showcase-item";


type SidebarPropsType = {
    closeSideBar?: () => void
    showMenuBtn?: boolean
}

export const Sidebar = (props: SidebarPropsType) => {
    const genreItems = useSelector<AppRootStateType, GenreBarItemType[]>((state) => state.genreList.items)

    const location = useLocation()

    const [showMenu, setShowMenu] = useState(true)
    const [activeShowcase, setActiveShowcase] = useState<boolean>(true)


useEffect(() => {
    if (props.showMenuBtn === true) {
        setShowMenu(false)
    }
    if (props.showMenuBtn === true && !location.pathname.includes('books')) {
        setActiveShowcase(false)
    }

}, [props.showMenuBtn, location.pathname])


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
                                {genreItems.map((item) =>
                                    <SidebarShowcaseItem
                                        key={item.genreId}
                                        genreId={item.genreId}
                                        category={item.category}
                                        name={item.name}
                                        length={item.content.length}
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
            <SidebarMainItem
                path="/logout"
                title='Выход'
                setActiveShowcase={() => setActiveShowcase(false)}
                closeSideBar={props.closeSideBar}
            />
        </div>

    </nav>
}
