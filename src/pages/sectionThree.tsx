import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';



function SectionThree() {
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
            <section id='photoSection' className='h-[550px] bg-black flex flex-col justify-center items-center'>
                <h3 className="border-b border-yellow font-antonio text-white text-3xl font-thin"> 
                    Algo de nosotros
                </h3>
                <div className='mt-10 w-[350px] md:w-[600px]'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            // stretch: 100,
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

export default SectionThree;