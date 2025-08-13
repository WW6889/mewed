import './Home.css'
import avatar from '/avatar.PNG'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="animate-fadeIn">
              Hi, I'm <span className="highlight">Omid Rahimi</span>
            </h1>
            <h2 className="animate-fadeIn delay-1">
              <span className="typing">Wireless & AI-Driven Network Engineer | Automation & Optimization</span>
            </h2>
            <p className="animate-fadeIn delay-2">
              Results-driven Network and Systems Engineer with 9+ years of experience in 
              wireless infrastructure (4G/5G, O-RAN), network performance optimization, and 
              automation. Skilled in Python, Kubernetes, and Linux-based scripting, with 
              proven success applying AI/ML to optimize telecom networks, analyze RF systems, 
              and enhance connectivity performance. Combines deep telecom expertise with 
              advanced data-driven methodologies to deliver scalable, high-performance solutions 
              for next-generation networks.
            </p>
            <div className="home-actions animate-fadeIn delay-3">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>
          </div>
          <div className="home-image">
            <div className="image-wrapper animate-fadeIn delay-1">
              <img src={avatar} alt="Profile" className="profile-image animate-float" />
              <div className="image-border"></div>
              <div className="image-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home