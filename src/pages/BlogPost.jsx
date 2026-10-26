import { useParams, Navigate, Link } from 'react-router-dom'
import Banner from '../components/Banner'
import { ArrowLeft } from 'lucide-react'
import Reveal from '../components/Reveal'
import { getPostBySlug, posts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Banner title={post.title} subtitle={post.date} image={post.cover} uppercaseTitle={false}>
        <Link to="/blog" className="btn-white">
          <ArrowLeft className="h-4 w-4" />
          Blog
        </Link>
      </Banner>

      <article className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x max-w-3xl">
          <figure className="overflow-hidden border border-line bg-muted r-diag">
            <img src={post.cover} alt="" className="w-full object-cover" />
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
                        alt=""
                        loading="lazy"
                        className="w-full object-cover"
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
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
