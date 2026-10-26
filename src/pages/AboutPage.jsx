import PageHeader from './PageHeader'
import About from '../components/About'
import AppointmentSection from '../components/AppointmentSection'
import SuccessStories from '../components/SuccessStories'
import { mission, partners } from '../data/site'

/**
 * /about-us/ on the live site: banner with the mission statement, the
 * About Company / Our Story block, the appointment section, then
 * "Meet With Our Satisfied Clients" with the five project cards.
 */
export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" blurb={mission} image="/banners/about.jpg" />

      <About showQuote={false} />

      <AppointmentSection />

      <SuccessStories
        eyebrow={partners.eyebrow}
        title={partners.title}
        body={partners.body}
        cta={null}
        showCards
      />
    </>
  )
}
