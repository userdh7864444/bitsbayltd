# Bitsbay — React rebuild

A React version of bitsbayltd.com, built with Vite, Tailwind CSS v4, Framer Motion and React Router.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

Node 18+ required.

## What's in the stack

| Package          | Why it's here                                        |
| ---------------- | ---------------------------------------------------- |
| `react` + `vite` | App and dev server                                    |
| `tailwindcss` v4 | Styling, configured through `@theme` in `index.css`   |
| `framer-motion`  | Scroll reveals, staggers, page and menu transitions   |
| `react-router-dom` | Client-side routing for all pages                   |
| `lucide-react`   | Icon set                                              |
| `lenis`          | Smooth inertial scrolling                             |

## Where to change things

**Colours and fonts** — `src/index.css`, in the `@theme` block. Change `--color-brand` and everything follows. Fonts load from Google Fonts in `index.html`.

**Copy, nav, services, testimonials, offices** — `src/data/site.js`. This is the only file you need to touch for content edits; components read from it.

**Logo** — drop your PNG into `/public` and swap the lettermark `<span>` in `Navbar.jsx` and `Footer.jsx` for an `<img src="/logo.png" />`.

**Project images** — `SuccessStories.jsx` and `Projects.jsx` currently render gradient placeholders. Replace the placeholder `<div>` with a real `<img>` and add an `image` field to each entry in `projects`.

**Contact form** — `src/pages/Contact.jsx` has a `handleSubmit` with a simulated delay. Point it at Formspree, your own API route, or the WordPress REST endpoint.

## Structure

```
src/
  main.jsx              entry
  App.jsx               routes, smooth scroll, layout shell
  index.css             Tailwind + design tokens
  data/site.js          all content
  components/
    Navbar.jsx          sticky nav, dropdowns, mobile drawer
    Hero.jsx            animated headline, gradient field, floating chips
    Pillars.jsx         four-up value cards
    About.jsx           story + capabilities + mission panel
    Services.jsx        service grid with featured first card
    SuccessStories.jsx  project grid
    Legacy.jsx          parallax text + marquee
    Testimonials.jsx    animated carousel
    Industries.jsx      vertical cards
    CTA.jsx             closing call to action
    Footer.jsx          columns, offices, socials
    MarqueeStrip.jsx    reusable infinite marquee
    Reveal.jsx          motion helpers (Reveal, Stagger, AnimatedHeading)
    ScrollProgress.jsx  top progress bar
    ScrollToTop.jsx     resets scroll on route change
  pages/
    Home, Projects, AboutPage, ServicesPage,
    Technologies, Contact, NotFound, PageHeader
```

## Notes on quality

- Responsive from 360px up.
- `prefers-reduced-motion` disables marquees, smooth scroll and transforms.
- Visible keyboard focus rings on every interactive element.
- Semantic landmarks (`header`, `main`, `nav`, `footer`) and labelled icon buttons.

## Deploying

Static output — works on Vercel, Netlify or Cloudflare Pages with zero config. Because it's client-side routed, add a rewrite so every path serves `index.html`:

**Netlify** — `public/_redirects`:
```
/*  /index.html  200
```

**Vercel** — `vercel.json`:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## One thing worth knowing

This is a client-rendered SPA, which means crawlers see an empty shell before JS runs. Your WordPress site currently serves real HTML. If organic search matters for Bitsbay, move this to Next.js (App Router) or Astro so pages render server-side — the components port over almost unchanged, since the styling and motion have no server dependencies.
