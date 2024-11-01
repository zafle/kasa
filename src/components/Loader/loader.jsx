import './_loader.scss'

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__content">
        {[...Array(12)].map((index) => (
          <div key={`loader-${index}`}></div>
        ))}
      </div>
    </div>
  )
}
