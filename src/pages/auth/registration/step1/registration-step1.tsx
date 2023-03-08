import React, {useState} from 'react';
import css from "./registration-step1.module.scss";
import okPasswordIcon from '../../../../assets/img/ok-password-icon.svg'
import eyeOpen from "../../../../assets/img/eye-open.svg";
import eyeClose from "../../../../assets/img/eye-close.svg";
import buttonCSS from '../registration-form.module.scss'
import {InputTypesRegistration} from "../registration-form";


type RegistrationStep1PropsType = {
    errors: any;
    register: any;
    getFieldState: any
    isDirty: any
    isValid: any
    getValues: any
    setUserNameValue: (userNameValue: string) => void
    setPasswordValue: (passwordValue: string) => void
    setStepOfRegistration:(num: number) => void

}


export const RegistrationStep1: React.FC<RegistrationStep1PropsType> = ({
                                                                            register,
                                                                            errors,
                                                                            getFieldState,
                                                                            getValues,
    setPasswordValue, setUserNameValue, setStepOfRegistration, isDirty, isValid
                                                                        }) => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [focusUsername, setFocusUserName] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)
    const [isChangeInputName, setIsChangeInputName] = useState(false);
    const [isChangeInputPassword, setIsChangeInputPassword] = useState(false);

    const conditionForEmptyNameFocus = isChangeInputName && focusUsername && getValues('username') === '';
    const conditionForEmptyName = isChangeInputName && !focusUsername && getValues('username') === '';
    const conditionForEmptyPassword = isChangeInputPassword && !focusPassword && getValues('password') === '';

    const onClick1StepHandler = () => {

           /* setDataValue(getValues('username'))
            setDataValue(getValues('password'))*/
            /*setUserNameValue(getValues('username'))
            setPasswordValue(getValues('password'))*/
            setStepOfRegistration(2)
            /*console.log(getValues('username'))
            console.log(getValues('password'))*/

    }


    return (
        <React.Fragment>
            <div className={css.registration__inputBlock}>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={css.registration__input}
                        type='text'
                        id='username'
                        placeholder=' '
                        onFocus={() => {
                            setFocusUserName(true)
                            setIsChangeInputName(true)
                        }}
                        {...register('username', {
                            onBlur: () => setFocusUserName(false),
                        })}
                    />
                    <label className={css.registration__label} htmlFor='username'>Придумайте логин для
                        входа</label>

                    <div className={css.registration_message}>
                        {!errors.userName && conditionForEmptyNameFocus &&
                            <span>Используйте для логина латинский алфавит и цифры</span>}
                        {errors.username?.type !== 'required' && conditionForEmptyName &&
                            <span>Используйте для логина латинский алфавит и цифры</span>
                        }
                        {!focusUsername && errors.username?.type === 'required' && getFieldState('username').isTouched &&
                            <span style={{color: 'red'}}>Поле не может быть пустым</span>
                        }
                        {focusUsername && errors.userName?.type === 'usernameShouldHaveNumberAndLetter' &&
                            <span>Используйте для логина <span style={{color: 'red'}}>латинский алфавит</span> и <span
                                style={{color: 'red'}}>цифры</span></span>
                        }
                        {focusUsername && errors.username?.type === 'usernameShouldHaveLatinLetters' &&
                            <span>Используйте для логина <span
                                style={{color: 'red'}}>латинский алфавит</span> и цифры</span>
                        }
                        {focusUsername && errors.username?.type === 'usernameShouldHaveNumber' &&
                            <span>Используйте для логина латинский алфавит и <span
                                style={{color: 'red'}}>цифры</span></span>
                        }
                        {errors.username && errors.username?.type !== 'required' && !focusUsername &&
                            <span style={{color: 'red'}}>Используйте для логина латинский алфавит и цифры</span>}

                    </div>

                </div>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={css.registration__input}
                        type={isShowPassword ? 'text' : 'password'}
                        id='password'
                        placeholder=' '
                        onFocus={() => {
                            setFocusPassword(true)
                            setIsChangeInputPassword(true)
                        }}
                        {...register('password', {
                            onBlur: () => setFocusPassword(false),
                        })}
                    />

                    <label className={css.registration__label} htmlFor='password'>Пароль</label>
                    {!errors.password && getFieldState('password').isDirty &&
                        <img className={css.registration_ok_password_icon} src={okPasswordIcon} alt={'ok password'}/>}
                    <button className={css.registration__input_eyeBtn} onClick={() => {
                        setIsShowPassword(!isShowPassword)
                    }}>
                        <img src={isShowPassword ? eyeOpen : eyeClose}/>
                    </button>


                    <div className={css.registration_message}>
                        {!errors.password && conditionForEmptyPassword &&
                            <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                        }
                        {!focusPassword && errors.password?.type === 'required' && getFieldState('password').isTouched &&
                            <span style={{color: 'red'}}>Поле не может быть пустым</span>
                        }
                        {focusPassword && errors.password?.type === 'required' && getFieldState('password').isTouched &&
                            <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                        }
                        {errors.password && errors.password?.type !== 'required' && !focusPassword &&
                            <span style={{color: 'red'}}>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                        }

                        {focusPassword && !errors.password &&  <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>}
                        {focusPassword && errors.password?.type === 'passwordLengthError' &&
                            <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и цифрой</span>
                        }

                        {focusPassword && errors.password?.type === 'passwordLengthErrorAndNoBigLetterAndNumberAbsent' &&
                            <span>Пароль <span
                                style={{color: 'red'}}>не менее 8 символов, с заглавной буквой и цифрой</span></span>
                        }

                        {focusPassword && errors.password?.type === 'passwordLengthErrorAndNumberAbsent' &&
                            <span>Пароль <span
                                style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и<span
                                style={{color: 'red'}}> цифрой</span></span>
                        }
                        {focusPassword && errors.password?.type === 'passwordLengthErrorAndNoBigLetter' &&
                            <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, <span
                                style={{color: 'red'}}>с заглавной буквой</span> и цифрой</span>
                        }


                    </div>
                    {/*
                    {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}*/}
                </div>

                <input
                    className={css.registration_submitBTN}
                    type='submit'
                    value={"СЛЕДУЮЩИЙ ШАГ"}
                    onClick={onClick1StepHandler}
                    disabled={
                        !getFieldState('password').isDirty
                        || !getFieldState('username').isDirty
                        || errors.username
                        || errors.password
                        }
                />
            </div>
        </React.Fragment>
    );
};

