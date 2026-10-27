import SEO from '../components/SEO'
import PageHeader from './PageHeader'
import About from '../components/About'
import AppointmentSection from '../components/AppointmentSection'
import SuccessStories from '../components/SuccessStories'
import { mission, partners } from '../data/site'

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Bitsbay Ltd',
  url: 'https://bitsbayltd.com/about',
  description:
    'Bitsbay Ltd is a premier software engineering company building custom web applications, mobile apps, SaaS platforms, and digital solutions.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Bitsbay Ltd',
    foundingDate: '2019',
    url: 'https://bitsbayltd.com',
  },
}

/**
 * /about-us/ on the live site: banner with the mission statement, the
 * About Company / Our Story block, the appointment section, then
 * "Meet With Our Satisfied Clients" with the five project cards.
 */
export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Bitsbay | Agile Software Engineering & Tech Agency"
        description="Learn about Bitsbay Ltd, our mission, seasoned engineering team, and commitment to delivering state-of-the-art web apps, mobile solutions, and SaaS platforms."
        path="/about"
        schema={aboutSchema}
      />
      <PageHeader title="About Us" blurb={mission} image="/banners/about.webp" />

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
