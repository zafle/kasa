import { ReactComponent as Star } from '../../assets/elements/star.svg'
import './_rating.scss'
import PropTypes from 'prop-types'

function Rating({ rating, classname }) {
  console.log('+++++ rating = +++++', rating)
  const stars = []
  for (let i = 0; i < 5; i++) {
    const starClass = i + 1 <= rating ? 'rating__star--on' : 'rating__star--off'
    stars.push(<Star className={`rating__star ${starClass}`} />)
  }
  return (
    <ul className={`rating ${classname ? classname : ''}`}>
      {stars.map((star, index) => (
        <li key={`star-${index}`}>{star}</li>
      ))}
    </ul>
  )
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  classname: PropTypes.string,
}

export default Rating
