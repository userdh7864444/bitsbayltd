import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

import PageHeader from './PageHeader'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import ObfuscatedEmail from '../components/ObfuscatedEmail'
import { getIcon } from '../lib/icons'
import { contactIntro, email, offices, socials } from '../data/site'
import { staticPagesSeo } from '../data/seoData'

import {
  CONTACT_RECIPIENT,
  isContactConfigured,
  sendContactMessage,
  validateContact,
} from '../lib/contact'

const emptyForm = {
  first: '',
  last: '',
  email: '',
  subject: '',
  message: '',
  // Honeypot. The name is deliberately meaningless: browser autofill targets
  // fields called company/organization/name/etc., and filling this one used to
  // make the form silently discard genuine messages.
  bbHpToken: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [failure, setFailure] = useState('')
  const [showMailto, setShowMailto] = useState(true)
  const abortRef = useRef(null)
  const statusRef = useRef(null)

  // Cancel request if user leaves the page
  useEffect(() => {
    return () => {
      abortRef.current?.abort()
    }
  }, [])

  const update = (key) => (e) => {
    const value = e.target.value

    setForm((current) => ({
      ...current,
      [key]: value,
    }))

    setErrors((previous) =>
      previous[key]
        ? {
            ...previous,
            [key]: undefined,
          }
        : previous
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (status === 'sending') {
      return
    }

    // Honeypot. Only a bot should ever populate this.
    if (form.bbHpToken.trim()) {
      console.warn('[contact] honeypot triggered — submission discarded')
      setStatus('sent')
      setForm(emptyForm)
      return
    }

    // Validate form
    const found = validateContact(form)

    setErrors(found)

    if (Object.keys(found).length > 0) {
      setStatus('error')
      setShowMailto(false)
      setFailure(
        'Please correct the highlighted fields and try again.'
      )

      setTimeout(() => {
        statusRef.current?.focus()
      }, 0)

      return
    }

    setStatus('sending')
    setFailure('')
    setShowMailto(true)

    // Cancel previous request
    abortRef.current?.abort()

    const controller = new AbortController()
    abortRef.current = controller

    try {
      await sendContactMessage(form, { signal: controller.signal })

      setStatus('sent')
      setForm(emptyForm)
      setErrors({})
    } catch (err) {
      if (err?.name === 'AbortError') {
        return
      }

      setStatus('error')

      const unconfigured = err?.code === 'not_configured'

      const text = unconfigured
        ? `This form is not connected to an inbox yet — please email ${CONTACT_RECIPIENT} directly.`
        : err?.message || 'Something went wrong. Please try again.'

      // Some messages already tell the visitor to email us; don't say it twice.
      setShowMailto(!/email\s+(us|[^\s]+)\s+directly/i.test(text))
      setFailure(text)
    } finally {
      setTimeout(() => {
        statusRef.current?.focus()
      }, 0)
    }
  }

  const seo = staticPagesSeo.contact
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Bitsbay Ltd',
    url: 'https://bitsbayltd.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Bitsbay Ltd',
      url: 'https://bitsbayltd.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1-904-809-7098',
          contactType: 'sales',
          areaServed: 'US',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+92-333-3810066',
          contactType: 'customer service',
          areaServed: 'PK',
        },
      ],
    },
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path="/contact"
        image="/banners/contact.jpg"
        schema={contactSchema}
      />
      <PageHeader
        title="Contact Us"
        image="/banners/contact.jpg"
      />

      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">

          {/* LEFT SIDE - FORM */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-line bg-white p-6 r-diag sm:p-8 lg:p-10"
            >
              {!isContactConfigured && (
                <p className="mb-6 flex gap-2.5 border border-brand/40 bg-brand/5 p-4 text-sm text-ink r-diag-sm">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" />

                  <span>
                    Set{' '}
                    <code className="font-mono text-xs">
                      VITE_EMAILJS_PUBLIC_KEY
                    </code>{' '}
                    in your environment to start delivering messages to{' '}
                    {CONTACT_RECIPIENT}.
                  </span>
                </p>
              )}

              {/* NAME */}
              <fieldset className="border-0 p-0">
                <legend className="text-sm font-semibold text-ink">
                  Name <span className="text-brand">*</span>
                </legend>

                <div className="mt-3 grid gap-5 sm:grid-cols-2">
                  <Field
                    id="first"
                    label="First"
                    required
                    value={form.first}
                    onChange={update('first')}
                    autoComplete="given-name"
                    error={errors.first}
                  />

                  <Field
                    id="last"
                    label="Last"
                    value={form.last}
                    onChange={update('last')}
                    autoComplete="family-name"
                    error={errors.last}
                  />
                </div>
              </fieldset>

              {/* EMAIL */}
              <div className="mt-6">
                <Field
                  id="email"
                  label="Email"
                  required
                  type="email"
                  inputMode="email"
                  value={form.email}
                  onChange={update('email')}
                  autoComplete="email"
                  error={errors.email}
                />
              </div>

              {/* SUBJECT */}
              <div className="mt-6">
                <Field
                  id="subject"
                  label="Subject"
                  required
                  value={form.subject}
                  onChange={update('subject')}
                  error={errors.subject}
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-ink"
                >
                  Message <span className="text-brand">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={update('message')}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message
                      ? 'message-error'
                      : undefined
                  }
                  className={`mt-2 w-full resize-y border px-4 py-3.5 text-sm text-ink outline-none transition-colors r-diag-sm focus:border-brand ${
                    errors.message
                      ? 'border-brand'
                      : 'border-line'
                  }`}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-sm text-brand"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* HONEYPOT — no label text and a nonsense field name, so browser
                  autofill has nothing to match against. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
              >
                <input
                  id="bb-hp-token"
                  name="bb_hp_token"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  data-form-type="other"
                  value={form.bbHpToken}
                  onChange={update('bbHpToken')}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className="btn-primary mt-8 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending'
                  ? 'Sending…'
                  : 'Submit'}
              </motion.button>

              {/* STATUS */}
              <div
                ref={statusRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="mt-4 outline-none"
              >
                {/* SUCCESS */}
                {status === 'sent' && (
                  <p className="flex gap-2.5 border border-brand/40 bg-brand/5 p-4 text-sm r-diag-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />

                    <span className="text-ink">
                      <strong className="font-semibold">
                        Thanks — your message is on its way.
                      </strong>{' '}
                      It has been delivered to{' '}
                      {CONTACT_RECIPIENT} and we reply within one
                      business day.
                    </span>
                  </p>
                )}

                {/* ERROR */}
                {status === 'error' && failure && (
                  <p className="flex gap-2.5 border border-brand/40 bg-brand/5 p-4 text-sm r-diag-sm">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" />

                    <span className="text-ink">
                      {failure}

                      {showMailto && (
                        <>
                          {' '}

                          <a
                            href={`mailto:${CONTACT_RECIPIENT}`}
                            className="font-semibold text-brand underline underline-offset-2"
                          >
                            Email us directly
                          </a>{' '}
                          if the problem continues.
                        </>
                      )}
                    </span>
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={0.12}>
            <h5 className="eyebrow">
              {contactIntro.eyebrow}
            </h5>

            <h2 className="mt-4">
              {contactIntro.title}
            </h2>

            <p className="mt-4">
              {contactIntro.body}
            </p>

            <div className="mt-9 space-y-6">

              {/* OFFICES */}
              {offices.map((o) => (
                <div
                  key={o.country}
                  className="border border-line p-6 r-diag-sm"
                >
                  <h3>{o.country}</h3>

                  <p className="mt-3 flex gap-3 leading-relaxed">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" />

                    {o.address}
                  </p>
                </div>
              ))}

              {/* PHONE */}
              <div className="border border-line p-6 r-diag-sm">
                <h3>Phone</h3>

                {offices.map((o) => (
                  <a
                    key={o.phone}
                    href={`tel:${o.phone.replace(
                      /[^+\d]/g,
                      ''
                    )}`}
                    className="mt-2 flex items-center gap-3 transition-colors hover:text-brand"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand" />

                    {o.phone}
                  </a>
                ))}
              </div>

              {/* EMAIL */}
              <div className="border border-line p-6 r-diag-sm">
                <h3>Send Us A Message</h3>

                <div className="mt-2 flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-brand" />
                  <ObfuscatedEmail
                    email={email}
                    label="Send Us A Message"
                    className="transition-colors hover:text-brand"
                  />
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <h6 className="mt-9 text-ink">
              Follow Us On Social Media :
            </h6>

            <div className="mt-4 flex gap-3">
              {socials.map((s) => {
                const Icon = getIcon(s.icon)

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center border border-line text-ink transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white"
                    style={{
                      borderRadius: '10px 0 10px 0',
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required,
  autoComplete,
  inputMode,
  error,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-ink"
      >
        {label}{' '}
        {required && (
          <span className="text-brand">*</span>
        )}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : undefined
        }
        className={`mt-2 w-full border px-4 py-3.5 text-sm text-ink outline-none transition-colors r-diag-sm focus:border-brand ${
          error ? 'border-brand' : 'border-line'
        }`}
      />

      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-sm text-brand"
        >
          {error}
        </p>
      )}
    </div>
  )
}