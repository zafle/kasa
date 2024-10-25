import Banner from '../../components/Banner/banner.jsx'
import Illustration from '../../assets/images/home_illustration.jpg'
import Cards from '../../components/Cards/cards.jsx'

function Home() {
  return (
    <main>
      <Banner
        page="home"
        imageSrc={Illustration}
        title={
          <>
            Chez vous, <span>partout et ailleurs</span>
          </>
        }
      />
      <Cards />
    </main>
  )
}
export default Home
