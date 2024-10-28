import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout/mainlayout.jsx'
import Home from '../pages/Home/home.jsx'
import About from '../pages/About/about.jsx'
import Housing from '../pages/Housing/housing.jsx'
import Error404 from '../pages/Error404/error404.jsx'
import '../assets/styles/base/_base.scss'

function Router() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Router
