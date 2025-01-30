import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HeroImg2 from './components/HeroImg2';
import Form from './components/Form';
import photo5 from './assets/photo5.avif'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTACT." text="Let's have a chat" imgSrc={photo5} />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
