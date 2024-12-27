import { Box, Flex, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import dynamic from 'next/dynamic';

// Swiper를 클라이언트 사이드에서만 렌더링하도록 설정
const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
    ssr: false,
});
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), {
    ssr: false,
});

const productItems = [
    {
        id: 1,
        image: '/images/pattern/thumb/products/women-handbags.webp',
        title: '여성 핸드백',
    },
    {
        id: 2,
        image: '/images/pattern/thumb/products/women-sneakers.avif',
        title: '여성 스니커즈',
    },
    {
        id: 3,
        image: '/images/pattern/thumb/products/men-bag.avif',
        title: '남성 가방',
    },
    {
        id: 4,
        image: '/images/pattern/thumb/products/men-bag.avif',
        title: '남성 지갑',
    },
    {
        id: 5,
        image: '/images/pattern/thumb/products/men-bag.avif',
        title: '남성 지갑',
    },
    {
        id: 6,
        image: '/images/pattern/thumb/products/men-bag.avif',
        title: '남성 지갑',
    },
];

export default function GridGallery() {
    return (
        <div className='text-white bg-black h-full min-h-screen pb-20'>
            <h1 className='text-7xl font-bold py-10'>홀리데이를 맞아 선보이는 특별한 제품</h1>
            <Flex minWidth='max-content' alignItems='start' gap='2'>
                <div className='translate-y-10 translate-x-10'>
                    <h2 className='text-2xl'>Crafting timeless</h2>
                    <h2 className='text-2xl'>luxury elevating brands</h2>
                </div>
                <Spacer />
                <SimpleGrid as='ul' columns={{ base: 3 }} gap='5px'>
                    {productItems.map((product) => (
                        <Box as='li' key={product.id}>
                            <Image
                                className='m-2 my-8 rounded-lg'
                                src={product.image}
                                width={430}
                                height={430}
                                alt={product.title}
                            />
                            <Text my={-4} ml={3} fontWeight='bold'>
                                {product.title}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        </div>
    );
}
