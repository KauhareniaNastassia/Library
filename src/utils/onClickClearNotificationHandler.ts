import {
    setCreateCommentSuccessAC,
    setCreateOrderSuccessAC,
    setDeleteOrderSuccessAC,
    setUpdateCommentAC,
    setUpdateOrderSuccessAC
} from "../redux/book-reducer";
import {AppDispatchType} from "../redux/store";
import {setAvatarChangeSuccessAC, setUserDataChangeSuccessAC} from "../redux/user-reducer";


export const onClickClearNotificationHandler = (dispatch: AppDispatchType, condition: string) => {
    if (condition === 'createCommentSuccess') {
        dispatch(setCreateCommentSuccessAC(null))
    }
    if (condition === 'updateCommentSuccess') {
        dispatch(setUpdateCommentAC(null))
    }
    if (condition === 'createOrderSuccess') {
        dispatch(setCreateOrderSuccessAC(null))
    }
    if (condition === 'updateOrderSuccess') {
        dispatch(setUpdateOrderSuccessAC(null))
    }
    if (condition === 'deleteOrderSuccess') {
        dispatch(setDeleteOrderSuccessAC(null))
    }
    if (condition === 'userDataChangeSuccess') {
        dispatch(setUserDataChangeSuccessAC(null))
    }
    if (condition === 'avatarChangeSuccess') {
        dispatch(setAvatarChangeSuccessAC(null))
    }
}