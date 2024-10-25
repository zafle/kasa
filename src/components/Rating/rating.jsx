import star from '../../assets/elements/star.svg'

function Rating({ rating }) {
  console.log('+++++ rating = +++++', rating)
  const stars = []
  for (let i = 0; i < 5; i++) {
    const starClass = i + 1 <= rating ? 'star--on' : 'star--off'
    stars.push(<img src={star} alt="star" className={starClass} />)
  }
  return (
    <ul>
      {stars.map((star, index) => (
        <li key={`star-${index}`}>{star}</li>
      ))}
    </ul>
  )
}

export default Rating
