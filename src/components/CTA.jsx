import { Link } from 'react-router-dom'
import Reveal from './Reveal'

/**
 * The red "Make Appointment" panel. It is the first child of the footer and
 * is pulled up so roughly half of it sits above the footer's black background
 * and half overlaps it — the same treatment as the live site (top: -100px).
 */
export default function CTA() {
  return (
    <div className="container-x relative z-10 mt-24 sm:mt-28 lg:mt-32">
      <Reveal>
        <div className="grid items-center gap-6 bg-brand px-6 py-8 text-white r-diag-lg sm:px-10 sm:py-10 lg:grid-cols-[70fr_30fr] lg:px-[50px]">
          <div>
            <h2 className="text-white">Make Appointment</h2>
            <p className="mt-3 text-white/90">
              Bitsbay is always ready to discuss new ideas ranging from Mobile App
              Development to any ideas with Web design and services. Come discuss your
              potential app ideas with us over a cup of coffee!
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link to="/contact" className="btn-white">
              Contact Us
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
