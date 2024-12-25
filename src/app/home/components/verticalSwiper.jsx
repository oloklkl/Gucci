import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import Hero from './hero';
import IntroSwiper from './introSwiper';
import CoverflowSlider from './coverflowSlider';

export default function VerticalSwiper() {
    return (
        <>
            <Swiper
                style={{ height: '100vh', width: '100%' }}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className='verticalSwiper'
            >
                <SwiperSlide className='h-screen overflow-hidden'>
                    <Hero />
                </SwiperSlide>
                <SwiperSlide className='h-screen overflow-hidden bg-black'>Slide</SwiperSlide>
                <SwiperSlide className='h-screen overflow-hidden'>
                    <IntroSwiper />
                </SwiperSlide>
                <SwiperSlide className='h-screen overflow-hidden bg-black'>Slide 4</SwiperSlide>
                <SwiperSlide className='h-screen overflow-hidden'>Slide 5</SwiperSlide>
                <SwiperSlide className='h-screen overflow-hidden'>
                    <CoverflowSlider />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
