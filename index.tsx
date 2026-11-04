
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import SiteRoutes from './SiteRoutes'

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <SiteRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
if (root.hasAttribute('data-prerendered')) {
  ReactDOM.hydrateRoot(root, app)
} else {
  ReactDOM.createRoot(root).render(app)
}
