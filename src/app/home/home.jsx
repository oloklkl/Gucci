import React from 'react';
import Hero from './components/hero';
import GridGallery from './components/gridGallery';
import IntroSwiper from './components/introSwiper';
import CoverflowSlider from './components/coverflowSlider';
import RunwaySlider from './components/runwaySlider';
import CraftsmanShip from './components/craftsmanShip';
import Collections from './components/collections';

const Home = () => {
    return (
        <>
            <Hero />
            <GridGallery />
            <IntroSwiper />
            {/* <div className='bg-black min-h-screen py-10'> */}
            <RunwaySlider />
            {/* </div> */}
            <CoverflowSlider />
            <CraftsmanShip />
            <Collections />
        </>
    );
};

export default Home;
