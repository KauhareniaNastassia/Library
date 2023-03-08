import React, {useState} from 'react';
import {RegistrationStep1} from "./step1/registration-step1";
import {RegistrationStep2} from "./step2/registration-step2";
import {RegistrationStep3} from "./step3/registration-step3";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {ShemaForRegistration} from "../../../utils/validate/registration-validate/shema1";
import css from "./registration-form.module.scss";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {LoginRequestDataType} from "../../../api/auth-api";
import {loginTC} from "../../../redux/auth-reducer";


export interface InputTypesRegistration {
    username?: string,
    password?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: string,
}


export const RegistrationForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const status = useAppSelector(status => status.app.status)
    const [stepOfRegistration, setStepOfRegistration] = useState<number>(1)

    let buttonValue
    if (stepOfRegistration === 1) {
        buttonValue = "СЛЕДУЮЩИЙ ШАГ"
    } else if (stepOfRegistration === 2) {
        buttonValue = "ПОСЛЕДНИЙ ШАГ"
    } else if (stepOfRegistration === 3) {
        buttonValue = "ЗАРЕГИСТРИРОВАТЬСЯ"
    }


    const {register, handleSubmit, formState: {errors, isDirty}, getFieldState,getValues} = useForm<InputTypesRegistration>({
        defaultValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        mode: 'onChange',
       resolver: yupResolver(ShemaForRegistration)
    });

    const onSubmit = (data: InputTypesRegistration) => {
        setStepOfRegistration((stepOfRegistration) => stepOfRegistration + 1)
        console.log(data)
        console.log(errors.password)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.wrapper_registrationForm}>
            <div className={css.registrationForm__titleBlock}>
                <h3 className={css.registrationForm__title}>Регистрация</h3>
                <p className={css.registrationForm__stepCount}>{stepOfRegistration} шаг из 3</p>
            </div>

            {stepOfRegistration === 1 && <RegistrationStep1
                getFieldState={getFieldState}
                register={register}
                errors={errors}
                isDirty={isDirty}
                getValues={getValues}/>}
            {stepOfRegistration === 2 && <RegistrationStep2
                getFieldState={getFieldState}
                register={register}
                errors={errors}/>}
            {stepOfRegistration === 3 && <RegistrationStep3 register={register} errors={errors}/>}


            <div className={css.registration_buttonBlock}>
                <input
                    className={css.registration_submitBTN}
                    type='submit'
                    value={buttonValue}
                    disabled={status === 'loading'}
                />

                <div className={css.registration_navigateToLogin}>
                    <span className={css.registration_navigateToLogin_message}>Есть учетная запись?</span>
                    <NavLink to={'/auth'}
                             className={css.registration_navigateToLogin_link}><span>ВОЙТИ</span></NavLink>
                </div>
            </div>


        </form>
    );
};
