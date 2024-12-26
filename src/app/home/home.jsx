import React from 'react';
import VerticalSwiper from './components/verticalSwiper';
import Hero from './components/hero';
import GridGallery from './components/gridGallery';

const Home = () => {
    return (
        <>
            <Hero />
            <GridGallery />
            <VerticalSwiper />
        </>
    );
};

export default Home;
