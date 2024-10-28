import Banner from '../../components/Banner/banner.jsx'
import Illustration from '../../assets/images/about_illustration.jpg'
import Collapse from '../../components/Collapse/collapse.jsx'
import { content } from './data.js'
import './_about.scss'

function About() {
  return (
    <main className="about">
      <Banner page="about" imageSrc={Illustration} />
      <div className="about__content">
        {content.map((item, index) => (
          <Collapse
            key={`about-collapse-${index}`}
            title={item.title}
            content={item.description}
          />
        ))}
      </div>
    </main>
  )
}
export default About
