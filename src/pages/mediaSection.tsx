import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';

import rol1 from '@/assets/nuevas-humano/corte-1.jpg.jpg';
import rol2 from '@/assets/nuevas-humano/corte-2.jpg.jpg';
import rol4 from '@/assets/nuevas-humano/corte-3.jpg.jpg';
import rol6 from '@/assets/nuevas-humano/corte-4.jpg.jpg';
import rol7 from '@/assets/nuevas-humano/corte-5.jpg.jpg';
import rol8 from '@/assets/nuevas-humano/corte-6.jpg.jpg';
import rol9 from '@/assets/nuevas-humano/promo-1.jpeg.jpg';
import rol10 from '@/assets/nuevas-humano/promo-2.jpeg.jpg';


function MediaSection() {
    const stretch = window.innerWidth > 768 ? 100 : 0;

    useEffect(() => {
        const sectionElement = document.querySelector("#photoSection");

        const top = sectionElement?.getBoundingClientRect().top;
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (!sectionElement) return;
            if (scrollTop + 1000 > top!) {
                sectionElement?.classList.add("rightToLeft");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup del listener al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const urlImages = [
        rol9,
        rol10,
        rol1,
        rol2,
        rol4,
        rol6,
        rol7,
        rol8,
    ]

    const listImages = urlImages.map((url, index) => (
        <SwiperSlide key={index} className='w-[1000px]'>
            <img src={url} alt={`Slide ${index + 1}`} className='h-[320px] rounded ' />
        </SwiperSlide>
    ))


    return (
        <>
            <section id='photoSection' className='h-[550px] bg-black flex flex-col justify-center items-center'>
                <h3 className="border-b border-yellow font-antonio text-white text-3xl font-thin"> 
                    Algo de nosotros
                </h3>
                <div className='mt-10 w-[390px] md:w-[600px] ml-9 md:ml-0'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch,
                            depth: 120,
                            modifier: 3,
                            slideShadows: false,
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

export default MediaSection;