import * as yup from 'yup'

export const SchemaForUserDataProfile = yup.object().shape({

    username: yup.string()
        .required('Поле не может быть пустым')
        .test({
            name: 'usernameShouldHaveNumberAndLetter',
            message: ' латинский алфавит и цифры!',
            test() {
                const {username} = this.parent;
                const regex1 = new RegExp(/^[a-zA-Z0-9]+$/);
                if(username.trim().length === 1)return regex1.test(username)

                return true;
            }
        })
        .test({
            name: 'usernameShouldHaveLatinLetters',
            message: '',
            test() {
                const {username} = this.parent;
                const regex = new RegExp(/^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i);
                return regex.test(username)
            }
        })
        .test({
            name: 'usernameShouldHaveNumber',
            message: '',
            test() {
                const {username} = this.parent;
                const regex = new RegExp(/^(?=.*[0-9])([a-zA-Z0-9]+)$/);
                return regex.test(username)
            }
        }),

    password: yup.string()
        .required('Поле не может быть пустым')
        .test({
            name: 'passwordLengthError',
            message: '',
            test() {
                const {password} = this.parent;
                const regex = new RegExp(/^(?=.*[A-ZА-Я])(?=.*\d).{0,7}$/);
                return !regex.test(password)
            }
        })
        .test({
            name: 'passwordLengthErrorAndNumberAbsent',
            message: '',
            test() {
                const {password} = this.parent;
                const regex = new RegExp(/^(?=.*[A-ZА-Я]).{0,7}$/);
                return !regex.test(password)
            }
        })
        .test({
            name: 'passwordLengthErrorAndNoBigLetter',
            message: '',
            test() {
                const {password} = this.parent;
                const regex = new RegExp(/^(?=.*[0-9]).{0,7}$/);

                return !regex.test(password)
            }
        })
        .test({
            name: 'passwordLengthErrorAndNoBigLetterAndNumberAbsent',
            message: '',
            test() {
                const {password} = this.parent;
                const regex = new RegExp(/^(?=.*[A-ZА-Я])(?=.*\d).{8,}$/);
                return regex.test(password)
            }
        }),

    /*firstName: yup.string()
        .required('Поле не может быть пустым'),

    lastName: yup.string()
        .required('Поле не может быть пустым'),*/

    phone: yup.string()
        .test({
            name: 'errorPhone',
            message: 'В формате +375 (хх) ххх-хх-хх',
            test() {
                const {phone} = this.parent;
                const regex = new RegExp(/^(\+?375)\s.(25|29|33|44|17).\s[1-9]{1}[\d]{2}(-?[\d]{2}){2}$/);
                return regex.test(phone)
            }
        }),


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