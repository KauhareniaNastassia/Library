import React from 'react';
import css from "../step1/registration-step1.module.scss";

type RegistrationStep2PropsType = {
    errors: any;
    register: any;
}

export const RegistrationStep2:React.FC<RegistrationStep2PropsType> = ({errors,register }) => {
    return (
        <React.Fragment>
            <div className={css.registration__inputBlock}>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={css.registration__input}
                        type='text'
                        id='firstName'
                        placeholder=' '
                        {...register('firstName', {
                            /*onBlur:() => {},*/
                            required: true
                            /*pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Enter valid email please'
                            }*/
                        })}
                    />
                    <label className={css.registration__label} htmlFor='firstName'>Имя</label>



                    {errors.firstName && <div style={{color: 'red'}}>{errors.firstName.message}</div>}

                </div>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={css.registration__input}
                        type='text'
                        id='lastName'
                        placeholder=' '
                        {...register('lastName', {
                            required: 'Password is required',
                            /*pattern: {
                                minLength: {
                                value: 8, message: 'Password must be more than 8 characters'
                            }*/
                        })}
                    />

                    <label className={css.registration__label} htmlFor='lastName'>Фамилия</label>

                    {errors.lastName && <div style={{color: 'red'}}>{errors.lastName.message}</div>}
                </div>
            </div>
        </React.Fragment>
    );
};

