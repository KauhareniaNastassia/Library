const initialState: InitialReviewsStateType = {
    reviews: [
        {
            reviewId: '1234',
            userPhoto: '',
            userName: 'Иван Иванов',
            date: '5 января 2019',
            rating: 4,
            message: ''
        },
        {
            reviewId: '12345',
            userPhoto: '',
            userName: 'Николай Качков',
            date: '20 июня 2018',
            rating: 4,
            message: 'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'
        },
        {
            reviewId: '123456',
            userPhoto: '',
            userName: 'Екатерина Беляева',
            date:'18 февраля 2018',
            rating: 4,
            message: ''
        }]
}


export const reviewsReducer = (state = initialState): InitialReviewsStateType => state

//  actions


//  types


export type InitialReviewsStateType ={
    [key: string] : ReviewType[]
}

export type ReviewType = {
    reviewId: string
    userPhoto: string
    userName: string
    date: string
    rating: number
    message: string
}



