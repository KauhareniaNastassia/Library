import React from 'react';
import {NavLink} from "react-router-dom";
import {ModalType} from "./modal-info";
import css from './basicModal.module.scss'

type BasicModalPropsType = {
    modalInfo: ModalType
}

export const BasicModal:React.FC<BasicModalPropsType> = ({modalInfo}) => {

    return (
        <div className={css.basicModal__wrapper}>
            <h2 className={css.basicModal__title}>{modalInfo.title}</h2>
            <div className={css.basicModal__message}>
                {modalInfo.message}
            </div>

            {modalInfo.buttonTitle !== '' &&
                <NavLink to={modalInfo.path}
                         className={css.basicModal__button}
                         onClick={() => {
                             if(modalInfo.reload) {
                                 window.location.reload()
                             }}}>
                    {modalInfo.buttonTitle}
                </NavLink>
            }

        </div>
    );
};

