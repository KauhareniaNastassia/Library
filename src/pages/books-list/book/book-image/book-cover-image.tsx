import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import SwiperCore, {Navigation} from "swiper";

import defaultBookCover from '../../../../assets/img/defaultCatIcon.svg'
import {ImageType} from "../../../../api/books-list-api";
import {converterURLImages} from "../../../../hooks/converter-URL-images";


SwiperCore.use([Navigation])

type BookCoverImagePropsType = {
    image: ImageType[]
}

export const BookCoverImage:React.FC<BookCoverImagePropsType> = ({image}) =>{

    let bookIMG = converterURLImages(image)

    if (image.length) return <img src={bookIMG[0]} className='image' alt='book' />;

    return <img src={defaultBookCover} className='image' alt='book-empty' />;
};
