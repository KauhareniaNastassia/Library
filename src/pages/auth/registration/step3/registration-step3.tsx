import React, {useState} from 'react';
import css from "../step1/registration-step1.module.scss";
import ReactInputMask from "react-input-mask";


type RegistrationStep3PropsType = {
    errors: any;
    register: any;
    getFieldState: any
    getValues: any
}

export const RegistrationStep3: React.FC<RegistrationStep3PropsType> = ({
                                                                            errors,
                                                                            register,
                                                                            getFieldState,
                                                                            getValues,
                                                                        }) => {

    const [focusPhone, setFocusPhone] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)
    const [isChangeInputPhone, setIsChangeInputPhone] = useState(false);
    const [isChangeInputEmail, setIsChangeInputEmail] = useState(false);

    const conditionEmptyEmail = isChangeInputEmail && !focusEmail && getValues('email') === '';
    const conditionForEmptyPhone= isChangeInputPhone && !focusPhone && getValues('phone') === '';
    const conditionForEmptyPhoneFocus= isChangeInputPhone && focusPhone && getValues('phone') === '';

    return (
            <React.Fragment>
                <div className={css.registration__inputBlock}>
                    <div className={css.registration__input_wrapper}>

                        <div className={css.registration__input_item_wrapper}>
                            <ReactInputMask
                                className={conditionForEmptyPhone ? `${css.registration__input} ${css.input__error}` : css.registration__input}
                                mask="+375 (99) 999-99-99"
                                maskPlaceholder='+375 (xx) xxx-xx-xx'
                                placeholder=' '
                                type='text'
                                id='number'
                                onFocus={() => {
                                    setFocusPhone(true)
                                    setIsChangeInputPhone(true)
                                }}
                                {...register('phone', {onBlur: () => setFocusPhone(false)})}
                            />

                            <label className={css.registration__label} htmlFor='phone'>Номер телефона</label>
                            <div className={css.registration_message}>
                                {conditionForEmptyPhoneFocus && <div>В формате +375 (хх) ххх-хх-хх</div>
                                }
                                {errors.phone?.type === 'errorPhone' &&  <span style={{color: 'red'}}>{errors.phone.message}</span>
                                }
                            </div>
                        </div>

                        <div className={css.registration__input_item_wrapper}>

                            <input
                                className={conditionEmptyEmail ? `${css.registration__input} ${css.input__error}` : css.registration__input}
                                type='text'
                                id='email'
                                placeholder=' '
                                onFocus={() => {
                                    setFocusEmail(true)
                                    setIsChangeInputEmail(true)
                                }}
                                {...register('email', {onBlur: () => setFocusEmail(false)})}
                            />

                            <label className={css.registration__label} htmlFor='email'>Email</label>
                            <div className={css.registration_message}>
                                {conditionEmptyEmail && <span style={{color: 'red'}}>Поле не может быть пустым</span>
                                }
                                {errors.email && errors.email?.type === 'errorEmail' && <span style={{color: 'red'}}>{errors.email.message}</span>
                                }
                            </div>
                        </div>
                    </div>

                    <input
                        className={css.registration_submitBTN}
                        type='submit'
                        value={"ЗАРЕГИСТРИРОВАТЬСЯ"}
                        disabled={!getFieldState('phone').isDirty
                            || !getFieldState('email').isDirty
                            || errors.email
                            || errors.phone}
                    />
                </div>
            </React.Fragment>
    );
};

