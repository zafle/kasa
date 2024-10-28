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
      collapse_section.current.style.maxHeight = null
      collapse_section.current.style.height = null
      resizeCollapse()
    }
  }

  function getMaxHeight() {
    const allCollapsesComponents =
      document.querySelectorAll('.collapse__content')
    const allCollapsesHeight = []
    allCollapsesComponents.forEach((element) => {
      allCollapsesHeight.push(element.scrollHeight)
    })
    return Math.max(...allCollapsesHeight)
  }

  function resizeCollapse() {
    const isMaxHeight = window.innerWidth > 767 && hasTwin ? true : false

    const collapseHeight = isMaxHeight
      ? getMaxHeight() + 'px'
      : collapse_section.current.scrollHeight + 'px'
    collapse_section.current.style.maxHeight = collapseHeight
    collapse_section.current.style.height = collapseHeight
  }

  function toggleCollapse() {
    if (isOpen) {
      collapse_section.current.style.maxHeight = null
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
