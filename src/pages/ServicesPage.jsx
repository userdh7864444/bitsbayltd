import SEO from '../components/SEO'
import PageHeader from './PageHeader'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Software Engineering & IT Services',
  provider: {
    '@type': 'Organization',
    name: 'Bitsbay Ltd',
    url: 'https://bitsbayltd.com',
  },
  serviceType: 'Full-Cycle Software Development',
  areaServed: ['US', 'UK', 'PK', 'Global'],
}

/**
 * /services/ on the live site: banner, the "What Service We Offer" grid and
 * the testimonials carousel.
 */
export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Software Development & IT Services | Bitsbay"
        description="Explore end-to-end IT services by Bitsbay: mobile app development, custom web applications, SaaS engineering, IoT solutions, and Amazon growth management."
        path="/services"
        schema={servicesSchema}
      />
      <PageHeader title="Services" image="/banners/services.jpg" />
      <Services />
      <Testimonials />
    </>
  )
}
