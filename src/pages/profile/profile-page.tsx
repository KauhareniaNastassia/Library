import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import css from './profile-page.module.scss'
import {AvatarBlock} from "./avatar-block/avatar-block";
import {UserDataBlock} from "./user-data-block/user-data-block";
import {BlockWrapper} from "./block-wrapper/block-wrapper";
import {EmptyBlockForWrapper} from "./empty-block-for-wrapper/empty-block-for-wrapper";
import {deleteOrderTC} from "../../redux/book-reducer";
import {RedMask} from "./red-mask/red-mask";
import {HistoryBooks} from "./history-books/history-books";
import {ListItemForProfile} from "./list-item-for-profile/list-item-for-profile";
import {BookResponseType} from "../../api/book-api";
import {Notification} from "../../common/notification/notification";
import {onClickClearNotificationHandler} from "../../utils/onClickClearNotificationHandler";

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

    let book: BookResponseType | undefined
    const bookingByMe = localStorage.getItem('booking');
    if (bookingByMe) {
        book = books.find(el => el.id === +bookingByMe)
    }

    return (
        <section className={css.profile__wrapper}>
            {userDataChangeSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Изменения успешно сохранены!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "userDataChangeSuccess")}/>}
            {!userDataChangeSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Изменения не были сохранены. Попробуйте позже!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "userDataChangeSuccess")}/>}
            {avatarChangeSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Фото успешно сохранено!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "avatarChangeSuccess")}/>}
            {!avatarChangeSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Что-то пошло не так, фото не сохранилось. Попробуйте позже!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "avatarChangeSuccess")}/>}
            {deleteOrderSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Бронирование книги успешно отменено!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "deleteOrderSuccess")}/>}
            {!deleteOrderSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Не удалось отменить бронирование книги. Попробуйте позже!'
                    onClickHandler={() => onClickClearNotificationHandler(dispatch, "deleteOrderSuccess")}/>}

            <AvatarBlock
                firstName={userProfile?.firstName}
                lastName={userProfile?.lastName}
                avatar={userAvatar}
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
                        id={book.id}
                        bookingImage={book.images}
                        title={book.title}
                        authors={book.authors}
                        issueYear={book.issueYear}
                        rating={book.rating}
                        onClickHandler={() => dispatch(deleteOrderTC(book?.id, bookingByMe))}
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
                        id={book.id}
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

