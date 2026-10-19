import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Rating from './components/Rating.jsx'
import Intro from './components/Intro.jsx'
import Menu from './components/Menu.jsx'
import Gallery from './components/Gallery.jsx'
import Outlets from './components/Outlets.jsx'
import Reservation from './components/Reservation.jsx'
import Footer from './components/Footer.jsx'
import Icon from './components/Icons.jsx'
import { business } from './data/siteContent.js'

export default function App() {
  const [showTop, setShowTop] = useState(false)
  // New object each click so picking the same outlet twice still re-applies it.
  const [preselect, setPreselect] = useState(null)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Rating />
        <Intro />
        <Menu />
        <Gallery />
        <Outlets onReserve={(id) => setPreselect({ id })} />
        <Reservation preselect={preselect} />
      </main>
      <Footer />

      {/* Mobile quick-action bar */}
      <div className="quickbar">
        <a href={business.phoneHref}><Icon name="phone" size={18} /> Call</a>
        <a href="#outlets"><Icon name="pin" size={18} /> Outlets</a>
        <a href="#reserve" className="quickbar__primary">Book a Table</a>
      </div>

      <a href="#top" className={`to-top ${showTop ? 'is-shown' : ''}`} aria-label="Back to top">
        <Icon name="up" size={20} />
      </a>
    </>
  )
}
