import React from "react";
import defaultBookCover from '../../../../assets/img/defaultCatIcon.svg'
import {ImageType} from "../../../../api/books-list-api";
import {converterURLImages} from "../../../../hooks/converter-URL-images";
import css from './book-cover-image.module.scss'


type BookCoverImagePropsType = {
    image: ImageType[]
    id: number
}

export const BookCoverImage:React.FC<BookCoverImagePropsType> = ({image, id}) =>{

    let bookIMG = converterURLImages(image)

    if (image.length) return <img src={image?.length ? process.env.PUBLIC_URL + `/covers/${id}.webp` : defaultBookCover} className={css.book__cover} alt='book' />;

    return <img src={defaultBookCover} className='image' alt='book-empty' />;
};
