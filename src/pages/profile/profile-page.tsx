import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getUserDataTC} from "../../redux/user-reducer";
import css from './profile-page.module.scss'
import AvatarBlock from "./avatar-block/avatar-block";
import {UserDataBlock} from "./user-data-block/user-data-block";
import {BlockWrapper} from "./block-wrapper/block-wrapper";
import {ListItem} from "../books-list/list/list-item/list-item";
import {EmptyBlockForWrapper} from "./empty-block-for-wrapper/empty-block-for-wrapper";
import {createCommentTC, deleteOrderTC} from "../../redux/book-reducer";
import {RedMask} from "./red-mask/red-mask";
import TileItem from "../books-list/tile/tile-item/tile-item";
import {CommentRequestData} from "../../api/book-api";
import {Notification} from "../../common/notification/notification";

export const ProfilePage: React.FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)
    const commentsForHistoryBook = user.comments?.map(c => c.bookId)
    const userDataChangeSuccess = useAppSelector(state => state.user.userDataChangeSuccess)
    const avatarChangeSuccess = useAppSelector(state => state.user.avatarChangeSuccess)
    const onClickDeleteOrderHandler = () => {
        if (user.booking?.id) {
            dispatch(deleteOrderTC(user.booking.id))
            dispatch(getUserDataTC())
        }
    }

    useEffect(() => {
        dispatch(getUserDataTC())
    }, [])


    return (
        <section className={css.profile__wrapper}>
            {userDataChangeSuccess === true && <Notification status='success' message='Изменения успешно сохранены!'/>}
            {avatarChangeSuccess && <Notification status='success' message='Изменения успешно сохранены!'/>}


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
                    {user.booking?.book && <ListItem
                        bookingImage={user.booking?.book.image}
                        title={user.booking?.book.title}
                        authors={user.booking?.book.authors}
                        issueYear={user.booking?.book.issueYear}
                        rating={user.booking?.book.rating}
                        bookingForProfile={user.booking}
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
                    {user.delivery?.book && <ListItem
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

                {user.history?.books &&
                    user.history?.books.map((item) => {

                            const onClickCreateCommentHandler = (rating: null | number, comment: string) => {
                                if (item.id && user.id) {
                                    const commentData: CommentRequestData = {
                                        data: {
                                            rating: rating ? rating : 0,
                                            text: comment,
                                            book: item.id.toString(),
                                            user: user.id.toString(),
                                        }
                                    }
                                    dispatch(createCommentTC(commentData))
                                    dispatch(getUserDataTC())
                                }
                            }

                            return <TileItem
                                key={item.id}
                                historyId={item.id}
                                historyBookImage={item.image}
                                title={item.title}
                                authors={item.authors}
                                issueYear={item.issueYear}
                                rating={item.rating}
                                commentFofBookFromHistory={commentsForHistoryBook}
                                onClickCreateCommentHandler={onClickCreateCommentHandler}
                            />
                        }
                    )
                }

                {!user.history?.books && <EmptyBlockForWrapper title='Вы не читали книг из нашей библиотеки'/>}
            </BlockWrapper>
        </section>
    )
}

