import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {ForgotPasswordRequestType} from "../../../../api/auth-api";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {forgetPasswordTC} from "../../../../redux/auth-reducer";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import css from "./forgot-password-form.module.scss";
import {schemaForForgotPassword} from "../../../../utils/validate/forgot-password-validation/shema-for-forgot-password";
import {NavLink} from "react-router-dom";
import arrowToRegistration from "../../../../assets/img/arrow-for-registration.svg";


export const ForgotPasswordForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const [focusEmail, setFocusEmail] = useState(false)
    const [isChangeInputEmail, setIsChangeInputEmail] = useState(false);
    const forgotPasswordError = useAppSelector(state => state.auth.forgotPasswordError)

    const {register, handleSubmit, getValues, getFieldState, formState: {errors}} = useForm<ForgotPasswordRequestType>({
        defaultValues: {
            email: '',
        },
        mode: 'all',
        resolver: yupResolver(schemaForForgotPassword)
    });

    const conditionEmptyEmail = isChangeInputEmail && !focusEmail && getValues('email') === '';

    const onSubmit = (data: ForgotPasswordRequestType) => {
        dispatch(forgetPasswordTC(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.wrapper_forgotPassword}>

                        <NavLink to={'/auth'}
                                 className={css.forgotPassword_navigateToLogin_link}>
                            <img src={arrowToRegistration} alt='arrow to login'/>
                            <span>ВХОД В ЛИЧНЫЙ КАБИНЕТ</span>
                        </NavLink>

                        <div className={css.wrapper_forgotPassword_block}>
                            <h3 className={css.forgotPassword__title}>Восстановление пароля</h3>

                            <div className={css.forgotPassword__input_item_wrapper}>

                                <input
                                    className={conditionEmptyEmail ? `${css.forgotPassword__input} ${css.input__error}` : css.forgotPassword__input}
                                    type='text'
                                    id='email'
                                    placeholder=' '
                                    onFocus={() => {
                                        setFocusEmail(true)
                                        setIsChangeInputEmail(true)
                                    }}
                                    {...register('email', {onBlur: () => setFocusEmail(false)})}
                                />

                                <label className={css.forgotPassword__label} htmlFor='email'>Email</label>
                                <div className={css.forgotPassword_message}>

                                    {forgotPasswordError && <span style={{color: 'red'}}>{forgotPasswordError}</span>
                                    }
                                    {conditionEmptyEmail && <span style={{color: 'red'}}>Поле не может быть пустым</span>
                                    }
                                    {errors.email && errors.email?.type === 'errorEmail' &&
                                        <span style={{color: 'red'}}>Введите корректный email</span>
                                    }
                                    {!errors.email &&
                                        <span className={css.forgotPassword__input_hint}>На это email  будет отправлено письмо с инструкциями по восстановлению пароля</span>
                                    }
                                </div>

                            </div>

                            <div className={css.forgotPassword_buttonBlock}>
                                <input
                                    className={css.forgotPassword_submitBTN}
                                    type='submit'
                                    value='ВОССТАНОВИТЬ'
                                    disabled={!getFieldState('email').isDirty
                                        || !!errors.email}
                                />

                                <div className={css.forgotPassword_registrationBlock}>
                                    <span
                                        className={css.forgotPassword_registrationBlock_message}>Нет учетной записи?</span>
                                    <NavLink to={'/registration'}
                                             className={css.forgotPassword_registrationBlock_link}>
                                        <span>РЕГИСТРАЦИЯ</span>
                                        <img src={arrowToRegistration} alt='arrow to registration'/></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    )
};

