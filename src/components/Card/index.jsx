import '../../styles/components/_card.scss'

function Card({ cover, title }) {
  return (
    <article className="housing">
      <img src={cover} alt="logement" />
      <h2>{title}</h2>
    </article>
  )
}

export default Card
