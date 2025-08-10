import './TimelineItem.css'

const TimelineItem = ({ date, title, subtitle, description, last }) => {
  return (
    <div className={`timeline-item ${last ? 'last' : ''}`}>
      <div className="timeline-dot"></div>
      <div className="timeline-content animate-fadeIn">
        <span className="timeline-date">{date}</span>
        <h3 className="timeline-title">{title}</h3>
        <h4 className="timeline-subtitle">{subtitle}</h4>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  )
}

export default TimelineItem