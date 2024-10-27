import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/swiper-bundle.css';


function SectionThree() {

    const urlImages = [
        'src/assets/rol-1.jpg',
        'src/assets/rol-2.jpg',
        'src/assets/rol-3.jpg',
        'src/assets/rol-4.jpg',
        'src/assets/rol-5.jpg',
        'src/assets/rol-6.jpg',
        'src/assets/rol-7.jpg',
        'src/assets/rol-8.jpg',
    ]

    const listImages = urlImages.map((url, index) => (
        <SwiperSlide key={index}>
            <img src={url} alt={`Slide ${index + 1}`} className='h-[320px] rounded ' />
        </SwiperSlide>
    ))


    return (
        <>
            <section className='h-dvh bg-black flex flex-col justify-center items-center'>
                <h3 className="border-b border-yellow font-antonio text-white text-2xl">
                    Algo de nosotros
                </h3>
                <div className='mt-10 w-[350px]' >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        spaceBetween={-100}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {listImages}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default SectionThree;