import React from 'react';
import css from "./registration-step1.module.scss";
import eyeOpen from "../../../../assets/img/eye-open.svg";
import eyeClose from "../../../../assets/img/eye-close.svg";


type RegistrationStep1PropsType = {
    errors: any;
    register: any;
}


export const RegistrationStep1: React.FC<RegistrationStep1PropsType> = ({register, errors}) => {


    return (
        <React.Fragment>
            <div className={css.registration__inputBlock}>

                <div className={css.registration__input_item_wrapper}>

                        <input
                            className={css.registration__input}
                            type='text'
                            id='username'
                            placeholder=' '
                            {...register('username', {
                                /*onBlur:() => {},*/
                                required: true
                                /*pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Enter valid email please'
                                }*/
                            })}
                        />
                        <label className={css.registration__label} htmlFor='username'>Придумайте логин для
                            входа</label>

                    <div className={css.registration_message}>
                        {!errors.username &&
                            <p >Используйте для логина латинский алфавит и цифры</p>}
                    </div>

                    {errors.username && <div style={{color: 'red'}}>{errors.username.message}</div>}

                </div>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={css.registration__input}
                        type='text'
                        id='password'
                        placeholder=' '
                        {...register('password', {
                            required: 'Password is required',
                            /*pattern: {
                                minLength: {
                                value: 8, message: 'Password must be more than 8 characters'
                            }*/
                        })}
                    />

                    <label className={css.registration__label} htmlFor='password'>Пароль</label>

                    <div className={css.registration_message}>
                        {!errors.password &&
                            <p >Пароль не менее 8 символов, с заглавной буквой и цифрой</p>}

                    </div>

                    {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
                </div>
            </div>
        </React.Fragment>
    );
};

