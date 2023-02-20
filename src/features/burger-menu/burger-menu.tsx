import React, {useRef, useState} from "react";
import css from './burger-menu.module.scss'
import {Sidebar} from "../../layout/side-bar";
import {useOnClickOutside} from "../../hooks/use-on-click-outside";


export const BurgerMenu = () => {

    const [showMenuBtn, setShowMenuBtn] = useState(false)
    const [popUpClose, setPopUpClose] = useState(true)

    const node = useRef<HTMLDivElement>(null);

    const onClickOpenMenu = () => {
        setShowMenuBtn(!showMenuBtn)
        setPopUpClose(!popUpClose)
    }

    const closeSideBar = () => {
        setShowMenuBtn(false)
        setPopUpClose(true)
    }

    useOnClickOutside(node, closeSideBar);

    return (
        <div className={css.burger_wrapper} ref={node} >

            <button
                type='button'
                className={showMenuBtn ? `${css.menu__btn} ${css.menu_open}` : `${css.menu__btn} ${css.menu_close}`}
                onClick={onClickOpenMenu}
            >
                <span className={css.menu__btn_span}/>
                <span className={css.menu__btn_span}/>
                <span className={css.menu__btn_span}/>
            </button>

            {!popUpClose && <div className={css.sidebar_wrapper}>

                <Sidebar
                    closeSideBar={closeSideBar}
                    showMenuBtn={showMenuBtn}
                />

            </div>
            }
        </div>
    )
}
