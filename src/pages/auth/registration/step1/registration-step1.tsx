import React, {useState} from 'react';
import css from "./registration-step1.module.scss";
import okPasswordIcon from '../../../../assets/img/ok-password-icon.svg'
import eyeOpen from "../../../../assets/img/eye-open.svg";
import eyeClose from "../../../../assets/img/eye-close.svg";


type RegistrationStep1PropsType = {
    errors: any;
    register: any;
    getFieldState: any
    isDirty: any
}


export const RegistrationStep1: React.FC<RegistrationStep1PropsType> = ({register, errors, getFieldState, isDirty}) => {
    const [isShowPassword, setIsShowPassword] = useState(false)
const [focusUsername, setFocusUserName] = useState(false)
const [focusPassword, setFocusPassword] = useState(false)

    return (
        <React.Fragment>
            <div className={css.registration__inputBlock}>

                <div className={css.registration__input_item_wrapper}>

                        <input
                            className={css.registration__input}
                            type='text'
                            id='username'
                            placeholder=' '
                            onFocus={ () =>setFocusUserName(true) }
                            {...register('username', {
                                onBlur:() =>setFocusUserName(false),
                            })}
                        />
                        <label className={css.registration__label} htmlFor='username'>Придумайте логин для
                            входа</label>

                    <div className={css.registration_message}>
                        {!errors.username &&
                            <span >Используйте для логина латинский алфавит и цифры</span>
                        }
                        {errors.username?.type === 'usernameShouldHaveLatinLetters' &&
                            <span>Используйте для логина <span style={{color: 'red'}}>латинский алфавит</span> и цифры</span>
                        }
                        {errors.username?.type === 'usernameShouldHaveNumber' &&
                            <span>Используйте для логина латинский алфавит и <span style={{color: 'red'}}>цифры</span></span>
                        }
                        {!focusUsername && errors.username?.type === 'required' && getFieldState('username').isTouched &&
                            <span style={{color: 'red'}}>Поле не может быть пустым</span>
                        }
                        {focusUsername && errors.username?.type === 'required' && getFieldState('username').isTouched &&
                            <span>Используйте для логина латинский алфавит и цифры</span>
                        }
                    </div>

                </div>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={css.registration__input}
                        type='text'
                        id='password'
                        placeholder=' '
                        onFocus={ () =>setFocusPassword(true) }
                        {...register('password', {
                            onBlur:() =>setFocusPassword(false),
                        })}
                    />

                    <label className={css.registration__label} htmlFor='password'>Пароль</label>

                    <div className={css.registration_message}>
                        {!errors.password &&
                            <span >Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                        }
                        {!focusPassword && errors.password?.type === 'required' && getFieldState('password').isTouched &&
                            <span style={{color: 'red'}}>Поле не может быть пустым</span>
                        }
                        {focusPassword && errors.password?.type === 'required' && getFieldState('password').isTouched &&
                            <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                        }
                        {errors.password?.type === 'passwordLengthError' &&
                            <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и цифрой</span>
                        }

                        {errors.password?.type === 'passwordLengthErrorAndNoBigLetterAndNumberAbsent' &&
                            <span>Пароль <span style={{color: 'red'}}>не менее 8 символов, с заглавной буквой и цифрой</span></span>
                        }

                        {errors.password?.type === 'passwordLengthErrorAndNumberAbsent' &&
                            <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и<span style={{color: 'red'}}> цифрой</span></span>
                        }
                        {errors.password?.type === 'passwordLengthErrorAndNoBigLetter' &&
                            <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, <span style={{color: 'red'}}>с заглавной буквой</span> и цифрой</span>
                        }

                        <button className={css.registration__input_eyeBtn} onClick={() => {
                            setIsShowPassword(!isShowPassword)
                        }}>
                            <img src={isShowPassword ? eyeOpen : eyeClose}/>
                        </button>
                        {!errors.password && getFieldState('password').isDirty &&
                        <img src={okPasswordIcon} alt={'ok password'}/>}

                    </div>
{/*
                    {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}*/}
                </div>
            </div>
        </React.Fragment>
    );
};

