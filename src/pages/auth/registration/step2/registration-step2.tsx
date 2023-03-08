import React, {useState} from 'react';
import css from "../step1/registration-step1.module.scss";

type RegistrationStep2PropsType = {
    errors: any;
    register: any;
    getFieldState: any
}

export const RegistrationStep2:React.FC<RegistrationStep2PropsType> = ({errors,register, getFieldState }) => {

    const [focusFirstName, setFocusFirstName] = useState(false)
    const [focusLastName, setFocusLastName] = useState(false)


    return (
        <React.Fragment>
            <div className={css.registration__inputBlock}>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={css.registration__input}
                        type='text'
                        id='firstName'
                        placeholder=' '
                        onFocus={ () => setFocusFirstName(true) }
                        {...register('firstName', {
                            onBlur:() => {setFocusFirstName(false)},
                        })}
                    />
                    <label className={css.registration__label} htmlFor='firstName'>Имя</label>

                    {!focusFirstName && errors.firstName && getFieldState('firstName').isTouched &&  <span style={{color: 'red'}}>Поле не может быть пустым</span>}

                    {errors.firstName && <div style={{color: 'red'}}>{errors.firstName.message}</div>}

                </div>

                <div className={css.registration__input_item_wrapper}>

                    <input
                        className={css.registration__input}
                        type='text'
                        id='lastName'
                        placeholder=' '
                        onFocus={ () => setFocusLastName(true) }
                        {...register('lastName', {
                            onBlur:() => {setFocusLastName(false)},
                        })}
                    />

                    <label className={css.registration__label} htmlFor='lastName'>Фамилия</label>

                   {/* {!focusLastName && errors.lastName.type === 'required' && getFieldState('lastName').isTouched &&  <span style={{color: 'red'}}>Поле не может быть пустым</span>}*/}

                    {/*{errors.lastName && <div style={{color: 'red'}}>{errors.lastName.message}</div>}*/}
                </div>
            </div>
        </React.Fragment>
    );
};

