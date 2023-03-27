import {NavLink} from 'react-router-dom';
import css from './sidebar-showcase-item.module.scss'
import React from "react";
import {useAppSelector} from "../../../hooks/hooks";


type SidebarShowcaseItemPropsType = {
    categoryId: number
    category: string
    name: string

    closeSideBar?: () => void
}


export const SidebarShowcaseItem: React.FC<SidebarShowcaseItemPropsType> = ({
                                                                                categoryId,
                                                                                category,
                                                                                name, closeSideBar
                                                                            }) => {
    const books = useAppSelector(state => state.books.books)

    let categoryCount = books.filter((book) => book.categories?.find((categories) => categories === name)).length


    return (
        <li key={categoryId} className={css.item}>
            <NavLink to={`/books/${category}`}
                     className={({isActive}) => isActive ? css.active_item : ''}
                     onClick={closeSideBar}>
                <span className={(css.item, css.item__name)}> {name} </span>
                <span className={(css.item, css.item__count)}> {categoryCount} </span>
            </NavLink>
        </li>
    )
}



