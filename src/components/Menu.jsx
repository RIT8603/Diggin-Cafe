import { useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import { business, menu } from '../data/siteContent.js'

const vegLabel = { true: 'Vegetarian', false: 'Non-vegetarian' }

export default function Menu() {
  const [cat, setCat] = useState(menu[0].id)
  const current = menu.find((c) => c.id === cat)

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="section-head">
          <Reveal><p className="eyebrow">The Menu</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">Italian &amp; continental classics</h2></Reveal>
          <Reveal delay={140}>
            <p className="muted">Dishes from the current Diggin menu. Prices and availability may vary by outlet.</p>
          </Reveal>
        </div>

        <div className="filters" role="tablist" aria-label="Menu categories">
          {menu.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={cat === c.id}
              className={`chip ${cat === c.id ? 'is-active' : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.label}
              {!c.pending && <span className="chip__count">{c.items.length}</span>}
            </button>
          ))}
        </div>

        <div className="menu__board" key={cat}>
          <div className="menu__banner">
            <SmartImage src={current.image} alt={`${current.label}, illustrative stock photo`} />
            <div className="menu__banner-text">
              <h3>{current.label}</h3>
              {current.note && <p>{current.note}</p>}
            </div>
          </div>

          {current.pending ? (
            <div className="menu__pending">
              <Icon name="plate" size={34} />
              <h4>Full pizza &amp; pasta menu coming soon</h4>
              <p>
                Stone-baked pizzas and handcrafted pastas are served at every outlet. Call us to hear today&rsquo;s
                specials.
              </p>
              <a href={business.phoneHref} className="btn btn--primary"><Icon name="phone" size={17} /> Call {business.phoneDisplay}</a>
            </div>
          ) : (
            <ul className="menu__list">
              {current.items.map((m, i) => (
                <li key={m.name} className="menu-item" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="menu-item__head">
                    {m.veg !== null && <span className={`veg-dot ${m.veg ? 'veg' : 'nonveg'}`} role="img" title={vegLabel[m.veg]} aria-label={vegLabel[m.veg]} />}
                    <h4>{m.name}</h4>
                    <span className="menu-item__leader" aria-hidden="true" />
                    {m.price && <span className="menu-item__price">{m.price}</span>}
                  </div>
                  <p>{m.desc}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="menu__foot">
          <div className="btn-row btn-row--center">
            <a href="#reserve" className="btn btn--primary">Book a table <Icon name="arrow" size={18} /></a>
            <a href="#outlets" className="btn btn--outline">Find an outlet</a>
          </div>
        </div>
      </div>
    </section>
  )
}
