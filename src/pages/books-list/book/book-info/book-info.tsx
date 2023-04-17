import React from 'react';
import css from './book-info.module.scss'
import {CategoriesType} from "../../../../api/books-list-api";

type BookInfoPropsType = {
    publish: string | null | undefined
    year: string | null| undefined
    pages: string | null| undefined
    cover: string | null| undefined
    format: string | null| undefined
    category: CategoriesType | null| undefined
    weight: string | null| undefined
    isbn: string | null| undefined
    producer: string | null| undefined
}

export const BookInfo:React.FC<BookInfoPropsType> = ({
                                                         publish,
                                                         year,
                                                         pages,
                                                         cover,
                                                         format,
                                                         category,
                                                         weight,
                                                         isbn,
                                                         producer
                                                     }) => <section className={css.wrapper}>

    <div className={css.bookInfo__column}>

        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Издательство</div>
            <div className={css.bookInfo_content}>{publish}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Год издания</div>
            <div className={css.bookInfo_content}>{year}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Страниц</div>
            <div className={css.bookInfo_content}>{pages}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Переплет</div>
            <div className={css.bookInfo_content}>{cover}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Формат</div>
            <div className={css.bookInfo_content}>{format}</div>
        </div>

    </div>

    <div className={css.bookInfo__column}>

        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Жанр</div>
            <div className={css.bookInfo_content}>{category}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Вес</div>
            <div className={css.bookInfo_content}>{weight}г</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>ISBN</div>
            <div className={css.bookInfo_content}>{isbn}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Изготовитель</div>
            <div className={css.bookInfo_content}>{producer}</div>
        </div>

    </div>


</section>






