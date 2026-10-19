import { useState } from 'react'
import Icon from './Icons.jsx'
import { business, outlets, social } from '../data/siteContent.js'

const iconFor = { instagram: 'instagram', facebook: 'facebook', google: 'star' }

export default function Footer() {
  const [shared, setShared] = useState('')

  const share = async () => {
    const data = { title: business.fullName, text: 'Good Food. Beautiful Moments. Diggin, Delhi', url: window.location.href }
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
          <p>Good Food. Beautiful Moments.<br />{business.category} · {business.region}</p>
          <div className="socials">
            {social.map((s) => (
              <a key={s.id} href={s.url} aria-label={s.label} title={s.label} target="_blank" rel="noopener noreferrer">
                <Icon name={iconFor[s.id]} size={18} />
              </a>
            ))}
            <button type="button" onClick={share} aria-label="Share this page" title="Share">
              <Icon name="share" size={18} />
            </button>
            {shared && <span className="socials__toast" role="status">{shared}</span>}
          </div>
        </div>

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
        <div>
          <p>© {new Date().getFullYear()} {business.fullName}. All rights reserved.</p>
          <p>Design and Developed by Ritesh Kumar</p>
        </div>
        <p className="footer__disclaimer">
          Website prototype for demonstration. Photos are illustrative stock images (Unsplash), and booking requests are
          not sent in this demo.
        </p>
      </div>
    </footer>
  )
}
