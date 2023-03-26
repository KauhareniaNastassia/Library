import React, {useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import './slider.module.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import SwiperCore, {Autoplay, EffectFade, FreeMode, Navigation, Pagination, Thumbs} from "swiper";
import {BookImage} from "../../../../redux/books-reducer";
import {ImageType} from "../../../../api/books-list-api";
import userAvatar from "../../../../assets/img/avatar.svg";
import defaultBookCover from "../../../../assets/img/defaultCatIcon.svg";


type BookSliderPropsType = {
    image: ImageType[] | null
}

export const BookSlider:React.FC<BookSliderPropsType> = ({image}) => {


    return (
        <div className='swiper__wrapper'>
            <Swiper
                modules={[EffectFade, Autoplay]}
                slidesPerView={1}
                autoHeight={false}
                loop={true}
                autoplay={{delay: 8000}}
            >
                {image && image.map((photo, i) => {
                    return <SwiperSlide key={i} >

                        <img src={photo !== null ? `https://strapi.cleverland.by${photo.url}` : defaultBookCover} alt='photo'/>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};

/*
*
* export const BookSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
    const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
    const swiper1Ref = useRef() as React.MutableRefObject<any | null>;
    const swiper2Ref = useRef();

    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

    useLayoutEffect(() => {
        if (swiper1Ref.current !== null) {
            swiper1Ref.current = swiper2Ref.current;
        }
    }, []);

    return (
        <div className="h-[550px] ">
            <Swiper
                onSwiper={(swiper) => {
                    if (swiper1Ref.current !== null) {
                        swiper1Ref.current = swiper;
                    }
                }}
                loop={true}
                controller={{control: secondSwiper}}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                navigation={{prevEl, nextEl}}
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Navigation, Thumbs, Controller]}
                className="w-[848px] h-[454px] rounded-xl"
            >
                <SwiperSlide>
                    <img src="https://a.d-cd.net/9634e6s-960.jpg" alt='slide'/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://a.d-cd.net/a5634e6s-960.jpg" alt='slide'/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://a.d-cd.net/13634e6s-960.jpg" alt='slide'/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://a.d-cd.net/e3634e6s-960.jpg" alt='slide'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="http://carsot.com/images/daewoo-nubira-ii-1999-2003-sedan-interior-2.jpg"
                        alt='slide'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://www.4tuning.ro/images/elemente-caroserie-din-dezmembrari-daewoo-nubira/elemente-caroserie-din-dezmembrari-daewoo-nubira-8fd6c1475ef586f2cf-1100-615-2-85-1.jpg"
                        alt='slide'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://a.d-cd.net/5283186s-480.jpg" className="w-full" alt='slide'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://a.d-cd.net/JCAAAgGDAuA-960.jpg" alt='slide'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://a.d-cd.net/a5634e6s-960.jpg" alt='slide'/>
                </SwiperSlide>
            </Swiper>

            <div ref={(node) => setPrevEl(node)}>prev</div>
            <div ref={(node) => setNextEl(node)}>next</div>
            <Swiper
                controller={{control: firstSwiper}}
                loop={false}
                spaceBetween={10}
                slidesPerView={8}
                watchSlidesProgress={true}
                touchRatio={0.2}
                slideToClickedSlide={true}
                onSwiper={setThumbsSwiper}
                modules={[Navigation, Thumbs, Controller]}
                className="h-[100.4px] w-[848px] mt-[20px] rounded-xl"
            >
                <SwiperSlide className="w-[70px]">
                    <img
                        src="https://a.d-cd.net/9634e6s-960.jpg"
                        className=" rounded-xl  h-[70px]"
                        alt='slide'/>
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src="https://a.d-cd.net/a5634e6s-960.jpg"
                        className=" rounded-xl  h-[70px]"
                        alt='slide'/>
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src="https://a.d-cd.net/13634e6s-960.jpg"
                        className=" rounded-xl  h-[70px]"
                        alt='slide'/>
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src="https://a.d-cd.net/e3634e6s-960.jpg"
                        className=" rounded-xl  h-[70px]"
                        alt='slide'/>
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src="http://carsot.com/images/daewoo-nubira-ii-1999-2003-sedan-interior-2.jpg"
                        className=" rounded-xl  h-[70px]"
                        alt='slide'/>
                </SwiperSlide>

                <SwiperSlide className="w-[70px]">
                    <img
                        className=" rounded-xl  h-[70px]"
                        src="https://www.4tuning.ro/images/elemente-caroserie-din-dezmembrari-daewoo-nubira/elemente-caroserie-din-dezmembrari-daewoo-nubira-8fd6c1475ef586f2cf-1100-615-2-85-1.jpg"
                        alt='slide'/>
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        className=" rounded-xl  h-[70px]"
                        src="https://a.d-cd.net/5283186s-480.jpg"
                        alt='slide'/>
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        className=" rounded-xl  h-[70px]"
                        src="https://a.d-cd.net/JCAAAgGDAuA-960.jpg"
                        alt='slide'/>
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src="https://a.d-cd.net/a5634e6s-960.jpg"
                        className=" rounded-xl  h-[70px]"
                        alt='slide'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

*
* */
