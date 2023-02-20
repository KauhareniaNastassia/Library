import React from 'react';
import css from './book-info.module.scss'

type BookInfoPropsType = {
    publisher: string
    year: number
    pages: number
    bookBinding: string
    size: string
    category: string
    weight: number
    isbn: string
    manufacture: string
}

export const BookInfo = (props: BookInfoPropsType) => <section className={css.wrapper}>

    <div className={css.bookInfo__column}>

        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Издательство</div>
            <div className={css.bookInfo_content}>{props.publisher}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Год издания</div>
            <div className={css.bookInfo_content}>{props.year}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Страниц</div>
            <div className={css.bookInfo_content}>{props.pages}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Переплет</div>
            <div className={css.bookInfo_content}>{props.bookBinding}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Формат</div>
            <div className={css.bookInfo_content}>{props.size}</div>
        </div>

    </div>

    <div  className={css.bookInfo__column}>

        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Жанр</div>
            <div className={css.bookInfo_content}>{props.category}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Вес</div>
            <div className={css.bookInfo_content}>{props.weight}г</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>ISBN</div>
            <div className={css.bookInfo_content}>{props.isbn}</div>
        </div>
        <div className={css.bookInfo__item}>
            <div className={css.bookInfo_title}>Изготовитель</div>
            <div className={css.bookInfo_content}>{props.manufacture}</div>
        </div>

    </div>


</section>






