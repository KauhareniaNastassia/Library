import * as yup from 'yup';

export const schemaResetPassword = yup.object().shape({
    password:  yup.string()
        .required('Поле не может быть пустым')
        .test({
            name: 'passwordLengthError',
            message: 'не менее 8 символов',
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
    passwordConfirmation: yup.string()
        .required('Поле не может быть пустым')
        .test({
            name: 'passwordsNotTheSame',
            message: 'Пароли не совпадают',
            test() {
                const {password} = this.parent;
                const {passwordConfirmation} = this.parent;

                return password === passwordConfirmation;
            }
        }),
}).required()