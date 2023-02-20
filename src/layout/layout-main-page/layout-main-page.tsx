import React from 'react';
import {Outlet} from 'react-router-dom';
import css from './layout-main-page.module.scss'
import {Sidebar} from '../side-bar';


export const LayoutMainPage = () => (
    <section className={css.wrapper}>
        <div className={css.sidebar}>
            <Sidebar />
        </div>

        <div className={css.content}>
            <Outlet/>
        </div>

    </section>
);
