import React, {useState} from 'react';
import css from "../step1/registration-step1.module.scss";
import MaskedInput from 'react-text-mask'
import buttonCSS from '../registration-form.module.scss'
import ReactInputMask from "react-input-mask";





type RegistrationStep3PropsType = {
    errors: any;
    register: any;
    getFieldState: any
    getValues: any
    isDirty: any
    isValid: any
    setEmailValue: (emailValue: string) => void
    setPhoneValue: (phoneValue: string) => void
    setStepOfRegistration: (num: number) => void
}

export const RegistrationStep3: React.FC<RegistrationStep3PropsType> = ({
                                                                            errors,
                                                                            register,
                                                                            getFieldState,
                                                                            getValues,
                                                                            setEmailValue,
                                                                            setPhoneValue,
                                                                            setStepOfRegistration,
                                                                            isDirty,
                                                                            isValid
                                                                        }) => {


    const [focusPhone, setFocusPhone] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)
    const [isChangeInputPhone, setIsChangeInputPhone] = useState(false);
    const [isChangeInputEmail, setIsChangeInputEmail] = useState(false);
    const [itemPhone, setItemPhone] = React.useState('');
    const onClick3StepHandler = () => {

        /*setEmailValue(getValues('email'))
        setPhoneValue(getValues('phone'))*/
        /*console.log(getValues('email'))
        console.log(getValues('phone'))*/

    }
    const conditionEmptyEmail = isChangeInputEmail && !focusEmail && getValues('email') === '';

    return (
        <div>
            <React.Fragment>
                <div className={css.registration__inputBlock}>

                    <div className={css.registration__input_item_wrapper}>

                       {/* <MaskedInput
                            className={errors.phone ? `${css.registration__input} ${css.input__error}` : css.registration__input}
                            mask={['+', '3', '7', '5', ' ', '(', /[2-4]/, /[3|4|5|9]/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                            type='tel'
                            id='phone'
                            placeholder=' '
                            value={itemPhone}
                            onChange={(e) => {
                                setIsChangeInputPhone(true)
                                setItemPhone(e.target.value as string)
                            }

                            }
                            onFocus={() => {
                                setFocusPhone(true)
                            }}
                            {...register('phone', {onBlur: () => setFocusPhone(false)})}
                        />*/}

                        <ReactInputMask
                            className={errors.phone ? `${css.registration__input} ${css.input__error}` : css.registration__input}
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
                            {errors.phone && <div style={{color: 'red'}}>{errors.phone.message}</div>}
                        </div>

                    </div>

                    <div className={css.registration__input_item_wrapper}>

                        <input
                            className={errors.email ? `${css.registration__input} ${css.input__error}` : css.registration__input}
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
                            {conditionEmptyEmail && <span style={{color: 'red'}}>Поле не может быть пустым</span>}
                            {errors.email && errors.email?.type === 'errorEmail' && <span style={{color: 'red'}}>{errors.email.message}</span>}
                        </div>
                    </div>

                    <input
                        className={css.registration_submitBTN}
                        type='submit'
                        value={"ЗАРЕГИСТРИРОВАТЬСЯ"}
                        onClick={onClick3StepHandler}
                        disabled={!getFieldState('phone').isDirty
                            || !getFieldState('email').isDirty
                            || errors.email
                            || errors.phone}
                    />

                </div>
            </React.Fragment>
        </div>
    );
};

