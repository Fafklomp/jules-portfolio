import { useState } from 'react'
import { MdTouchApp } from 'react-icons/md'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import FadeIn from '../components/FadeIn'
import PageTransition from '../components/PageTransition'

function WorkEntry({ dates, company, role, children }) {
  const [hovered, setHovered] = useState(false)
  const [pinned, setPinned] = useState(false)
  const open = hovered || pinned
  return (
    <div className="flex gap-4">
      <div className="text-xs font-light text-stone/40 w-20 shrink-0 leading-snug">
        {dates.map((d, i) => <p key={i}>{d}</p>)}
      </div>
      {!open && (
        <MdTouchApp size={18} style={{ color: '#fdbf69' }} className="mt-1 opacity-70 shrink-0" />
      )}
      <div
        className="flex-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setPinned(p => !p)}
      >
        <div className="cursor-pointer">
          <p className={`text-sm font-light transition-colors duration-200 ${open ? 'text-terra' : 'text-stone/80'}`}>
            {company}
            {pinned && <span className="ml-2 text-xs text-terra/50">●</span>}
          </p>
          <p className="text-sm font-light text-stone/50">{role}</p>
        </div>
        {open && (
          <div className="mt-3 space-y-3" onClick={(e) => { e.stopPropagation(); setPinned(false) }}>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      {/* Work Experience */}
      <FadeIn>
        <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Work Experience</p>
            <div className="space-y-6">
              <WorkEntry dates={['Jun 2026 –', 'Present']} company="Artala" role="Social Media Consultant & Interior Design Assistant · Seattle, US">
                <p className="text-xs font-light text-stone/70 leading-relaxed">Supported a boutique interior design studio across creative marketing and project development. Managed social media content and brand communications while assisting with interior design projects, material sourcing and product research. Gained valuable exposure to the U.S. residential design industry through visits to site, local manufacturers, design showrooms and supplier studios. This helped develop a strong understanding of American design trends, products and industry workflows. Worked closely with the studio founder, contributing to both the creative design process and the day-to-day operations of the studio.</p>
              </WorkEntry>

              <WorkEntry dates={['Jul 2024 –', 'Jun 2026']} company="Silvio Rech and Lesley Carstens" role="Interior Architect · Johannesburg, South Africa">
                <p className="text-xs font-light text-stone/70 leading-relaxed">During my time here, I collaborated with a team of five interior designers and five architects on the design of a luxury resort in the Seychelles, which featured a beach restaurant, pool deck, 21 villas and a spa. While I contributed to the interior design of the various buildings (villas, restaurant and pool deck), my primary focus was the spa and wellness center. A $10 million project where I worked closely with one other interior designer and three architects. My interior design colleague and I were responsible for the complete interior design scope of the spa. My focus included custom joinery and FF&amp;E, furniture layouts, reflected ceiling plans and coordination with electrical and plumbing systems. I also prepared schedules, tender documentation and 3D visualizations, while developing client presentations and liaising with contractors to ensure seamless project delivery. The project was executed using Revit, Enscape, Lumion and SketchUp.</p>
                <p className="text-xs font-light text-stone/70 leading-relaxed">I also had the opportunity to travel to Namibia toward the end of 2025 for a client project, working on a Games Area that included an indoor pickle and padel court, game rooms, a gym and a pavilion.</p>
              </WorkEntry>

              <WorkEntry dates={['May 2022 –', 'Feb 2023']} company="Superyachts" role="Stewardess · Mediterranean &amp; Caribbean Sea">
                <p className="text-xs font-light text-stone/70 leading-relaxed">After a year in architectural practice, I embarked on a journey working aboard superyachts to gain global experiences and broaden both my design and life perspective. During this time, I worked on five different superyachts (three motor and two sailing), traveling through the Mediterranean between France, Italy and Spain. In my final season before returning to university for my postgraduate degree, I was based in the Caribbean, sailing between the islands from Antigua to Barbados. I gained experience working both collaboratively with a team of stewardesses and independently, honing my skills in teamwork and self-reliance. This chapter reignited my creativity and strengthened my commitment to designing human-centred, memorable and sustainable spaces.</p>
              </WorkEntry>

              <WorkEntry dates={['Apr 2021 –', 'Dec 2021']} company="Luxury Frontiers" role="Junior Interior Designer · Johannesburg, South Africa">
                <p className="text-xs font-light text-stone/70 leading-relaxed">After graduating with distinction in my undergraduate degree, I sought work that would challenge me to advance my technical and software skills. At Luxury Frontiers, I assisted in the design and technical drawings of world-class hospitality resorts and lodges (which have received multiple awards) refining my technical expertise, attention to detail and ability to perform under pressure. I worked on two projects (a resort and tented camp in Puerto Rico and Saudi Arabia) within an interior team of seven, comprising two senior designers and five juniors on a six-month probation period. At the end of this period, three of us, including myself, were offered permanent contracts. This role also provided valuable experience in cross-disciplinary coordination and effective communication.</p>
              </WorkEntry>

              <WorkEntry dates={['Dec 2016 –', 'Jan 2017']} company="Lifestyle Health" role="Sales Assistant · Ballito, South Africa">
                <p className="text-xs font-light text-stone/70 leading-relaxed">Worked alongside one other sales assistant to serve customers during my summer holiday, offering advice and guidance on the store's health products.</p>
              </WorkEntry>

              <WorkEntry dates={['Dec 2017 –', 'Jan 2018']} company="Origins Home and Decor" role="Sales Assistant · Ballito, South Africa">
                <p className="text-xs font-light text-stone/70 leading-relaxed">During my summer holiday, I welcomed customers into the store, offering guidance on home and décor products while ensuring the space remained inviting and well-presented. This experience taught me how to confidently discuss and sell products, building both my communication and customer service skills.</p>
              </WorkEntry>

              <WorkEntry dates={['Jul 2018 –', 'Aug 2018']} company="Charles Taylor Architects" role="Intern · Ballito, South Africa">
                <p className="text-xs font-light text-stone/70 leading-relaxed">During the July holidays, I interned at CTA and went to various site visits and client meetings, as well as shadowed and assisted the Interior Architects in corporate and residential design projects.</p>
              </WorkEntry>
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
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-6">Info</p>
              <dl className="space-y-2">
                {[
                  ['Location',    'London United Kingdom'],
                  ['Age',         '27 (18/04/1999)'],
                  ['Nationality', 'South African'],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-4">
                    <dt className="text-sm font-light text-stone/40 w-24 shrink-0">{label}</dt>
                    <dd className="text-sm font-light text-stone/80">{value}</dd>
                  </div>
                ))}
                <div className="flex gap-4">
                  <dt className="text-sm font-light text-stone/40 w-24 shrink-0">Passport / Visa</dt>
                  <dd className="text-sm font-light text-stone/80 space-y-1">
                    <p>British Passport (exp. 2029)</p>
                    <p>US B1/B2 Visa (exp. 2033)</p>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Education */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-6">Education</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-sm font-light text-stone/40 w-20 shrink-0">2023</span>
                  <div>
                    <p className="text-sm font-light text-stone/80">University of Pretoria, Pretoria, SA</p>
                    <p className="text-xs font-light text-stone/50">B.Hons Interior Architecture</p>
                    <p className="text-xs font-light text-stone/50">Degree</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-light text-stone/40 w-20 shrink-0">2018–2020</span>
                  <div>
                    <p className="text-sm font-light text-stone/80">University of Pretoria, Pretoria, SA</p>
                    <p className="text-xs font-light text-stone/50">B.Sc. Interior Architecture</p>
                    <p className="text-xs font-light text-stone/50">Degree</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-light text-stone/40 w-20 shrink-0">2013–2017</span>
                  <div>
                    <p className="text-sm font-light text-stone/80">Epworth High School, Pietermaritzburg, SA</p>
                    <p className="text-xs font-light text-stone/50">Matriculation Certificate for Academics</p>
                    <p className="text-xs font-light text-stone/50">IEB Curriculum</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeIn>

      <FadeIn><Skills /></FadeIn>

      {/* Certificates */}
      <FadeIn>
        <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto border-t border-stone/10 pt-16">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Certificates</p>
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li className="text-sm font-light text-stone/80">LEED Green Associate <span className="text-stone/40">[2026]</span></li>
              <li className="text-sm font-light text-stone/80">Golden Key Award <span className="text-stone/40">[2018, 2019, 2020, 2023, 2024]</span></li>
              <li className="text-sm font-light text-stone/80">Bachelor of Interior Architecture Honours with Distinction <span className="text-stone/40">[2023]</span></li>
              <li className="text-sm font-light text-stone/80">Bachelor of Science Interior Architecture with Distinction <span className="text-stone/40">[2021]</span></li>
              <li className="text-sm font-light text-stone/80">Academic Honorary Colours <span className="text-stone/40">[2021]</span></li>
              <li className="text-sm font-light text-stone/80">Grade A in Adobe Photoshop through Keyline <span className="text-stone/40">[2020]</span></li>
              <li className="text-sm font-light text-stone/80">Uys &amp; White Prize for highest average across all modules <span className="text-stone/40">[2019]</span></li>
              <li className="text-sm font-light text-stone/80">Department of Architecture Prize for best design student in Interior Architecture <span className="text-stone/40">[2019]</span></li>
              <li className="text-sm font-light text-stone/80">Revit Fundamentals and Revit Architecture certification through Modena <span className="text-stone/40">[2018]</span></li>
              <li className="text-sm font-light text-stone/80">Variety of Udemy courses of completion including Twinmotion, SketchUp and Revit</li>
              <li className="text-sm font-light text-stone/80">Variety of LinkedIn Learning courses of completion including Entrepreneurship, Project Management, Leadership, Brand Development and Team Work</li>
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* Academic Achievements */}
      <FadeIn>
        <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Academic Achievements</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-24 shrink-0">2026</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">LEED GA</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-xs font-light text-stone/50">Achieved my LEED Green Associate Credential</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-24 shrink-0">2024</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">Masters Research Thesis</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-xs font-light text-stone/50"><strong>Distinction</strong></li>
                    <li className="text-xs font-light text-stone/50">Topic: Innovative Learning Environments</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-24 shrink-0">2023</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">Hons Year Interior Architecture</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-xs font-light text-stone/50"><strong>Distinctions</strong> in all subjects (av. 76%)</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-24 shrink-0">2020</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">3rd Year Interior Architecture</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-xs font-light text-stone/50"><strong>Distinctions</strong> in all subjects (av. 79%)</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-24 shrink-0">2019</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">2nd Year Interior Architecture</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-xs font-light text-stone/50"><strong>Distinctions</strong> in all subjects (av. 79.9%)</li>
                    <li className="text-xs font-light text-stone/50">Uys &amp; White Prize — highest average across all modules in all three architectural programs in 2nd year</li>
                    <li className="text-xs font-light text-stone/50">Department of Architecture Prize — best design student in Interior Architecture in 2nd year (85%)</li>
                    <li className="text-xs font-light text-stone/50">2nd Year Interior Architecture Class Representative</li>
                    <li className="text-xs font-light text-stone/50">Nerina House Residence Head Mentor for Architecture</li>
                    <li className="text-xs font-light text-stone/50">Nerina House Residence Flat Representative</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-light text-stone/40 w-24 shrink-0">2018</span>
                <div>
                  <p className="text-sm font-light text-stone/80 mb-1">1st Year Architecture</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="text-xs font-light text-stone/50"><strong>Distinctions</strong> in all subjects (Design 80%)</li>
                    <li className="text-xs font-light text-stone/50">Awarded a place on the Golden Key International Honour Society</li>
                    <li className="text-xs font-light text-stone/50">Tuks Res Women Leadership Academy Certificate for active participation in uplifting women</li>
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
