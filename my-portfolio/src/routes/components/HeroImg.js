import "./HeroImgStyle.css"
import React from 'react'
import IntroImg from "../../assets/Intro-Img.jpeg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"  // Import framer motion

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <motion.img 
            className="Intro-Img" 
            src={IntroImg} 
            alt="IntroImg" 
            initial={{ scale: 1.2 }}  // Start with a zoomed-in effect
            animate={{ scale: 1 }}   // End with the normal size
            transition={{ duration: 1.5, ease: "easeOut" }}  // Smooth zoom-out effect
          />
        </div>
        <div className="content">
            <motion.p
              initial={{ opacity: 0, y: 30 }}  // Start with the text lower and invisible
              animate={{ opacity: 1, y: 0 }}  // Fade in and move into position
              transition={{ duration: 0.8, delay: 0.5 }}  // Wait for the image animation to complete
            >
                HI, I AM A SOFTWARE DEVELOPER.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}  // Start with the text lower and invisible
              animate={{ opacity: 1, y: 0 }}  // Fade in and move into position
              transition={{ duration: 1, delay: 0.7 }}  // Slightly delayed to match the visual flow
            >
                React Developer.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}  // Start with the button container lower and invisible
              animate={{ opacity: 1, y: 0 }}  // Fade in and move into position
              transition={{ duration: 0.8, delay: 1 }}  // Delay for smooth entry
            >
              <Link to="/projects" className="btn">Projects</Link>
              <Link to="/contact" className="btn btn-light">Contact</Link>
            </motion.div>
        </div>
    </div>
  )
}

export default HeroImg;
