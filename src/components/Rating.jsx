import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { business } from '../data/siteContent.js'

function Stars({ value }) {
  // Partial star fill based on the real rating value.
  const pct = (value / 5) * 100
  const row = [0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={26} filled />)
  return (
    <span className="stars-big" role="img" aria-label={`${value} out of 5 stars`}>
      <span className="stars-big__base">{row}</span>
      <span className="stars-big__fill" style={{ width: `${pct}%` }}>{row}</span>
    </span>
  )
}

export default function Rating() {
  return (
    <section className="rating" id="reviews">
      <div className="container rating__inner">
        <Reveal className="rating__score">
          <span className="rating__num">{business.rating}<small>/5</small></span>
          <Stars value={business.rating} />
          <p>Based on <strong>{business.reviewCount.toLocaleString('en-IN')}</strong> reviews on Google</p>
        </Reveal>
        <Reveal className="rating__copy" delay={120}>
          <p className="eyebrow">Loved by Delhi</p>
          <h2>Over sixteen thousand guests have shared their experience.</h2>
          <p className="muted">
            See what real guests say on the official Google profile. Reviews live on Google and are not reproduced here.
          </p>
          <div className="btn-row">
<<<<<<< HEAD
            <a href={business.googleUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Read reviews on Google <Icon name="arrow" size={18} />
            </a>
            <a href={business.googleUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
=======
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Read reviews on Google <Icon name="arrow" size={18} />
            </a>
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
              Leave a review
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
