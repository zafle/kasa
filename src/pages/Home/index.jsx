import Banner from '../../components/Banner'
import Illustration from '../../assets/images/home_illustration.jpg'
import Cards from '../../components/Cards'

function Home() {
  return (
    <>
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
    </>
  )
}
export default Home
