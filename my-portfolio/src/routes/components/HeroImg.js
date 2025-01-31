import React from 'react'
import IntroImg from "../../assets/Intro-Img.jpeg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./HeroImgStyle.css"


const HeroImg = () => {

    return (
        <div className="hero">
            <div className="mask">
                <motion.img 
                    className="Intro-Img"
                    src={IntroImg}
                    alt="IntroImg"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
            <div className="content">
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    HI, I AM A SOFTWARE DEVELOPER.
                </motion.p>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    React Developer.
                </motion.h1>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <Link to="/projects" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">contacts</Link>
                    
                </motion.div>
            </div>
        </div>
    )
}

export default HeroImg