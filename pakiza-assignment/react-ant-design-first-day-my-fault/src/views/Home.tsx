import React from 'react';
import AppHome from "../components/home/Home";
import AppAbout from "../components/home/About";
import AppFeature from "../components/home/Feature";
import AppWorks from "../components/home/Works";
import AppFaq from "../components/home/Faq";
import AppPricing from "../components/home/Pricing";
import AppContact from "../components/home/Contact";

function AppHomes() {
    return (
        <div className="main">
            <AppHome />
            <AppAbout />
            <AppFeature />
            <AppWorks />
            <AppFaq />
            <AppPricing />
            <AppContact />
        </div>
    )
}

export default AppHomes;
