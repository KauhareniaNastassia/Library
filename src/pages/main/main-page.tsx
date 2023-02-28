import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Terms} from '../terms';
import {Contract} from '../contract';
import {BookPage} from '../books-list/book';
import {ProfilePage} from '../profile';
import css from './main-page.module.scss';
import {Header} from '../../layout/header';
import {LayoutMainPage} from '../../layout/layout-main-page';
import {Footer} from '../../layout/footer';
import {MainContent} from '../books-list'
import {Login} from "../auth/login/login";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getCategoriesListTC} from "../../redux/category-reducer";


export const MainPage:React.FC = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)



    useEffect(() => {
        dispatch(getCategoriesListTC())
    }, [])

    return (
        <section className={css.wrapper}>


            <div className={css.header__block}>
                <Header/>
            </div>

            <div className={css.content__block}>
                <Routes>
                    <Route element={<LayoutMainPage/>}>
                        <Route path="/" element={<Navigate to="/books/all"/>}/>
                        <Route path="/books/:category" element={<MainContent/>}/>
                        <Route path="/terms" element={<Terms/>}/>
                        <Route path="/contract" element={<Contract/>}/>
                    </Route>
                    <Route path="/books/:category/:bookId" element={<BookPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>

                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>

            <div className={css.footer__block}>
                <Footer/>
            </div>
        </section>
    );
}

