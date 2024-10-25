import PropTypes from 'prop-types'
import './_banner.scss'

function Banner({ page, imageSrc, title }) {
  return (
    <header className={`main_banner main_banner--${page}`}>
      <img src={imageSrc} alt="paysage" />
      {title ? <h1>{title}</h1> : null}
    </header>
  )
}

Banner.propTypes = {
  page: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.object,
}

export default Banner
