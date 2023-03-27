import React, {useState} from 'react';
import css from "./user-data-block.module.scss";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import okPasswordIcon from "../../../assets/img/ok-password-icon.svg";
import eyeOpen from "../../../assets/img/eye-open.svg";
import eyeClose from "../../../assets/img/eye-close.svg";
import ReactInputMask from "react-input-mask";
import {SchemaForUserDataProfile} from "../../../utils/validate/user-data-validate/schema-for-user-data-profile";
import {UpdateUserDataTC} from "../../../redux/user-reducer";

export interface InputTypesUserDataBlock {
    email: string,
    username: string,
    password: string,
    firstName?: string,
    lastName?: string,
    phone?: string
}

export const UserDataBlock: React.FC = () => {
    const user = useAppSelector(state => state.user.user)
    const [editMode, setEditMode] = useState(false)
    const dispatch = useAppDispatch()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [focusUsername, setFocusUserName] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)
    const [isChangeInputName, setIsChangeInputName] = useState(false);
    const [isChangeInputPassword, setIsChangeInputPassword] = useState(false);
    const [focusPhone, setFocusPhone] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)
    const [isChangeInputPhone, setIsChangeInputPhone] = useState(false);
    const [isChangeInputEmail, setIsChangeInputEmail] = useState(false);

    let passwordItem
    const item = localStorage.getItem('password')
    if (item) {
        passwordItem = JSON.parse(item)
    }

    const {
        register,
        handleSubmit,
        formState: {errors},
        getFieldState,
        getValues
    } = useForm<InputTypesUserDataBlock>({
        defaultValues: {
            username: user.username,
            password: passwordItem,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
        },
        mode: 'onSubmit',
        resolver: yupResolver(SchemaForUserDataProfile)
    });

    const onSubmit = (data: InputTypesUserDataBlock) => {
        const userData = {
            username: data.username,
            password: data.password,
            firstName: user.firstName === data.firstName ? undefined : data.firstName,
            lastName: user.lastName === data.lastName ? undefined : data.lastName,
            email: data.email,
            phone: user.phone === data.phone ? undefined : data.phone,
        }
        dispatch(UpdateUserDataTC(user.id, userData))
        setEditMode(false)
    }


    const conditionForEmptyNameFocus = isChangeInputName && focusUsername && getValues('username') === '';
    const conditionForEmptyName = isChangeInputName && !focusUsername && getValues('username') === '';
    const conditionForEmptyPassword = isChangeInputPassword && !focusPassword && getValues('password') === '';
    const conditionEmptyEmail = isChangeInputEmail && !focusEmail && getValues('email') === '';
    const conditionForEmptyPhone = isChangeInputPhone && !focusPhone && getValues('phone') === '';


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.profile__data_block}>
            <div className={css.profile__data}>
                <div className={css.profile__data_column}>
                    <div className={css.registration__input_item_wrapper}>

                        <input
                            className={css.registration__input}
                            type='text'
                            disabled={!editMode}
                            id='username'
                            placeholder=' '
                            onFocus={() => {
                                setFocusUserName(true)
                                setIsChangeInputName(true)
                            }}
                            {...register('username', {
                                onBlur: () => setFocusUserName(false),
                            })}
                        />
                        <label className={css.registration__label} htmlFor='username'>Логин</label>

                        <div className={css.registration_message}>
                            {editMode &&
                                <span>Используйте для логина латинский алфавит и цифры</span>
                            }
                            {errors.username?.type !== 'required' && conditionForEmptyName &&
                                <span>Используйте для логина латинский алфавит и цифры</span>
                            }
                            {!focusUsername && errors.username?.type === 'required' && getFieldState('username').isTouched &&
                                <span style={{color: 'red'}}>Поле не может быть пустым</span>
                            }
                            {focusUsername && errors.username?.type === 'usernameShouldHaveNumberAndLetter' &&
                                <span>Используйте для логина <span
                                    style={{color: 'red'}}>латинский алфавит</span> и <span
                                    style={{color: 'red'}}>цифры</span></span>
                            }
                            {focusUsername && errors.username?.type === 'usernameShouldHaveLatinLetters' &&
                                <span>Используйте для логина <span
                                    style={{color: 'red'}}>латинский алфавит</span> и цифры</span>
                            }
                            {focusUsername && errors.username?.type === 'usernameShouldHaveNumber' &&
                                <span>Используйте для логина латинский алфавит и <span
                                    style={{color: 'red'}}>цифры</span></span>
                            }
                            {errors.username && errors.username?.type !== 'required' && !focusUsername &&
                                <span style={{color: 'red'}}>Используйте для логина латинский алфавит и цифры</span>}
                        </div>

                    </div>

                    <div className={css.registration__input_item_wrapper}>

                        <input
                            className={css.registration__input}
                            type='text'
                            id='firstName'
                            placeholder=' '
                            disabled={!editMode}
                            {...register('firstName')}

                        />
                        <label className={css.registration__label} htmlFor='firstName'>Имя</label>
                    </div>

                    <div className={css.registration__input_item_wrapper}>
                        <ReactInputMask
                            className={conditionForEmptyPhone ? `${css.registration__input} ${css.input__error}` : css.registration__input}
                            mask="+375 (99) 999-99-99"
                            maskPlaceholder='+375 (xx) xxx-xx-xx'
                            placeholder=' '
                            disabled={!editMode}
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
                            {editMode && <div>В формате +375 (хх) ххх-хх-хх</div>
                            }
                            {errors.phone?.type === 'errorPhone' &&
                                <span style={{color: 'red'}}>{errors.phone.message}</span>
                            }
                        </div>
                    </div>
                </div>

                <div className={css.profile__data_column}>
                    <div className={css.registration__input_item_wrapper}>

                        <input
                            className={css.registration__input}
                            type={isShowPassword ? 'text' : 'password'}
                            id='password'
                            placeholder=' '
                            disabled={!editMode}
                            onFocus={() => {
                                setFocusPassword(true)
                                setIsChangeInputPassword(true)
                            }}
                            {...register('password', {
                                onBlur: () => setFocusPassword(false),
                            })}
                        />

                        <label className={css.registration__label} htmlFor='password'>Пароль</label>

                        {!errors.password && getFieldState('password').isDirty &&
                            <img className={css.registration_ok_password_icon} src={okPasswordIcon}
                                 alt={'ok password'}/>
                        }
                        <button
                            type='button'
                            disabled={!editMode}
                            className={css.registration__input_eyeBtn}
                            onClick={() => {
                                setIsShowPassword(!isShowPassword)
                            }}>
                            <img src={isShowPassword ? eyeOpen : eyeClose}/>
                        </button>


                        <div className={css.registration_message}>
                            {editMode &&
                                <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                            }
                            {!focusPassword && errors.password?.type === 'required' && getFieldState('password').isTouched &&
                                <span style={{color: 'red'}}>Поле не может быть пустым</span>
                            }
                            {focusPassword && errors.password?.type === 'required' && getFieldState('password').isTouched &&
                                <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                            }
                            {errors.password && errors.password?.type !== 'required' && !focusPassword &&
                                <span
                                    style={{color: 'red'}}>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                            }
                            {focusPassword && !errors.password &&
                                <span>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                            }
                            {focusPassword && errors.password?.type === 'passwordLengthError' &&
                                <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и цифрой</span>
                            }
                            {focusPassword && errors.password?.type === 'passwordLengthErrorAndNoBigLetterAndNumberAbsent' &&
                                <span>Пароль <span
                                    style={{color: 'red'}}>не менее 8 символов, с заглавной буквой и цифрой</span></span>
                            }
                            {focusPassword && errors.password?.type === 'passwordLengthErrorAndNumberAbsent' &&
                                <span>Пароль <span
                                    style={{color: 'red'}}>не менее 8 символов</span>, с заглавной буквой и<span
                                    style={{color: 'red'}}> цифрой</span></span>
                            }
                            {focusPassword && errors.password?.type === 'passwordLengthErrorAndNoBigLetter' &&
                                <span>Пароль <span style={{color: 'red'}}>не менее 8 символов</span>, <span
                                    style={{color: 'red'}}>с заглавной буквой</span> и цифрой</span>
                            }

                        </div>
                    </div>

                    <div className={css.registration__input_item_wrapper}>

                        <input
                            className={css.registration__input}
                            type='text'
                            id='lastName'
                            disabled={!editMode}
                            placeholder=' '
                            {...register('lastName')}
                        />

                        <label className={css.registration__label} htmlFor='lastName'>Фамилия</label>

                    </div>

                    <div className={css.registration__input_item_wrapper}>

                        <input
                            className={conditionEmptyEmail ? `${css.registration__input} ${css.input__error}` : css.registration__input}
                            type='text'
                            id='email'
                            placeholder=' '
                            disabled={!editMode}
                            onFocus={() => {
                                setFocusEmail(true)
                                setIsChangeInputEmail(true)
                            }}
                            {...register('email', {onBlur: () => setFocusEmail(false)})}
                        />

                        <label className={css.registration__label} htmlFor='email'>Email</label>
                        <div className={css.registration_message}>
                            {conditionEmptyEmail && <span style={{color: 'red'}}>Поле не может быть пустым</span>
                            }
                            {errors.email && errors.email?.type === 'errorEmail' &&
                                <span style={{color: 'red'}}>{errors.email.message}</span>
                            }
                        </div>
                    </div>
                </div>

            </div>

            <div className={css.profile__data_buttons}>

                <button
                    className={css.edit_button}
                    type='button'
                    onClick={() => setEditMode(!editMode)}>
                    {!editMode ? 'редактировать' : 'отменить'}
                </button>

                <button
                    className={css.save_button}
                    type='submit'
                    disabled={!editMode}
                >
                    Сохранить изменения
                </button>


            </div>
        </form>


    );
};
