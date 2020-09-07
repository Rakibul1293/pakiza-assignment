import React from 'react';
import FooterTop from '../components/home/FooterTop/FooterTop';
import FooterBottom from '../components/home/FooterBottom/FooterBottom';
import Partners from '../components/home/Partners/Partners';
import Blog from '../components/home/Blog/Blog';
import Services from '../components/home/Services/Services';
import Distinguished from '../components/home/Distinguished/Distinguished';
import HelpLine from '../components/home/HelpLine/HelpLine';
import Testimonial from '../components/home/Testimonial/Testimonial';
import Counter from '../components/home/Counter/Counter';
import TakeCare from '../components/home/TakeCare/TakeCare';
import DentistAdvise from '../components/home/DentistAdvise/DentistAdvise';
import Umbrella from '../components/home/Umbrella/Umbrella';
import Appointment from '../components/home/Appointment/Appointment';
import Slider from '../components/home/Slider/Slider';

function Home() {
    return (
        <React.Fragment>
            <Slider />
            <Umbrella />
            <DentistAdvise />
            <Distinguished />
            <Appointment />
            <Services />
            <TakeCare />
            <Counter />
            <HelpLine />
            <Testimonial />
            <Blog />
            <Partners />
            <FooterTop />
            <FooterBottom />
        </React.Fragment>
    )
}

export default Home;