import * as yup from 'yup';

export const schemaResetPassword = yup.object().shape({
    newPassword:  yup.string()
        .required('Поле не может быть пустым')
        .test({
            name: 'passwordLengthError',
            message: 'не менее 8 символов',
            test() {
                const {newPassword} = this.parent;
                const regex = new RegExp(/^(?=.*[A-ZА-Я])(?=.*\d).{0,7}$/);

                return !regex.test(newPassword)
            }
        })
        .test({
            name: 'passwordLengthErrorAndNumberAbsent',
            message: '',
            test() {
                const {newPassword} = this.parent;
                const regex = new RegExp(/^(?=.*[A-ZА-Я]).{0,7}$/);

                return !regex.test(newPassword)
            }
        })
        .test({
            name: 'passwordLengthErrorAndNoBigLetter',
            message: '',
            test() {
                const {newPassword} = this.parent;
                const regex = new RegExp(/^(?=.*[0-9]).{0,7}$/);

                return !regex.test(newPassword)
            }
        })
        .test({
            name: 'passwordLengthErrorAndNoBigLetterAndNumberAbsent',
            message: '',
            test() {
                const {newPassword} = this.parent;
                const regex = new RegExp(/^(?=.*[A-ZА-Я])(?=.*\d).{8,}$/);

                return regex.test(newPassword)
            }
        }),
    repeatNewPassword: yup.string()
        .required('Поле не может быть пустым')
        .test({
            name: 'passwordsNotTheSame',
            message: 'Пароли не совпадают',
            test() {
                const {newPassword} = this.parent;
                const {repeatNewPassword} = this.parent;

                return newPassword === repeatNewPassword;
            }
        }),
}).required()