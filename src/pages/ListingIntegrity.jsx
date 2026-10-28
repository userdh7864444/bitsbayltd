import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import SEO from '../components/SEO'
import Banner from '../components/Banner'
import { serviceSeo } from '../data/seoData'
import {
  ArrowRight,
  ShieldCheck,
  Bell,
  RefreshCw,
  Radar,
  Link2,
  Database,
  Zap,
  Eye,
  Check,
  X,
} from 'lucide-react'
import Reveal, { Stagger, childVariants } from '../components/Reveal'

const features = [
  'Hidden keyword injection detection',
  'Real-time listing change monitoring',
  'AI compliance analysis & risk scoring',
  'Instant multi-channel alerts (Email, Slack, WhatsApp)',
  'Auto-revert unauthorized changes',
  'Restricted & blacklisted keyword scanning',
  'Listing Health Index dashboard',
  'Multi-marketplace monitoring (20+ regions)',
  'ASIN-level issue reports & patch readiness',
  'Competitor sabotage & buy-box protection',
]

const setupSteps = [
  {
    icon: 'Link2',
    title: 'Connect Account',
    body: 'Securely link your Amazon Seller account via SP-API OAuth 2.0 in under 2 minutes.',
  },
  {
    icon: 'Database',
    title: 'Sync Catalog',
    body: 'Automatic import of all ASINs and marketplace data with historical and real-time sync.',
  },
  {
    icon: 'Zap',
    title: 'AI Analysis',
    body: 'AI scans backend keywords, attributes, bullets, and categories against Amazon policy rules 24/7.',
  },
  {
    icon: 'Bell',
    title: 'Get Alerts',
    body: 'Receive instant notifications via dashboard, email, Slack, or WhatsApp on every suspicious change.',
  },
  {
    icon: 'RefreshCw',
    title: 'Auto-Protect',
    body: 'Automatic rollback of unauthorized changes with full audit trail and one-click restore.',
  },
]

const without = [
  {
    title: 'Hidden Keyword Injections',
    body: 'Competitors inject prohibited words (e.g. pesticide claims, trademarks) into your backend search terms, triggering instant automated suspensions.',
  },
  {
    title: 'Competitor Sabotage',
    body: 'Unauthorized variations, browse node modifications, and attribute overrides hijack your Buy Box and BSR rankings.',
  },
  {
    title: 'Silent Listing Suppressions',
    body: 'Amazon silently suppresses listings due to algorithm updates without sending notifications, causing overnight sales drops.',
  },
  {
    title: 'PPC Budget Waste',
    body: 'Driving traffic via sponsored ads to suppressed or hijacked listings burns advertising spend on inactive pages.',
  },
  {
    title: 'Account Health Suspension',
    body: 'Unresolved listing violations pile up and damage overall seller health, risking permanent storefront closures.',
  },
  {
    title: 'Manual Audit Inefficiencies',
    body: 'Manually checking hundreds of backend attributes across multiple marketplaces takes hours and catches violations too late.',
  },
]

const withIt = [
  {
    title: 'Hidden Keyword Detection',
    body: 'Detect prohibited, restricted, or injected keywords in backend search terms before Amazon flags your listing.',
  },
  {
    title: 'Real-Time Change Monitoring',
    body: 'Track backend metadata, bullet points, titles, descriptions, and categories instantly for any modification.',
  },
  {
    title: 'AI Compliance Analysis',
    body: 'Our AI evaluates listings against current Amazon policies to identify restricted claims and generate risk scores.',
  },
  {
    title: 'Instant Multi-Channel Alerts',
    body: 'Get notified immediately via dashboard, email, Slack, or WhatsApp when a suspicious listing change occurs.',
  },
  {
    title: 'Auto-Revert Protection',
    body: 'Automatically restore listing configurations back to authorized blueprints with one-click or zero-touch rollback.',
  },
  {
    title: 'Multi-Marketplace Coverage',
    body: 'Monitor US, CA, MX, UK, DE, FR, IT, ES, UAE, JP, and all international Amazon marketplaces seamlessly.',
  },
]

const plans = [
  {
    name: 'Starter',
    tagline: 'Listing integrity package.',
    price: '$79',
    period: '/month',
    note: 'Billed yearly',
    features: [
      '1 user seat',
      '100 ASINs',
      'Real-time monitoring',
      'Email alerts',
      'Dashboard access',
      'Basic analytics',
      '1 marketplace',
    ],
  },
  {
    name: 'Growth',
    tagline: 'Listing integrity package.',
    price: '$239',
    period: '/month',
    note: 'Billed yearly',
    featured: true,
    features: [
      'Team access (3 users)',
      '1,000 ASINs',
      'AI compliance engine',
      'Email alerts',
      'Advanced analytics',
      'Priority monitoring',
      '5 marketplaces',
      'Change history',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Listing integrity package.',
    price: 'Custom',
    period: '',
    note: 'Tailored pricing for your needs',
    features: [
      'Unlimited team members',
      '99,999 ASINs',
      'AI compliance engine',
      '999 user seats',
      'Advanced analytics',
      'Priority monitoring',
      '99 marketplaces',
      'Change history',
    ],
  },
]

const icons = { Link2, Database, Zap, Bell, RefreshCw }

export default function ListingIntegrity() {
  const seo = serviceSeo['listing-integrity']
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Amazon Listing Integrity & Compliance Shield',
    operatingSystem: 'Cloud / Web',
    applicationCategory: 'BusinessApplication',
    provider: {
      '@type': 'Organization',
      name: 'Bitsbay Ltd',
      url: 'https://bitsbayltd.com',
    },
    offers: {
      '@type': 'Offer',
      price: '239',
      priceCurrency: 'USD',
    },
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path="/products/listing-integrity"
        image="/listing/hero.webp"
        schema={schema}
      />
      {/* Hero */}
      <Banner
        title="Protect Your Amazon Listings Before Violations Hurt You"
        subtitle="AI-powered monitoring that detects hidden keyword injections, unauthorized listing changes, category manipulation, and compliance risks in real time — across 20+ global Amazon marketplaces."
        image="/listing/hero.webp"
        uppercaseTitle={false}
      >
      </Banner>

      {/* Feature list */}
      <section className="py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Compliance Shield</p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Complete Amazon Listing Protection
            </h2>
            <p className="mt-4 leading-relaxed">
              Our automated crawlers run hourly compliance audits via the Amazon SP-API, mapping attributes
              and restoring changes instantly.
            </p>
          </Reveal>

          <Stagger className="grid gap-2.5">
            {features.map((f) => (
              <m.div
                key={f}
                variants={childVariants}
                className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-ink">{f}</span>
              </m.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Live revenue vulnerabilities */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow text-accent">Live Revenue Vulnerabilities</p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Amazon Listing Violations Cost Sellers Millions
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Amazon's automated enforcement bots run non-stop, penalizing stores instantly without
              warnings. While you read this, backend catalog manipulation could be breaking your listings.
            </p>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-display text-2xl font-bold text-brand">180 sec</p>
              <p className="mt-2 text-sm text-white/65">
                Automated de-indexing triggers within 180 seconds of backend injection.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-display text-2xl font-bold text-brand">14 days</p>
              <p className="mt-2 text-sm text-white/65">
                Average manual recovery time for hijacked browse nodes is 14 business days.
              </p>
            </div>
          </div>

          <Reveal delay={0.1} className="mt-10">
            <img
              src="/listing/violations.webp"
              alt="Amazon listing violation dashboard"
              width={1448}
              height={1086}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="w-full h-auto aspect-[1448/1086] overflow-hidden object-cover r-diag"
            />
          </Reveal>
        </div>
      </section>

      {/* Simple setup */}
      {/* Platform walkthrough */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">See it in Action</p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Platform Walkthrough
            </h2>
            <p className="mt-4 leading-relaxed">
              Watch how ListingIntegrity automatically detects and resolves listing threats in
              real time.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
            <div className="overflow-hidden border border-line bg-ink r-diag">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/listing/violations.webp"
                className="aspect-video w-full"
              >
                <source src="/listing/walkthrough.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Simple Setup</p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Get Protected in Minutes, Not Days
            </h2>
            <p className="mt-4 leading-relaxed">
              No complex configurations required. Our intelligent system handles everything automatically
              via the Amazon SP-API.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {setupSteps.map((s, i) => {
              const Icon = icons[s.icon]
              return (
                <m.div
                  key={s.title}
                  variants={childVariants}
                  className="rounded-2xl border border-line bg-white p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-xs font-semibold text-brand">{`Step ${i + 1}`}</p>
                  <h3 className="mt-1 font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{s.body}</p>
                </m.div>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              From Exposed Listings to Full Protection
            </h2>
            <p className="mt-4 leading-relaxed">
              See exactly how ListingIntegrity transforms your Amazon compliance posture.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 flex items-center gap-2 font-display font-semibold text-red-600">
                <X className="h-5 w-5" /> Without Listing Integrity
              </p>
              <Stagger className="grid gap-3">
                {without.map((w) => (
                  <m.div
                    key={w.title}
                    variants={childVariants}
                    className="rounded-xl border border-line bg-white p-5"
                  >
                    <h3 className="font-display text-sm font-semibold">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-body">{w.body}</p>
                  </m.div>
                ))}
              </Stagger>
            </div>

            <div>
              <p className="mb-4 flex items-center gap-2 font-display font-semibold text-brand">
                <ShieldCheck className="h-5 w-5" /> With Listing Integrity
              </p>
              <Stagger className="grid gap-3">
                {withIt.map((w) => (
                  <m.div
                    key={w.title}
                    variants={childVariants}
                    className="rounded-xl border border-brand/30 bg-white p-5"
                  >
                    <h3 className="font-display text-sm font-semibold">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-body">{w.body}</p>
                  </m.div>
                ))}
              </Stagger>
            </div>
          </div>

          <Reveal delay={0.1} className="mt-14 text-center">
            <h2>Protect Your Amazon Revenue Stream Today</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed">
              Join thousands of sellers who monitor and secure their product catalog against keyword
              injections, listing suppressions, and competitor hijacking — 24/7.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">One Plan, Unlimited Power</p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Simple Pricing for Growing Businesses
            </h2>
            <p className="mt-4 leading-relaxed">
              Everything you need to scale your e-commerce operations. No hidden fees, no complicated
              tiers.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <m.div
                key={plan.name}
                variants={childVariants}
                className={`rounded-2xl border p-8 ${
                  plan.featured ? 'border-brand bg-brand text-white' : 'border-line bg-white'
                }`}
              >
                <h3
                  className={`font-display text-lg font-bold ${
                    plan.featured ? 'text-white' : 'text-ink'
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.featured ? 'text-white/70' : 'text-body'}`}>
                  {plan.tagline}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span
                    className={`font-display text-4xl font-extrabold ${
                      plan.featured ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.featured ? 'text-white/70' : 'text-body'}>{plan.period}</span>
                  )}
                </div>
                <p className={`mt-1 text-xs ${plan.featured ? 'text-white/60' : 'text-body'}`}>
                  {plan.note}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.featured ? 'text-white' : 'text-brand'
                        }`}
                        strokeWidth={3}
                      />
                      <span className={plan.featured ? 'text-white/90' : 'text-ink'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-7 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    plan.featured
                      ? 'bg-white text-ink hover:bg-white/90'
                      : 'bg-ink text-white hover:bg-brand'
                  }`}
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </m.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
