import './Skills.css'
import SkillBadge from '../../components/SkillBadge/SkillBadge'
import {
  FaPython, FaDocker, FaGitAlt, FaLinux, FaDatabase,
  FaProjectDiagram, FaGlobeAmericas, FaBroadcastTower
} from 'react-icons/fa'
import {
  SiKubernetes, SiPandas, SiScikitlearn, SiPowerbi, SiJupyter, SiVisualstudiocode
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: '4G/5G RAN Configurations', level: 95, icon: <FaBroadcastTower /> },
    { name: 'O-RAN', level: 90, icon: <FaBroadcastTower /> },
    { name: 'Network KPI Analysis', level: 92, icon: <FaProjectDiagram /> },

    { name: 'Python', level: 90, icon: <FaPython /> },
    { name: 'Pandas', level: 85, icon: <SiPandas /> },
    { name: 'scikit-learn', level: 80, icon: <SiScikitlearn /> },
    { name: 'ML Modeling', level: 85, icon: <FaProjectDiagram /> },
    { name: 'Retrieval-Augmented Generation (RAG)', level: 75, icon: <FaDatabase /> },
    { name: 'Symbolic Regression', level: 80, icon: <FaDatabase /> },
    { name: 'Power BI', level: 85, icon: <SiPowerbi /> },

    { name: 'Kubernetes', level: 85, icon: <SiKubernetes /> },
    { name: 'Docker', level: 85, icon: <FaDocker /> },
    { name: 'Git', level: 90, icon: <FaGitAlt /> },
    { name: 'Linux', level: 85, icon: <FaLinux /> },
    { name: 'VS Code', level: 80, icon: <SiVisualstudiocode /> },
    { name: 'Jupyter', level: 85, icon: <SiJupyter /> },

    { name: 'English (C2)', level: 100, icon: <FaGlobeAmericas /> },
    { name: 'German (B2)', level: 80, icon: <FaGlobeAmericas /> },
    { name: 'Persian (Native)', level: 100, icon: <FaGlobeAmericas /> }
  ]

  return (
    <div className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills