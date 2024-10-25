import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/atoms/loader'
import Slider from '../../components/Slider'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'

function Housing() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch('data/logements.json')

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
    <div className="housing-single">
      <Slider slides={housing.pictures} />
      <h1 className="housing-single__title">{housing.title}</h1>
      <h2 className="housing-single__subtitle">{housing.location}</h2>
      <Tags tags={housing.tags} />
      <Rating rating={housing.rating} />
    </div>
  ) : (
    <p>Désolés, ce logement est introuvable.</p>
  )
}

export default Housing
