import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="logo Kasa" />
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </div>
    )
}

export default Header