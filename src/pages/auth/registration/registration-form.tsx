import React, {useState} from 'react';
import {RegistrationStep1} from "./step1/registration-step1";
import {RegistrationStep2} from "./step2/registration-step2";
import {RegistrationStep3} from "./step3/registration-step3";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {Shema1} from "../../../utils/validate/registration-validate/shema1";
import css from "./registration-form.module.scss";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";


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
    const [stepOfRegistration, setStepOfRegistration] = useState(1)

    let buttonValue
    if(stepOfRegistration === 1){
        buttonValue = "СЛЕДУЮЩИЙ ШАГ"
    }else if(stepOfRegistration === 2){
        buttonValue = "ПОСЛЕДНИЙ ШАГ"}
    else if(stepOfRegistration === 3){
        buttonValue = "ЗАРЕГИСТРИРОВАТЬСЯ"
    }


    const {register, handleSubmit, formState: {errors}, setValue} = useForm<InputTypesRegistration>({
        /*defaultValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },*/
        mode: 'all',
        resolver: yupResolver(Shema1)
    });

    const onSubmit: SubmitHandler<InputTypesRegistration> = (data: InputTypesRegistration) => {
        setStepOfRegistration((stepOfRegistration) => stepOfRegistration + 1)
        console.log(stepOfRegistration)
        if (stepOfRegistration === 3) {
            console.log(data)
        }

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.wrapper_registrationForm}>
            <div className={css.registrationForm__titleBlock}>
                <h3 className={css.registrationForm__title}>Регистрация</h3>
                <p className={css.registrationForm__stepCount}>{stepOfRegistration} шаг из 3</p>
            </div>

            {stepOfRegistration === 1 && <RegistrationStep1 register={register} errors={errors}/>}
            {stepOfRegistration === 2 && <RegistrationStep2 setStepOfRegistration={setStepOfRegistration}/>}
            {stepOfRegistration === 3 && <RegistrationStep3 setStepOfRegistration={setStepOfRegistration}/>}


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

