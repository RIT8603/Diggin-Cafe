import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Rating from './components/Rating.jsx'
import Intro from './components/Intro.jsx'
import Menu from './components/Menu.jsx'
import Gallery from './components/Gallery.jsx'
<<<<<<< HEAD
import Outlets from './components/Outlets.jsx'
import Reservation from './components/Reservation.jsx'
=======
import Reservation from './components/Reservation.jsx'
import Contact from './components/Contact.jsx'
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
import Footer from './components/Footer.jsx'
import Icon from './components/Icons.jsx'
import { business } from './data/siteContent.js'

export default function App() {
  const [showTop, setShowTop] = useState(false)
<<<<<<< HEAD
  // New object each click so picking the same outlet twice still re-applies it.
  const [preselect, setPreselect] = useState(null)
=======
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe

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
<<<<<<< HEAD
        <Outlets onReserve={(id) => setPreselect({ id })} />
        <Reservation preselect={preselect} />
=======
        <Reservation />
        <Contact />
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
      </main>
      <Footer />

      {/* Mobile quick-action bar */}
      <div className="quickbar">
        <a href={business.phoneHref}><Icon name="phone" size={18} /> Call</a>
<<<<<<< HEAD
        <a href="#outlets"><Icon name="pin" size={18} /> Outlets</a>
        <a href="#reserve" className="quickbar__primary">Book a Table</a>
=======
        <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer"><Icon name="pin" size={18} /> Directions</a>
        <a href="#reserve" className="quickbar__primary">Reserve</a>
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
      </div>

      <a href="#top" className={`to-top ${showTop ? 'is-shown' : ''}`} aria-label="Back to top">
        <Icon name="up" size={20} />
      </a>
    </>
  )
}
