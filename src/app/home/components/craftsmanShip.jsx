import React from 'react';
import { Container, Heading, Text, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles import
import 'swiper/css';
import 'swiper/css/pagination';

// Craftsmanship data
const craftsmanshipData = [
    {
        id: 1,
        image: '/images/craftsmanship/stitching.jpg',
        title: 'Hand-Stitched Excellence',
        description: 'Gucci artisans handcraft each piece with precision and care.',
    },
    {
        id: 2,
        image: '/images/craftsmanship/leather.jpg',
        title: 'Premium Leather Selection',
        description: 'Only the finest Italian leather is chosen for Gucci’s creations.',
    },
    {
        id: 3,
        image: '/images/craftsmanship/workshop.jpg',
        title: 'Masterpiece Creation',
        description: 'Every item undergoes meticulous quality control before release.',
    },
];

export default function CraftsmanShip() {
    return (
        <Container maxW='container.xl' py={20}>
            <Heading as='h2' size='xl' textAlign='center' mb={10}>
                The Art of Craftsmanship
            </Heading>
            <Swiper
                slidesPerView={1.2}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                {craftsmanshipData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Box textAlign='center'>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={800}
                                height={500}
                                style={{ borderRadius: '12px' }}
                            />
                            <Heading as='h3' size='lg' mt={5}>
                                {item.title}
                            </Heading>
                            <Text mt={3} fontSize='lg'>
                                {item.description}
                            </Text>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}
