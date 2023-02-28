import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {loginTC} from "../../../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {LoginRequestDataType} from "../../../../api/auth-api";



export const LoginForm = () => {
    const dispatch = useAppDispatch()
const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const {register, control, handleSubmit, formState: {errors}} = useForm<LoginRequestDataType>({
        defaultValues: {
            identifier: '',
            password: '',
        },
        mode: 'onTouched',
    });

    const onSubmit: SubmitHandler<LoginRequestDataType> = (data) => {
        console.log(data)
        dispatch(loginTC(data))
    }


    const onEnterPress = (key: string) => {
        key === 'Enter' && handleSubmit(onSubmit)
    }


    if (isLoggedIn) {
        return <Navigate to='/' />
    }


    return <form onSubmit={handleSubmit(onSubmit)}
                 onKeyDown={(e) => onEnterPress(e.key)}>
        <div>

            <input
                type='text'
                {...register('identifier', {
                    required: 'Identifier is required',
                    /*pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Enter valid email please'
                    }*/
                })}
            />
            {errors.identifier && <div style={{color: 'red'}}>{errors.identifier.message}</div>}

            <input
                type='password'
                {...register('password', {
                    required: 'Password is required',
                    /*pattern: {
                        minLength: {
                        value: 8, message: 'Password must be more than 8 characters'
                    }*/
                })}/>

            {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}


            {/*<NavLink to={Path.ResetPassword} className={s.forgotPass}>Forgot password ?</NavLink>*/}
            <button type='submit'
                // disabled={requestStatus === 'loading'}
            >
                Sign in
            </button>
        </div>
    </form>
};
