import PropTypes from 'prop-types'
import './_card.scss'

function Card({ cover, title }) {
  return (
    <article className="housing">
      <img src={cover} alt="logement" />
      <h3>{title}</h3>
    </article>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
