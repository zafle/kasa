import './_host.scss'
import PropTypes from 'prop-types'

function Host({ picture, name, classname }) {
  const names = name.split(' ')
  const firstName = names[0]
  const lastName = names[1]
  return (
    <div className={`host ${classname ? classname : ''}`}>
      <h3 className="host__name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </h3>
      <img src={picture} alt="portrait de l'hôte" className="host__picture" />
    </div>
  )
}

Host.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classname: PropTypes.string,
}

export default Host
