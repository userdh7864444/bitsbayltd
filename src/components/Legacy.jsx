import Reveal from './Reveal'
import IconTiles from './IconTiles'
import { legacy, legacyTiles } from '../data/site'

/**
 * "Our Legacy" — centred heading and paragraph inside a large pill-shaped
 * panel, with the MOBILE / CLOUD WEB / BLOCKCHAIN / WATCH tiles below.
 */
export default function Legacy() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="container-x">
        <div className="rounded-[40px] px-4 py-12 sm:rounded-[100px] sm:px-10 sm:py-[50px]">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2>{legacy.title}</h2>
            <p className="mt-6 font-bold leading-relaxed">{legacy.body}</p>
          </Reveal>

          <IconTiles items={legacyTiles} className="mt-12" />
        </div>
      </div>
    </section>
  )
}
