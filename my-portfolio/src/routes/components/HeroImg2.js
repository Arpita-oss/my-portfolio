import React, { Component } from 'react';
import { motion } from 'framer-motion';
import "./HeroImg2.css";

class HeroImg2 extends Component {
    render() {
        return (
            <motion.div 
                className='hero-Img'
                style={{ backgroundImage: `url(${this.props.imgSrc})` }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div 
                    className='heading'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </motion.div>
            </motion.div>
        );
    }
}

export default HeroImg2;
