import IconTiles from './IconTiles'
import Reveal from './Reveal'
import { industries, industriesIntro } from '../data/site'

/**
 * "Multivertical Expertise" — intro copy plus the four industry tiles
 * (TECH STARTUP / EDUCATION / ENTERPRISE / INSURANCE).
 */
export default function Industries() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2>{industriesIntro.title}</h2>
          <p className="mt-4">{industriesIntro.body}</p>
        </Reveal>

        <IconTiles items={industries} className="mt-12" />
      </div>
    </section>
  )
}
