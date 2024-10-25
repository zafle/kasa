import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../layout/Header/header.jsx'
import Footer from '../layout/Footer/footer.jsx'
import Home from '../pages/Home/home.jsx'
import About from '../pages/About/about.jsx'
import Housing from '../pages/Housing/housing.jsx'
import Error404 from '../pages/Error404/error404.jsx'
import '../assets/styles/base/_base.scss'

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
