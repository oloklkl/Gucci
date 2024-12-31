import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const runwayCollection = [
    {
        title: 'Gucci Sabato De Sarno SS24',
        desc: 'ANCORA Collection',
        video: '/api/placeholder/1920/1080', // 실제 런웨이 영상 URL로 교체 필요
        thumbnail: '/api/placeholder/400/225',
    },
    {
        title: 'Gucci FW24',
        desc: 'Milan Fashion Week',
        video: '/api/placeholder/1920/1080',
        thumbnail: '/api/placeholder/400/225',
    },
    {
        title: 'Gucci Valigeria',
        desc: 'Travel Collection 2024',
        video: '/api/placeholder/1920/1080',
        thumbnail: '/api/placeholder/400/225',
    },
    {
        title: 'Gucci Garden',
        desc: 'Cruise 2024',
        video: '/api/placeholder/1920/1080',
        thumbnail: '/api/placeholder/400/225',
    },
];

export default function RunwaySlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(Array(runwayCollection.length).fill(false));

    const handleVideoPlay = (index) => {
        const newIsPlaying = [...isPlaying];
        newIsPlaying[index] = true;
        setIsPlaying(newIsPlaying);
    };

    const handleVideoPause = (index) => {
        const newIsPlaying = [...isPlaying];
        newIsPlaying[index] = false;
        setIsPlaying(newIsPlaying);
    };

    return (
        <div className='max-w-[2000px] mx-auto'>
            <div className='relative'>
                <Swiper
                    modules={[Navigation, Thumbs, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.activeIndex);
                        // 모든 비디오 정지
                        setIsPlaying(Array(runwayCollection.length).fill(false));
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    className='mb-8'
                >
                    {runwayCollection.map((item, index) => (
                        <SwiperSlide key={index} className='relative'>
                            <div className='aspect-video relative overflow-hidden'>
                                <video
                                    src={item.video}
                                    className='w-full h-full object-cover'
                                    loop
                                    playsInline
                                    muted
                                    onPlay={() => handleVideoPlay(index)}
                                    onPause={() => handleVideoPause(index)}
                                    autoPlay={activeIndex === index}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='swiper-button-next !text-white after:!text-2xl'></div>
                    <div className='swiper-button-prev !text-white after:!text-2xl'></div>
                </Swiper>

                <div className='content text-center mb-12 px-8'>
                    <h2 className='font-serif text-4xl mb-4 tracking-wider'>{runwayCollection[activeIndex].title}</h2>
                    <p className='text-lg text-gray-600 font-light tracking-wide'>
                        {runwayCollection[activeIndex].desc}
                    </p>
                </div>

                <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    spaceBetween={20}
                    className='px-8'
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 15 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                >
                    {runwayCollection.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='cursor-pointer group'>
                                <div className='aspect-video relative overflow-hidden mb-4'>
                                    <video
                                        src={item.video}
                                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                                        loop
                                        playsInline
                                        muted
                                    />
                                </div>
                                <p className='text-sm font-light tracking-wider text-gray-600 group-hover:text-black transition-colors'>
                                    {item.title}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
