import leftArrow from '../../../assets/elements/left-arrow.png'
import rightArrow from '../../../assets/elements/right-arrow.png'
import './_sliderbtn.scss'
import PropTypes from 'prop-types'

function SliderBtn({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={`slider__btn ${
        direction === 'next' ? 'slider__btn--next' : 'slider__btn--prev'
      }`}
    >
      <img
        className="slider__btn__image"
        src={direction === 'next' ? rightArrow : leftArrow}
        alt={direction === 'next' ? 'précédent' : 'suivant'}
      />
    </button>
  )
}

SliderBtn.propTypes = {
  direction: PropTypes.string.isRequired,
  moveSlide: PropTypes.func.isRequired,
}

export default SliderBtn
