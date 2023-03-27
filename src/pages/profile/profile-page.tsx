import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getUserDataTC, setAvatarChangeSuccessAC, setUserDataChangeSuccessAC} from "../../redux/user-reducer";
import css from './profile-page.module.scss'
import AvatarBlock from "./avatar-block/avatar-block";
import {UserDataBlock} from "./user-data-block/user-data-block";
import {BlockWrapper} from "./block-wrapper/block-wrapper";
import {ListItem} from "../books-list/list/list-item/list-item";
import {EmptyBlockForWrapper} from "./empty-block-for-wrapper/empty-block-for-wrapper";
import {
    deleteOrderTC,
    setCreateCommentSuccessAC,
    setCreateOrderSuccessAC, setDeleteOrderSuccessAC,
    setUpdateOrderSuccessAC
} from "../../redux/book-reducer";
import {RedMask} from "./red-mask/red-mask";
import {Notification} from "../../common/notification/notification";
import {HistoryBooks} from "./history-books/history-books";
import {ListItemForProfile} from "./list-item-for-profile/list-item-for-profile";

export const ProfilePage: React.FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)
    const status = useAppSelector(state => state.app.status)
    const deleteOrderSuccess = useAppSelector(state => state.book.deleteOrderSuccess)
    const userDataChangeSuccess = useAppSelector(state => state.user.userDataChangeSuccess)
    const avatarChangeSuccess = useAppSelector(state => state.user.avatarChangeSuccess)



    const onClickClearNotificationHandler = () => {
        if (userDataChangeSuccess) {
            dispatch(setUserDataChangeSuccessAC(null))
        } if (avatarChangeSuccess) {
            dispatch(setAvatarChangeSuccessAC(null))
        } if (deleteOrderSuccess) {
            dispatch(setDeleteOrderSuccessAC(null))
        } if (deleteOrderSuccess) {
            dispatch(setDeleteOrderSuccessAC(null))
        }
    }

    const onClickDeleteOrderHandler = () => {
        if (user.booking?.id) {
            dispatch(deleteOrderTC(user.booking?.id, () => dispatch(getUserDataTC()) ))
        }
    }

    useEffect(() => {
        dispatch(getUserDataTC())
    }, [])


    return (
        <section className={css.profile__wrapper}>
            {userDataChangeSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Изменения успешно сохранены!'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {!userDataChangeSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Изменения не были сохранены. Попробуйте позже!'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {avatarChangeSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Фото успешно сохранено!'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {!avatarChangeSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Что-то пошло не так, фото не сохранилось. Попробуйте позже!'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {deleteOrderSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Бронирование книги успешно отменено!'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {!deleteOrderSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Не удалось снять бронирование книги. Попробуйте позже!'
                    onClickHandler={onClickClearNotificationHandler}/>}


            <AvatarBlock
                firstName={user.firstName}
                lastName={user.lastName}
                avatar={user.avatar}
                userId={user.id}
            />

            <BlockWrapper
                title='Учетные данные'
                description='Здесь вы можете отредактировать информацию о себе'
            >
                <UserDataBlock/>
            </BlockWrapper>

            <BlockWrapper
                title='Забронированная книга'
                description='Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь'>

                <div className={css.book__block__wrapper}>
                    {user.booking?.book && <ListItemForProfile
                        bookingImage={user.booking?.book.image}
                        title={user.booking?.book.title}
                        authors={user.booking?.book.authors}
                        issueYear={user.booking?.book.issueYear}
                        rating={user.booking?.book.rating}
                        onClickHandler={onClickDeleteOrderHandler}
                    />}

                    {user.booking?.dateOrder && (user.booking?.dateOrder < new Date().toJSON()) && <RedMask
                        title='Дата бронирования книги истекла '
                        description='Через 24 часа книга будет  доступна всем'/>}

                    {!user.booking?.book && <EmptyBlockForWrapper title='Забронируйте книгу и она отобразится '/>}
                </div>
            </BlockWrapper>

            <BlockWrapper
                title='Книга которую взяли'
                description='Здесь можете просмотреть информацию о книге и узнать сроки возврата'>

                <div className={css.book__block__wrapper}>
                    {user.delivery?.book && <ListItemForProfile
                        bookingImage={user.delivery?.book.image}
                        title={user.delivery?.book.title}
                        authors={user.delivery?.book.authors}
                        issueYear={user.delivery?.book.issueYear}
                        rating={user.delivery?.book.rating}
                        deliveryForProfile={user.delivery}
                    />}

                    {user.delivery?.dateHandedTo && (user.delivery?.dateHandedTo < new Date().toJSON()) && <RedMask
                        title='Вышел срок пользования книги'
                        description='Верните книгу, пожалуйста'/>}

                    {!user.delivery?.book && <EmptyBlockForWrapper title='Прочитав книгу, она отобразится в истории '/>}
                </div>
            </BlockWrapper>

            <BlockWrapper
                title='История'
                description='Список прочитанных книг'>

                {user.history?.books && <HistoryBooks/>}

                {!user.history?.books && <EmptyBlockForWrapper title='Вы не читали книг из нашей библиотеки'/>}
            </BlockWrapper>
        </section>
    )
}

