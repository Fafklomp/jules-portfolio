import { SiAutodeskrevit, SiAutocad, SiSketchup, SiTwinmotion, SiAffinitydesigner, SiNotion, SiMiro } from 'react-icons/si'
import { TbBrandAdobePhotoshop, TbBrandAdobeIndesign, TbBrandAdobeIllustrator, TbBrandAdobe } from 'react-icons/tb'
import { FaFilePowerpoint, FaFileWord } from 'react-icons/fa'

const skillIcons = {
  // 3D Modelling
  'Revit':                { icon: SiAutodeskrevit,          color: '#0696D7' },
  'AutoCAD':              { icon: SiAutocad,                color: '#E51050' },
  'SketchUp':             { icon: SiSketchup,               color: '#005F9E' },
  // Rendering
  'Twinmotion':           { icon: SiTwinmotion,             color: '#0078D4' },
  // Graphics
  'Adobe Photoshop':      { icon: TbBrandAdobePhotoshop,    color: '#31A8FF' },
  'Adobe InDesign':       { icon: TbBrandAdobeIndesign,     color: '#FF3366' },
  'Adobe Illustrator':    { icon: TbBrandAdobeIllustrator,  color: '#FF9A00' },
  'Affinity Designer':    { icon: SiAffinitydesigner,       color: '#1B72BE' },
  // Docs
  'Adobe Creative Cloud': { icon: TbBrandAdobe,             color: '#FF0000' },
  'Microsoft PowerPoint': { icon: FaFilePowerpoint,         color: '#D24726' },
  'Microsoft Word':       { icon: FaFileWord,               color: '#2B579A' },
  'Notion':               { icon: SiNotion,                 color: '#000000' },
  'Miro':                 { icon: SiMiro,                   color: '#FFD02F' },
}

const skillGroups = [
  {
    category: '3D Modelling & 2D Drawings',
    skills: ['Revit', 'AutoCAD', 'SketchUp'],
  },
  {
    category: 'Rendering',
    skills: ['Enscape', 'Twinmotion', 'Lumion'],
  },
  {
    category: 'Graphics & Vector Editing',
    skills: ['Adobe Photoshop', 'Adobe InDesign', 'Adobe Illustrator', 'Affinity Designer'],
  },
  {
    category: 'Docs',
    skills: ['Adobe Creative Cloud', 'Microsoft PowerPoint', 'Microsoft Word', 'Notion', 'Miro'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 max-w-5xl mx-auto border-t border-stone/10">
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2">Expertise</p>
        <h2
          className="text-4xl md:text-5xl font-light leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: '#2d2e8c', fontStyle: 'italic' }}
        >
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {skillGroups.map(({ category, skills }) => (
          <div key={category}>
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#2d2e8c' }}>{category}</p>
            <div className="flex flex-col gap-2">
              {skills.map(skill => {
                const entry = skillIcons[skill]
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-light border border-stone/15 text-stone/60 hover:border-terra hover:text-terra transition-colors duration-200 cursor-default"
                  >
                    {entry && <entry.icon className="text-xl shrink-0" style={{ color: entry.color }} />}
                    {skill}
                  </span>
                )
              })}
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
