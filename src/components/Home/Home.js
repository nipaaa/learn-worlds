import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Courses from './Courses';
import Event from './Event';
import Offer from './Offer';
import TrustedCompany from './TrustedCompany';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TrustedCompany/>
            <Courses/>
            <AboutUs/>
            <Offer/>
            <Event/>
        </div>
    );
};

export default Home;