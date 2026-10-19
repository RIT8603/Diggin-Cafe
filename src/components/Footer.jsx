import { useState } from 'react'
import Icon from './Icons.jsx'
<<<<<<< HEAD
import { business, outlets, social } from '../data/siteContent.js'

const iconFor = { instagram: 'instagram', facebook: 'facebook', google: 'star' }
=======
import { business, social } from '../data/siteContent.js'

const iconFor = { instagram: 'instagram', google: 'pin', phone: 'phone' }
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe

export default function Footer() {
  const [shared, setShared] = useState('')

  const share = async () => {
<<<<<<< HEAD
    const data = { title: business.fullName, text: 'Good Food. Beautiful Moments. Diggin, Delhi', url: window.location.href }
=======
    const data = { title: business.name, text: 'Good Food. Beautiful Moments. — DIGGIN CAFE, Delhi', url: window.location.href }
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
    try {
      if (navigator.share) {
        await navigator.share(data)
      } else {
        await navigator.clipboard.writeText(data.url)
        setShared('Link copied!')
        setTimeout(() => setShared(''), 2200)
      }
    } catch {
      /* user cancelled share */
    }
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#top" className="logo logo--light">
            <span className="logo__mark"><Icon name="leaf" size={18} /></span>
            <span className="logo__text">DIGGIN<span>CAFE</span></span>
          </a>
<<<<<<< HEAD
          <p>Good Food. Beautiful Moments.<br />{business.category} · {business.region}</p>
          <div className="socials">
            {social.map((s) => (
              <a key={s.id} href={s.url} aria-label={s.label} title={s.label} target="_blank" rel="noopener noreferrer">
=======
          <p>Good Food. Beautiful Moments.<br />{business.category} · {business.city}</p>
          <div className="socials">
            {social.map((s) => (
              <a
                key={s.id}
                href={s.url}
                aria-label={s.label}
                title={s.label}
                {...(s.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
                <Icon name={iconFor[s.id]} size={18} />
              </a>
            ))}
            <button type="button" onClick={share} aria-label="Share this page" title="Share">
              <Icon name="share" size={18} />
            </button>
            {shared && <span className="socials__toast" role="status">{shared}</span>}
          </div>
        </div>

<<<<<<< HEAD
        <nav className="footer__col" aria-label="Outlets">
          <h3>Outlets</h3>
          {outlets.map((o) => (
            <a key={o.id} href={o.mapsUrl} target="_blank" rel="noopener noreferrer">
              {o.sister ? 'Gardin by Diggin' : o.area}{o.comingSoon && ' (soon)'}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <h3>Contact</h3>
          <a href="tel:+919090063232">Diggin · +91 90900 63232</a>
          <a href="tel:+919646963696">Gardin · +91 96469 63696</a>
          <a href="#reserve">Book a table</a>
          <a href="#menu">Menu</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {business.fullName}. All rights reserved.</p>
        <p className="footer__disclaimer">
          Website prototype for demonstration. Photos are illustrative stock images (Unsplash), and booking requests are
          not sent in this demo.
=======
        <nav className="footer__col" aria-label="Footer">
          <h4>Explore</h4>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#reserve">Reservations</a>
        </nav>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href={business.phoneHref}>{business.phoneDisplay}</a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps ↗</a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Google Reviews ↗</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <p className="footer__disclaimer">
          Website prototype for demonstration. Photos are illustrative stock images (Unsplash), menu items are samples,
          and reservation enquiries are not sent in this demo.
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
        </p>
      </div>
    </footer>
  )
}
