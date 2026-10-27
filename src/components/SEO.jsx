import { Helmet } from 'react-helmet-async'

const SITE = 'https://bitsbayltd.com'

export default function SEO({
  title,
  description,
  path = '/',
  image = '/og-image.jpg',
  schema,
  noindex,
}) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const url = cleanPath === '/' ? SITE : `${SITE}${cleanPath}`
  const imageUrl = image.startsWith('http') ? image : `${SITE}${image.startsWith('/') ? image : `/${image}`}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  )
}
