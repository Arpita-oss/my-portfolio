import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HeroImg2 from './components/HeroImg2';
import AboutContent from './components/AboutContent';
import about from '../assets/about.avif'

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="ABOUT." text="I am a MERN stack Developer" imgSrc={about} />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
