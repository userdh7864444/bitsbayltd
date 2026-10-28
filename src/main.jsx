import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

// The home page is prerendered to static HTML at build time. Hydrate that
// markup so the finished page stays on screen while the JavaScript loads,
// rather than React clearing it and re-rendering. Other routes are lazy-loaded
// and render on mount, since their lazy pages cannot hydrate prerendered markup.
// The dev server has no prerendered markup, so it also renders on mount.
if (rootElement.hasChildNodes() && window.location.pathname === "/") {
  ReactDOM.hydrateRoot(rootElement, app)
} else {
  ReactDOM.createRoot(rootElement).render(app)
}

setTimeout(() => {
  document.dispatchEvent(new Event('app-rendered'))
}, 1500)
