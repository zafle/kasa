import { useState, useEffect } from 'react'
import SliderBtn from './components/sliderbtn.jsx'
import './_slider.scss'
import PropTypes from 'prop-types'

function Slider({ slides }) {
  const [isSlider, setIsSlider] = useState(true)
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    if (slides.length === 1) {
      setIsSlider(false)
    }
  }, [slides.length])

  function nextSlide() {
    if (slideIndex + 1 !== slides.length) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(0)
    }
  }

  function prevSlide() {
    if (slideIndex === 0) {
      setSlideIndex(slides.length - 1)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }

  return (
    <header className="slider">
      <img
        src={slides[slideIndex]}
        alt="diapositive du logement"
        className="slider__viewer"
      />
      {isSlider ? <SliderBtn direction="prev" moveSlide={prevSlide} /> : null}
      {isSlider ? <SliderBtn direction="next" moveSlide={nextSlide} /> : null}
      {isSlider ? (
        <span className="slider__counter">
          {slideIndex + 1}/{slides.length}
        </span>
      ) : null}
    </header>
  )
}

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
}

export default Slider
