import React, {useCallback, useState} from 'react';
import css from "./tile-item.module.scss";
import defaultBookCover from "../../../../assets/img/default-book-cover.svg";
import {Rating} from "../../../../features/rating";
import {Button} from "../../../../features/button";
import {AuthorsType, BookingType, DeliveryType, ImageType} from "../../../../api/books-list-api";
import {useAppSelector} from "../../../../hooks/hooks";
import {BaseModal} from "../../../../common/modals/base-modal/base-modal";
import CreateCommentModal from "../../../../common/modals/create-comment-modal/create-comment-modal";
import {Highlighter} from "../../../../utils/helpers/highlighter/highlighter";
import {UserCommentType} from "../../../../api/user-api";



type TileItemPropsType = {
    image?: ImageType | null
    title: string
    authors: AuthorsType | null | undefined
    issueYear: string | null
    rating: number | null
    booking?: BookingType | null
    delivery?: DeliveryType | null
    onClickHandler?: () => void
    searchValue?: string

    //==props for history block in profile
    historyBookImage?: string | null
    historyId?: number
    searchComment?:  UserCommentType | null
    onClickCreateCommentHandler?: (rating: null | number, comment: string) => void
}

const TileItem: React.FC<TileItemPropsType> = ({
                                                   image,
                                                   rating,
                                                   authors,
                                                   title,
                                                   issueYear,
                                                   delivery, booking, historyBookImage, onClickHandler,
                                                   historyId, onClickCreateCommentHandler, searchValue, searchComment
                                               }) => {
    const [createCommentModalIsOpen, setCreateCommentModalIsOpen] = useState(false)
    const userId = useAppSelector(state => state.auth.profile?.id)
    //const bookIdForComment = commentFofBookFromHistory?.find(b => b === historyId)

    let titleForTile
    if (title.length > 54) {
        titleForTile = `${title.substring(0, 54).trim()}...`
    } else {
        titleForTile = title
    }

    const highLight = useCallback((string: string) => {
        if (searchValue) {
            return Highlighter(searchValue, string)
        } else return string
    }, [searchValue])

    return (
        <div className={css.bookList__item}>

            <div className={css.bookList__item_coveWrapper}>
                <img src={image?.url.length
                    ? `https://strapi.cleverland.by${image.url}`
                    : historyBookImage
                        ? `https://strapi.cleverland.by${historyBookImage}`
                        : defaultBookCover}
                     alt="Book cover"
                     className={css.bookList__item_cover}/>
            </div>

            <div className={css.bookList__item_rating}>
                <Rating rating={rating}/>
            </div>

            <div className={css.bookList__item_info}>
                <div className={css.bookList__item_info_title}>
                    {highLight(titleForTile)}
                    {/*{titleForTile}*/}

                </div>

                <div className={css.bookList__item_info_author}>
                    {authors}, {issueYear}
                </div>
            </div>

            <div className={css.bookList__item_button}>
                <Button
                    isBooked={booking?.order}//забронирована
                    dateHanded={delivery?.dateHandedFrom?.toString()}
                    handed={delivery?.handed}
                    orderByAuthUser={booking?.customerId === userId}

                    onClickHandler={onClickHandler}

                    searchComment={searchComment}
                    historyId={historyId}

                    onClickToOpenCommentModal={() => setCreateCommentModalIsOpen(true)}
                />
            </div>

            {createCommentModalIsOpen && searchComment && onClickCreateCommentHandler &&
            <BaseModal
                onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                <CreateCommentModal
                    searchComment={searchComment}
                    onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                    onClickHandler={onClickCreateCommentHandler}/>
            </BaseModal>}

            {createCommentModalIsOpen && onClickCreateCommentHandler &&
                <BaseModal
                    onCloseHandler={() => setCreateCommentModalIsOpen(false)}>
                    <CreateCommentModal
                        onCloseHandler={() => setCreateCommentModalIsOpen(false)}
                        onClickHandler={onClickCreateCommentHandler}/>
                </BaseModal>}

        </div>
    );
};

export default TileItem;