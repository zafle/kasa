import '../../styles/components/_banner.scss'

function Banner({ page, imageSrc, title }) {
  return (
    <header className={`main_banner main_banner--${page}`}>
      <img src={imageSrc} alt="paysage" />
      {title && <h1>{title}</h1>}
    </header>
  )
}

export default Banner
