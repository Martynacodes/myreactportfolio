import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
    homeObjOne,
    homeObjThree
} from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import Services from '../components/Services';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Projects />
            <InfoSection {...homeObjOne} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    );
}

export default Home;