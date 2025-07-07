import { BallCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      <div>
       <h3 className={styles.sectionHeadText}>Skills</h3>      
       <p className="text-white text-[17px]">(Drag the balls with your mouse or finger to experience the 3D effect!)</p>
       </div>

       <div  className="flex flex-row flex-wrap justify-center gap-10 mt-6">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}

      </div>
      <div>       
       <p className="text-white text-[17px] mt-9">From left to right, top to bottom: HTML5, CSS, JavaScript, React.js, Tailwind.css, Node.js, Three.js, Git, Figma, Photoshop, Adobe Premiere Pro, Adobe Illustrator, Adobe After Effects</p>
       </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech");