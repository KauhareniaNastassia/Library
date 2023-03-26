import React from 'react';
import {CommentRequestData} from "../../../api/book-api";
import {createCommentTC, updateCommentTC} from "../../../redux/book-reducer";
import {getUserDataTC} from "../../../redux/user-reducer";
import TileItem from "../../books-list/tile/tile-item/tile-item";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

type HistoryBooksPropsType = {

}

export const HistoryBooks:React.FC = () => {
    const dispatch= useAppDispatch()
    const user = useAppSelector(state => state.user.user)


    return (
        <div>
            {user.history?.books.map((item) => {
                    // const bookIdForComment = commentsForHistoryBook?.find(b => b === item.id)


                    const searchComment = user?.comments && user?.comments.find((elem) => elem.bookId === item.id);

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
                            if(searchComment) {
                                dispatch(updateCommentTC(searchComment.id, commentData))
                                dispatch(getUserDataTC())
                            } else {
                                dispatch(createCommentTC(commentData))
                                dispatch(getUserDataTC())
                            }
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
                        searchComment={searchComment}
                        onClickCreateCommentHandler={onClickCreateCommentHandler}
                    />
                }
            )}
        </div>
    );
};

