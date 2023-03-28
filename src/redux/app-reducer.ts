const initialState: InitialAppStateType = {
    status: 'idle',
    appError: '',
    successMessage: ''
}

export const appReducer = (state: InitialAppStateType = initialState, action: AppActionsType): InitialAppStateType => {
    switch (action.type) {
        case "app/SET-APP-STATUS":
            return {...state, status: action.status}
        case "app/SET-APP-ERROR":
            return {...state, appError: action.appError}
        case "app/SET-APP-SUCCESS":
            return {...state, successMessage: action.successMessage}

        default:
            return state
    }
}


//  actions
export const setAppStatusAC = (status: AppStatusType) => ({
    type: 'app/SET-APP-STATUS',
    status
} as const)
export const setAppErrorAC = (appError: string | null) => ({
    type: 'app/SET-APP-ERROR',
    appError
} as const)
export const setAppSuccessMessageAC = (successMessage: string | null) => ({
    type: 'app/SET-APP-SUCCESS',
    successMessage
} as const)


//  types

export type AppActionsType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppSuccessMessageAC>

type InitialAppStateType = {
    status: AppStatusType
    appError: string | null
    successMessage: string | null
}

export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

