import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function RunwaySlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='bg-black min-h-screen py-10'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper2 my-4'
            >
                <SwiperSlide>
                    <iframe src='https://www.youtube.com/embed/rIUdA21wEPc' width='900' height='500' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://www.youtube.com/embed/8zJMZmL9Coc' width='900' height='500' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://www.youtube.com/embed/M8v5wU5Xa3A' width='900' height='500' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src='https://swiperjs.com/demos/images/nature-1.jpg'
                        width='900'
                        height='600'
                        allowFullScreen
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src='https://swiperjs.com/demos/images/nature-1.jpg'
                        width='900'
                        height='600'
                        allowFullScreen
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src='https://swiperjs.com/demos/images/nature-1.jpg'
                        width='900'
                        height='600'
                        allowFullScreen
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src='https://swiperjs.com/demos/images/nature-1.jpg'
                        width='900'
                        height='500'
                        allowFullScreen
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src='https://swiperjs.com/demos/images/nature-1.jpg'
                        width='900'
                        height='600'
                        allowFullScreen
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src='https://swiperjs.com/demos/images/nature-1.jpg'
                        width='900'
                        height='600'
                        allowFullScreen
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src='https://swiperjs.com/demos/images/nature-1.jpg'
                        width='900'
                        height='600'
                        allowFullScreen
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <iframe src='https://www.youtube.com/embed/IfWYDcVfBVo' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://www.youtube.com/embed/8zJMZmL9Coc' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='ttps://www.youtube.com/embed/4kD2CrWB_6k' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://www.youtube.com/embed/V9WFdzJb9PM' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://swiperjs.com/demos/images/nature-1.jpg' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://swiperjs.com/demos/images/nature-1.jpg' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://swiperjs.com/demos/images/nature-1.jpg' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://swiperjs.com/demos/images/nature-1.jpg' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://swiperjs.com/demos/images/nature-1.jpg' allowFullScreen />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src='https://swiperjs.com/demos/images/nature-1.jpg' allowFullScreen />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
