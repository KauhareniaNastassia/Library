import React, {useState} from 'react';
import css from "../step1/registration-step1.module.scss";
import MaskedInput from 'react-text-mask'
import buttonCSS from '../registration-form.module.scss'


type RegistrationStep3PropsType = {
    errors: any;
    register: any;
    getFieldState: any
    getValues: any
    isDirty: any
    isValid: any
    setEmailValue: (emailValue: string) => void
    setPhoneValue: (phoneValue: string) => void
    setStepOfRegistration:(num: number) => void
}

export const RegistrationStep3:React.FC<RegistrationStep3PropsType> = ({errors,register, getFieldState, getValues, setEmailValue, setPhoneValue, setStepOfRegistration, isDirty,isValid}) => {



    const [focusPhone, setFocusPhone] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)
    const [isChangeInputPhone, setIsChangeInputPhone] = useState(false);
    const [isChangeInputEmail, setIsChangeInputEmail] = useState(false);

    const onClick3StepHandler = () => {

        setEmailValue(getValues(getValues('email')))
        setPhoneValue(getValues(getValues('phone')))


    }


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
                            onFocus={() => {
                                setFocusPhone(true)
                                setIsChangeInputPhone(true)
                            }}
                            {...register('phone', {onBlur: () => setFocusPhone(false)})}
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
                            onFocus={() => {
                                setFocusEmail(true)
                                setIsChangeInputEmail(true)
                            }}
                            {...register('email',  {onBlur: () => setFocusEmail(false)})}
                        />

                        <label className={css.registration__label} htmlFor='email'>Email</label>

                        {errors.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
                    </div>

                    <input
                        className={css.registration_submitBTN}
                        type='submit'
                        value={"ЗАРЕГИСТРИРОВАТЬСЯ"}
                        onClick={onClick3StepHandler}
                        disabled={!isDirty || !isValid}
                    />

                </div>
            </React.Fragment>
        </div>
    );
};

