import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, EffectCoverflow } from 'swiper/modules';

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
            <img src={url} alt={`Slide ${index + 1}`} className='h-[270px] rounded '  />
        </SwiperSlide>
    ))


    return (
        <>
            <section className='h-dvh bg-black  justify-center items-center'>
                <h3 className="border-b border-yellow font-antonio text-white text-2xl ">Algo de nosotros</h3>
                <div className=' mt-10  '>
                    <Swiper
                        centeredSlides={true}
                        roundLengths={true}
                        // loopPreventsSliding={false}
                        modules={[A11y, EffectCoverflow, Pagination]}
                        spaceBetween={0}
                        // slidesPerView={3}
                        loop={true}
                        effect='coverflow'
                        coverflowEffect={{depth: 150, rotate: 0, stretch: 15}}
                       
                        

                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    >

                        {
                            listImages
                        }
                    </Swiper>
                </div>



            </section>
        </>
    );
}

export default SectionThree;