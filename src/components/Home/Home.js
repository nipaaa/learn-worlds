import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Courses from './Courses';
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
        </div>
    );
};

export default Home;