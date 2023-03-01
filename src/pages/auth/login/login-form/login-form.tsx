import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {loginTC} from "../../../../redux/auth-reducer";
import {Navigate, NavLink} from "react-router-dom";
import {LoginRequestDataType} from "../../../../api/auth-api";
import css from './login-form.module.scss'


export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const status = useAppSelector(state => state.app.status)

    const {register, control, handleSubmit, formState: {errors}} = useForm<LoginRequestDataType>({
        defaultValues: {
            identifier: '',
            password: '',
        },
        mode: 'onTouched',
    });

    const onSubmit = (data: LoginRequestDataType) => {
        console.log(data)
        dispatch(loginTC(data))
    }

    const onEnterPress = (key: string) => {
        key === 'Enter' && handleSubmit(onSubmit)
    }



    return <form onSubmit={handleSubmit(onSubmit)}
                 onKeyDown={(e) => onEnterPress(e.key)}>
        <div className={css.wrapper_loginForm}>
            <h3 className={css.loginForm__title}>Вход в личный кабинет</h3>


            <div className={css.loginForm__inputBlock}>

                <div className={css.loginForm__input_wrapper}>
                    <div className={css.loginForm__input_item}>
                        <input
                           /* onFocus={}*/

                            className={css.loginForm__input}
                            type='text'
                            id='identifier'
                            placeholder=' '

                            {...register('identifier', {
                                /*onBlur:() => {},*/
                                required: 'Identifier is required',
                                /*pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Enter valid email please'
                                }*/
                            })}
                        />
                        <label className={css.loginForm__label} htmlFor='identifier'>Логин</label>
                        {errors.identifier && <div style={{color: 'red'}}>{errors.identifier.message}</div>}

                    </div>

                    <div className={css.loginForm__input_item}>

                        <input
                            className={css.loginForm__input}
                            type='password'
                            id='password'
                            placeholder=' '
                            {...register('password', {
                                required: 'Password is required',
                                /*pattern: {
                                    minLength: {
                                    value: 8, message: 'Password must be more than 8 characters'
                                }*/
                            })}/>
                        <label className={css.loginForm__label}  htmlFor='password'>Пароль</label>

                        {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
                    </div>
                </div>

                <NavLink className={css.loginForm__forgotPassword} to={'/'}>Забыли логин или пароль?</NavLink>


            </div>


            <div className={css.loginForm_buttonBlock}>
                <input
                    className={css.loginForm_submitBTN}
                    type='submit'
                    value='ВХОД'
                    /*disabled={status === 'loading'}*//>


                <div className={css.loginForm_registrationBlock}>
                    <span className={css.loginForm_registrationBlock_message}>Нет учетной записи?</span>
                    <NavLink to={'/registration'} className={css.loginForm_registrationBlock_link}><span>РЕГИСТРАЦИЯ</span></NavLink>
                </div>
            </div>



        </div>
    </form>
};
