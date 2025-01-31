import "./AchievementStyle.css";
import React from 'react';
import { motion } from 'framer-motion';
import a1 from "../assets/a1.jpeg"
import a2 from "../assets/a2.JPG"
import a3 from "../assets/a3.jpg"
import a4 from "../assets/a4.jpg"

const Achievement = () => {
  return (
    <div className="achievement">
      <h2>Achievements</h2>
      <div className="achievement-grid">
        
        <motion.div
          className="achievement-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={a1} alt="Hackathon" className="achievement-img" />
          <h3>Hackathon Winner - Samadhan 1.0</h3>
          <p>Won first prize for developing an AI-powered finance advisor chatbot, overcoming challenges and setbacks during the competition.</p>
          <a href="https://www.bhaskar.com/local/mp/bhopal/news/samadhaan-10-hackathon-concludes-at-systech-bhopal-134010709.html?_branch_match_id=1411583758117839822&utm_campaign=134010709&utm_medium=sharing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0nMzMvM1kvKSCzOTizSS87P1Xdxci8rLgxP9%2FVPsq8rSk1LLSrKzEuPTyrKLy9OLbJ1TUlPBQAz6kzbPgAAAA%3D%3D" target="_blank" rel="noopener noreferrer">Learn More</a>
        </motion.div>

        <motion.div
          className="achievement-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={a3} alt="CodeFest" className="achievement-img" />
          <h3>Hackathon Winner- Hack4Heritage</h3>
          <p>Won First prize for a 24-hour online hackathon, for
          creating a full-stack app on biodiversity and heritage..</p>
          <a href="https://www.bhaskar.com/local/mp/bhopal/news/samadhaan-10-hackathon-concludes-at-systech-bhopal-134010709.html?_branch_match_id=1411583758117839822&utm_campaign=134010709&utm_medium=sharing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0nMzMvM1kvKSCzOTizSS87P1Xdxci8rLgxP9%2FVPsq8rSk1LLSrKzEuPTyrKLy9OLbJ1TUlPBQAz6kzbPgAAAA%3D%3D" target="_blank" rel="noopener noreferrer">Learn More</a>
        </motion.div>
        
        <motion.div
          className="achievement-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img src={a2} alt="GEMA Academy" className="achievement-img" />
          <h3>2nd Position in Java Marathon</h3>
          <p>Secured second place in a competitive Java marathon, showcasing problem-solving and coding skills by tackling complex challenges.</p>
          <a href="https://www.linkedin.com/posts/arpita-bais-79777626b_java-codingchallenge-grateful-activity-7214154490378080256--c9F?utm_source=share&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">Learn More</a>
        </motion.div>
        <motion.div
          className="achievement-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img src={a4} alt="GEMA Academy" className="achievement-img" />
          <h3>1st position in Research Paper Presentation-
            ICEHAIDS </h3>
          <p>Received recognition for outstanding Research Paper Presentation</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">Learn More</a>
        </motion.div>

      </div>
    </div>
  );
};

export default Achievement;
