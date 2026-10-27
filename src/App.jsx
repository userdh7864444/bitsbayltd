import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { useEffect } from 'react'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import { setLenis } from './lib/scroll'

import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import AmazonGrowth from './pages/AmazonGrowth'
import StaffAugmentation from './pages/StaffAugmentation'
import ListingIntegrity from './pages/ListingIntegrity'
import Technologies from './pages/Technologies'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

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
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/amazon-services" element={<AmazonGrowth />} />
            <Route path="/services/ad-services" element={<AmazonGrowth />} />
            <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            {/* <Route path="/products" element={<ListingIntegrity />} /> */}
            <Route path="/products/listing-integrity" element={<ListingIntegrity />} />
            <Route path="/products/:slug" element={<ListingIntegrity />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </MotionConfig>
  )
}
