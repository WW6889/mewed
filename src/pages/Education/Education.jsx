import './Education.css'
import TimelineItem from '../../components/TimelineItem/TimelineItem'

const Education = () => {
  const education = [
    {
      date: 'Mar 2023 – 2025',
      title: 'M.Sc. Electrical Engineering & Information Technology (Automation)',
      subtitle: 'Deggendorf University of Applied Sciences, Germany',
      description:
        'Focus on intelligent systems, network management, and data-driven optimization. Master's thesis: RF Material Characterization Using AI — developed machine learning and symbolic modeling workflows to predict RF material permittivity from impedance spectroscopy data.'
    },
    {
      date: 'Sep 2008 – 2012',
      title: 'B.Sc. Electrical Engineering (Electronics)',
      subtitle: 'Ferdowsi University of Mashhad, Iran',
      description:
        'Specialized in electronics, communication systems, and signal processing. Bachelor’s thesis: Analysis and simulation of CDMA spreading codes to reduce multiple access interference and improve signal quality.',
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