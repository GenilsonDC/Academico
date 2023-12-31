import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'

const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <h2>Pagina inicial</h2>
      <h3>o tema em Homa é: {theme}</h3>
    </div>
  )
}

export default Home
