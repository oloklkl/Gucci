import React from 'react';
import { Container, Heading, Box, Text, VStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles import
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Collections data
const collectionsData = [
    {
        id: 1,
        image: '/images/collections/aria.jpg',
        title: 'Aria Collection',
        description: 'A blend of classic elegance with modern sophistication.',
    },
    {
        id: 2,
        image: '/images/collections/ancora.jpg',
        title: 'Ancora Collection',
        description: 'Vibrant colors and bold patterns defining the new era of Gucci.',
    },
    {
        id: 3,
        image: '/images/collections/cruise.jpg',
        title: 'Cruise Collection',
        description: 'A journey of timeless design inspired by travel and luxury.',
    },
];

export default function Collections() {
    return (
        <Container maxW='container.xl' py={20}>
            {/* 섹션 제목 */}
            <Heading as='h2' size='xl' textAlign='center' mb={10}>
                Explore Our Collections
            </Heading>

            {/* Swiper 슬라이더 */}
            <Swiper
                slidesPerView={1.2}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {collectionsData.map((collection) => (
                    <SwiperSlide key={collection.id}>
                        <VStack spacing={5}>
                            {/* 컬렉션 이미지 */}
                            <Image
                                src={collection.image}
                                alt={collection.title}
                                width={1000}
                                height={600}
                                style={{ borderRadius: '12px' }}
                            />
                            {/* 컬렉션 정보 */}
                            <Box textAlign='center'>
                                <Heading as='h3' size='lg'>
                                    {collection.title}
                                </Heading>
                                <Text fontSize='lg' mt={2}>
                                    {collection.description}
                                </Text>
                            </Box>
                        </VStack>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}
