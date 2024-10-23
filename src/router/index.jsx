import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Error404 from '../pages/Error404'
import '../styles/base/_base.scss'

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
