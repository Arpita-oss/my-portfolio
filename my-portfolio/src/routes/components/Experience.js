import "./ExperienceStyle.css"; 
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>MERN Stack Developer <br/>
             Aarohan Pvt Ltd.</h3>
          <p>Developed AI-powered finance platforms and digital accounting solutions as a MERN Stack Developer, building scalable, secure, and efficient full-stack applications.</p>
        </motion.div>

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Frontend Developer <br/>
                DSPL pvt Ltd.
          </h3>
          <p>Developed responsive, animated websites with modern frontend technologies, focusing on user experience, performance optimization, and interactive UI designs..</p>
        </motion.div>
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Coding Instructor <br/>GEMA</h3>
          <p>Experienced coding instructor at a Dubai-based company, where I taught over 100 students from diverse countries. Delivered lessons in English, ensuring clear understanding and fostering a collaborative learning environment.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
