import { useCallback, useEffect, useMemo, useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import { gallery } from '../data/siteContent.js'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'ambience', label: 'Ambience' },
]

export default function Gallery() {
  const [tab, setTab] = useState('all')
  const [index, setIndex] = useState(null)
  const shown = useMemo(() => (tab === 'all' ? gallery : gallery.filter((g) => g.type === tab)), [tab])

  const close = useCallback(() => setIndex(null), [])
  const step = useCallback((d) => setIndex((i) => (i + d + shown.length) % shown.length), [shown.length])

  useEffect(() => {
    if (index === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, close, step])

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <Reveal><p className="eyebrow eyebrow--light">Gallery</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">Food &amp; ambience</h2></Reveal>
          <Reveal delay={140}>
            <p className="gallery__note">
              Illustrative stock photography for this demo — to be replaced with DIGGIN CAFE's own photos.
            </p>
          </Reveal>
        </div>

        <div className="filters filters--dark" role="tablist" aria-label="Gallery filter">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`chip ${tab === t.id ? 'is-active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="gallery__grid" key={tab}>
          {shown.map((g, i) => (
            <button
              type="button"
              key={g.src}
              className={`tile tile--${i % 5}`}
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={() => setIndex(i)}
              aria-label={`Open image: ${g.alt}`}
            >
              <SmartImage src={g.src} alt={g.alt} />
              <span className="tile__label">{g.type}</span>
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
          <button type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">
            <Icon name="close" size={24} />
          </button>
          <button type="button" className="lightbox__btn lightbox__prev" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous image">
            <Icon name="chevronL" size={28} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={shown[index].src.replace('w=1400', 'w=2000').replace('w=1000', 'w=1600')} alt={shown[index].alt} />
            <figcaption>{shown[index].alt} · <em>stock photo</em> · {index + 1}/{shown.length}</figcaption>
          </figure>
          <button type="button" className="lightbox__btn lightbox__next" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next image">
            <Icon name="chevronR" size={28} />
          </button>
        </div>
      )}
    </section>
  )
}
