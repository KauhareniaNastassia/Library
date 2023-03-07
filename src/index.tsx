import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {MainPage} from './pages/main';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <MainPage/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
);
