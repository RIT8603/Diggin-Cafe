import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { business } from '../data/siteContent.js'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head">
          <Reveal><p className="eyebrow">Visit Us</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">Find your way to DIGGIN</h2></Reveal>
        </div>
        <div className="contact__grid">
          <Reveal className="contact__card">
            <a href={business.phoneHref} className="contact__item">
              <span className="contact__icon"><Icon name="phone" size={22} /></span>
              <span>
                <small>Call us</small>
                <strong>{business.phoneDisplay}</strong>
              </span>
              <Icon name="arrow" size={18} className="contact__go" />
            </a>
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="contact__item">
              <span className="contact__icon"><Icon name="pin" size={22} /></span>
              <span>
                <small>Location</small>
                <strong>{business.address.text}</strong>
              </span>
              <Icon name="arrow" size={18} className="contact__go" />
            </a>
            <div className="contact__item contact__item--static">
              <span className="contact__icon"><Icon name="clock" size={22} /></span>
              <span>
                <small>Hours</small>
                <strong>{business.hours.text}</strong>
              </span>
            </div>
            <div className="btn-row">
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Get Directions <Icon name="arrow" size={18} />
              </a>
              <a href="#reserve" className="btn btn--outline">Reserve a Table</a>
            </div>
          </Reveal>

          <Reveal delay={120} className="map-card">
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="map-card__link" aria-label="Open DIGGIN CAFE on Google Maps">
              <svg className="map-card__art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect width="400" height="300" fill="#dfe6d3" />
                <path d="M0 210 C90 190 140 240 230 215 S360 170 400 185 V300 H0Z" fill="#cbd8bd" />
                <circle cx="70" cy="70" r="46" fill="#b9cca6" />
                <circle cx="330" cy="90" r="60" fill="#b9cca6" />
                <path d="M-10 120 L410 160" stroke="#fffaf0" strokeWidth="14" />
                <path d="M150 -10 L190 310" stroke="#fffaf0" strokeWidth="12" />
                <path d="M260 -10 C250 120 300 200 280 310" stroke="#fffaf0" strokeWidth="8" />
                <path d="M-10 250 L410 230" stroke="#fffaf0" strokeWidth="6" />
              </svg>
              <span className="map-card__pin"><Icon name="pin" size={30} /></span>
              <span className="map-card__label">
                <strong>DIGGIN CAFE</strong>
                <small>Open in Google Maps ↗</small>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
