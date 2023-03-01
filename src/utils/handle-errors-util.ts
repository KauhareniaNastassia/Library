import {Dispatch} from "react";
import {setAppErrorAC, setAppStatusAC} from "../redux/app-reducer";

export const handleServerAppError = <T>(data: any, dispatch: Dispatch<ReturnType<typeof setAppErrorAC> | ReturnType<typeof setAppStatusAC>>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC( data.messages[0]))
    }
    else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}


export const handleServerNetworkError = (error: any, dispatch: Dispatch<ReturnType<typeof setAppErrorAC> | ReturnType<typeof setAppStatusAC>>) => {
    dispatch(setAppErrorAC(error.message ? error.message : "Some error occurred"))
    dispatch(setAppStatusAC('failed'))
}
