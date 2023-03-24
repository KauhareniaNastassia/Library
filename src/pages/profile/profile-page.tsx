import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useNavigate} from "react-router-dom";
import {getUserDataTC} from "../../redux/user-reducer";
import userAvatar from "../../assets/img/avatar.svg";
import css from './profile-page.module.scss'
import {ButtonForProfile} from "./button-for-profile/button-for-profile";
import AvatarBlock from "./avatar-block/avatar-block";
import {UserDataBlock} from "./user-data-block/user-data-block";
import {BlockWrapper} from "./block-wrapper/block-wrapper";
import {ListItem} from "../books-list/list/list-item/list-item";
import {EmptyBlockForWrapper} from "./empty-block-for-wrapper/empty-block-for-wrapper";
import {deleteOrderTC} from "../../redux/book-reducer";
import {RedMask} from "./red-mask/red-mask";

export const ProfilePage: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)


    const onClickDeleteOrderHandler = () => {
        if (user.booking?.id) {
            dispatch(deleteOrderTC(user.booking.id))
            dispatch(getUserDataTC())
        }
    }

    useEffect(() => {
        dispatch(getUserDataTC())
    }, [])

    console.log(user?.booking?.dateOrder && ((user?.booking?.dateOrder) > (new Date().toJSON())))
    console.log(new Date().toJSON())

    return (
        <section className={css.profile__wrapper}>
            <AvatarBlock
                firstName={user.firstName}
                lastName={user.lastName}
                avatar={user.avatar}
            />

            <BlockWrapper
                title='Учетные данные'
                description='Здесь вы можете отредактировать информацию о себе'
            >
                <UserDataBlock/>
            </BlockWrapper>

            <BlockWrapper
                title='Забронированная книга'
                description='Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь'
            >
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

                    {!user.booking?.book && <EmptyBlockForWrapper title='Забронируйте книгу и она отобразится '/>
                    }
                </div>
            </BlockWrapper>

            <BlockWrapper
                title='Книга которую взяли'
                description='Здесь можете просмотреть информацию о книге и узнать сроки возврата'
            >
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

                </div>
                {!user.delivery?.book && <EmptyBlockForWrapper title='Прочитав книгу, она отобразится в истории '/>
                }

            </BlockWrapper>

            <BlockWrapper
                title='История'
                description='Список прочитанных книг'
            >

                <EmptyBlockForWrapper title='Вы не читали книг из нашей библиотеки'/>

                {/*{
                    user.delivery !== null
                        ? <ListItem
                        bookingImage={user.delivery?.book.image}
                        title={user.delivery?.book.title}
                        authors={user.delivery?.book.authors}
                        issueYear={user.delivery?.book.issueYear}
                        rating={user.delivery?.book.rating}
                    />
                        : <div></div>
                }*/}
            </BlockWrapper>


        </section>
    )
}

