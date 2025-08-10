import './Experience.css'
import TimelineItem from '../../components/TimelineItem/TimelineItem'

const Experience = () => {
  const experiences = [
    {
      date: 'Dec 2025 – Present',
      title: 'Research Assistant – RF Material Characterization Using AI',
      subtitle: 'Technologie Campus Teisnach Sensorik – Deggendorf University of Applied Sciences, Germany',
      description: `Developed machine learning and symbolic modeling workflows to predict RF material 
      permittivity based on impedance spectroscopy data. Focused on preprocessing techniques to enhance 
      model accuracy and improve RF sensor performance in high-frequency environments.`
    },
    {
      date: 'Dec 2023 – Jul 2024',
      title: '5G Test Network Deployment on Kubernetes',
      subtitle: 'Faculty of Computer Science – Deggendorf University of Applied Sciences, Germany',
      description: `Built a scalable 5G testbed environment using Kubernetes and O-RAN components to 
      simulate over 100 concurrent users. Conducted performance testing and optimized network parameters 
      to improve throughput and latency in cloud-native telecom infrastructures.`
    },
    {
      date: 'Jul 2016 – Mar 2023',
      title: 'Wireless (RAN) Engineer',
      subtitle: 'Huawei Technology Co., Tehran, Iran',
      description: `Designed and prepared RAN product solutions (4G, 5G). Led over 50 software upgrades 
      and license deployments across 4G/5G RAN sites, reducing downtime by 15%. Performed network KPI 
      analysis and troubleshooting, increasing system reliability by 20%. Verified more than 400 
      configuration changes in the cellular network.`
    },
    {
      date: 'May 2015 – Jul 2016',
      title: 'Wireless Network Modernization Engineer',
      subtitle: 'ZTE Technology Co., Tehran, Iran',
      description: `Integrated over 900 BTSs and managed operation and maintenance of BSS equipment. 
      Implemented radio parameter changes and frequency planning.`,
      last: true
    },
    {
      date: 'Mar 2013 – Mar 2015',
      title: 'Wireless Front Office Engineer',
      subtitle: 'Huawei Technology Co., Tehran, Iran',
      description: `Monitored cellular network performance, prepared technical reports, and performed 
      initial troubleshooting of network issues to support field maintenance and ensure service continuity.`
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