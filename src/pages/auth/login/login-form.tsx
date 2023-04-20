import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {isAuthErrorAC, loginTC} from "../../../redux/auth-reducer";
import {NavLink, useNavigate} from "react-router-dom";
import {LoginRequestDataType} from "../../../api/auth-api";
import css from './login-form.module.scss'
import eyeOpen from '../../../assets/img/eye-open.svg'
import eyeClose from '../../../assets/img/eye-close.svg'
import arrowToRegistration from '../../../assets/img/arrow-for-registration.svg'
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {schemaForAuth} from "../../../utils/validate/auth-validate/shema-for-auth";

export const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const isAuthError = useAppSelector(state => state.auth.isAuthError)

    const [focusIdentifier, setFocusIdentifier] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [changeInputIdentifier, setChangeInputIdentifier] = useState(false);
    const [changeInputPassword, setChangeInputPassword] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)

    const {register, handleSubmit, getValues, formState: {errors}} = useForm<LoginRequestDataType>({
        defaultValues: {
            identifier: '',
            password: '',
        },
        mode: 'all',
        resolver: yupResolver(schemaForAuth)
    });


    const userData = localStorage.getItem('user');
    let password = ''
    let username = ''
    let firstName = ''
    let lastName = ''
    let phone = ''
    let email = ''

    if (userData) {
        const userInfo = JSON.parse(userData);
        password = userInfo.password
        username = userInfo.username
        firstName = userInfo.firstName
        lastName = userInfo.lastName
        phone = userInfo.phone
        email = userInfo.email
    }

    const onClickLoginAsGuest = () => {
        const loginData = {
            username:  'Guest1234',
            password: 'Guest1234',
            firstName: 'Гость',
            lastName: 'Гость',
            phone: '+375 (29) 123-45-67',
            email: "email@gmail.com",
        }
        localStorage.clear()
        dispatch(loginTC(loginData))
        navigate('/')
    }

    const onSubmit = (data: LoginRequestDataType) => {
        if (data.identifier === username && data.password === password) {

            const loginData = {
                username:  data.identifier,
                password: data.password,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
            }
            dispatch(loginTC(loginData))
            navigate('/')
        } else {
            dispatch(isAuthErrorAC(true))
        }
    }

    const conditionEmptyIdentifier = changeInputIdentifier && !focusIdentifier && getValues('identifier') === '';
    const conditionEmptyPassword = changeInputPassword && !focusPassword && getValues('password') === ''

    return (
        <div>
            {
                (!isLoggedIn &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={css.wrapper_loginForm}>
                            <h3 className={css.loginForm__title}>Вход в личный кабинет</h3>

                            <div className={css.loginForm__inputBlock}>

                                <div className={css.loginForm__input_wrapper}>
                                    <div className={css.loginForm__input_item}>
                                        <input
                                            className={(conditionEmptyIdentifier)
                                                ? `${css.loginForm__input} ${css.input__error}`
                                                : css.loginForm__input}
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
                                            })}/>

                                        <label className={css.loginForm__label} htmlFor='identifier'>Логин</label>

                                        <div className={css.login_message}>
                                            {conditionEmptyIdentifier &&
                                                <span style={{color: 'red'}}>Поле не должно быть пустым</span>}
                                        </div>
                                    </div>

                                    <div className={css.loginForm__input_item}>
                                        <input
                                            className={conditionEmptyPassword
                                                ? `${css.loginForm__input} ${css.input__error}`
                                                : css.loginForm__input}
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
                                            })}/>
                                        <label className={css.loginForm__label} htmlFor='password'>Пароль</label>

                                        <button
                                            type='button'
                                            className={css.loginForm__input_eyeBtn}
                                            onClick={() => {
                                                setIsShowPassword(!isShowPassword)
                                            }}>
                                            <img src={isShowPassword ? eyeOpen : eyeClose}/>
                                        </button>

                                        {isAuthError &&
                                            <div className={css.login_message}>
                                                <span style={{color: 'red'}}>Неверный логин или пароль!</span>
                                            </div>}


                                            <div className={css.login_message}>

                                                {(conditionEmptyPassword || errors.password) &&
                                                    <span style={{color: 'red'}}>Поле не должно быть пустым</span>}
                                            </div>
                                    </div>
                                </div>

                                <div className={css.loginForm__forgotPassword} onClick={onClickLoginAsGuest}>
                                    Войти как гость
                                    <img src={arrowToRegistration} alt='arrow to enter as guest'/>
                                </div>

                            </div>

                            <div className={css.loginForm_buttonBlock}>
                                <input
                                    className={css.loginForm_submitBTN}
                                    type='submit'
                                    value='ВХОД'
                                />

                                <div className={css.loginForm_registrationBlock}>
                                    <span className={css.loginForm_registrationBlock_message}>Нет учетной записи?</span>
                                    <NavLink to={'/registration'}
                                             className={css.loginForm_registrationBlock_link}>
                                        <span>РЕГИСТРАЦИЯ</span>
                                        <img src={arrowToRegistration} alt='arrow to registration'/></NavLink>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
        </div>
    )
};
