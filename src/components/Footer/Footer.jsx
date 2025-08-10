import './Footer.css'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FaEnvelope />, url: 'mailto:youremail@example.com' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="copyright">
            &copy; {currentYear} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer