import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HeroImg2 from './components/HeroImg2';
import Work from './components/Work';
import Achievement from './components/Achievement'; // Import Achievement
import photo4 from '../assets/photo4.avif';

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS." text="Some of my recent works" imgSrc={photo4} />
      <Work />
      <Achievement /> {/* Add Achievement component here */}
      <Footer />
    </div>
  );
};

export default Project;
