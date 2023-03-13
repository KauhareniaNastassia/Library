import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import css from './reset-password-form.module.scss'
import eyeOpen from '../../../../assets/img/eye-open.svg'
import eyeClose from '../../../../assets/img/eye-close.svg'
import okPasswordIcon from "../../../../assets/img/ok-password-icon.svg";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {schemaResetPassword} from "../../../../utils/validate/reset-password-validation/reset-password-validation";
import {useLocation, useSearchParams} from "react-router-dom";
import {resetPasswordTC} from "../../../../redux/auth-reducer";
import {BasicModal} from "../../../../common/modals/basic-modal";
import {NewPasswordSaveErrorModal, NewPasswordSaveModal} from "../../../../common/modals/modal-info";


type ResetPasswordType = {
    password: string,
    passwordConfirmation: string,
}

type ResetPasswordPropsType = {
    code: string
}

export const ResetPasswordForm: React.FC<ResetPasswordPropsType> = ({code}) => {
    const dispatch = useAppDispatch()
    const [isShowNewPassword, setIsShowNewPassword] = useState(false)
    const [isShowRepeatNewPassword, setIsShowRepeatNewPassword] = useState(false)
    const [focusNewPassword, setFocusNewPassword] = useState(false)
    const [focusRepeatNewPassword, setFocusRepeatNewPassword] = useState(false)
    const [isChangeNewPassword, setIsChangeNewPassword] = useState(false)
    const [isChangeInputRepeatNewPassword, setIsChangeInputRepeatNewPassword] = useState(false)

    const {register, handleSubmit, getValues, getFieldState, formState: {errors}} = useForm<ResetPasswordType>({
        defaultValues: {
            password: '',
            passwordConfirmation: '',
        },
        mode: 'all',
        resolver: yupResolver(schemaResetPassword)
    });

    const onSubmit = (data: ResetPasswordType) => {

        const dataForReset = {
            ...data,
            code
        }

        dispatch(resetPasswordTC(dataForReset))
    }

    const conditionForEmptyNewPassword = isChangeNewPassword && !focusNewPassword && getValues('password') === '';
    const conditionForEmptyRepeatNewPassword = isChangeInputRepeatNewPassword && !focusRepeatNewPassword && getValues('passwordConfirmation') === '';

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={css.wrapper_resetPassword}>
                    <h3 className={css.resetPassword__title}>Восстановление пароля</h3>

                    <div className={css.resetPassword__inputBlock}>

                        <div className={css.resetPassword__input_item_wrapper}>

                            <input
                                className={errors.password ? `${css.resetPassword__input} ${css.input__error}` : css.resetPassword__input}
                                type={isShowNewPassword ? 'text' : 'password'}
                                id='password'
                                placeholder=' '
                                onFocus={() => {
                                    setFocusNewPassword(true)
                                    setIsChangeNewPassword(true)
                                }}
                                {...register('password', {
                                    onBlur: () => setFocusNewPassword(false),
                                })}
                            />

                            <label className={css.resetPassword__label} htmlFor='newPassword'>Hовый пароль</label>

                            {!errors.password && getFieldState('password').isDirty &&
                                <img className={css.resetPassword_ok_password_icon} src={okPasswordIcon}
                                     alt={'ok password'}/>
                            }
                            <button className={css.resetPassword__input_eyeBtn} onClick={() => {
                                setIsShowNewPassword(!isShowNewPassword)
                            }}>
                                <img src={isShowNewPassword ? eyeOpen : eyeClose}/>
                            </button>

                            <div className={css.resetPassword_message}>
                                {!errors.password && !conditionForEmptyNewPassword && !focusNewPassword &&
                                    <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                                }
                                {focusNewPassword && getValues('password') === '' &&
                                    <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                                }
                                {!focusNewPassword && isChangeNewPassword && getValues('password') === '' &&
                                    <span style={{color: 'red'}}>Поле не может быть пустым</span>
                                }
                                {errors.password && errors.password?.type !== 'required' && !focusNewPassword &&
                                    <span
                                        style={{color: 'red'}}>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                                }
                                {!errors.password && focusNewPassword && getValues('password') !== '' &&
                                    <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                                }
                                {focusNewPassword && errors.password?.type === 'passwordLengthError' &&
                                    <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и цифрой</span>
                                }
                                {focusNewPassword && errors.password?.type === 'passwordLengthErrorAndNoBigLetterAndNumberAbsent' &&
                                    <span>Пароль <span
                                        style={{color: 'red'}}>не менее 8 символов, с заглавной буквой и цифрой</span></span>
                                }
                                {focusNewPassword && errors.password?.type === 'passwordLengthErrorAndNumberAbsent' &&
                                    <span>Пароль <span
                                        style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и<span
                                        style={{color: 'red'}}> цифрой</span></span>
                                }
                                {focusNewPassword && errors.password?.type === 'passwordLengthErrorAndNoBigLetter' &&
                                    <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, <span
                                        style={{color: 'red'}}>с заглавной буквой</span> и цифрой</span>
                                }
                            </div>
                        </div>

                        <div className={css.resetPassword__input_item_wrapper}>

                            <input
                                className={errors.passwordConfirmation ? `${css.resetPassword__input} ${css.input__error}` : css.resetPassword__input}
                                type={isShowRepeatNewPassword ? 'text' : 'password'}
                                id='passwordConfirmation'
                                placeholder=' '
                                onFocus={() => {
                                    setFocusRepeatNewPassword(true)
                                    setIsChangeInputRepeatNewPassword(true)
                                }}
                                {...register('passwordConfirmation', {
                                    onBlur: () => setFocusRepeatNewPassword(false),
                                })}
                            />

                            <label className={css.resetPassword__label} htmlFor='passwordConfirmation'>Повторите
                                пароль</label>

                            <button className={css.resetPassword__input_eyeBtn} onClick={() => {
                                setIsShowRepeatNewPassword(!isShowRepeatNewPassword)
                            }}>
                                <img src={isShowRepeatNewPassword ? eyeOpen : eyeClose}/>
                            </button>

                            <div className={css.resetPassword_message}>
                                {conditionForEmptyRepeatNewPassword &&
                                    <span style={{color: 'red'}}>Поле не может быть пустым</span>}
                                {!focusRepeatNewPassword && errors.passwordConfirmation && errors.passwordConfirmation?.type === 'passwordsNotTheSame' &&
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
                                !getFieldState('password').isDirty
                                || !getFieldState('passwordConfirmation').isDirty
                                || !!errors.password
                                || !!errors.passwordConfirmation}
                        />

                        <span className={css.resetPassword_registrationBlock_message}>После сохранения, войдите в библиотеку, используя новый пароль</span>

                    </div>
                </div>
            </form>
    )
};
