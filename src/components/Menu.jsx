<<<<<<< HEAD
import { useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import { business, menu } from '../data/siteContent.js'

const vegLabel = { true: 'Vegetarian', false: 'Non-vegetarian' }

export default function Menu() {
  const [cat, setCat] = useState(menu[0].id)
  const current = menu.find((c) => c.id === cat)
=======
import { useMemo, useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import { business, menuCategories, menuItems } from '../data/siteContent.js'

export default function Menu() {
  const [cat, setCat] = useState('all')
  const items = useMemo(() => (cat === 'all' ? menuItems : menuItems.filter((m) => m.category === cat)), [cat])
  const labelFor = (id) => menuCategories.find((c) => c.id === id)?.label
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="section-head">
<<<<<<< HEAD
          <Reveal><p className="eyebrow">The Menu</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">Italian &amp; continental classics</h2></Reveal>
          <Reveal delay={140}>
            <p className="muted">Dishes from the current Diggin menu. Prices and availability may vary by outlet.</p>
=======
          <Reveal><p className="eyebrow">Menu Preview</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">Something for every craving</h2></Reveal>
          <Reveal delay={140}>
            <p className="muted">
              A preview layout with <strong>sample dishes</strong> — the cafe's actual menu and prices will be added once confirmed.
            </p>
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
          </Reveal>
        </div>

        <div className="filters" role="tablist" aria-label="Menu categories">
<<<<<<< HEAD
          {menu.map((c) => (
=======
          {menuCategories.map((c) => (
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={cat === c.id}
              className={`chip ${cat === c.id ? 'is-active' : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.label}
<<<<<<< HEAD
              {!c.pending && <span className="chip__count">{c.items.length}</span>}
=======
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
            </button>
          ))}
        </div>

<<<<<<< HEAD
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
=======
        <div className="menu__grid" key={cat}>
          {items.map((m, i) => (
            <article className="dish" key={m.name} style={{ animationDelay: `${i * 55}ms` }}>
              <div className="dish__img">
                <SmartImage src={m.image} alt={`${m.name} — illustrative stock photo`} />
                <span className="dish__tag">{labelFor(m.category)}</span>
              </div>
              <div className="dish__body">
                <div className="dish__title">
                  <span className={`veg-dot ${m.veg ? 'veg' : 'nonveg'}`} title={m.veg ? 'Vegetarian' : 'Non-vegetarian'} />
                  <h3>{m.name}</h3>
                </div>
                <p>{m.desc}</p>
                <span className="dish__price">{m.price || 'Price on menu'}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="menu__foot">
          <p className="muted">Want to know what's cooking today?</p>
          <div className="btn-row btn-row--center">
            <a href={business.phoneHref} className="btn btn--primary"><Icon name="phone" size={17} /> Call for today's menu</a>
            <a href="#reserve" className="btn btn--outline">Book a table</a>
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
          </div>
        </div>
      </div>
    </section>
  )
}
