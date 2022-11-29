import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Courses from './Courses';
import TrustedCompany from './TrustedCompany';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TrustedCompany/>
            <Courses/>
            <AboutUs/>
        </div>
    );
};

export default Home;