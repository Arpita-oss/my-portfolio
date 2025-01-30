import "./FooterStyle.css"
import React from 'react'
import {FaHome, FaPhone , FaMailBulk, FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}} />
                <div>
                    <p>Indrapuri , Sector C</p>
                    <p>Bhopal</p>
                </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}} /> +91 9893886092
                    </h4>
                
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}} /> arpitarajput547@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>
                    About
                </h4>
                <p>
                    This is me Arpita Bais.<br/>
                    Student of B.Tech(CSE) in Lnct&S.<br/> 
                    I enojoy solving real word problems using my methods , skills and techniques.
                </p>
                <div className="social">
                <FaGithub size={30} style={{color:"#fff" , marginRight:"1rem"}} /> 
                <FaLinkedin size={30} style={{color:"#fff" , marginRight:"1rem"}} /> 
                </div>
            </div>
        </div>  
      
    </div>
  )
}

export default Footer
