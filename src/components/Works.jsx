import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (

      <motion.div>
      {/* <motion.div  variants={fadeIn("right", " ", 0.5 * index, 0.75)}>  */}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-blue-900 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[370px]">
          <div
               onClick={() => window.open
                (source_code_link, "_blank")}
                className="cursor-pointer"
            >
          <img 
            src={image}
            alt={name}
            className="w-[330px] h-[200px] oject-cover rounded-2xl"
          />
          <h3 className="text-yellow-500 mt-5 font-bold text-[20px]">{name}</h3>
          </div>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>
        
          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open
                (source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        

      
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>


      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <motion.div>
        {/* <p className={styles.sectionSubText}>
          My work
        </p> */}
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-white text-[17px] mx-w-3xl leading-[30px]"
           >
          I have worked on a variety of projects. Each project has its own unique challenges and learning experiences. Below are some of the projects I have worked on. (Click on the project title to view the project in a new tab.)
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");