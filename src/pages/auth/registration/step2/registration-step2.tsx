import React, {useState} from 'react';
import css from "../step1/registration-step1.module.scss";
import buttonCSS from '../registration-form.module.scss'

type RegistrationStep2PropsType = {
    errors: any;
    register: any;
    getFieldState: any
    isDirty: any
    isValid: any
    getValues: any
    setFirstNameValue: (firstNameValue: string) => void
    setLastNameValue: (lastNameValue: string) => void
    setStepOfRegistration:(num: number) => void
}

export const RegistrationStep2: React.FC<RegistrationStep2PropsType> = ({
                                                                            errors,
                                                                            register,
                                                                            getFieldState,
                                                                            getValues, setFirstNameValue, setLastNameValue, setStepOfRegistration, isDirty, isValid
                                                                        }) => {

    const [focusFirstName, setFocusFirstName] = useState(false)
    const [focusLastName, setFocusLastName] = useState(false)
    const [isChangeInputFirstName, setIsChangeInputFirstName] = useState(false);
    const [isChangeInputLastName, setIsChangeInputLastName] = useState(false);

    const conditionEmptyFirstName = isChangeInputFirstName && !focusFirstName && getValues('firstName') === '';
    const conditionEmptyLastName = isChangeInputLastName && !focusLastName && getValues('lastName') === '';


    const onClick2StepHandler = () => {

            setFirstNameValue(getValues('firstName'))
            setLastNameValue(getValues('lastName'))
            setStepOfRegistration(3)
            console.log(getValues('firstName'))
            console.log(getValues('lastName'))
        }



    return (
        <React.Fragment>
            <div className={css.registration__inputBlock}>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        //className={css.registration__input}
                        className={`${css.registration__input} ${errors.firstName && css.input__error}`}
                        type='text'
                        id='firstName'
                        placeholder=' '

                        onFocus={() => {
                            setFocusFirstName(true)
                            setIsChangeInputFirstName(true)
                        }}
                        {...register('firstName', {onBlur: () => setFocusFirstName(false)})}
                        required
                    />
                    <label className={css.registration__label} htmlFor='firstName'>Имя</label>

                    <div className={css.registration_message}>
                        {conditionEmptyFirstName &&
                            <span style={{color: 'red'}}>Поле не может быть пустым</span>}
                    </div>


                </div>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        // className={css.registration__input}
                        className={`${css.registration__input} ${errors.lastName && css.input__error}`}
                        type='text'
                        id='lastName'
                        placeholder=' '
                        onFocus={() => {
                            setFocusLastName(true)
                            setIsChangeInputLastName(true)
                        }}
                        {...register('lastName', {
                            onBlur: () => {
                                setFocusLastName(false)
                            },
                        })}
                    />

                    <label className={css.registration__label} htmlFor='lastName'>Фамилия</label>

                    <div className={css.registration_message}>
                        {conditionEmptyLastName &&
                            <span style={{color: 'red'}}>Поле не может быть пустым</span>}

                    </div>

                </div>

                <input
                    className={css.registration_submitBTN}
                    type='button'
                    value={"ПОСЛЕДНИЙ ШАГ"}
                    onClick={onClick2StepHandler}
                    disabled={!getFieldState('firstName').isDirty
                        || !getFieldState('lastName').isDirty
                        || errors.firstName
                        || errors.lastName}
                />

            </div>
        </React.Fragment>
    );
};

