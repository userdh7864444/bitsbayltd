import { Link } from 'react-router-dom'
import Banner from '../Banner'

/**
 * Service page banner — same geometry as every other banner, with the
 * centred title, lead line and red "Request Free Consultation" button
 * the live service pages use.
 */
export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  image,
  cta = 'Request Free Consultation',
}) {
  return (
    <Banner eyebrow={eyebrow} title={title} subtitle={subtitle} image={image}>
      {cta && (
        <Link to="/contact" className="btn-primary">
          {cta}
        </Link>
      )}
    </Banner>
  )
}
