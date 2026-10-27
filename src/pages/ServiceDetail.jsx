import { useParams, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import ServiceHero from '../components/service/ServiceHero'
import IntroBlock from '../components/service/IntroBlock'
import CardsGrid from '../components/service/CardsGrid'
import ReasonsList from '../components/service/ReasonsList'
import ProcessSteps from '../components/service/ProcessSteps'
import FaqBlock from '../components/service/FaqBlock'
import ResultsBlock from '../components/service/ResultsBlock'
import { servicePages } from '../data/servicePages'
import { normalizeServicePage } from '../lib/serviceSections'
import { serviceSeo } from '../data/seoData'

const blocks = {
  intro: IntroBlock,
  cards: CardsGrid,
  reasons: ReasonsList,
  process: ProcessSteps,
  faq: FaqBlock,
  results: ResultsBlock,
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const page = normalizeServicePage(servicePages[slug], slug)

  if (!page) return <Navigate to="/services" replace />

  const seo = serviceSeo[slug] || {
    title: `${page.title} | Bitsbay`,
    description: `${page.subtitle || page.title}. High-performance custom digital engineering and software services delivered by the Bitsbay team.`,
    serviceType: page.title,
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: seo.serviceType || page.title,
    provider: {
      '@type': 'Organization',
      name: 'Bitsbay Ltd',
      url: 'https://bitsbayltd.com',
    },
    areaServed: ['US', 'UK', 'PK', 'Global'],
    serviceType: seo.serviceType || page.title,
  }

  return (
    // Keyed on the slug so moving between two service pages remounts the whole
    // subtree. Without it React reconciles section 0 of the old page onto
    // section 0 of the new one, and the recycled nodes keep the previous page's
    // scroll-reveal state — which is what left sections stuck invisible.
    <div key={page.slug}>
      <SEO
        title={seo.title}
        description={seo.description}
        path={`/services/${slug}`}
        image={page.heroImage || '/og-image.jpg'}
        schema={serviceSchema}
      />
      <ServiceHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        image={page.heroImage}
        cta={page.cta}
      />

      {page.sections.map((section) => {
        // `normalizeSection` always resolves a kind, so this lookup can't miss.
        const Block = blocks[section.kind] ?? IntroBlock
        return <Block key={section.id} section={section} />
      })}
    </div>
  )
}
