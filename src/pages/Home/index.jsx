import Banner from '../../components/Banner'
import Illustration from '../../assets/images/home_illustration.jpg'

function Home() {
  return (
    <Banner
      page="home"
      imageSrc={Illustration}
      title={
        <>
          Chez vous, <span>partout et ailleurs</span>
        </>
      }
    />
  )
}
export default Home
