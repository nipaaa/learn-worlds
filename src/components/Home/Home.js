import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Courses from './Courses';
import Event from './Event';
import Offer from './Offer';
import TrustedCompany from './TrustedCompany';
import Instructor from './Instructor';
import NewsLetters from './NewsLetters';
import StudentsSay from './StudentsSay';


const Home = () => {
    return (
        <div>
            <Banner/>
            <TrustedCompany/>
            <Courses />
            <AboutUs/>
            <Offer/>
            <Event/>
            <Instructor/>
            <StudentsSay/>
            <NewsLetters/>
        </div>
    );
};

export default Home;