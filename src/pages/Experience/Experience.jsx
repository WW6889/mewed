import './Experience.css'
import TimelineItem from '../../components/TimelineItem/TimelineItem'

const Experience = () => {
  const experiences = [
    {
      date: '2022 - Present',
      title: 'Senior Frontend Developer',
      subtitle: 'Tech Company Inc.',
      description: 'Led a team of developers to build responsive web applications using React, TypeScript, and modern CSS. Improved performance by 40% through code optimization and implemented CI/CD pipelines.'
    },
    {
      date: '2020 - 2022',
      title: 'Frontend Developer',
      subtitle: 'Digital Solutions Ltd.',
      description: 'Developed and maintained client-facing applications with React and Redux. Collaborated with UX designers to implement pixel-perfect interfaces and improve user experience metrics by 25%.'
    },
    {
      date: '2018 - 2020',
      title: 'Junior Web Developer',
      subtitle: 'Startup Ventures',
      description: 'Built and deployed web applications using JavaScript and Vue.js. Worked closely with backend developers to integrate RESTful APIs and implement new features.',
      last: true
    }
  ]

  return (
    <div className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
              last={exp.last}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience