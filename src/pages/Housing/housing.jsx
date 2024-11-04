import { useParams, Navigate } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/hooks.jsx'
import Loader from '../../components/Loader/loader.jsx'
import Slider from '../../components/Slider/slider.jsx'
import Tag from '../../components/Tag/tag.jsx'
import Rating from '../../components/Rating/rating.jsx'
import Host from '../../components/Host/host.jsx'
import Collapse from '../../components/Collapse/collapse.jsx'
import './_housing.scss'

function Housing() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch('../data/logements.json')

  const housing = data?.find((item) => item.id === id)

  if (error) {
    return (
      <p>
        Désolés, nous rencontrons un problème avec le chargement des données.
      </p>
    )
  }

  if (!isLoading && !housing) {
    return <Navigate to="/error404" replace={true} />
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div className="housing-single">
      <Slider slides={housing.pictures} />
      <div className="housing-single__details">
        <div className="housing-single__details--one">
          <h1 className="housing-single__details__title">{housing.title}</h1>
          <h2 className="housing-single__details__subtitle">
            {housing.location}
          </h2>
          <ul className="housing-single__details__tags">
            {housing.tags.map((tag, index) => (
              <li key={`tag-${index}`}>
                <Tag tag={tag} />
              </li>
            ))}
          </ul>
        </div>
        <div className="housing-single__details--two">
          <Rating
            classname="housing-single__details__rating"
            rating={parseInt(housing.rating)}
          />
          <Host
            classname="housing-single__details__host"
            name={housing.host.name}
            picture={housing.host.picture}
          />
        </div>
      </div>
      <div className="housing-single__info">
        <Collapse
          title="Description"
          content={housing.description}
          hasTwin={true}
        />
        <Collapse
          title="Équipements"
          content={housing.equipments}
          hasTwin={true}
        />
      </div>
    </div>
  )
}

export default Housing
