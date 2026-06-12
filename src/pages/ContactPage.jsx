import PageTransition from '../components/PageTransition'
import Contact from '../components/Contact'
import Links from '../components/Links'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <FadeIn><Contact /></FadeIn>
        <FadeIn><Links /></FadeIn>
        <FadeIn><Footer /></FadeIn>
      </div>
    </PageTransition>
  )
}
