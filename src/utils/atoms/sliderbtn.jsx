import leftArrow from '../../assets/elements/left-arrow.png'
import rightArrow from '../../assets/elements/right-arrow.png'
import '../../styles/atoms/_sliderbtn.scss'

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

export default SliderBtn
