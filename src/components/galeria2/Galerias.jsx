import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import img_1 from "../../assets/galeria/galeria.jpg";
import img_2 from "../../assets/galeria/galeria2.jpg";
import img_3 from "../../assets/galeria/galeria3.jpg";
import img_4 from "../../assets/galeria/galeria4.jpg";
import img_5 from "../../assets/galeria/galeria5.jpg";
import img_6 from "../../assets/galeria/galeria6.jpg";
import img_7 from "../../assets/galeria/galeria7.jpg";
import img_8 from "../../assets/galeria/galeria8.jpg";
import img_9 from "../../assets/galeria/galeria9.jpg";
import img_10 from "../../assets/galeria/galeria10.jpg";



export const Galerias = () => {
    return (

        <div className='galerias-container'>


            <div className='title-galerias'>
                <h2 className="heading">Algo de nosotros</h2>
            </div>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depthL: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
            >
                <SwiperSlide className='img'>
                    <img src={img_1} alt="img_1" />
                </SwiperSlide>
                <SwiperSlide className='img'>
                    <img src={img_2} alt="img_2" />
                </SwiperSlide >
                <SwiperSlide className='img'>
                    <img src={img_3} alt="img_3" />
                </SwiperSlide>
                <SwiperSlide className='img'>
                    <img src={img_4} alt="img_4" />
                </SwiperSlide>
                <SwiperSlide className='img'>
                    <img src={img_5} alt="img_5" />
                </SwiperSlide>
                <SwiperSlide className='img'>
                    <img src={img_6} alt="img_1" />
                </SwiperSlide>
                <SwiperSlide className='img'>
                    <img src={img_7} alt="img_2" />
                </SwiperSlide >
                <SwiperSlide className='img'>
                    <img src={img_8} alt="img_3" />
                </SwiperSlide>
                <SwiperSlide className='img'>
                    <img src={img_9} alt="img_4" />
                </SwiperSlide>
                <SwiperSlide className='img'>
                    <img src={img_10} alt="img_5" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>

                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>

            </Swiper>
        </div>
    )
}
