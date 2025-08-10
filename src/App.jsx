import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const handleNavigation = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection}
        handleNavigation={handleNavigation}
      />
      
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App