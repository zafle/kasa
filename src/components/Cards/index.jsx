import { useFetch } from '../../utils/hooks'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { Loader } from '../../utils/atoms/loader'
import '../../styles/components/_cards.scss'

function Cards() {
  const { data, isLoading, error } = useFetch('data/logements.json')
  const housings = data ? data : null

  if (error) {
    return (
      <span>
        Désolés, nous rencontrons un problème avec le chargement des données.
      </span>
    )
  }

  return isLoading ? (
    <Loader />
  ) : (
    <section className="housings">
      {housings?.map((housing) => (
        <Link key={`housing-${housing.id}`} to={`/${housing.id}`}>
          <Card cover={housing.cover} title={housing.title} />
        </Link>
      ))}
    </section>
  )
}

export default Cards
