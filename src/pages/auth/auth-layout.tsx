import React, {useEffect, useState} from 'react';
import css from './auth-layout.module.scss'
import {useAppSelector} from "../../hooks/hooks";
import {Outlet, useNavigate} from "react-router-dom";
import {Loader} from "../../common/loader/loader";

export const AuthLayout: React.FC = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const status = useAppSelector(state => state.app.status)

    const [copyLogin, setCopyLogin] = useState('Copy')
    const [copyPassword, setCopyPassword] = useState('Copy')

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

            <div className={css.wrapper__login_test}>
                <div className={css.wrapper__login_test_title}>Если вы не хотите регистрироваться, можно использовать эти данные=)</div>
                <div className={css.wrapper__login_test_block}>
                    <div className={css.wrapper__login_test_block_title}>Логин:</div>  <span className={css.wrapper__login_test_block_descr}>Nastassia1234</span>
                    <button
                        className={css.wrapper__login_test_block_button}
                        onClick={() => {
                            navigator.clipboard.writeText('Nastassia1234')
                            setCopyLogin('Copied')
                        }}
                    >
                        {copyLogin}
                    </button>
                </div>
                <div className={css.wrapper__login_test_block}>
                    <div className={css.wrapper__login_test_block_title}>Пароль:</div>  <span className={css.wrapper__login_test_block_descr}>Nastassia1234</span>
                    <button
                        className={css.wrapper__login_test_block_button}
                        onClick={() => {
                            navigator.clipboard.writeText('Nastassia1234')
                            setCopyPassword('Copied')
                        }}
                    >
                        {copyPassword}
                    </button>
                </div>
            </div>
        </div>
    );
};
