import { useMemo, useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import { business, menuCategories, menuItems } from '../data/siteContent.js'

export default function Menu() {
  const [cat, setCat] = useState('all')
  const items = useMemo(() => (cat === 'all' ? menuItems : menuItems.filter((m) => m.category === cat)), [cat])
  const labelFor = (id) => menuCategories.find((c) => c.id === id)?.label

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="section-head">
          <Reveal><p className="eyebrow">Menu Preview</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">Something for every craving</h2></Reveal>
          <Reveal delay={140}>
            <p className="muted">
              A preview layout with <strong>sample dishes</strong> — the cafe's actual menu and prices will be added once confirmed.
            </p>
          </Reveal>
        </div>

        <div className="filters" role="tablist" aria-label="Menu categories">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={cat === c.id}
              className={`chip ${cat === c.id ? 'is-active' : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

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
          </div>
        </div>
      </div>
    </section>
  )
}
