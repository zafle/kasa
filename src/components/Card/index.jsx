import PropTypes from 'prop-types'
import '../../styles/components/_card.scss'

function Card({ cover, title }) {
  return (
    <article className="housing">
      <img src={cover} alt="logement" />
      <h2>{title}</h2>
    </article>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
