import React, {useEffect, useState} from 'react';
import css from './create-comment-modal.module.scss'
import {ButtonForModal} from "../button-for-modal/button-for-modal";
import {StarsRatingForModal} from "../../stars-rating-for-modal/stars-rating-for-modal";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {useParams} from "react-router-dom";
import {CommentRequestData} from "../../../api/book-api";
import {createCommentTC, getBookTC} from "../../../redux/book-reducer";

type CreateCommentModalPropsType = {
    onCloseHandler: () => void
    onClickHandler: (rating: null | number, comment: string) => void
}

const CreateCommentModal: React.FC<CreateCommentModalPropsType> = ({onCloseHandler, onClickHandler}) => {
    const [rating, setRating] = useState<null | number>(null)
    const [comment, setComment] = useState<string>('')

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

export default CreateCommentModal;