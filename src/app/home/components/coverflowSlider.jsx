import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { AspectRatio, Container } from '@chakra-ui/react';

const slideItems = [
    {
        id: 1,
        image: '/images/pattern/main/main.jpg',
        title: '패키지&선물포장',
        description: '선물을 돋보이게 해줄 특별한 홀리데이 패키지로 색다른 감동을 더하세요.',
        linkText: '구찌 패키지 살펴보기',
    },
    {
        id: 2,
        image: '/images/pattern/main/main.jpg',
        title: '매장 픽업',
        description: '온라인으로 기프트를 주문하고 선호하는 구찌 부티크에서 픽업해 보세요.',
        linkText: '방법 알아보기',
    },
    {
        id: 3,
        image: '/images/pattern/main/main.jpg',
        title: '예약하기',
        description:
            '편리한 시간과 날짜에 원하는 부티크를 예약해 대기 없이 입장하세요. 클라이언트 어드바이저가 기억에 남을 만한 선물을 찾을 수 있도록 셀렉션을 안내해 드립니다.',
        linktext: '매장 방문 예약',
    },
];

export default function CoverflowSlider() {
    return (
        <Container className='py-52 justify-center items-center'>
            <div>
                <h2 className='text-4xl text-center mb-10'>구찌 서비스</h2>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className='coverflowSlider w-9/12'
            >
                {slideItems.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <Image src={slide.image} width={500} height={500} alt='main' />
                        </div>
                        <div>
                            <strong className='flex justify-center mb-3'>{slide.title}</strong>
                            <p className='mb-5'>{slide.description}</p>
                            <a href='#'>{slide.linktext}</a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}
