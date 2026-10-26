import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_wfyb3vi'
const TEMPLATE_ID = 'template_oopj4to'
const PUBLIC_KEY = 'o1sGgvXOrjeloB-wp'

// Shown to visitors in the fallback "email us directly" link. The address the
// mail actually lands in is set by the template's To field in the EmailJS
// dashboard, not by this constant.
export const CONTACT_RECIPIENT = 'solutions@bitsbayltd.com'

export const isContactConfigured = true

export class ContactError extends Error {
  constructor(message, { code = 'send_failed' } = {}) {
    super(message)
    this.name = 'ContactError'
    this.code = code
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContact(form) {
  const errors = {}

  if (!form.first?.trim()) {
    errors.first = 'Please enter your first name.'
  }

  if (!form.email?.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = 'That email address does not look right.'
  }

  if (!form.subject?.trim()) {
    errors.subject = 'Please add a subject.'
  }

  if (!form.message?.trim()) {
    errors.message = 'Please write a message.'
  } else if (form.message.trim().length < 10) {
    errors.message =
      'Please give us a little more detail (at least 10 characters).'
  }

  return errors
}

export async function sendContactMessage(form, { signal } = {}) {
  // Honeypot
  if (form.bbHpToken?.trim()) {
    throw new ContactError('Submission rejected.', {
      code: 'spam',
    })
  }

  const first = form.first?.trim() || ''
  const last = form.last?.trim() || ''
  const email = form.email?.trim() || ''
  const subject = form.subject?.trim() || ''
  const message = form.message?.trim() || ''

  const name = `${first} ${last}`.trim()

  const templateParams = {
    first: first,
    last: last,

    name: name,
    from_name: name,

    email: email,
    reply_to: email,

    subject: subject,
    message: message,

    // Extra variables
    first_name: first,
    last_name: last,
    from_email: email,
    user_email: email,
    user_name: name,
    user_message: message,
    title: subject,

    to_email: CONTACT_RECIPIENT,
    to_name: 'Bitsbay',

    time: new Date().toLocaleString(),
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      {
        publicKey: PUBLIC_KEY,
      }
    )

    if (signal?.aborted) {
      const abort = new Error('Aborted')
      abort.name = 'AbortError'
      throw abort
    }

    if (response.status !== 200) {
      throw new ContactError(
        `EmailJS returned status ${response.status}`,
        {
          code: 'send_failed',
        }
      )
    }

    return response
  } catch (error) {
    console.error('[contact] EmailJS send failed', {
      status: error?.status,
      text: error?.text,
      error,
    })

    throw new ContactError(
      error?.text ||
        error?.message ||
        'Unable to send your message. Please try again.',
      {
        code: 'send_failed',
      }
    )
  }
}