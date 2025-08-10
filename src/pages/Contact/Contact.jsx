import './Contact.css'
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info">
            <div className="contact-item animate-fadeIn">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>Deggendorf, Germany</p>
              </div>
            </div>
            <div className="contact-item animate-fadeIn delay-1">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>
                  <a href="mailto:omid.rahimirad@gmail.com">omid.rahimirad@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="contact-item animate-fadeIn delay-2">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+4917648994467">+49 176 48994467</a>
                </p>
              </div>
            </div>
            <div className="contact-item animate-fadeIn delay-3">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-text">
                <h3>LinkedIn</h3>
                <p>
                  <a
                    href="https://www.linkedin.com/in/0midrahimi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/0midrahimi
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form animate-fadeIn delay-4"
            action="/thank-you"
          >
            {/* Hidden field to identify the form */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Spam trap */}
            <p style={{ display: 'none' }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
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