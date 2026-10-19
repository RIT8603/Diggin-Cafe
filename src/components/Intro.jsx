import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import { intro } from '../data/siteContent.js'

export default function Intro() {
  return (
    <section className="section intro" id="about">
      <div className="container intro__grid">
        <div className="intro__media">
          <Reveal className="intro__img intro__img--a">
            <SmartImage src={intro.images[0]} alt="Illustrative cafe interior (stock photo)" />
          </Reveal>
          <Reveal className="intro__img intro__img--b" delay={150}>
            <SmartImage src={intro.images[1]} alt="Illustrative coffee (stock photo)" />
          </Reveal>
          <span className="intro__leaf" aria-hidden="true"><Icon name="leaf" size={120} /></span>
        </div>
        <div className="intro__copy">
          <Reveal><p className="eyebrow">{intro.eyebrow}</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">{intro.title}</h2></Reveal>
          {intro.paragraphs.map((p, i) => (
            <Reveal key={i} delay={140 + i * 60}><p className="lead">{p}</p></Reveal>
          ))}
          <div className="intro__highlights">
            {intro.highlights.map((h, i) => (
              <Reveal key={h.title} className="highlight" delay={200 + i * 90}>
                <span className="highlight__icon"><Icon name={h.icon} size={22} /></span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
