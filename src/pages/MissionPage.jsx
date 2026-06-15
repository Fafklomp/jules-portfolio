import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

export default function MissionPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">
          <div className="space-y-16">

            <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Mission Statement</p>
              <div className="space-y-6">
                <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                  I value loyalty, respect, and joy, and I strive to bring these qualities into everything I do. I believe life shouldn't always be taken too seriously, which is why I embrace a spirit of curiosity and playfulness, while also staying true to myself rather than simply following the crowd.
                </p>
                <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                  Creativity, spontaneity, and originality are part of who I am, and I hope to channel these traits into meaningful design work that contributes positively to both people and the environment.
                </p>
                <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                  I aspire to travel, broaden my perspective, and connect with inspiring people along the way. I am committed to stepping outside of my comfort zone, living a healthy and balanced life, and facing challenges with resilience. In doing so, I aim not only to grow personally but also to encourage and uplift those around me.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Normative Position</p>
              <div className="space-y-6">
                <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                  My approach to interior architecture is anchored in craftsmanship and shaped by context. I believe design should grow from an intimate understanding of place, culture, users and materials—creating spaces that resonate with their surroundings and support human wellbeing. Architecture moves at the pace of culture, and enduring design begins with thoughtful, efficient, and responsible construction.
                </p>
                <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                  While emerging technologies fascinate me and broaden our creative possibilities, they should never distance the designer from the act of making. I value a hands-on, collaborative process that weaves together local skills and contemporary innovations, ensuring each project remains both tactile and relevant.
                </p>
                <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                  In a globalized world, I champion a circular design ethos—where knowledge, skills, and materials are continuously shared, reused, and reimagined.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Personal</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Self Awareness */}
                <div className="relative pt-8 pb-4">
                  <span className="absolute top-0 left-0 text-[8rem] leading-none text-stone/5 select-none" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>01</span>
                  <div className="relative z-10 pt-6">
                    <p className="text-sm tracking-[0.15em] uppercase text-sage font-semibold mb-4 -ml-4">Self Awareness</p>
                    <p className="text-[10px] tracking-widest uppercase text-stone/35 mb-1">Clifton Strengths</p>
                    <p className="text-sm font-light text-stone/70 leading-relaxed mb-4">Achiever · Futuristic · Input · Belief · Positivity</p>
                    <p className="text-[10px] tracking-widest uppercase text-stone/35 mb-1">Myers-Briggs</p>
                    <p className="text-sm font-light text-stone/70 leading-relaxed">Intro/Extrovert · Intuitive · Feeling · Judgment</p>
                  </div>
                </div>
                {/* Hobbies & Interests */}
                <div className="relative pt-8 pb-4">
                  <span className="absolute top-0 left-0 text-[8rem] leading-none text-stone/5 select-none" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>02</span>
                  <div className="relative z-10 pt-6">
                    <p className="text-sm tracking-[0.15em] uppercase text-sage font-semibold mb-4 -ml-4">Hobbies &amp; Interests</p>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      <li className="text-sm font-light text-stone/70">Health &amp; Fitness</li>
                      <li className="text-sm font-light text-stone/70">Outdoor Adventure</li>
                      <li className="text-sm font-light text-stone/70">The World of Creativity</li>
                      <li className="text-sm font-light text-stone/70">Quality Time with Family &amp; Friends</li>
                    </ul>
                  </div>
                </div>
                {/* Values */}
                <div className="relative pt-8 pb-4">
                  <span className="absolute top-0 left-0 text-[8rem] leading-none text-stone/5 select-none" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>03</span>
                  <div className="relative z-10 pt-6">
                    <p className="text-sm tracking-[0.15em] uppercase text-sage font-semibold mb-4 -ml-4">Values</p>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      <li className="text-sm font-light text-stone/70">Human Wellbeing</li>
                      <li className="text-sm font-light text-stone/70">Sustainability</li>
                      <li className="text-sm font-light text-stone/70">Inclusivity</li>
                      <li className="text-sm font-light text-stone/70">Storytelling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
