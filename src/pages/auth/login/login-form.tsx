import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {loginTC} from "../../../redux/auth-reducer";
import {NavLink} from "react-router-dom";
import {LoginRequestDataType} from "../../../api/auth-api";
import css from './login-form.module.scss'
import eyeOpen from '../../../assets/img/eye-open.svg'
import eyeClose from '../../../assets/img/eye-close.svg'
import {Simulate} from "react-dom/test-utils";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {schemaForAuth} from "../../../utils/validate/auth-validate/shema-for-auth";
import BasicModal from "../../../common/modals/basic-modal";
import {AuthErrorModal} from "../../../common/modals/modal-info";
import input = Simulate.input;


export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const registrationStatus = useAppSelector(state => state.auth.registrationStatus)

    const [focusIdentifier, setFocusIdentifier] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [changeInputIdentifier, setChangeInputIdentifier] = useState(false);
    const [changeInputPassword, setChangeInputPassword] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)


    const {register, handleSubmit, getValues, getFieldState, formState: {errors}} = useForm<LoginRequestDataType>({
        defaultValues: {
            identifier: '',
            password: '',
        },
        mode: 'onChange',
        resolver: yupResolver(schemaForAuth)
    });

    const onSubmit = (data: LoginRequestDataType) => {
        dispatch(loginTC(data))
    }

    const conditionEmptyIdentifier = changeInputIdentifier && !focusIdentifier && getValues('identifier') === '';
    const conditionEmptyPassword = changeInputPassword && !focusPassword && getValues('password') === ''

    return (
        <div>

            {
                (!registrationStatus || registrationStatus === 400) &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.wrapper_loginForm}>
                        <h3 className={css.loginForm__title}>Вход в личный кабинет</h3>

                        <div className={css.loginForm__inputBlock}>

                            <div className={css.loginForm__input_wrapper}>
                                <div className={css.loginForm__input_item}>
                                    <input
                                        className={(conditionEmptyIdentifier || registrationStatus === 400) ? `${css.loginForm__input} ${css.input__error}` : css.loginForm__input}
                                        type='text'
                                        id='identifier'
                                        placeholder=' '
                                        onFocus={() => {
                                            setChangeInputIdentifier(true)
                                            setFocusIdentifier(true)
                                        }
                                        }
                                        {...register('identifier', {
                                            onBlur: () => {
                                                setFocusIdentifier(false)
                                            },
                                            onChange: () => {
                                                setFocusIdentifier(false)
                                            },
                                        })}/>

                                    <label className={css.loginForm__label} htmlFor='identifier'>Логин</label>

                                    <div className={css.login_message}>
                                        {conditionEmptyIdentifier &&
                                            <span style={{color: 'red'}}>Поле не должно быть пустым</span>}
                                    </div>

                                </div>

                                <div className={css.loginForm__input_item}>
                                    <input
                                        className={(conditionEmptyPassword || registrationStatus === 400) ? `${css.loginForm__input} ${css.input__error}` : css.loginForm__input}
                                        type={isShowPassword ? 'text' : 'password'}
                                        id='password'
                                        placeholder=' '

                                        onFocus={() => {
                                            setChangeInputPassword(true)
                                            setFocusPassword(true)
                                        }
                                        }
                                        {...register('password', {
                                            onBlur: () => {
                                                setFocusPassword(false)
                                            },
                                            onChange: () => {
                                                setFocusPassword(false)
                                            }
                                        })}/>
                                    <label className={css.loginForm__label} htmlFor='password'>Пароль</label>

                                    <button className={css.loginForm__input_eyeBtn} onClick={() => {
                                        setIsShowPassword(!isShowPassword)
                                    }}>
                                        <img src={isShowPassword ? eyeOpen : eyeClose}/>
                                    </button>

                                    {registrationStatus === 400 &&
                                        <div className={css.login_message}>
                                            <span style={{color: 'red'}}>Неверный логин или пароль!</span>
                                        </div>}

                                    {!registrationStatus &&
                                        <div className={css.login_message}>

                                            {(conditionEmptyPassword || errors.password) &&
                                                <span style={{color: 'red'}}>Поле не должно быть пустым</span>}
                                        </div>}
                                </div>
                            </div>

                            <NavLink className={css.loginForm__forgotPassword} to={'/'}>
                                {registrationStatus === 400 ? 'Восстановить?' : 'Забыли логин или пароль?'}
                            </NavLink>

                        </div>


                        <div className={css.loginForm_buttonBlock}>
                            <input
                                className={css.loginForm_submitBTN}
                                type='submit'
                                value='ВХОД'
                                disabled={
                                    !getFieldState('identifier').isDirty
                                    || !getFieldState('password').isDirty
                                    || !!errors.identifier
                                    || !!errors.password}
                            />

                            <div className={css.loginForm_registrationBlock}>
                                <span className={css.loginForm_registrationBlock_message}>Нет учетной записи?</span>
                                <NavLink to={'/registration'}
                                         className={css.loginForm_registrationBlock_link}><span>РЕГИСТРАЦИЯ</span></NavLink>
                            </div>
                        </div>

                    </div>
                </form>
            }

            {registrationStatus && registrationStatus !== 400 &&
                <BasicModal modalInfo={AuthErrorModal}/>}
        </div>
    )
};
