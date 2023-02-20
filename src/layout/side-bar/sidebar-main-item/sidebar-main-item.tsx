import {NavLink} from 'react-router-dom';
import css from './sidebar-main-item.module.scss'


type SidebarMainItemPropsType = {
    path: string
    setActiveShowcase: () => void
    title: string
    closeSideBar?: () => void
}



export const SidebarMainItem = (props: SidebarMainItemPropsType) => <h3 className={css.item} >
        <NavLink to={props.path}
                 className={({isActive}) => isActive ? css.active_link : ''}
                 onClick={props.closeSideBar ? props.closeSideBar :  props.setActiveShowcase}>
            {props.title}
        </NavLink>
    </h3>






