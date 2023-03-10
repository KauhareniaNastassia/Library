import React from 'react';
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {ModalType} from "./modal-info";
import css from './basicModal.module.scss'

type BasicModalPropsType = {
    modalInfo: ModalType
}

const BasicModal:React.FC<BasicModalPropsType> = ({modalInfo}) => {
    const navigate = useNavigate()

    return (
        <div className={css.basicModal__wrapper}>
            <h2 className={css.basicModal__title}>{modalInfo.title}</h2>
            <div className={css.basicModal__message}>
                {modalInfo.message}
            </div>


           {/* <button className={css.basicModal__button}
                    onClick={onClickHandler/*() => {
                        if(modalInfo.reload) {
                            document.location.reload()
                        }}*!/>
                {modalInfo.buttonTitle}
            </button>*/}

                <NavLink to={modalInfo.path}
                         className={css.basicModal__button}
                         onClick={() => {
                             if(modalInfo.reload) {
                                 window.location.reload()
                             }}}>
                    {modalInfo.buttonTitle}
                </NavLink>


        </div>
    );
};

export default BasicModal;