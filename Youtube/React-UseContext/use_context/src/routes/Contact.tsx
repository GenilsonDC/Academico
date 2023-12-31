import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'

const Contact = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <h2>Pagina de Contatos</h2>
      <h3> o tema em Contatos: {theme}</h3>
    </div>
  )
}

export default Contact
