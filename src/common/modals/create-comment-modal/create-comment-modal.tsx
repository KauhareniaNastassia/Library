import React, {useState} from 'react';
import css from './create-comment-modal.module.scss'
import {ButtonForModal} from "../button-for-modal/button-for-modal";
import {StarsRatingForModal} from "../../stars-rating-for-modal/stars-rating-for-modal";

type CreateCommentModalPropsType = {
    onCloseHandler: () => void
    onClickHandler: (rating: null | number, comment: string) => void
    commentRating?: number
    commentText?: string | null
}

export const CreateCommentModal: React.FC<CreateCommentModalPropsType> = ({
                                                                       onCloseHandler,
                                                                       onClickHandler,
                                                                       commentRating,
                                                                       commentText
                                                                   }) => {

    const [rating, setRating] = useState<null | number>(commentRating ? commentRating : null)
    const [comment, setComment] = useState<string>(commentText ? commentText : '')

    const onClickCreateCommentHandler = () => {
        onClickHandler(rating, comment)
        setComment('')
        setRating(null)
        onCloseHandler()
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
