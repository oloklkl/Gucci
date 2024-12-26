import { SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

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
        <div className='text-white'>
            <h1 className='text-7xl my-14 font-bold text-center'>홀리데이를 맞아 선보이는 특별한 제품</h1>
            <div>
                <h2 className='text-2xl'>Crafting timeless</h2>
                <h2 className='text-2xl'>luxury elevating brands</h2>
            </div>
            <SimpleGrid as='ul' columns={{ base: 1, md: 2, lg: 3, xl: 3 }} gap='10px'>
                {productItems.map((product, index) => (
                    <div key={index} className='inline-flex justify-end width=[400px] height=[400px]'>
                        <div>
                            <div>
                                <Image
                                    className='m-2 rounded-lg'
                                    src={product.image}
                                    width={400}
                                    height={400}
                                    alt='main'
                                />
                            </div>
                            <p>{product.title}</p>
                        </div>
                    </div>
                ))}
            </SimpleGrid>
        </div>
    );
}
