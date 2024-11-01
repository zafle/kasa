import PropTypes from 'prop-types'
import './_banner.scss'

function Banner({ imageSrc, title }) {
  return (
    <header className={`main_banner ${title ? 'main_banner--has-title' : ''}`}>
      <img src={imageSrc} alt="paysage" />
      {title ? <h1>{title}</h1> : null}
    </header>
  )
}

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default Banner
