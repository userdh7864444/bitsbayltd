// Lenis drives the page scroll, so `window.scrollTo` alone is not enough — on
// the next frame Lenis re-applies its own cached offset and the new route opens
// part-way down the page (making the banner and first sections look missing).
// App registers its instance here so ScrollToTop can reset both together.
let lenis = null

export const setLenis = (instance) => {
  lenis = instance
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  lenis?.scrollTo(0, { immediate: true, force: true })
}
