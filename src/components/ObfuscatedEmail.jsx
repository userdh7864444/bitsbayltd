import { useState, useEffect } from 'react'

/**
 * Renders an email link protected against plaintext email scrapers and SEO crawlers.
 * In prerendered HTML / initial SSR, the href is a safe anchor and the email string is split across
 * spans, preventing regex harvesters from extracting plain emails while maintaining accessibility and
 * full interactive functionality for real users.
 */
export default function ObfuscatedEmail({ email, label = 'Send email', className = '' }) {
  const [href, setHref] = useState('#email')

  useEffect(() => {
    setHref(`mailto:${email}`)
  }, [email])

  const handleClick = (e) => {
    if (href === '#email') {
      e.preventDefault()
      window.location.href = `mailto:${email}`
    }
  }

  const parts = email.split('@')
  const user = parts[0] || 'support'
  const domain = parts[1] || 'bitsbayltd.com'

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setHref(`mailto:${email}`)}
      onFocus={() => setHref(`mailto:${email}`)}
      className={className}
      aria-label={label}
    >
      <span>{user}</span>
      <span aria-hidden="true">&#64;</span>
      <span>{domain}</span>
    </a>
  )
}
