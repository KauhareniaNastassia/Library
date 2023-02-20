import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import SwiperCore, {Navigation} from "swiper";
import {BookImage} from "../../../../redux/books-reducer";
import defaultBookCover from '../../../../assets/img/defaultCatIcon.svg'


SwiperCore.use([Navigation])

type BookCoverImagePropsType = {
    image: BookImage[]
}

export const BookCoverImage = (props: BookCoverImagePropsType) =>{
    if (props.image.length) return <img src={props.image[0].image} className='image' alt='book' />;

    return <img src={defaultBookCover} className='image' alt='book-empty' />;
};
