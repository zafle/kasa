import Logo from '../../assets/logo_white.png'
import '../../styles/layout/_footer.scss'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
