import React from 'react';
import css from "../step1/registration-step1.module.scss";
import MaskedInput from 'react-text-mask'


type RegistrationStep3PropsType = {
    errors: any;
    register: any;
}

export const RegistrationStep3:React.FC<RegistrationStep3PropsType> = ({errors,register}) => {
    return (
        <div>
            <React.Fragment>
                <div className={css.registration__inputBlock}>

                    <div className={css.registration__input_item_wrapper}>

                        <MaskedInput
                            className={css.registration__input}
                            mask={['+','3','7','5',' ','(',/[2-4]/, /[3|4|5|9]/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                            type='tel'
                            id='phone'
                            placeholder=' '
                            {...register('phone', {
                                /*onBlur:() => {},*/
                                required: true
                                /*pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Enter valid email please'
                                }*/
                            })}
                        />
                        <label className={css.registration__label} htmlFor='phone'>Номер телефона</label>



                        {errors.phone && <div style={{color: 'red'}}>{errors.phone.message}</div>}

                    </div>

                    <div className={css.registration__input_item_wrapper}>

                        <input
                            className={css.registration__input}
                            type='text'
                            id='email'
                            placeholder=' '
                            {...register('email', {
                                required: 'Password is required',
                                /*pattern: {
                                    minLength: {
                                    value: 8, message: 'Password must be more than 8 characters'
                                }*/
                            })}
                        />

                        <label className={css.registration__label} htmlFor='email'>Email</label>

                        {errors.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
};

