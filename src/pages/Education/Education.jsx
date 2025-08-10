import './Education.css'
import TimelineItem from '../../components/TimelineItem/TimelineItem'

const Education = () => {
  const education = [
    {
      date: '2016 - 2020',
      title: 'Bachelor of Computer Science',
      subtitle: 'University of Technology',
      description: 'Specialized in Web Development and User Experience Design. Graduated with Honors (GPA: 3.8/4.0).'
    },
    {
      date: '2014 - 2016',
      title: 'Advanced Diploma in Programming',
      subtitle: 'Tech Institute',
      description: 'Focused on software development fundamentals, algorithms, and data structures.',
      last: true
    }
  ]

  return (
    <div className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              date={edu.date}
              title={edu.title}
              subtitle={edu.subtitle}
              description={edu.description}
              last={edu.last}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education