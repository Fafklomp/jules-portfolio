import PageTransition from '../components/PageTransition'
import Contact from '../components/Contact'
import FadeIn from '../components/FadeIn'

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <FadeIn><Contact /></FadeIn>
      </div>
    </PageTransition>
  )
}
