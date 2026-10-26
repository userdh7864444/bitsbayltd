import PageHeader from './PageHeader'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

/**
 * /services/ on the live site: banner, the "What Service We Offer" grid and
 * the testimonials carousel.
 */
export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" image="/banners/services.jpg" />
      <Services />
      <Testimonials />
    </>
  )
}
