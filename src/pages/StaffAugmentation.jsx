import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { getIcon } from '../lib/icons'
import ServiceHero from '../components/service/ServiceHero'
import Reveal, { Stagger, childVariants } from '../components/Reveal'
import ResultsBlock from '../components/service/ResultsBlock'
import FaqBlock from '../components/service/FaqBlock'
import { serviceSeo } from '../data/seoData'

const models = [
  {
    icon: 'MapPin',
    title: 'Onshoring',
    body: 'Our onshoring services connect you with skilled local professionals, ensuring real-time collaboration in aligned time zones. This model fosters teamwork, quick iteration, and seamless involvement with your team.',
  },
  {
    icon: 'Globe2',
    title: 'Offshoring',
    body: "Our offshoring solutions give you access to global experts, delivering cost efficiency and quality. With round-the-clock productivity across time zones, it's ideal for long-term and budget-conscious projects.",
  },
  {
    icon: 'Navigation',
    title: 'Nearshoring',
    body: 'Our nearshoring services connect you with skilled professionals in nearby regions for cost-effective solutions, smooth communication, and frequent collaboration — ideal for a regional approach with budget flexibility.',
  },
]

const solutions = [
  { title: 'BPM & Optimization', body: 'Enhance operational efficiency with dedicated experts in Business Process Management and optimization, streamlining complex workflows and maximizing overall business productivity.' },
  { title: 'Digital Transformation', body: 'Leverage expert digital transformation specialists to modernize infrastructure, streamline operations, enhance customer experiences, and significantly improve overall business agility.' },
  { title: 'Mobile & Web Development', body: 'Augment your team with developers skilled in creating responsive, high-performance mobile and web applications tailored to business goals.' },
  { title: 'Data-Driven Solutions', body: "Unlock data's full potential with analysts and engineers who transform raw data into actionable insights to drive decision-making." },
  { title: 'Cloud', body: 'Access cloud architects and engineers who design, implement, and scale secure, flexible cloud solutions across public, private, and hybrid environments.' },
  { title: 'Cyber Security', body: 'Safeguard your digital assets with cybersecurity professionals skilled in threat detection, risk management, and compliance solutions.' },
  { title: 'Metaverse', body: 'Expand into virtual worlds with metaverse experts skilled in immersive technology, virtual assets, and next-gen user experiences.' },
  { title: 'DevOps', body: 'Enhance development pipelines and deployment speed with DevOps specialists who optimize CI/CD processes and foster collaboration.' },
  { title: 'DevSecOps', body: 'Integrate security seamlessly into development with DevSecOps professionals focused on secure coding practices and vulnerability management.' },
  { title: 'Data & AI', body: 'Tap into AI-driven innovation with expert data scientists and engineers bringing deep expertise in machine learning, advanced analytics, and predictive modeling.' },
  { title: 'Business Applications', body: 'Build, optimize, and maintain business applications with highly skilled professionals experienced in ERP, CRM, and other critical business software.' },
  { title: 'Gaming', body: 'Skilled in developing immersive, high-performance 2D, 3D, AR, and VR games — our professionals bring advanced knowledge of game engines, interactive storytelling, and graphic optimization.' },
]

export default function StaffAugmentation() {
  const seo = serviceSeo['staff-augmentation']
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: seo.serviceType,
    provider: {
      '@type': 'Organization',
      name: 'Bitsbay Ltd',
      url: 'https://bitsbayltd.com',
    },
    areaServed: ['US', 'UK', 'PK', 'Global'],
    serviceType: seo.serviceType,
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path="/services/staff-augmentation"
        image="/hero/staff-augmentation.jpg"
        schema={schema}
      />
      <ServiceHero
        title="Staff Augmentation"
        subtitle="Enhance Your Team's Expertise with Trusted Professionals"
        image="/hero/staff-augmentation.jpg"
        cta="Hire Top IT Talent"
      />

      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2>Our Staff Augmentation Models</h2>
            <p className="mt-4 leading-relaxed">
              We treat our clients like a part of the Bitsbay family and ensure their experience with us is
              hassle-free and transparent.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
            {models.map((m) => {
              const Icon = getIcon(m.icon)
              return (
                <motion.div
                  key={m.title}
                  variants={childVariants}
                  className="group border border-line bg-white p-8 transition-colors duration-300 r-diag hover:bg-brand"
                >
                  <span className="text-brand transition-colors group-hover:text-white">
                    <Icon className="h-[46px] w-[46px]" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 text-black transition-colors group-hover:text-white">
                    {m.title}
                  </h3>
                  <p className="mt-3 transition-colors group-hover:text-white">{m.body}</p>
                </motion.div>
              )
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-[#0000001c] py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2>Our Dynamic Staffing Solutions</h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <motion.div
                key={s.title}
                variants={childVariants}
                className="group border border-line bg-white p-7 transition-colors duration-300 r-diag hover:bg-brand"
              >
                <h3 className="text-black transition-colors group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 transition-colors group-hover:text-white">{s.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x">
          <Reveal>
            <figure className="overflow-hidden border border-line bg-muted r-diag">
              <img
                src="/staff/img-1.png"
                alt="Bitsbay staff augmentation"
                width={1600}
                height={711}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="w-full h-auto aspect-[1600/711] object-cover"
              />
            </figure>
          </Reveal>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.08}>
              <figure className="overflow-hidden border border-line bg-muted r-diag">
                <img
                  src="/staff/overview.avif"
                  alt="Bitsbay dedicated engineering team overview"
                  width={1080}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="w-full h-auto aspect-square object-cover"
                />
              </figure>
            </Reveal>

            <Reveal delay={0.12}>
              <h2>Overview</h2>
              <p className="mt-4 leading-relaxed">
                As a trusted global partner in Information Technology and software
                development, Bitsbay provides horizontal staff augmentation services that
                enable businesses to expand capabilities and easily adapt to changing
                demands.
              </p>
              <p className="mt-4 leading-relaxed">
                Our services offer immediate access to specialized, pre-vetted talent across
                key technical domains without the complexities of traditional hiring. Whether
                scaling up for peak demand or adding niche expertise, Bitsbay&rsquo;s agile
                staffing approach ensures your business gains the talent you need, when you
                need it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="mt-14">
            <figure className="overflow-hidden border border-line bg-muted r-diag">
              <img
                src="/staff/img-2.png"
                alt="Bitsbay remote developers collaborating on software sprint"
                width={1600}
                height={711}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="w-full h-auto aspect-[1600/711] object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <ResultsBlock
        section={{
          heading: 'Proven Staff Augmentation Impact',
          subheading: 'Accelerate development velocity with on-demand engineering squads.',
          entries: [
            {
              stat: '72 hrs',
              label: 'Average time to match',
              detail: 'Pre-vetted senior software engineers, QA leads, and cloud architects ready for rapid onboarding.',
            },
            {
              stat: '95%+',
              label: 'Retention on engagements',
              detail: 'Dedicated developer allocation with minimal churn across multi-month and multi-year projects.',
            },
            {
              stat: '60%',
              label: 'Cost savings vs US onshore hiring',
              detail: 'Eliminate recruiting fees, payroll overhead, and equipment costs while keeping full timezone overlap.',
            },
          ],
          links: [
            { label: 'Explore Web Applications', to: '/services/web-applications' },
            { label: 'Explore App Development', to: '/services/app-development' },
            { label: 'View our tech stack', to: '/technologies' },
          ],
        }}
      />

      <FaqBlock
        section={{
          heading: 'Staff Augmentation FAQs',
          entries: [
            {
              title: 'How does staff augmentation work at Bitsbay?',
              body: 'We match you with pre-vetted senior developers who join your existing workflows, communicate directly via your Slack/Teams, and commit code directly to your repositories.',
            },
            {
              title: 'How quickly can augmented developers start?',
              body: 'Typically within 48 to 72 hours for standard tech stacks (React, Node, Python, Kotlin, Swift, Flutter, AWS).',
            },
            {
              title: 'Can we interview developers before hiring?',
              body: 'Yes. You interview candidates, review their past GitHub code, and evaluate their fit before making any commitment.',
            },
            {
              title: 'What happens if a developer is not a good fit?',
              body: 'We offer a no-questions-asked replacement guarantee within the first two weeks of engagement.',
            },
            {
              title: 'What time zones do your developers work in?',
              body: 'Our developers accommodate flexible shifts to provide 4–6 hours of direct working overlap with US Eastern, Pacific, and European working hours.',
            },
          ],
        }}
      />
    </>
  )
}
