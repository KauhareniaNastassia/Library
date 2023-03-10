import React, {useState} from 'react';
import css from "../step1/registration-step1.module.scss";

type RegistrationStep2PropsType = {
    errors: any;
    register: any;
    getFieldState: any
    getValues: any
    setStepOfRegistration: (num: number) => void
}

export const RegistrationStep2: React.FC<RegistrationStep2PropsType> = ({
                                                                            errors,
                                                                            register,
                                                                            getFieldState,
                                                                            getValues, setStepOfRegistration,
                                                                        }) => {

    const [focusFirstName, setFocusFirstName] = useState(false)
    const [focusLastName, setFocusLastName] = useState(false)
    const [isChangeInputFirstName, setIsChangeInputFirstName] = useState(false);
    const [isChangeInputLastName, setIsChangeInputLastName] = useState(false);

    const conditionEmptyFirstName = isChangeInputFirstName && !focusFirstName && getValues('firstName') === '';
    const conditionEmptyLastName = isChangeInputLastName && !focusLastName && getValues('lastName') === '';


    const onClick2StepHandler = () => {
        setStepOfRegistration(3)
    }

    return (
        <React.Fragment>
            <div className={css.registration__inputBlock}>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={conditionEmptyFirstName ? `${css.registration__input} ${css.input__error}` : css.registration__input}
                        type='text'
                        id='firstName'
                        placeholder=' '

                        onFocus={() => {
                            setFocusFirstName(true)
                            setIsChangeInputFirstName(true)
                        }}
                        {...register('firstName', {onChange: () => setFocusFirstName(false)})}
                    />
                    <label className={css.registration__label} htmlFor='firstName'>Имя</label>

                    <div className={css.registration_message}>
                        {conditionEmptyFirstName &&
                            <span style={{color: 'red'}}>Поле не может быть пустым</span>}
                    </div>

                </div>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={conditionEmptyLastName ? `${css.registration__input} ${css.input__error}` : css.registration__input}
                        type='text'
                        id='lastName'
                        placeholder=' '
                        onFocus={() => {
                            setFocusLastName(true)
                            setIsChangeInputLastName(true)
                        }}
                        {...register('lastName', {
                            onChange: () => {
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
                    type='submit'
                    value={"ПОСЛЕДНИЙ ШАГ"}
                    onClick={onClick2StepHandler}
                    disabled={
                        !getFieldState('firstName').isDirty
                        || !getFieldState('lastName').isDirty
                        || errors.firstName
                        || errors.lastName
                    }
                />
            </div>
        </React.Fragment>
    );
};

