import React from 'react';
import Hero from './components/hero';
import GridGallery from './components/gridGallery';
import IntroSwiper from './components/introSwiper';
import CoverflowSlider from './components/coverflowSlider';

const Home = () => {
    return (
        <>
            <Hero />
            <GridGallery />
            <IntroSwiper />
            <CoverflowSlider />
        </>
    );
};

export default Home;
