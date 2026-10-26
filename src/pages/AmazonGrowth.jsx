import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServiceHero from '../components/service/ServiceHero'
import Reveal, { Stagger, childVariants } from '../components/Reveal'

/**
 * /ad-services/ and /amazon-services/ share a layout on the live site: hero →
 * intro + "GET A FREE ANALYSIS" → (ad-services only) Reasons to choose us and
 * the 4-Phase Method block → the proprietary-method section → the 3-step plan.
 */
const content = {
  'amazon-services': {
    title: 'Amazon Services',
    subtitle: 'Sell more with our Full-Service Managment for Amazon Program',
    heroImage: '/hero/amazon-services.jpg',
    intro: [
      'Our done-for-you management approach ensures your account on Amazon is not only running smoothly but your sales are also growing, too. Our team handles everything from paid advertising to organic marketing campaigns to operations management (including brand protection).',
    ],
    reasons: null,
    method: null,
  },
  'ad-services': {
    title: 'Ad Services',
    subtitle: 'Increase sales with data-driven advertising managment for Amazon',
    heroImage: '/hero/ad-services.jpg',
    intro: [
      'How many potential customers are you losing because your customers can’t find you when they’re ready to buy? How many weeks do you miss your sales goals? How much more effective could your ads be with the right data analysis and optimizations.',
    ],
    pitch: {
      heading: 'Without the right advertising strategy, you are losing sales',
      paragraphs: [
        'Our team of seller consultants for Amazon will build and implement an advertising strategy with maximum impact.',
        'Click below to set up a free ads analysis.',
      ],
    },
    reasons: {
      heading: 'Reasons to choose us',
      body: 'Our processes are streamlined to develop flaw-less progressive web applications. We achieve this by carrying out a series of multiple online and offline testing procedures, hereby ensuring that the final release surpasses client expectations. Here’s why we are different than others in the market:',
    },
    method: {
      eyebrow: 'The Bitsbay 4-Phase Method for Advertising on Amazon',
      heading: 'Maximize Sales and Profitability',
      paragraphs: [
        'When it comes to advertising on Amazon, you want to distinguish yourself from your competitors, increase traffic to your listings, and convert more visitors to buyers.',
        'If you don’t know how to master advertising on Amazon, it can be difficult and frustrating. We believe your brand deserves to succeed on Amazon.',
        'Whether you’re a start-up or an 8-figure seller, on Vendor Central or Seller Central Management on Amazon, we know how to build and implement the right advertising strategy for you. Our team adjusts your ad campaigns daily so that you meet your revenue and ranking targets.',
      ],
      image: '/amazon/target-sheet.jpg',
    },
  },
}

const plan = [
  'Claim your free analysis now',
  'Kick-off your customized plan',
  'Maximize your brand’s Amazon',
]

export default function AmazonGrowth() {
  const { pathname } = useLocation()
  const slug = pathname.split('/').filter(Boolean).pop()
  const page = content[slug] ?? content['amazon-services']

  return (
    <>
      <ServiceHero
        title={page.title}
        subtitle={page.subtitle}
        image={page.heroImage}
        cta="Request Free Consultation"
      />

      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            {page.intro.map((t) => (
              <p key={t} className="leading-relaxed">
                {t}
              </p>
            ))}
          </Reveal>

          {page.pitch && (
            <Reveal delay={0.08}>
              <h5 className="eyebrow mt-8">{page.pitch.heading}</h5>
              {page.pitch.paragraphs.map((t) => (
                <p key={t} className="mt-3 leading-relaxed">
                  {t}
                </p>
              ))}
            </Reveal>
          )}

          <Reveal delay={0.12}>
            <Link to="/contact" className="btn-primary mt-8">
              GET A FREE ANALYSIS
            </Link>
          </Reveal>
        </div>
      </section>

      {page.reasons && (
        <section className="bg-[#0000001c] py-16 sm:py-20 lg:py-[100px]">
          <div className="container-x max-w-3xl text-center">
            <Reveal>
              <h2>{page.reasons.heading}</h2>
              <p className="mt-4 leading-relaxed">{page.reasons.body}</p>
            </Reveal>
          </div>
        </section>
      )}

      {page.method && (
        <section className="py-16 sm:py-20 lg:py-[100px]">
          <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2>{page.method.eyebrow}</h2>
              <h3 className="mt-5 text-brand">{page.method.heading}</h3>
              {page.method.paragraphs.map((t) => (
                <p key={t} className="mt-3 leading-relaxed">
                  {t}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.12}>
              <figure className="overflow-hidden border border-line bg-muted r-diag">
                <img
                  src={page.method.image}
                  alt=""
                  loading="lazy"
                  className="w-full object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-[#0000001c] py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <h2>Grow Your Sales on Amazon With Our Proprietary Management Method</h2>
            <p className="mt-4 leading-relaxed">
              It can feel impossible to increase sales on Amazon while also running and
              developing your business. That’s where we come in. We optimize your content,
              systems, and advertising. Your sales will grow and you can get back to
              developing your business.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-12">Start Growing Your Brand On Amazon Today</h2>
            <p className="mt-4">
              Stop feeling left behind and start increasing your sales with this simple plan ⸺
            </p>
          </Reveal>

          <Stagger className="mx-auto mt-9 grid max-w-xl gap-4 text-left">
            {plan.map((step, i) => (
              <motion.div
                key={step}
                variants={childVariants}
                className="flex items-center gap-4 border border-line bg-white px-5 py-4 r-diag-sm"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h4 className="text-ink">{step}</h4>
              </motion.div>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <Link to="/contact" className="btn-primary mt-9">
              Request Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
