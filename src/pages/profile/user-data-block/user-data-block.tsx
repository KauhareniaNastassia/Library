import React, {useState} from 'react';
import css from "./user-data-block.module.scss";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {ShemaForRegistration} from "../../../utils/validate/registration-validate/shema-for-registration";
import {InputTypesRegistration} from "../../auth/registration/registration-form";
import {useAppSelector} from "../../../hooks/hooks";

export const UserDataBlock: React.FC = () => {
    const user = useAppSelector(state => state.user.user)
    const [editMode, setEditMode] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
        getFieldState,
        getValues
    } = useForm<InputTypesRegistration>({
        defaultValues: {
            username: user.username,
            password: '',
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
        },
        mode: 'onChange',
        resolver: yupResolver(ShemaForRegistration)
    });


    const onSubmit = (data: InputTypesRegistration) => {
       setEditMode(false)
    }



    return (

            <form onSubmit={handleSubmit(onSubmit)} className={css.profile__data_block}>

                <div className={css.profile__data}>

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
