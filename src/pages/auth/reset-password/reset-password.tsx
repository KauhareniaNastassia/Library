import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import css from './reset-password.module.scss'
import eyeOpen from '../../../assets/img/eye-open.svg'
import eyeClose from '../../../assets/img/eye-close.svg'
import okPasswordIcon from "../../../assets/img/ok-password-icon.svg";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {schemaResetPassword} from "../../../utils/validate/reset-password-validation/reset-password-validation";


type ResetPasswordType = {
    newPassword: string,
    repeatNewPassword: string,
}

export const ResetPassword = () => {
    const dispatch = useAppDispatch()
    const registrationStatus = useAppSelector(state => state.auth.registrationStatus)

    const [isShowNewPassword, setIsShowNewPassword] = useState(false)
    const [isShowRepeatNewPassword, setIsShowRepeatNewPassword] = useState(false)
    const [focusNewPassword, setFocusNewPassword] = useState(false)
    const [focusRepeatNewPassword, setFocusRepeatNewPassword] = useState(false)
    const [isChangeNewPassword, setIsChangeNewPassword] = useState(false);
    const [isChangeInputRepeatNewPassword, setIsChangeInputRepeatNewPassword] = useState(false);


    const {register, handleSubmit, getValues, getFieldState, formState: {errors}} = useForm<ResetPasswordType>({
        defaultValues: {
            newPassword: '',
            repeatNewPassword: '',
        },
        mode: 'onChange',
        resolver: yupResolver(schemaResetPassword)
    });

    const onSubmit = (data: ResetPasswordType) => {
        console.log(data)
    }

    const conditionForEmptyNewPassword = isChangeNewPassword && !focusNewPassword && getValues('newPassword') === '';
    const conditionForEmptyRepeatNewPassword = isChangeInputRepeatNewPassword && !focusRepeatNewPassword && getValues('repeatNewPassword') === '';

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={css.wrapper_resetPassword}>
                    <h3 className={css.resetPassword__title}>Восстановление пароля</h3>

                    <div className={css.resetPassword__inputBlock}>

                        <div className={css.resetPassword__input_item_wrapper}>

                            <input
                                className={errors.newPassword ? `${css.resetPassword__input} ${css.input__error}` : css.resetPassword__input}
                                type={isShowNewPassword ? 'text' : 'password'}
                                id='newPassword'
                                placeholder=' '
                                onFocus={() => {
                                    setFocusNewPassword(true)
                                    setIsChangeNewPassword(true)
                                }}
                                {...register('newPassword', {
                                    onBlur: () => setFocusNewPassword(false),
                                })}
                            />

                            <label className={css.resetPassword__label} htmlFor='newPassword'>Hовый пароль</label>

                            {!errors.newPassword && getFieldState('newPassword').isDirty &&
                                <img className={css.resetPassword_ok_password_icon} src={okPasswordIcon}
                                     alt={'ok password'}/>
                            }
                            <button className={css.resetPassword__input_eyeBtn} onClick={() => {
                                setIsShowNewPassword(!isShowNewPassword)
                            }}>
                                <img src={isShowNewPassword ? eyeOpen : eyeClose}/>
                            </button>

                            <div className={css.resetPassword_message}>
                                {!errors.newPassword && !conditionForEmptyNewPassword  && !focusNewPassword &&
                                    <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                                }
                                {focusNewPassword && getValues('newPassword') === ''  &&
                                    <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                                }
                                {!focusNewPassword && isChangeNewPassword && getValues('newPassword') === '' &&
                                    <span style={{color: 'red'}}>Поле не может быть пустым</span>
                                }
                                {errors.newPassword && errors.newPassword?.type !== 'required' && !focusNewPassword &&
                                    <span style={{color: 'red'}}>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                                }
                                {!errors.newPassword && focusNewPassword && getValues('newPassword') !== '' &&
                                    <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                                }
                                {focusNewPassword && errors.newPassword?.type === 'passwordLengthError' &&
                                    <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и цифрой</span>
                                }
                                {focusNewPassword && errors.newPassword?.type === 'passwordLengthErrorAndNoBigLetterAndNumberAbsent' &&
                                    <span>Пароль <span
                                        style={{color: 'red'}}>не менее 8 символов, с заглавной буквой и цифрой</span></span>
                                }
                                {focusNewPassword && errors.newPassword?.type === 'passwordLengthErrorAndNumberAbsent' &&
                                    <span>Пароль <span
                                        style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и<span
                                        style={{color: 'red'}}> цифрой</span></span>
                                }
                                {focusNewPassword  && errors.newPassword?.type === 'passwordLengthErrorAndNoBigLetter' &&
                                    <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, <span
                                        style={{color: 'red'}}>с заглавной буквой</span> и цифрой</span>
                                }
                            </div>
                        </div>

                        <div className={css.resetPassword__input_item_wrapper}>

                            <input
                                className={errors.repeatNewPassword ? `${css.resetPassword__input} ${css.input__error}` : css.resetPassword__input}
                                type={isShowRepeatNewPassword ? 'text' : 'password'}
                                id='repeatNewPassword'
                                placeholder=' '
                                onFocus={() => {
                                    setFocusRepeatNewPassword(true)
                                    setIsChangeInputRepeatNewPassword(true)
                                }}
                                {...register('repeatNewPassword', {
                                    onBlur: () => setFocusRepeatNewPassword(false),
                                })}
                            />

                            <label className={css.resetPassword__label} htmlFor='password'>Повторите пароль</label>

                            {!errors.repeatNewPassword && getFieldState('repeatNewPassword').isDirty &&
                                <img className={css.resetPassword_ok_password_icon} src={okPasswordIcon}
                                     alt={'ok password'}/>
                            }
                            <button className={css.resetPassword__input_eyeBtn} onClick={() => {
                                setIsShowRepeatNewPassword(!isShowRepeatNewPassword)
                            }}>
                                <img src={isShowRepeatNewPassword ? eyeOpen : eyeClose}/>
                            </button>

                            <div className={css.resetPassword_message}>
                                {conditionForEmptyRepeatNewPassword &&
                                    <span style={{color: 'red'}}>Поле не может быть пустым</span>}
                                {!focusRepeatNewPassword && errors.repeatNewPassword && errors.repeatNewPassword?.type === 'passwordsNotTheSame' &&
                                    <span style={{color: 'red'}}>Пароли не совпадают</span>}
                            </div>
                        </div>
                    </div>

                    <div className={css.resetPassword_buttonBlock}>
                        <input
                            className={css.resetPassword_submitBTN}
                            type='submit'
                            value='СОХРАНИТЬ ИЗМЕНЕНИЯ'
                            disabled={
                                !getFieldState('newPassword').isDirty
                                || !getFieldState('repeatNewPassword').isDirty
                                || !!errors.newPassword
                                || !!errors.repeatNewPassword}
                        />

                        <span className={css.resetPassword_registrationBlock_message}>После сохранения, войдите в библиотеку, используя новый пароль</span>

                    </div>
                </div>
            </form>
        </div>
    )
};
