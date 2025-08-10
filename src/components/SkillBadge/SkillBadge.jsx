import './SkillBadge.css'

const SkillBadge = ({ name, level, icon }) => {
  return (
    <div className="skill-badge animate-fadeIn">
      <div className="skill-icon">{icon}</div>
      <div className="skill-info">
        <h4 className="skill-name">{name}</h4>
        <div className="skill-level">
          <div 
            className="skill-level-bar" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default SkillBadge