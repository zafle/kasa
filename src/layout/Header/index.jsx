import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/layout/_header.scss'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo Kasa" className="logo" />
      </Link>
      <nav className="main_nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
