import { Link } from 'react-router-dom'
import './_error404.scss'

function Error404() {
  return (
    <main className="error__page">
      <h1 className="error__page__title">404</h1>
      <p className="error__page__text">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__page__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default Error404
