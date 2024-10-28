import Header from '../Header/header.jsx'
import Footer from '../Footer/footer.jsx'
import './_mainlayout.scss'

function MainLayout({ children }) {
  return (
    <div className="page-container">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
