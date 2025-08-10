import './Home.css'
// Correct way to import the avatar
import avatar from '/avatar.PNG'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="animate-fadeIn">
              Hi, I'm <span className="highlight"> Omid Rahimi </span>
            </h1>
            <h2 className="animate-fadeIn delay-1">
              <span className="typing">Frontend Developer</span>
            </h2>
            <p className="animate-fadeIn delay-2">
              I build exceptional digital experiences with modern technologies.
              Focused on creating clean, efficient, and user-friendly interfaces.
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