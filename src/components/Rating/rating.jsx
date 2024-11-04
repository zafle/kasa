import { ReactComponent as Star } from '../../assets/elements/star.svg'
import './_rating.scss'
import PropTypes from 'prop-types'

function Rating({ rating, classname }) {
  return (
    <div className={`rating ${classname ? classname : ''}`}>
      {[...Array(5)].map((element, index) => {
        const starClass =
          index + 1 <= rating ? 'rating__star--on' : 'rating__star--off'
        return (
          <Star key={`star-${index}`} className={`rating__star ${starClass}`} />
        )
      })}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  classname: PropTypes.string,
}

export default Rating
