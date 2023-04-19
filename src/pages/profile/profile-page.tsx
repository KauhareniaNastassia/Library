import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getUserDataTC, setAvatarChangeSuccessAC, setUserDataChangeSuccessAC} from "../../redux/user-reducer";
import css from './profile-page.module.scss'
import {AvatarBlock} from "./avatar-block/avatar-block";
import {UserDataBlock} from "./user-data-block/user-data-block";
import {BlockWrapper} from "./block-wrapper/block-wrapper";
import {EmptyBlockForWrapper} from "./empty-block-for-wrapper/empty-block-for-wrapper";
import {deleteOrderTC, setDeleteOrderSuccessAC} from "../../redux/book-reducer";
import {RedMask} from "./red-mask/red-mask";
import {Notification} from "../../common/notification/notification";
import {HistoryBooks} from "./history-books/history-books";
import {ListItemForProfile} from "./list-item-for-profile/list-item-for-profile";
import {BookResponseType} from "../../api/book-api";

export const ProfilePage: React.FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)
    const userProfile = useAppSelector(state => state.user.userProfile)
    const userAvatar = useAppSelector(state => state.user.avatar)
    const status = useAppSelector(state => state.app.status)
    const deleteOrderSuccess = useAppSelector(state => state.book.deleteOrderSuccess)
    const userDataChangeSuccess = useAppSelector(state => state.user.userDataChangeSuccess)
    const avatarChangeSuccess = useAppSelector(state => state.user.avatarChangeSuccess)
    const books = useAppSelector(state => state.books.books)


    const onClickClearNotificationHandler = () => {
        if (userDataChangeSuccess) {
            dispatch(setUserDataChangeSuccessAC(null))
        }
        if (avatarChangeSuccess) {
            dispatch(setAvatarChangeSuccessAC(null))
        }
        if (deleteOrderSuccess) {
            dispatch(setDeleteOrderSuccessAC(null))
        }
        if (deleteOrderSuccess) {
            dispatch(setDeleteOrderSuccessAC(null))
        }
    }

    const onClickDeleteOrderHandler = () => {
        if (user.booking?.id) {
            dispatch(deleteOrderTC(user.booking?.id, () => dispatch(getUserDataTC())))
        }
    }
    let book: BookResponseType | undefined
        const booking = localStorage.getItem('booked');
        if (booking) {
            book =  books.find(el => el.id === +booking)
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
                firstName={userProfile?.firstName}
                lastName={userProfile?.lastName}
                avatar={userAvatar}
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
                    {book && <ListItemForProfile
                        bookingImage={book.images}
                        title={book.title}
                        authors={book.authors}
                        issueYear={book.issueYear}
                        rating={book.rating}
                        onClickHandler={onClickDeleteOrderHandler}
                    />}

                    {book?.booking?.dateOrder && (book?.booking?.dateOrder < new Date().toJSON()) && <RedMask
                        title='Дата бронирования книги истекла '
                        description='Через 24 часа книга будет  доступна всем'/>}

                    {!book && <EmptyBlockForWrapper title='Забронируйте книгу и она отобразится '/>}
                </div>
            </BlockWrapper>

            <BlockWrapper
                title='Книга которую взяли'
                description='Здесь можете просмотреть информацию о книге и узнать сроки возврата'>

                <div className={css.book__block__wrapper}>
                    {book?.delivery && <ListItemForProfile
                        bookingImage={book.images}
                        title={book.title}
                        authors={book.authors}
                        issueYear={book.issueYear}
                        rating={book.rating}
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

