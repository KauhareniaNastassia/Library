import * as yup from 'yup'

export const schemaForForgotPassword = yup.object().shape({
    email: yup.string()
        .required('Поле не может быть пустым')
        .test({
            name: 'errorEmail',
            message: 'Введите корректный email',
            test() {
                const {email} = this.parent
                const regex = new RegExp(
                    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i)
                return regex.test(email)
            }
        })
}).required()