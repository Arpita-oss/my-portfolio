import "./HeroImgStyle.css"
import React from 'react'
import IntroImg from "../../assets/Intro-Img.jpeg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"

const HeroImg = () => {
   const handleResumeDownload = () => {
     const link = document.createElement('a');
     link.href = '/Arpita_Bais_Resume.pdf';
     link.download = 'Arpita_Bais_Resume.pdf';
     link.click();
   }

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
               <button 
                 onClick={handleResumeDownload} 
                 className="btn btn-light"
               >
                 <FaDownload style={{marginRight: '10px'}} />
                 Resume
               </button>
             </motion.div>
         </div>
     </div>
   )
}

export default HeroImg;