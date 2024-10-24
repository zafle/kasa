import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/atoms/loader'
import Slider from '../../components/Slider'

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
    </div>
  ) : (
    <p>Désolés, ce logement est introuvable.</p>
  )
}

export default Housing
