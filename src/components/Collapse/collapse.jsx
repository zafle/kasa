import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import Arrow from '../../assets/elements/collapse-arrow.png'
import './_collapse.scss'

function Collapse({ title, content, hasTwin }) {
  const collapse_section = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function handleResize() {
    if (isOpen) {
      // reset CSS maxHeight and height to be able to get scrollHeight in the resizeCollapse function
      collapse_section.current.style.maxHeight = null
      collapse_section.current.style.height = null
      resizeCollapse()
    }
  }

  function getMaxHeight() {
    // get all collapse components on the page
    const allCollapsesComponents =
      document.querySelectorAll('.collapse__content')

    const allCollapsesHeight = []

    allCollapsesComponents.forEach((element) => {
      // save current maxHeight and height of the element
      const elementMaxHeight = element.style.maxHeight
      const elementHeight = element.style.height

      // reset CSS maxHeight and height to be able to get scrollHeight
      element.style.maxHeight = null
      element.style.height = null

      // push scrollHeight value in an arrray
      allCollapsesHeight.push(element.scrollHeight)

      // cancel reset
      element.style.maxHeight = elementMaxHeight
      element.style.height = elementHeight
    })

    // return the max scrollHeight value
    return Math.max(...allCollapsesHeight)
  }

  function resizeCollapse() {
    // when several collapse components are in a row, we want them to have same height when opened

    // check if this collapse has a twin collapse (hasTwin === true)
    // and if they are configured to appear in row when window.innerWidth > 767
    // to know if this collapse height should be its own or the highest from all twins
    const isMaxHeight = window.innerWidth > 767 && hasTwin

    const collapseHeight = isMaxHeight
      ? getMaxHeight() + 'px'
      : collapse_section.current.scrollHeight + 'px'
    collapse_section.current.style.maxHeight = collapseHeight
    collapse_section.current.style.height = collapseHeight
  }

  function toggleCollapse() {
    if (isOpen) {
      collapse_section.current.style.maxHeight = null
      collapse_section.current.style.height = null
    } else {
      resizeCollapse()
    }
    setIsOpen(!isOpen)
  }

  let collapseContent

  if (typeof content === 'string') {
    collapseContent = <p className="collapse__content__text">{content}</p>
  } else if (typeof content === 'object') {
    collapseContent = (
      <ul className="collapse__content__text">
        {content.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className="collapse">
      <div className="collapse__header">
        <span className="collapse__header__title">{title}</span>
        <button onClick={() => toggleCollapse()}>
          <img
            className={`collapse__header__button collapse__header__button--${isOpen}`}
            src={Arrow}
            alt="flèche"
          />
        </button>
      </div>
      <div className="collapse__content" ref={collapse_section}>
        {collapseContent}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  hasTwin: PropTypes.bool,
}

export default Collapse
