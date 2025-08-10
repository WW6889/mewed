import './Projects.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product listings, cart functionality, and secure checkout. Built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality, due dates, and team collaboration features.',
      tags: ['React', 'Firebase', 'Material UI', 'React DnD'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with 5-day forecasts, location search, and interactive maps showing weather patterns.',
      tags: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      github: '#',
      live: '#'
    }
  ]

  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card animate-fadeIn delay-${index + 1}`}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="project-icon" />
                  Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="project-icon" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects