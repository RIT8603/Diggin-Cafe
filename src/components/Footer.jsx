import { useState } from 'react'
import Icon from './Icons.jsx'
import { business, social } from '../data/siteContent.js'

const iconFor = { instagram: 'instagram', google: 'pin', phone: 'phone' }

export default function Footer() {
  const [shared, setShared] = useState('')

  const share = async () => {
    const data = { title: business.name, text: 'Good Food. Beautiful Moments. — DIGGIN CAFE, Delhi', url: window.location.href }
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
                <Icon name={iconFor[s.id]} size={18} />
              </a>
            ))}
            <button type="button" onClick={share} aria-label="Share this page" title="Share">
              <Icon name="share" size={18} />
            </button>
            {shared && <span className="socials__toast" role="status">{shared}</span>}
          </div>
        </div>

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
        <p>Design and Developed by Ritesh Kumar</p>
        <p className="footer__disclaimer">
          Website prototype for demonstration. Photos are illustrative stock images (Unsplash), menu items are samples,
          and reservation enquiries are not sent in this demo.
        </p>
      </div>
    </footer>
  )
}
