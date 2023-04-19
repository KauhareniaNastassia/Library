import React, {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import css from './layout-main-page.module.scss'
import {Sidebar} from '../side-bar';
import {getCategoriesListTC} from "../../redux/category-reducer";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getUserDataTC} from "../../redux/user-reducer";
import {getBooksTC} from "../../redux/books-reducer";


export const LayoutMainPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getCategoriesListTC())
            //dispatch(getUserDataTC())
            dispatch(getBooksTC())
        } else {
            navigate('/auth')
        }
    }, [isLoggedIn, dispatch])

    return (
        <section className={css.wrapper}>
            <div className={css.sidebar}>
                <Sidebar/>
            </div>

            <div className={css.content}>
                <Outlet/>
            </div>

        </section>
    )
}




