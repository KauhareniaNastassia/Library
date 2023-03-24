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

export const ProfilePage: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)


    /*useEffect(() => {
        dispatch(getUserDataTC())
    }, [dispatch])*/


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
                {
                    user.booking?.book && <ListItem
                        bookingImage={user.booking?.book.image}
                        title={user.booking?.book.title}
                        authors={user.booking?.book.authors}
                        issueYear={user.booking?.book.issueYear}
                        rating={user.booking?.book.rating}
                        bookingForProfile={user.booking}
                        deliveryForProfile={user.delivery}
                    />
                }
            </BlockWrapper>

            <BlockWrapper
                title='Книга которую взяли'
                description='Здесь можете просмотреть информацию о книге и узнать сроки возврата'
            >
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

            <BlockWrapper
                title='История'
                description='Список прочитанных книг'
            >
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

