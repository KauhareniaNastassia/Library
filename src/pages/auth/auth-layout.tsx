import React, {useEffect} from 'react';
import {LoginForm} from "./login/login-form";
import css from './auth-layout.module.scss'
import {useAppSelector} from "../../hooks/hooks";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {Loader} from "../../common/loader/loader";

export const AuthLayout:React.FC = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const status = useAppSelector(state => state.app.status)
    const isError = useAppSelector(state => state.auth.authError)


    useEffect(() => {
        if (isLoggedIn) {
           navigate('/books/all')
        }
    }, [isLoggedIn, navigate]);


    return (
        <div className={css.wrapper_login}>



            <h1 className={css.wrapper__login_header}>Cleverland</h1>

            <Outlet/>


            {status === 'loading' && <Loader/>}
            {isLoggedIn && !isError && <div>success</div>}
            {isError && isError.error.status === 400 && <div>error 400 registr</div>}
            {isError && isError.error.status !== 400 && <div>error registr</div>}

        </div>
    );
};

