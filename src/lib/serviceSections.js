// Single source of truth for turning a raw `servicePages` entry into the shape
// the service blocks render.
//
// Previously each block resolved its own aliases (`heading || title`,
// `items ?? cards`, …) and bailed out with `return null` when its own preferred
// key was missing, so the same content rendered on one page and vanished on the
// next. Everything is resolved here instead: one pass, one shape, and a section
// is only dropped when it genuinely carries no content at all.

const KINDS = ['intro', 'cards', 'reasons', 'process']

/** Trimmed string, or '' for anything that isn't usable copy. */
const str = (value) => {
  if (typeof value === 'string') return value.trim()
  if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  return ''
}

/** First alias that actually carries copy. */
const pick = (...values) => {
  for (const value of values) {
    const text = str(value)
    if (text) return text
  }
  return ''
}

/** Flatten string | string[] sources into a clean paragraph list. */
const toLines = (...sources) =>
  sources
    .flatMap((source) => (Array.isArray(source) ? source : [source]))
    .map(str)
    .filter(Boolean)

// Every key a section has ever used to hold its list of entries. Checked in
// order so a section carrying both `steps` and `items` keeps the richer one.
const LIST_KEYS = ['items', 'steps', 'cards', 'reasons', 'list', 'points', 'features']

const rawList = (section) => {
  for (const key of LIST_KEYS) {
    const value = section[key]
    if (Array.isArray(value) && value.length) return value
  }
  return []
}

/**
 * Normalise one entry. Plain strings (the `reasons` lists) and objects (cards,
 * process steps) both land on the same `{ icon, title, body, to }` shape, so a
 * list can be rendered by any block without losing its text.
 */
const toEntry = (raw) => {
  if (raw == null) return null

  if (typeof raw === 'string' || typeof raw === 'number') {
    const title = str(raw)
    return title ? { icon: '', title, body: '', to: '' } : null
  }

  if (typeof raw !== 'object') return null

  const entry = {
    icon: pick(raw.icon, raw.iconName),
    title: pick(raw.title, raw.label, raw.heading, raw.name),
    body: pick(raw.body, raw.text, raw.description, raw.detail),
    to: pick(raw.to, raw.link, raw.href, raw.url),
  }

  // A title-less entry is still worth showing as long as it has copy.
  return entry.title || entry.body ? entry : null
}

/**
 * `type` is the contract, but a section that only carries `steps`/`items`/
 * `paragraphs` still has to render. The fallback is `intro` rather than
 * "unrenderable", so a missing or mistyped `type` can never blank a section.
 */
const resolveKind = (section) => {
  const declared = str(section.type).toLowerCase()
  if (KINDS.includes(declared)) return declared

  if (Array.isArray(section.steps) && section.steps.length) return 'process'

  const list = rawList(section)
  if (list.length)
    return list.every((entry) => typeof entry === 'string') ? 'reasons' : 'cards'

  return 'intro'
}

const GRID_COLUMNS = {
  1: 'grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  5: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
}

/** Tailwind column classes, never wider than the number of entries. */
export const gridColumns = (columns, count, fallback = 4) => {
  const requested = Number(columns) > 0 ? Number(columns) : fallback
  const fitted = Math.max(1, Math.min(requested, count || requested))
  return GRID_COLUMNS[fitted] ?? GRID_COLUMNS[fallback]
}

const hasContent = (section) =>
  Boolean(
    section.eyebrow ||
      section.heading ||
      section.subheading ||
      section.paragraphs.length ||
      section.pills.length ||
      section.entries.length ||
      section.image ||
      section.ctaText,
  )

export const normalizeSection = (raw, index = 0) => {
  if (!raw || typeof raw !== 'object') return null

  const kind = resolveKind(raw)
  const entries = rawList(raw).map(toEntry).filter(Boolean)

  const section = {
    kind,
    index,
    eyebrow: pick(raw.eyebrow, raw.kicker),
    heading: pick(raw.heading, raw.title),
    subheading: pick(raw.subheading, raw.subtitle, raw.lead),
    // Long-form copy is kept as its own list rather than folded into
    // `subheading`, so a section with both shows both.
    paragraphs: toLines(raw.paragraphs, raw.body, raw.text, raw.copy),
    pills: toLines(raw.pills, raw.tags),
    entries,
    image: pick(raw.image, raw.illustration),
    columns: Number(raw.columns) > 0 ? Number(raw.columns) : 0,
    featuredFirst: Boolean(raw.featuredFirst),
    ctaText: pick(raw.ctaText, raw.cta),
    ctaTo: pick(raw.ctaTo, raw.ctaLink) || '/contact',
    linkLabel: pick(raw.linkLabel) || 'Read More',
    tight: false,
  }

  // The reasons block used to hard-code this default inside the component,
  // which meant the heading depended on which block happened to render.
  if (kind === 'reasons' && !section.heading) section.heading = 'Reasons to choose us'

  return hasContent(section) ? section : null
}

export const normalizeServicePage = (raw, slug) => {
  if (!raw || typeof raw !== 'object') return null

  const source = raw.sections ?? raw.blocks ?? raw.content ?? []
  const sections = (Array.isArray(source) ? source : [])
    .map((section, i) => normalizeSection(section, i))
    .filter(Boolean)

  // Two intro blocks in a row would otherwise stack two full section paddings.
  sections.forEach((section, i) => {
    const prev = sections[i - 1]
    section.tight = section.kind === 'intro' && prev?.kind === 'intro'
    section.id = `${slug}-${i}-${section.kind}`
  })

  return {
    slug,
    eyebrow: pick(raw.eyebrow),
    title: pick(raw.title, raw.name),
    subtitle: pick(raw.subtitle, raw.subheading, raw.lead),
    heroImage: pick(raw.heroImage, raw.image, raw.banner),
    // `cta: null` is an explicit "no button on this page"; anything else falls
    // back to the site-wide label.
    cta: raw.cta === null || raw.cta === false ? '' : pick(raw.cta) || 'Request Free Consultation',
    sections,
  }
}
