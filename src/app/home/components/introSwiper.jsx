import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { AspectRatio, Container } from '@chakra-ui/react';
import Image from 'next/image';

const slideData = [
    {
        id: 1,
        image: '/',
        title: '디자이너의 메시지',
        description: '자연과 도시의 만남을 표현한 이번 컬렉션은 현대인의 삶을 재해석한 작품입니다.',
    },
    {
        id: 2,
        image: '/',
        title: '컬렉션의 영감',
        description: '이번 시즌의 디자인은 전통적인 이탈리아 건축과 미학에서 영감을 받았습니다.',
    },
    {
        id: 3,
        image: '/',
        title: '장인 정신',
        description: '수작업으로 제작된 디테일은 구찌의 고유한 가치를 담고 있습니다.',
    },
];

export default function IntroSwiper() {
    return (
        <Container className='py-52 flwx justify-center items-center min-h-screen'>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='mySwiper !overflow-visible'
            >
                {slideData.map((slide, index) => (
                    <SwiperSlide key={index} className='flex flex-col gap-5'>
                        <AspectRatio ratio={2 / 1}>
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={1000}
                                height={500}
                                className='rounded-lg'
                            />
                        </AspectRatio>
                        <div className='pt-5 flex flex-col gap-2'>
                            <strong className='text-3xl'>{slide.title}</strong>
                            <p className='text-lg'>{slide.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}
