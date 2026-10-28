import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App, { preloadRoute } from './App'
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

// Production pages are prerendered to static HTML at build time. Hydrate that
// markup so the finished page stays on screen while the JavaScript loads,
// rather than React clearing it and rendering again. Hydration has to match
// the first client render, so the page's own chunk is loaded first. The dev
// server has no prerendered markup, so it takes the client-render path.
if (rootElement.hasChildNodes()) {
  preloadRoute(window.location.pathname).then(
    () => ReactDOM.hydrateRoot(rootElement, app),
    () => ReactDOM.createRoot(rootElement).render(app)
  )
} else {
  ReactDOM.createRoot(rootElement).render(app)
}

setTimeout(() => {
  document.dispatchEvent(new Event('app-rendered'))
}, 1500)
