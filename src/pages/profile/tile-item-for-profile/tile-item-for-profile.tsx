import React, {useState} from 'react';
import css from "./tile-item-for-profile.module.scss";
import defaultBookCover from "../../../assets/img/default-book-cover.svg";
import {AuthorsType} from "../../../api/books-list-api";
import {UserCommentType} from "../../../api/user-api";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {Rating} from "../../../features/rating";
import {BaseModal} from "../../../common/modals/base-modal/base-modal";
import {CreateCommentModal} from "../../../common/modals/create-comment-modal/create-comment-modal";
import {setCreateCommentSuccessAC, setUpdateCommentAC} from "../../../redux/book-reducer";
import {Notification} from "../../../common/notification/notification";


type TileItemPropsType = {
    image?: string | null
    title: string
    authors: AuthorsType | null | undefined
    issueYear: string | null
    rating: number | null
    onClickHandler?: () => void
    searchValue?: string
    searchComment?: UserCommentType | null
    onClickCreateCommentHandler?: (rating: null | number, comment: string) => void
}

export const TileItemForProfile: React.FC<TileItemPropsType> = ({
                                                                    image,
                                                                    rating,
                                                                    authors,
                                                                    title,
                                                                    issueYear,
                                                                    onClickCreateCommentHandler,
                                                                    searchComment,
                                                                }) => {
    const [createCommentModalIsOpen, setCreateCommentModalIsOpen] = useState(false)
    const dispatch = useAppDispatch()
    const createCommentSuccess = useAppSelector(state => state.book.createCommentSuccess)
    const updateCommentSuccess = useAppSelector(state => state.book.updateCommentSuccess)
    const status = useAppSelector(state => state.app.status)

    let titleForTile
    if (title.length > 50) {
        titleForTile = `${title.substring(0, 50).trim()}...`
    } else {
        titleForTile = title
    }

    const onClickClearNotificationHandler = () => {
        if (createCommentSuccess) {
            dispatch(setCreateCommentSuccessAC(null))
        }
        if (updateCommentSuccess) {
            dispatch(setUpdateCommentAC(null))
        }
    }

    return (
        <>
            {createCommentSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Спасибо,что нашли время оценить книгу!'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {!createCommentSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Оценка не была отправлена. Попробуйте позже!'
                    onClickHandler={onClickClearNotificationHandler}/>}

            {updateCommentSuccess && status === 'succeeded' &&
                <Notification
                    status='succeeded'
                    message='Спасибо, что нашли время изменить оценку!'
                    onClickHandler={onClickClearNotificationHandler}/>}
            {!updateCommentSuccess && status === 'failed' &&
                <Notification
                    status='failed'
                    message='Изменения не были сохранены. Попробуйте позже!'
                    onClickHandler={onClickClearNotificationHandler}/>}

            <div className={css.bookList__item}>
                <div className={css.bookList__item_coveWrapper}>
                    <img src={image
                        ? `https://strapi.cleverland.by${image}`
                        : defaultBookCover}
                         alt="Book cover"
                         className={css.bookList__item_cover}/>
                </div>

                <div className={css.bookList__item_rating}>
                    <Rating rating={rating}/>
                </div>

                <div className={css.bookList__item_info}>
                    <div className={css.bookList__item_info_title}>
                        {titleForTile}

                    </div>

                    <div className={css.bookList__item_info_author}>
                        {authors}, {issueYear}
                    </div>
                </div>

                <div className={css.bookList__item_button}>
                    {
                        searchComment
                            ? <button
                                onClick={() => setCreateCommentModalIsOpen(true)}
                                type="button"
                                className={css.update_comment_button}>изменить оценку</button>
                            : <button
                                onClick={() => setCreateCommentModalIsOpen(true)}
                                type="button"
                                className={css.create_comment_button}> оценить </button>
                    }
                </div>
                {createCommentModalIsOpen && searchComment && onClickCreateCommentHandler &&
                    <BaseModal
                        onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                        <CreateCommentModal
                            commentRating={searchComment.rating}
                            commentText={searchComment.text}
                            onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                            onClickHandler={onClickCreateCommentHandler}/>
                    </BaseModal>}

                {createCommentModalIsOpen && !searchComment && onClickCreateCommentHandler &&
                    <BaseModal
                        onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                        <CreateCommentModal
                            onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                            onClickHandler={onClickCreateCommentHandler}/>
                    </BaseModal>}
            </div>
        </>
    );
};
