import "./WorkCardStyle.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const WorkCard = (props) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 20 }} // Initial state for animation
            animate={{ opacity: 1, y: 0 }}  // Final state when it's in view
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} // Smooth transition with delay
            whileHover={{ scale: 1.05 }} // Slight scale effect on hover
        >
            <img src={props.imgsrc} alt="" />
            <h2 className="project-title"> {props.title}</h2>

            <div className="pro-details">
                <p>
                    {props.text}
                </p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </motion.div>
    );
};

export default WorkCard;
