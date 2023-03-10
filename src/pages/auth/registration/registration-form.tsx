import React, {useState} from 'react';
import {RegistrationStep1} from "./step1/registration-step1";
import {RegistrationStep2} from "./step2/registration-step2";
import {RegistrationStep3} from "./step3/registration-step3";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {ShemaForRegistration} from "../../../utils/validate/registration-validate/shema-for-registration";
import css from "./registration-form.module.scss";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {registrationTC} from "../../../redux/auth-reducer";

import {Error400Modal, ErrorRegistrationModal, SuccessModal} from "../../../common/modals/modal-info";
import arrowToRegistration from "../../../assets/img/arrow-for-registration.svg";
import {BasicModal} from "../../../common/modals/basic-modal";


export interface InputTypesRegistration {
    email: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string
}


export const RegistrationForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const registrationStatus = useAppSelector(state => state.auth.registrationStatus)
    const [stepOfRegistration, setStepOfRegistration] = useState<number>(1)


    const {
        register,
        handleSubmit,
        formState: {errors},
        getFieldState,
        getValues
    } = useForm<InputTypesRegistration>({
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
        setStepOfRegistration(stepOfRegistration + 1)

        if (stepOfRegistration === 3) {
            dispatch(registrationTC(data))
        }
    }

    return (
        <div>
            {
                !registrationStatus &&

                <form onSubmit={handleSubmit(onSubmit)} className={css.wrapper_registrationForm}>
                    <div className={css.registrationForm__titleBlock}>
                        <h3 className={css.registrationForm__title}>??????????????????????</h3>
                        <p className={css.registrationForm__stepCount}>{stepOfRegistration} ?????? ???? 3</p>
                    </div>

                    {stepOfRegistration === 1 && <RegistrationStep1
                        getFieldState={getFieldState}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        setStepOfRegistration={setStepOfRegistration}
                    />}


                    {stepOfRegistration === 2 && <RegistrationStep2
                        getFieldState={getFieldState}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        setStepOfRegistration={setStepOfRegistration}
                    />}


                    {stepOfRegistration === 3 && <RegistrationStep3
                        register={register}
                        errors={errors}
                        getFieldState={getFieldState}
                        getValues={getValues}
                    />}


                    <div className={css.registration_buttonBlock}>

                        <div className={css.registration_navigateToLogin}>
                            <span className={css.registration_navigateToLogin_message}>???????? ?????????????? ?????????????</span>
                            <NavLink to={'/auth'}
                                     className={css.registration_navigateToLogin_link}>
                                <span>??????????</span>
                                <img src={arrowToRegistration} alt='arrow to registration'/>
                            </NavLink>
                        </div>

                    </div>
                </form>
            }
            {registrationStatus && registrationStatus === 200 && <BasicModal modalInfo={SuccessModal}/>}
            {registrationStatus && registrationStatus === 400 && <BasicModal modalInfo={Error400Modal}/>}
            {registrationStatus && registrationStatus !== 200 && registrationStatus !== 400 &&
                <BasicModal modalInfo={ErrorRegistrationModal}/>}

        </div>
    );
};

