import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import { business, outlets } from '../data/siteContent.js'

export default function Outlets({ onReserve }) {
  return (
    <section className="section outlets" id="outlets">
      <div className="container">
        <div className="section-head">
          <Reveal><p className="eyebrow">Our Outlets</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">Find your nearest Diggin</h2></Reveal>
          <Reveal delay={140}><p className="muted">{business.hoursNote}</p></Reveal>
        </div>

        <div className="outlets__grid">
          {outlets.map((o, i) => (
            <Reveal key={o.id} delay={(i % 3) * 90} className={`outlet ${o.sister ? 'outlet--sister' : ''} ${o.comingSoon ? 'outlet--soon' : ''}`}>
              <div className="outlet__img">
                <SmartImage src={o.image} alt={`${o.name} ${o.area}, illustrative stock photo`} />
                {o.comingSoon && <span className="outlet__badge">Coming soon</span>}
                {o.sister && <span className="outlet__badge outlet__badge--sister">Sister brand</span>}
              </div>
              <div className="outlet__body">
                <p className="outlet__brand">{o.name}</p>
                <h3>{o.area}</h3>
                <p className="outlet__city"><Icon name="pin" size={15} /> {o.city}</p>
                <div className="outlet__actions">
                  {o.comingSoon ? (
                    <a href={o.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">
                      See location <Icon name="arrow" size={16} />
                    </a>
                  ) : (
                    <>
                      <a href="#reserve" className="btn btn--primary btn--sm" onClick={() => onReserve(o.id)}>Reserve here</a>
                      <a href={o.mapsUrl} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`Directions to ${o.name} ${o.area}`} title="Directions">
                        <Icon name="pin" size={18} />
                      </a>
                      <a href={o.phone.href} className="icon-btn" aria-label={`Call ${o.name} ${o.area}: ${o.phone.display}`} title={o.phone.display}>
                        <Icon name="phone" size={17} />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
