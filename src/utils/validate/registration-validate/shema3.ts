import * as yup from 'yup'

export const Shema1 = yup.object().shape({

    username: yup.string()
        .required('')
        .test({
            name: 'usernameShouldHaveLatinLetters',
            message: 'user name should have latin letters',
            test() {
                const {username} = this.parent
                const regex = new RegExp(/^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i)
                return regex.test(username)
            }
        })
        .test({
            name: 'usernameShouldHaveNumber',
            message: 'user name should have number',
            test() {
                const {username} = this.parent
                const regex = new RegExp(/^(?=.*[0-9])([a-zA-Z0-9]+)$/)
                return regex.test(username)
            }
        }),

    password: yup.string()
        .required('')
        .test({
            name: '',
            message: '',
            test() {

            }
        })


})