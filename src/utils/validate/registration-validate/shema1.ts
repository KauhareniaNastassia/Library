import * as yup from 'yup'

export const ShemaForRegistration = yup.object().shape({

    username: yup.string()
        .required('Поле не может быть пустым')
        .test({
            name: 'usernameShouldHaveLatinLetters',
            message: '',
            test() {
                const {username} = this.parent
                const regex = new RegExp(/^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i)
                return regex.test(username)
            }
        })
        .test({
            name: 'usernameShouldHaveNumber',
            message: '',
            test() {
                const {username} = this.parent
                const regex = new RegExp(/^(?=.*[0-9])([a-zA-Z0-9]+)$/)
                return regex.test(username)
            }
        }),

    password: yup.string()
        .required('Поле не может быть пустым')
        .test({
            name: 'passwordLengthError',
            message: '',
            test() {
                const {password} = this.parent
                const regex = new RegExp(/^(?=.*[A-ZА-Я])(?=.*\d).{0,7}$/)
                return regex.test(password)
            }
        })
        .test({
            name: 'passwordLengthErrorAndNumberAbsent',
            message: '',
            test() {
                const {password} = this.parent
                const regex = new RegExp(/^(?=.*[A-ZА-Я]).{0,7}$/)
                return regex.test(password)
            }
        })
        .test({
            name: 'passwordLengthErrorAndNoBigLetter',
            message: '',
            test() {
                const {password} = this.parent
                const regex = new RegExp(/^(?=.*[0-9]).{0,7}$/);
                return regex.test(password)
            }
        })
        .test({
            name: 'passwordLengthError',
            message: '',
            test() {
                const {password} = this.parent
                const regex = new RegExp(/^(?=.*[A-ZА-Я])(?=.*\d).{8,}$/);
                return regex.test(password)
            }
        }),

    firstName: yup.string()
        .required('Поле не может быть пустым'),

    lastName: yup.string()
        .required('Поле не может быть пустым'),

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
})