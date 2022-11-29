import React from 'react';
import Banner from './Banner';
import Courses from './Courses';
import TrustedCompany from './TrustedCompany';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TrustedCompany/>
            <Courses/>
        </div>
    );
};

export default Home;