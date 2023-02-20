import {ReviewType} from "./reviews-reducer";
import {BookImage} from "./books-reducer";


export const books:BookInterface[] = [
        {
            id: '63ca71c94c9bb5ba1cefd584',
            image: [],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава',
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
            rating: 0,
            year: 2019,
            isBooked: false,
            bookedTill: '',
            review: []
        },
        {
            id: '63ca71c98104356fa2e159c8',
            image: [
                {id: '1', image: 'http://www.google.com/image.jpg'}
            ],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава',
            title: 'Грокаем алгоритмы. Иллюстрированное',
            rating: 4,
            year: 2019,
            isBooked: false,
            bookedTill: '',
            review: []
        },
        {
            id: '63ca71c973cabccd9ab7a375',
            image: [
                {id: '1', image: 'http://www.google.com/image.jpg'},
                {id: '2', image: 'http://www.google.com/image.jpg'}
            ],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава',
            title: 'Грокаем алгоритмы.',
            rating: 4,
            year: 2019,
            isBooked: false,
            bookedTill: '03.05',
            review: []
        },
        {
            id: '63ca71c9af1f4760abb4fb05',
            image: [
                {id: '1', image: 'http://www.google.com/image.jpg'}
            ],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава',
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
            rating: 4,
            year: 2019,
            isBooked: false,
            bookedTill: '',
            review: []
        },
        {
            id: '63ca71c914841fe9cc9166f3',
            image: [
                {id: '1', image: 'http://www.google.com/image.jpg'}
            ],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава, Патрик Нимейер',
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
            rating: 4,
            year: 2019,
            isBooked: true,
            bookedTill: '',
            review: []
        },
        {
            id: '63ca71c9e3e8102997512b5d',
            image: [],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава, Патрик Нимейер',
            title: 'Грокаем алгоритмы. Иллюстрированное',
            rating: 0,
            year: 2019,
            isBooked: false,
            bookedTill: '23.04',
            review: []
        },
        {
            id: '63ca71c969d95b2bbc52ae5c',
            image: [
                {id: '1', image: 'http://www.google.com/image.jpg'}
            ],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава, Патрик Нимейер',
            title: 'Грокаем алгоритмы.',
            rating: 4,
            year: 2019,
            isBooked: false,
            bookedTill: '',
            review: []
        },
        {
            id: '63ca71c9049066e2763fcdad',
            image: [
                {id: '1', image: 'http://www.google.com/image.jpg'}
            ],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава, Патрик Нимейер',
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
            rating: 4,
            year: 2019,
            isBooked: false,
            bookedTill: '',
            review: []
        },
        {
            id: '63ca71c94cf175eedcc56dcd',
            image: [
                {id: '1', image: 'http://www.google.com/image.jpg'}
            ],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава',
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
            rating: 4,
            year: 2019,
            isBooked: false,
            bookedTill: '',
            review: []
        },
        {
            id: '63ca71c99cad1a469bece5ce',
            image: [],
            category: 'business',
            categoryForPath: 'Бизнес-книги',
            author: 'Адитья Бхаргава',
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
            rating: 0,
            year: 2019,
            isBooked: false,
            bookedTill: '',
            review: []
        }]


export interface BookInterface {
    id: string,
    image: ImageInterface[],
    category: string,
    categoryForPath: string,
    author: string,
    title: string,
    rating: number,
    year: number,
    isBooked: boolean,
    bookedTill: string
    review: ReviewInterface[]
}

export interface ImageInterface {
    id: string;
    image: string;
}

export interface ReviewInterface {
    userPhoto: string
    userName: string
    date: string
    rating: number
    message: string
}
