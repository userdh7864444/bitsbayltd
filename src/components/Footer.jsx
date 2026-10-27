import { Link } from 'react-router-dom'
import { Check, Mail, MapPin, Phone } from 'lucide-react'
import { getIcon } from '../lib/icons'
import { brand, email, footerBlurb, footerLinks, offices, socials } from '../data/site'
import CTA from './CTA'
import Reveal from './Reveal'
import ObfuscatedEmail from './ObfuscatedEmail'

/**
 * Black footer, matching the live template: the red Make Appointment panel
 * overlaps the top, then four columns (brand / Services / Quick Links /
 * Contact) and a bottom bar separated by a 1px border.
 */
function FooterIcon({ children }) {
  return (
    <span
      aria-hidden
      className="grid h-9 w-9 shrink-0 place-items-center bg-brand text-white"
      style={{ borderRadius: '10px 0 10px 0' }}
    >
      {children}
    </span>
  )
}

export default function Footer() {
  return (
    <>
      {/* The panel sits in normal flow; the footer below is pulled up over its
          bottom half, so half the panel overhangs the black background. */}
      <CTA />

      <footer className="-mt-[70px] bg-black pt-[110px] text-white/70 sm:-mt-[90px] sm:pt-[140px] lg:-mt-[100px] lg:pt-[160px]">
        <div className="container-x">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[26fr_26fr_16fr_32fr]">
          <Reveal>
            <Link to="/" className="inline-flex">
              <img src={brand.logoIcon} alt="Bitsbay Logo" width={150} height={112} decoding="async" loading="lazy" className="h-14 w-auto aspect-[150/112]" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{footerBlurb}</p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = getIcon(s.icon)
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center bg-brand text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand"
                    style={{ borderRadius: '10px 0 10px 0' }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </Reveal>

          {Object.entries(footerLinks).map(([heading, links], i) => (
            <Reveal key={heading} delay={0.08 * (i + 1)} className="lg:pl-10">
              <h3 className="whitespace-nowrap text-white">{heading}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="group flex items-start gap-2.5 transition-colors hover:text-brand"
                    >
                      <Check
                        aria-hidden
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-brand"
                        strokeWidth={3}
                      />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={0.24} className="lg:pl-10">
            <h3 className="text-white">Contact</h3>
            <ul className="mt-5 space-y-5 text-sm">
              {offices.map((o) => (
                <li key={o.country} className="space-y-4">
                  <div className="flex gap-3">
                    <FooterIcon>
                      <MapPin className="h-4 w-4" />
                    </FooterIcon>
                    <div>
                      <h5 className="text-brand">{o.footerLabel}</h5>
                      <p className="mt-1 leading-relaxed">{o.footerAddress}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FooterIcon>
                      <Phone className="h-4 w-4" />
                    </FooterIcon>
                    <div>
                      <h5 className="text-brand">{o.phoneLabel}</h5>
                      <a
                        href={`tel:${o.phone.replace(/[^+\d]/g, '')}`}
                        className="mt-1 inline-block transition-colors hover:text-brand"
                      >
                        {o.phone}
                      </a>
                    </div>
                  </div>
                </li>
              ))}

              <li className="flex gap-3">
                <FooterIcon>
                  <Mail className="h-4 w-4" />
                </FooterIcon>
                <ObfuscatedEmail
                  email={email}
                  label="Contact Bitsbay support"
                  className="self-center transition-colors hover:text-brand"
                />
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-line/40 py-6 text-sm sm:flex-row">
          <p>@ 2025 All Rights Reserved Bitsbayltd.</p>
          <Link to="/privacy-policy" className="transition-colors hover:text-brand">
            Privacy Policy
          </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
