import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import { SiInstagram } from 'react-icons/si'

const sections = [
  {
    title: 'Art',
    instagram: 'https://www.instagram.com/artwrksju/',
  },
  {
    title: 'Photography',
    instagram: 'https://www.instagram.com/journalsju/',
  },
  {
    title: 'Hands-On Making',
    instagram: 'https://www.instagram.com/designsju/',
  },
]

export default function BeyondPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">

          {/* Intro */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Additional Creative Fields</p>
            <div className="space-y-6">
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
                In my free time, I love exploring my creativity through painting, photography, and hands-on making, from pottery and model building to CNC projects.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
                Painting landscapes lets me capture moments and places that left an impression on me, turning memory into art. Working with my hands allows me to experiment and bring ideas to life in a tactile way. Photography, especially while traveling, helps me notice fleeting moments, people, and landscapes (recently, I've been drawn to the textured, timeless quality of film).
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
                These hobbies give me space to switch off, let my mind wander and recharge, while continuously inspiring the way I approach design.
              </p>
            </div>
          </div>

          {/* Art / Photography / Hands-On Making */}
          <div className="space-y-20">
            {sections.map(({ title, instagram }) => (
              <div key={title} className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
                <div className="pt-1">
                  <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2">{title}</p>
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#fdbf69] hover:opacity-70 transition-opacity duration-200"
                  >
                    <SiInstagram size={28} />
                  </a>
                </div>
                {/* Photo grid placeholder */}
                <div className="min-h-[120px] rounded-sm border border-stone/10 flex items-center justify-center">
                  <p className="text-xs tracking-widest uppercase text-stone/20">Photos coming soon</p>
                </div>
              </div>
            ))}
          </div>

        </section>
      </FadeIn>
    </PageTransition>
  )
}
