import './Skills.css'
import SkillBadge from '../../components/SkillBadge/SkillBadge'
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiRedux, SiGraphql, SiMongodb, SiFirebase } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'React', level: 95, icon: <FaReact /> },
    { name: 'JavaScript', level: 90, icon: <FaJs /> },
    { name: 'TypeScript', level: 85, icon: <SiTypescript /> },
    { name: 'Node.js', level: 80, icon: <FaNodeJs /> },
    { name: 'HTML5', level: 95, icon: <FaHtml5 /> },
    { name: 'CSS3', level: 90, icon: <FaCss3Alt /> },
    { name: 'Redux', level: 85, icon: <SiRedux /> },
    { name: 'GraphQL', level: 75, icon: <SiGraphql /> },
    { name: 'MongoDB', level: 70, icon: <SiMongodb /> },
    { name: 'Firebase', level: 75, icon: <SiFirebase /> },
    { name: 'Git', level: 85, icon: <FaGitAlt /> }
  ]

  return (
    <div className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillBadge
              key={index}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills