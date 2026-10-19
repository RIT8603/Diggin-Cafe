import Icon from './Icons.jsx'
import { business, hero } from '../data/siteContent.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${hero.image})` }}
        role="img"
        aria-label="Illustrative stock photo of a cafe interior"
      />
      <div className="hero__shade" />
      <div className="container hero__content">
        <p className="eyebrow eyebrow--light hero__anim" style={{ '--d': '100ms' }}>{hero.eyebrow}</p>
        <h1 className="hero__title hero__anim" style={{ '--d': '250ms' }}>
          Good Food.<br /><em>Beautiful Moments.</em>
        </h1>
        <p className="hero__sub hero__anim" style={{ '--d': '420ms' }}>{hero.subhead}</p>
        <div className="hero__ctas hero__anim" style={{ '--d': '560ms' }}>
          <a href="#reserve" className="btn btn--cream">Reserve a Table <Icon name="arrow" size={18} /></a>
          <a href="#menu" className="btn btn--ghost-light">Explore the Menu</a>
        </div>
        <a href="#reviews" className="hero__badge hero__anim" style={{ '--d': '700ms' }}>
          <span className="hero__badge-score">{business.rating}</span>
          <span className="hero__badge-text">
            <span className="stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={13} filled />)}
            </span>
            <small>{business.reviewCount.toLocaleString('en-IN')} Google reviews</small>
          </span>
        </a>
      </div>
      <a href="#reviews" className="hero__scroll" aria-label="Scroll to reviews"><span /></a>
    </section>
  )
}
