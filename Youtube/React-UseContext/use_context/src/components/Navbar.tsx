import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <nav>
      <button onClick={toggleTheme}> Mudar tema</button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contatos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
