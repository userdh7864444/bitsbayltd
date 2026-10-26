import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTop } from '../lib/scroll'

/** Reset scroll position on every route change (window + Lenis). */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollToTop()
  }, [pathname])
  return null
}
