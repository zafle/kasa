import * as React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/router.jsx'
import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
