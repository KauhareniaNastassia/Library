import React from 'react';

export type ModalType = {
    title: string,
    message: string,
    buttonTitle: string,
    path: string,
    reload: boolean,
}

export const SuccessModal:ModalType  = {
    title: 'Регистрация успешна',
    message: 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль.',
    path: '/auth',
    reload: false,
    buttonTitle: 'вход'
}

export const Error400Modal:ModalType = {
    title: 'Данные не сохранились',
    message: 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.',
    path: '/registration',
    reload: true,
    buttonTitle: 'назад к регистрации'
}

export const ErrorRegistrationModal:ModalType = {
    title: 'Данные не сохранились',
    message: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз',
    path: '/registration',
    reload: true,
    buttonTitle: 'повторить'
}

export const AuthErrorModal:ModalType = {
    title: 'Вход не выполнен',
    message: 'Что-то пошло не так. Попробуйте ещё раз',
    path: '/auth',
    reload: true,
    buttonTitle: 'повторить'
}

export const NewPasswordSaveModal:ModalType = {
    title: 'Новые данные сохранены',
    message: 'Зайдите в личный кабинет, используя свои логин и новый пароль',
    path: '/auth',
    reload: false,
    buttonTitle: 'вход'
}

export const EmailSendModal:ModalType = {
    title: 'Письмо выслано',
    message: 'Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля',
    path: '',
    reload: false,
    buttonTitle: ''
}

export const NewPasswordSaveErrorModal:ModalType = {
    title: 'Данные не сохранились',
    message: 'Что-то пошло не так. Попробуйте ещё раз',
    path: '',
    reload: false,
    buttonTitle: 'повторить'
}

