import './Contact.css'
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item animate-fadeIn">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <div className="contact-item animate-fadeIn delay-1">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>your.email@example.com</p>
              </div>
            </div>
            <div className="contact-item animate-fadeIn delay-2">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
          <form className="contact-form animate-fadeIn delay-3">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact