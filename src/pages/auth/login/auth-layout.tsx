import React, {useEffect} from 'react';
import {LoginForm} from "./login-form/login-form";
import css from './login.module.scss'
import {useAppSelector} from "../../../hooks/hooks";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {Loader} from "../../../common/loader/loader";

export const AuthLayout:React.FC = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const status = useAppSelector(state => state.app.status)


    useEffect(() => {
        if (isLoggedIn) {
           navigate('/books/all')
        }
    }, [isLoggedIn, navigate]);


    return (
        <div className={css.wrapper_login}>

            {status === 'loading' && <Loader/>}

            <h1 className={css.wrapper__login_header}>Cleverland</h1>

            <Outlet/>

           {/* <LoginForm/>*/}
        </div>
    );
};

