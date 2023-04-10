import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Courses from './Courses';
import Event from './Event';
import Offer from './Offer';
import TrustedCompany from './TrustedCompany';
import Instructor from './Instructor';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TrustedCompany/>
            <Courses/>
            <AboutUs/>
            <Offer/>
            <Event/>
            <Instructor/>
        </div>
    );
};

export default Home;