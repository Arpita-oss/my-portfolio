import "./AboutContentStyle.css";
import React from "react";
import { motion } from "framer-motion";
import photo1 from "../assets/photo1.avif";
import photo2 from "../assets/photo2.avif";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a developer who loves to solve real-life problems through my
          stack
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <motion.div
            className="img-stack top"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={photo1} className="img" alt="photo1" />
          </motion.div>
          <motion.div
            className="img-stack bottom"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={photo2} className="img" alt="photo2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
