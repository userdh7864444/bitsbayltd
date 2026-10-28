/**
 * Full-bleed background photo for a hero or banner. A real <img> instead of a
 * CSS background, so the browser can start fetching it from the HTML before
 * any JavaScript runs. Priority images (the LCP hero) load eagerly with a high
 * fetch priority; everything else is lazy.
 */
export default function BannerImage({ src, priority = false, webp = true }) {
  const webpSrc = webp ? src.replace(/\.(jpe?g|png)$/i, '.webp') : null

  return (
    <picture className="absolute inset-0 block h-full w-full">
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt=""
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'low'}
        className="h-full w-full object-cover object-center"
      />
    </picture>
  )
}
