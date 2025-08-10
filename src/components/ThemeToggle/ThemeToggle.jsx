import './ThemeToggle.css'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? (
        <FaSun className="theme-icon" />
      ) : (
        <FaMoon className="theme-icon" />
      )}
    </button>
  )
}

export default ThemeToggle