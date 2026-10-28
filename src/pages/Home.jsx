import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Pillars from '../components/Pillars'
import About from '../components/About'
import Services from '../components/Services'
import SuccessStories from '../components/SuccessStories'
import Legacy from '../components/Legacy'
import Testimonials from '../components/Testimonials'
import Industries from '../components/Industries'

export default function Home() {
  return (
    <>
      <SEO
        title="Bitsbay | Custom Web & Mobile App Development Company"
        description="Bitsbay delivers custom web applications, mobile apps, SaaS platforms, and Amazon growth systems engineered for high performance, scale, and digital impact."
        path="/"
      />
      <Hero />
      <Pillars />
      <About />
      <Services />
      <SuccessStories />
      <Legacy />
      <Testimonials />
      <Industries />
    </>
  )
}
