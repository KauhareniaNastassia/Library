import * as yup from 'yup'

export const schemaForAuth = yup.object().shape({
    identifier: yup.string().required('Поле не может быть пустым'),
    password: yup.string().required('Поле не может быть пустым'),
}).required()