import Hero from '../components/Hero'
import Skills from '../components/Skills'
import FadeIn from '../components/FadeIn'
import PageTransition from '../components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      {/* About Me */}
      <FadeIn>
        <section id="about" className="px-6 md:px-16 pt-8 pb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <p className="text-xs tracking-[0.2em] uppercase text-sage pt-1">About Me</p>
            <div className="space-y-4">
              <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                My name is Jules, a South African trained Interior Architect passionate about crafting spaces through the lens of human wellbeing and sustainability. After gaining three years of professional experience, earning my LEED Green Associate credential, and graduating Cum Laude with my Honours in Interior Architecture, I have developed a strong commitment to designing interiors that exceed client expectations.
              </p>
              <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                My work spans luxury residential and hospitality projects across the world, where I have had the creative freedom to explore bespoke design solutions and refine my ability to craft detail-driven spaces that engage and inspire. My design approach blends aesthetics, comfort and brand identity to create meaningful, human-centred environments. I am committed to delivering spaces that positively impact both their users and the environment.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Info + Education */}
      <FadeIn>
        <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* Info */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-sage mb-6">Info</p>
              <dl className="space-y-2">
                {[
                  ['Location',        'London United Kingdom'],
                  ['Age',             '27 (18/04/1999)'],
                  ['Nationality',     'South African'],
                  ['Passport / Visa', 'British (exp. 2029)'],
                  ['',                'US B1/B2 (exp. 2033)'],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-4">
                    <dt className="text-sm font-light text-stone/40 w-36 shrink-0">{label}</dt>
                    <dd className="text-sm font-light text-stone/80">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Education */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-sage mb-6">Education</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-sm font-light text-stone/40 w-20 shrink-0">2023</span>
                  <div>
                    <p className="text-sm font-light text-stone/80">University of Pretoria, Pretoria SA</p>
                    <p className="text-sm font-light text-stone/50">B.Hons Interior Architecture</p>
                    <p className="text-sm font-light text-stone/50">Degree</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-light text-stone/40 w-20 shrink-0">2018–2020</span>
                  <div>
                    <p className="text-sm font-light text-stone/80">University of Pretoria, Pretoria SA</p>
                    <p className="text-sm font-light text-stone/50">B.Sc. Interior Architecture</p>
                    <p className="text-sm font-light text-stone/50">Degree</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-light text-stone/40 w-20 shrink-0">2013–2017</span>
                  <div>
                    <p className="text-sm font-light text-stone/80">Epworth High School, Pietermaritzburg SA</p>
                    <p className="text-sm font-light text-stone/50">Matriculation Certificate for Academics</p>
                    <p className="text-sm font-light text-stone/50">IEB Curriculum</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeIn>

      <FadeIn><Skills /></FadeIn>

      {/* Academic Achievements */}
      <FadeIn>
        <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <p className="text-xs tracking-[0.2em] uppercase text-sage pt-1">Academic Achievements</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-36 shrink-0">2026</span>
                <ul className="list-disc list-outside ml-4 space-y-1">
                  <li className="text-sm font-light text-stone/80">Achieved my LEED Green Associate Credential</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-36 shrink-0">2024</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">Masters Research Thesis</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-sm font-light text-stone/50"><strong>Distinction</strong></li>
                    <li className="text-sm font-light text-stone/50">Topic: Innovative Learning Environments</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-36 shrink-0">2023</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">Hons Year Interior Architecture</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-sm font-light text-stone/50"><strong>Distinctions</strong> in all subjects (av. 76%)</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-36 shrink-0">2020</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">3rd Year Interior Architecture</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-sm font-light text-stone/50"><strong>Distinctions</strong> in all subjects (av. 79%)</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-36 shrink-0">2019</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">2nd Year Interior Architecture</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-sm font-light text-stone/50"><strong>Distinctions</strong> in all subjects (av. 79.9%)</li>
                    <li className="text-sm font-light text-stone/50">Uys &amp; White Prize — highest average across all modules in all three architectural programs in 2nd year</li>
                    <li className="text-sm font-light text-stone/50">Department of Architecture Prize — best design student in Interior Architecture in 2nd year (85%)</li>
                    <li className="text-sm font-light text-stone/50">2nd Year Interior Architecture Class Representative</li>
                    <li className="text-sm font-light text-stone/50">Nerina House Residence Head Mentor for Architecture</li>
                    <li className="text-sm font-light text-stone/50">Nerina House Residence Flat Representative</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-36 shrink-0">2018</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">1st Year Architecture</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-sm font-light text-stone/50"><strong>Distinctions</strong> in all subjects (Design 80%)</li>
                    <li className="text-sm font-light text-stone/50">Awarded a place on the Golden Key International Honour Society</li>
                    <li className="text-sm font-light text-stone/50">Tuks Res Women Leadership Academy Certificate for active participation in uplifting women</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
