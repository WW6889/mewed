import './Contact.css'
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('idle')

  // helper to encode data like a classic form POST
  const encode = (data) =>
    new URLSearchParams(data).toString()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = {
      'form-name': form.getAttribute('name'),
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      'bot-field': form['bot-field']?.value || ''
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData)
      })
      window.location.href = '/thank-you'
    } catch (err) {
      console.error(err)
      setStatus('error')
      alert('Submission failed. Please try again.')
    }
  }

  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          {/* left column unchanged – your info */}
          <div className="contact-info">
            {/* ... your Location / Email / Phone / LinkedIn blocks ... */}
          </div>

          {/* Netlify-enabled form */}
          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form animate-fadeIn delay-4"
            onSubmit={handleSubmit}
          >
            {/* required for Netlify forms */}
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}>
              <label>Don’t fill this out: <input name="bot-field" /></label>
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

            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
              <FaPaperPlane /> {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact