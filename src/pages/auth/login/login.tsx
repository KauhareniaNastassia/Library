import React from 'react';
import {LoginForm} from "./login-form/login-form";
import css from './login.module.scss'

export const Login = () => {
    return (
        <div className={css.wrapper_login}>
            <h1 className={css.wrapper__login_header}>Cleverland</h1>

            <LoginForm/>
        </div>
    );
};

