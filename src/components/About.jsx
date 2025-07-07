import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        // variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >        
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-blue-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
        <motion.div>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p 
        // variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
        >
        Innovative Web Developer and Multimedia Specialist with over 18 years of experience delivering more than 100 high-impact digital projects for global audiences. Recognized with four prestigious awards, including the Edward R. Murrow and Gracie Awards. 
        </motion.p>
        <motion.p       
        className="mt-4 text-secondary text-white text-[17px] max-w-3xl leading-[30px]"
        >
        Led the full redesign of a legacy media platform, increasing user engagement by 45%. Expert in HTML5, CSS, JavaScript, React.js, and Adobe Creative Suite. Proven ability to develop award-winning visuals, ensure accessibility compliance, and collaborate cross-functionally in high-stakes media environments.
        
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about");