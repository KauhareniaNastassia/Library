import {useSelector} from 'react-redux';
import {useState} from "react";

import {NavLink} from 'react-router-dom';
import css from './sidebar-showcase-item.module.scss'

import sidebarArrowIcon from '../../assets/img/sidebar-arrow-icon.svg';
import {AppRootStateType} from "../../../redux/store";
import {GenreBarItemType} from "../../../redux/category-reducer";


type SidebarShowcaseItemPropsType = {
    genreId: number
    category: string
    name: string
    length: number
    closeSideBar?: () => void
}


export const SidebarShowcaseItem = (props: SidebarShowcaseItemPropsType) =>
    <li key={props.genreId} className={css.item}>
        <NavLink to={`/books/${props.category}`}
                 className={({isActive}) => isActive ? css.active_item : ''}
                 onClick={props.closeSideBar}>
            <span
                className={(css.item, css.item__name)}> {props.name} </span>
            <span
                className={(css.item, css.item__count)}> {props.length} </span>
        </NavLink>
    </li>

