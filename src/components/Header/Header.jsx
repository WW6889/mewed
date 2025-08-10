import { useEffect, useState } from 'react'
import './Header.css'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

const Header = ({ darkMode, toggleTheme, activeSection, handleNavigation }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo animate-fadeIn">
          <span className="logo-text">Portfolio</span>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => {
                    handleNavigation(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
          </button>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header