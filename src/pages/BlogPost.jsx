import { useParams, Navigate, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Banner from '../components/Banner'
import { ArrowLeft, Calendar, Clock, UserCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import { getPostBySlug, posts } from '../data/blog'
import { blogSeo } from '../data/seoData'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const author = post.author || {
    name: 'Hamza Ansari',
    role: 'Technical Director',
    bio: 'Software architect and engineering lead at Bitsbay Ltd, specializing in scalable web apps, mobile solutions, and Amazon seller growth systems.',
  }

  const seo = blogSeo[slug] || {
    title: `${post.title} | Bitsbay`,
    description: post.excerpt
      ? post.excerpt.slice(0, 155)
      : 'Read the latest industry insights and software engineering guides from the Bitsbay technical team.',
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: seo.description,
    image: post.cover ? `https://bitsbayltd.com${post.cover}` : undefined,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      url: 'https://bitsbayltd.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bitsbay Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bitsbayltd.com/logo.png',
      },
    },
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path={`/blog/${post.slug}`}
        image={post.cover || '/banners/technologies.webp'}
        schema={schema}
      />
      <Banner title={post.title} subtitle={post.date} image={post.cover} uppercaseTitle={false}>
        <Link to="/blog" className="btn-white">
          <ArrowLeft className="h-4 w-4" />
          Blog
        </Link>
      </Banner>

      <article className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x max-w-3xl">
          {/* Metadata Bar */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-body sm:text-sm">
            <span className="flex items-center gap-1.5 text-ink">
              <Calendar className="h-4 w-4 text-brand" />
              Published: {post.date}
            </span>
            {post.updatedDate && (
              <span className="flex items-center gap-1.5 text-brand">
                <Clock className="h-4 w-4" />
                Updated: {post.updatedDate}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-ink">
              <UserCheck className="h-4 w-4 text-brand" />
              By {author.name}
            </span>
          </div>

          <figure className="overflow-hidden border border-line bg-muted r-diag">
            <img
              src={post.cover}
              alt={post.title}
              width={1200}
              height={675}
              fetchPriority="high"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 800px"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
          </figure>

          <div className="mt-10">
            {post.body.map((block, i) => {
              if (block.type === 'h') {
                return (
                  <Reveal key={i}>
                    <h2 className="mt-10 first:mt-0">{block.text}</h2>
                  </Reveal>
                )
              }
              if (block.type === 'img') {
                return (
                  <Reveal key={i}>
                    <figure className="my-8 overflow-hidden border border-line bg-muted r-diag">
                      <img
                        src={block.src}
                        alt={block.alt || block.text || post.title}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                  </Reveal>
                )
              }
              return (
                <p key={i} className="mt-4 leading-relaxed">
                  {block.text}
                </p>
              )
            })}
          </div>

          {/* Author Card */}
          <div className="mt-14 border-t border-line pt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border border-line bg-white p-6 r-diag">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-brand text-xl font-bold text-white shadow-sm">
                {author.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-brand">Written by</p>
                <h3 className="text-lg font-bold text-ink">{author.name}</h3>
                <p className="text-xs font-semibold text-body">{author.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-body">{author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[#0000001c] py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <h2>More from the blog</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <article
                key={p.slug}
                className="group relative overflow-hidden border border-line bg-white r-diag"
              >
                <Link
                  to={`/blog/${p.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={p.title}
                />
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={p.cover}
                    alt={p.title}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover aspect-[16/9] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm">{p.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
