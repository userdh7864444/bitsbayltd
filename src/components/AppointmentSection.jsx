import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import BannerImage from './BannerImage'
import { cta } from '../data/site'

/**
 * The about page's own appointment block: "Make Appointment" eyebrow,
 * "We Are Here To Find The Best Solution For Your IT Problems" headline,
 * two paragraphs and the Contact us button, over a dark photo.
 */
export default function AppointmentSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-[100px]">
      <div aria-hidden className="absolute inset-0 -z-10">
        <BannerImage src="/banners/cta.webp" webp={false} />
        <div className="absolute inset-0 bg-overlay/92" />
      </div>

      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{cta.eyebrow}</p>
          <h2 className="mt-4 text-white">{cta.title}</h2>
          <p className="mt-4 text-white/80">
            Bitsbay is always ready to discuss new ideas ranging from Mobile App Development
            to any ideas with Web design and services. Come discuss your potential app ideas
            with us.
          </p>
          <p className="mt-3 text-white/80">We would be happy to hear from you.</p>
          <Link to={cta.cta.to} className="btn-primary mt-7">
            Contact us
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
