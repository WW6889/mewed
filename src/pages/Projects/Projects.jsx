import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'ML-Based Link Capacity Estimation in 4G/5G Networks',
      description: `Developed machine learning models (LightGBM, XGBoost, Random Forest) to predict 
      link capacity using real network data. Applied feature reduction (PCA, Lasso) and SHAP-based 
      interpretability to analyze key throughput drivers in urban vs. rural deployments.`,
      tags: ['Python', 'LightGBM', 'XGBoost', 'Random Forest', 'SHAP']
    },
    {
      title: 'RF Material Characterization Using AI',
      description: `Designed ML and symbolic regression workflows to predict RF material permittivity 
      from impedance spectroscopy data. Improved RF sensor performance by optimizing preprocessing 
      techniques for high-frequency environments.`,
      tags: ['Python', 'scikit-learn', 'Symbolic Regression', 'RF Sensors']
    },
    {
      title: '5G Test Network Deployment on Kubernetes',
      description: `Built a scalable 5G testbed using Kubernetes and O-RAN components to simulate over 
      100 concurrent users. Conducted performance testing and optimized network parameters for better 
      throughput and latency.`,
      tags: ['Kubernetes', 'O-RAN', '5G', 'Cloud-Native']
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects