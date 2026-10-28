import { Routes, Route, matchRoutes } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { lazy, useEffect, useReducer } from 'react'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import { setLenis } from './lib/scroll'
import Home from './pages/Home'

/**
 * Wraps a page so it is code-split into its own chunk. The chunk is fetched
 * on demand, and `preload` lets main.jsx load it before hydrating a
 * prerendered page. Once loaded, the page renders synchronously, so it
 * matches the prerendered markup and needs no Suspense boundary.
 */
function lazyPage(load) {
  let Component = null
  let pending = null

  const preload = () => {
    pending ??= load().then((module) => {
      Component = module.default
    })
    return pending
  }

  function LazyPage(props) {
    const [, rerender] = useReducer((count) => count + 1, 0)

    useEffect(() => {
      if (!Component) preload().then(rerender)
    }, [])

    return Component ? <Component {...props} /> : null
  }
  LazyPage.preload = preload

  return LazyPage
}

// The home page is the landing route, so it stays in the entry chunk. Every
// other page is split out so visitors only download the code for the page
// they open, which keeps the initial JavaScript (and main-thread work) small.
const Projects = lazyPage(() => import('./pages/Projects'))
const ProjectDetail = lazyPage(() => import('./pages/ProjectDetail'))
const AboutPage = lazyPage(() => import('./pages/AboutPage'))
const ServicesPage = lazyPage(() => import('./pages/ServicesPage'))
const ServiceDetail = lazyPage(() => import('./pages/ServiceDetail'))
const AmazonGrowth = lazyPage(() => import('./pages/AmazonGrowth'))
const StaffAugmentation = lazyPage(() => import('./pages/StaffAugmentation'))
const ListingIntegrity = lazyPage(() => import('./pages/ListingIntegrity'))
const Technologies = lazyPage(() => import('./pages/Technologies'))
const Contact = lazyPage(() => import('./pages/Contact'))
const Blog = lazyPage(() => import('./pages/Blog'))
const BlogPost = lazyPage(() => import('./pages/BlogPost'))
const PrivacyPolicy = lazyPage(() => import('./pages/PrivacyPolicy'))
const NotFound = lazyPage(() => import('./pages/NotFound'))

// Single source of truth for the routes, used both to render <Routes> and to
// find which page chunk a URL needs before it is hydrated.
const routes = [
  { path: '/', Page: Home },
  { path: '/projects', Page: Projects },
  { path: '/projects/:slug', Page: ProjectDetail },
  { path: '/about', Page: AboutPage },
  { path: '/services', Page: ServicesPage },
  { path: '/services/amazon-services', Page: AmazonGrowth },
  { path: '/services/ad-services', Page: AmazonGrowth },
  { path: '/services/staff-augmentation', Page: StaffAugmentation },
  { path: '/services/:slug', Page: ServiceDetail },
  // { path: '/products', Page: ListingIntegrity },
  { path: '/products/listing-integrity', Page: ListingIntegrity },
  { path: '/products/:slug', Page: ListingIntegrity },
  { path: '/technologies', Page: Technologies },
  { path: '/blog', Page: Blog },
  { path: '/blog/:slug', Page: BlogPost },
  { path: '/privacy-policy', Page: PrivacyPolicy },
  { path: '/contact', Page: Contact },
  { path: '*', Page: NotFound },
]

/** Loads the page chunk for a URL. Resolves once it is ready to render. */
export function preloadRoute(pathname) {
  const match = matchRoutes(routes, pathname)?.[0]
  return match?.route.Page.preload?.() ?? Promise.resolve()
}

export default function App() {
  // Smooth inertial scrolling — skipped when the user prefers reduced motion.
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouchOrMobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window) || navigator.maxTouchPoints > 0
    if (prefersReduced || isTouchOrMobile) return

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    setLenis(lenis)
    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      setLenis(null)
      lenis.destroy()
    }
  }, [])

  return (
    // `reducedMotion="user"` makes every motion component here honour the
    // visitor's prefers-reduced-motion setting.
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <Routes>
            {routes.map(({ path, Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </MotionConfig>
  )
}
