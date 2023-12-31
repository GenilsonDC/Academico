import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/themeContext'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
