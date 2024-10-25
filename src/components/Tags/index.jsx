import Tag from '../../utils/atoms/tag'
import PropTypes from 'prop-types'

function Tags({ tags }) {
    return (
        <ul className="housing-single__tags">
          {tags.map((tag, index) => (
            <li key={`tag-${index}`}>
              <Tag tag={tag} />
            </li>
          ))}
        </ul>
    )
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired
}

export default Tags
