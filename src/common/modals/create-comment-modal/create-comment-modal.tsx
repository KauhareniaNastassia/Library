import React, {useState} from 'react';
import css from './create-comment-modal.module.scss'
import {ButtonForModal} from "../button-for-modal/button-for-modal";
import {StarsRatingForModal} from "../../stars-rating-for-modal/stars-rating-for-modal";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {useParams} from "react-router-dom";
import {CommentRequestData} from "../../../api/book-api";
import {createCommentTC, getBookTC} from "../../../redux/book-reducer";

type CreateCommentModalPropsType = {
    onCloseHandler: () => void
}

const CreateCommentModal: React.FC<CreateCommentModalPropsType> = ({onCloseHandler}) => {
    const [rating, setRating] = useState<null | number>(null)
    const [comment, setComment] = useState<string>('')
    const userId = useAppSelector(state => state.auth.profile?.id)
    const {bookId} = useParams()
    const dispatch = useAppDispatch()

    const onClickCreateCommentHandler = () => {

        if (bookId && userId) {
            const commentData: CommentRequestData = {
                data: {
                    rating: rating ? rating : 0,
                    text: comment,
                    book: bookId,
                    user: userId.toString(),
                }

            }

            dispatch(createCommentTC(commentData))

            setComment('')
            setRating(null)
            onCloseHandler()
            dispatch(getBookTC(Number(bookId)))
        }
    }

    return (
        <div className={css.modal_content_wrapper}>
            <h3 className={css.modal_title}>Оцените книгу</h3>
            <div className={css.modal_stars_block}>
                <h5 className={css.modal_stars_title}>Ваша оценка</h5>
                <StarsRatingForModal
                    rating={rating}
                    setRating={setRating}/>
            </div>
            <div className={css.modal_textarea_wrapper}>
                <textarea
                    className={css.modal_textarea}
                    placeholder='Оставить отзыв'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <ButtonForModal
                onClickHandler={onClickCreateCommentHandler}
                title='оценить'
            />


        </div>
    );
};

export default CreateCommentModal;