import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
 

   <div id="hero" >
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#1e90ff]">Minh-Ha</span></h1>
          <p className={`${styles.heroSubText} mt-0 text-white-100`}>
          I am an award-winning Web Developer and Multimedia Specialist II. </p>
          <p  className="text-secondary text-[15px] max-w-3xl">This page is developed with React.js for UI components, Three.js for 3D rendering, and Tailwind CSS for styling. (Use your mouse or finger to rotate the computer and explore it in 3D!) 
          
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[40px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
