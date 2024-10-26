import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/hooks.jsx'
import { Loader } from '../../components/Loader/loader.jsx'
import Slider from '../../components/Slider/slider.jsx'
import Tag from '../../components/Tag/tag.jsx'
import Rating from '../../components/Rating/rating.jsx'
import Host from '../../components/Host/host.jsx'
import './_housing.scss'

function Housing() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch('../data/logements.json')
  console.log('+++ id param +++', id)

  const housing = data?.find((item) => item.id === id)

  if (error) {
    return (
      <p>
        Désolés, nous rencontrons un problème avec le chargement des données.
      </p>
    )
  }

  return isLoading ? (
    <Loader />
  ) : housing ? (
    <main className="housing-single">
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
            rating={housing.rating}
          />
          <Host
            classname="housing-single__details__host"
            name={housing.host.name}
            picture={housing.host.picture}
          />
        </div>
      </div>
    </main>
  ) : (
    <p>Désolés, ce logement est introuvable.</p>
  )
}

export default Housing
