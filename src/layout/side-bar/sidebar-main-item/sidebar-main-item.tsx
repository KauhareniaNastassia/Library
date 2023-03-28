import {NavLink} from 'react-router-dom';
import css from './sidebar-main-item.module.scss'
import React from "react";


type SidebarMainItemPropsType = {
    path: string
    setActiveShowcase: () => void
    title: string
    closeSideBar?: () => void
    onClickLogoutHandler?: () => void
}


export const SidebarMainItem: React.FC<SidebarMainItemPropsType> = ({
                                                                        path,
                                                                        setActiveShowcase,
                                                                        title,
                                                                        closeSideBar,
                                                                        onClickLogoutHandler
                                                                    }) => {


    const onClickHandler = () => {
        if (closeSideBar) {
            closeSideBar()
        } else {
            setActiveShowcase()
        }
        if (onClickLogoutHandler) {
            onClickLogoutHandler()
        }
    }

    return (
        <h3 className={css.item}>
            <NavLink to={path}
                     className={({isActive}) => isActive ? css.active_link : ''}
                     onClick={onClickHandler}>
                {title}
            </NavLink>
        </h3>
    )
}






