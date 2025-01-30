import "./AboutContentStyle.css"
import photo1 from "../assets/photo1.avif"

import photo2 from "../assets/photo2.avif"

import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1 >Who Am I?</h1>
        <p>I am developer who love to solve real life world problems thorugh my stack</p>
        <Link to ="/contact">
            <button className="btn">CONTACT</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={photo1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottam">
                    <img src={photo2} className="img" alt="true"/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
