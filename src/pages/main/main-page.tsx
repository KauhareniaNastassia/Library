import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {Terms} from '../terms';
import {Contract} from '../contract';
import {BookPage} from '../books-list/book';
import {ProfilePage} from '../profile';
import css from './main-page.module.scss';
import {Header} from '../../layout/header';
import {LayoutMainPage} from '../../layout/layout-main-page';
import {Footer} from '../../layout/footer';
import {MainContent} from '../books-list'

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getCategoriesListTC} from "../../redux/category-reducer";
import {Loader} from "../../common/loader/loader";
import {LoginForm} from "../auth/login/login-form";
import {AuthLayout} from "../auth/auth-layout";
import {RegistrationForm} from "../auth/registration/registration-form";


export const MainPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const status = useAppSelector(state => state.app.status)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)



    useEffect(() => {
        if(isLoggedIn) {
            dispatch(getCategoriesListTC())
            /*dispatch(getBooksTC())*/
        } else {
            navigate('/auth')
        }

    }, [isLoggedIn, dispatch])



    return (
        <section className={css.wrapper}>

            {status === 'loading' && <Loader/>}

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

                    <Route element={<AuthLayout/>}>
                        <Route path="/auth" element={<LoginForm/>}/>
                        <Route path="/registration" element={<RegistrationForm/>}/>
                        <Route path="/password-recovery" element={<LoginForm/>}/>
                    </Route>
                </Routes>
            </div>

            <div className={css.footer__block}>
                <Footer/>
            </div>
        </section>
    );
}

