import React from 'react';
import "./SkillsShowcase.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaJava } from 'react-icons/fa';
import {  DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiMongodb, SiWebrtc, SiGsap, SiLocomotivejs, SiSwiper } from 'react-icons/si';

const SkillsShowcase = () => {
  return (
    <div className="skills-showcase">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skills-container">
        <div className="skill-card">
          <FaHtml5 className="skill-icon"/>
          <h3>HTML</h3>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="skill-icon"/>
          <h3>CSS</h3>
        </div>
        <div className="skill-card">
          <FaJs className="skill-icon"/>
          <h3>JavaScript</h3>
        </div>
        <div className="skill-card">
          <FaBootstrap className="skill-icon"/>
          <h3>Bootstrap</h3>
        </div>
        <div className="skill-card">
          <SiTailwindcss className="skill-icon"/>
          <h3>Tailwind CSS</h3>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon"/>
          <h3>React</h3>
        </div>
        <div className="skill-card">
          <DiJavascript1 className="skill-icon"/>
          <h3>Next.js</h3>
        </div>
        <div className="skill-card">
          <FaNodeJs className="skill-icon"/>
          <h3>Node.js</h3>
        </div>
        <div className="skill-card">
          {/* <SiExpress className="skill-icon"/> */}
          <h3>Express.js</h3>
        </div>
        <div className="skill-card">
          {/* <SiMongodb className="skill-icon"/> */}
          <h3>MongoDB</h3>
        </div>
        <div className="skill-card">
          {/* <SiWebrtc className="skill-icon"/> */}
          <h3>WebRTC</h3>
        </div>
        <div className="skill-card">
          {/* <SiGsap className="skill-icon"/> */}
          <h3>GSAP</h3>
        </div>
        <div className="skill-card">
          {/* <SiLocomotivejs className="skill-icon"/> */}
          <h3>Locomotive JS</h3>
        </div>

        <div className="skill-card">
          <FaJava className="skill-icon"/>
          <h3>JAVA</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;
