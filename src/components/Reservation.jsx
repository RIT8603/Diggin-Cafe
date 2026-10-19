<<<<<<< HEAD
import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { business, outlets } from '../data/siteContent.js'

const bookable = outlets.filter((o) => !o.comingSoon)
const outletLabel = (o) => `${o.name}, ${o.area}`
const shortName = (o) => (o.sister ? 'Gardin' : o.area)
=======
import { useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { business } from '../data/siteContent.js'
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe

const today = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

<<<<<<< HEAD
const empty = { outlet: '', name: '', phone: '', email: '', date: '', time: '', guests: '2', occasion: '', notes: '' }

function validate(v) {
  const e = {}
  if (!v.outlet) e.outlet = 'Choose an outlet.'
=======
const empty = { name: '', phone: '', email: '', date: '', time: '', guests: '2', occasion: '', notes: '' }

function validate(v) {
  const e = {}
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  const digits = v.phone.replace(/[^\d]/g, '')
  if (!/^(?:91)?[6-9]\d{9}$|^(?:0|91)?11\d{8}$/.test(digits)) e.phone = 'Enter a valid Indian phone number (10 digits).'
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'That email doesn’t look right.'
  if (!v.date) e.date = 'Choose a date.'
  else if (v.date < today()) e.date = 'Date can’t be in the past.'
  if (!v.time) e.time = 'Choose a preferred time.'
  const g = Number(v.guests)
  if (!g || g < 1 || g > 30) e.guests = 'Guests must be between 1 and 30.'
  return e
}

<<<<<<< HEAD
const prettyDate = (d) =>
  new Date(`${d}T00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })

export default function Reservation({ preselect }) {
=======
export default function Reservation() {
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(null)
  const [sending, setSending] = useState(false)

<<<<<<< HEAD
  // "Reserve here" on an outlet card picks that outlet.
  useEffect(() => {
    if (preselect?.id) {
      setSubmitted(null)
      setValues((v) => ({ ...v, outlet: preselect.id }))
      setErrors((e) => ({ ...e, outlet: undefined }))
    }
  }, [preselect])

=======
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
  const set = (k) => (ev) => {
    const next = { ...values, [k]: ev.target.value }
    setValues(next)
    if (touched[k]) setErrors(validate(next))
  }
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }))
    setErrors(validate(values))
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate(values)
    setErrors(e)
    setTouched(Object.fromEntries(Object.keys(empty).map((k) => [k, true])))
    if (Object.keys(e).length) {
<<<<<<< HEAD
      ev.currentTarget.querySelector(`[name="${Object.keys(e)[0]}"]`)?.focus()
=======
      const first = ev.currentTarget.querySelector(`[name="${Object.keys(e)[0]}"]`)
      first?.focus()
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
      return
    }
    // DEMO ONLY: no data leaves the browser. Connect to email/CRM/WhatsApp before launch.
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(values)
    }, 700)
  }

  const reset = () => {
    setValues(empty)
    setErrors({})
    setTouched({})
    setSubmitted(null)
  }

  const err = (k) => touched[k] && errors[k]
  const field = (k) => ({
    id: `r-${k}`,
    name: k,
    value: values[k],
    onChange: set(k),
    onBlur: blur(k),
    'aria-invalid': !!err(k),
    'aria-describedby': err(k) ? `r-${k}-err` : undefined,
  })
<<<<<<< HEAD
  const errMsg = (k) => (err(k) ? <span className="field__err" id={`r-${k}-err`}>{errors[k]}</span> : null)

  const chosen = submitted && outlets.find((o) => o.id === submitted.outlet)
  const waText = submitted &&
    encodeURIComponent(
      `Hi Diggin! Table enquiry for ${outletLabel(chosen)}: ${submitted.guests} guests on ${prettyDate(submitted.date)} at ${submitted.time}. Name: ${submitted.name}, Phone: ${submitted.phone}.`
    )
=======
  const Err = ({ k }) => (err(k) ? <span className="field__err" id={`r-${k}-err`}>{errors[k]}</span> : null)

  const prettyDate = (d) =>
    new Date(`${d}T00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe

  return (
    <section className="section reserve" id="reserve">
      <div className="container reserve__grid">
        <div className="reserve__intro">
          <Reveal><p className="eyebrow">Reservations</p></Reveal>
<<<<<<< HEAD
          <Reveal delay={80}><h2 className="section-title">Book your table</h2></Reveal>
          <Reveal delay={140}>
            <p className="lead">
              Pick an outlet, choose a time and send your request. The team will call you back to confirm.
=======
          <Reveal delay={80}><h2 className="section-title">Save us a table?</h2></Reveal>
          <Reveal delay={140}>
            <p className="lead">
              Send a reservation enquiry and the team will get back to you to confirm availability.
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
            </p>
          </Reveal>
          <Reveal delay={200} className="notice">
            <Icon name="clock" size={20} />
            <p>
<<<<<<< HEAD
              <strong>This is a booking request, not a confirmed reservation.</strong> Your table is held only once the
              outlet confirms it with you by phone or message.
=======
              <strong>This is an enquiry, not a confirmed booking.</strong> Your table is reserved only once the cafe
              confirms it with you by phone or message.
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
            </p>
          </Reveal>
          <Reveal delay={260} className="reserve__call">
            <span>Prefer to talk?</span>
            <a href={business.phoneHref} className="btn btn--outline"><Icon name="phone" size={17} /> {business.phoneDisplay}</a>
          </Reveal>
        </div>

        <Reveal delay={120} className="reserve__card">
          {submitted ? (
            <div className="success" role="status" aria-live="polite">
              <span className="success__icon"><Icon name="check" size={30} /></span>
<<<<<<< HEAD
              <h3>Request received, thank you {submitted.name.split(' ')[0]}!</h3>
              <p className="success__summary">
                <strong>{outletLabel(chosen)}</strong><br />
=======
              <h3>Enquiry received — thank you, {submitted.name.split(' ')[0]}!</h3>
              <p className="success__summary">
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
                Table for <strong>{submitted.guests}</strong> on <strong>{prettyDate(submitted.date)}</strong> at{' '}
                <strong>{submitted.time}</strong>
                {submitted.occasion && <> · {submitted.occasion}</>}
              </p>
              <p className="success__warn">
<<<<<<< HEAD
                <strong>Not confirmed yet.</strong> The {shortName(chosen)} team will contact you on {submitted.phone} to
                confirm. For a faster answer, call {chosen.phone.display}.
              </p>
              <p className="demo-flag">Demo prototype: this request was not actually sent.</p>
              <div className="btn-row btn-row--center">
                <a href={chosen.phone.href} className="btn btn--primary"><Icon name="phone" size={17} /> Call {shortName(chosen)}</a>
                {business.whatsapp && (
                  <a href={`https://wa.me/${business.whatsapp}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                    Send on WhatsApp
                  </a>
                )}
                <button type="button" className="btn btn--outline" onClick={reset}>New request</button>
=======
                <strong>Not yet confirmed.</strong> The cafe will contact you on {submitted.phone} to confirm your
                reservation. For a faster answer, please call.
              </p>
              <p className="demo-flag">Demo prototype — this enquiry was not actually sent.</p>
              <div className="btn-row btn-row--center">
                <a href={business.phoneHref} className="btn btn--primary"><Icon name="phone" size={17} /> Call to confirm</a>
                <button type="button" className="btn btn--outline" onClick={reset}>New enquiry</button>
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
<<<<<<< HEAD
              <fieldset className="field field--outlets">
                <legend>Outlet *</legend>
                <div className="outlet-pick">
                  {bookable.map((o) => (
                    <label key={o.id} className={`outlet-pick__opt ${values.outlet === o.id ? 'is-on' : ''}`}>
                      <input type="radio" name="outlet" value={o.id} checked={values.outlet === o.id} onChange={set('outlet')} onBlur={blur('outlet')} />
                      <span>{shortName(o)}</span>
                      {o.sister && <small>{o.area}</small>}
                    </label>
                  ))}
                </div>
                {errMsg('outlet')}
              </fieldset>
=======
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
              <div className="form__row">
                <label className="field">
                  <span>Full name *</span>
                  <input type="text" autoComplete="name" placeholder="Your name" {...field('name')} />
<<<<<<< HEAD
                  {errMsg('name')}
=======
                  <Err k="name" />
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
                </label>
                <label className="field">
                  <span>Phone *</span>
                  <input type="tel" autoComplete="tel" inputMode="tel" placeholder="98XXXXXXXX" {...field('phone')} />
<<<<<<< HEAD
                  {errMsg('phone')}
                </label>
              </div>
=======
                  <Err k="phone" />
                </label>
              </div>
              <label className="field">
                <span>Email <em>(optional)</em></span>
                <input type="email" autoComplete="email" placeholder="you@example.com" {...field('email')} />
                <Err k="email" />
              </label>
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
              <div className="form__row form__row--3">
                <label className="field">
                  <span>Date *</span>
                  <input type="date" min={today()} {...field('date')} />
<<<<<<< HEAD
                  {errMsg('date')}
=======
                  <Err k="date" />
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
                </label>
                <label className="field">
                  <span>Time *</span>
                  <input type="time" step="900" {...field('time')} />
<<<<<<< HEAD
                  {errMsg('time')}
=======
                  <Err k="time" />
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
                </label>
                <label className="field">
                  <span>Guests *</span>
                  <select {...field('guests')}>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
                    <option value="15">13–20 guests</option>
                    <option value="25">20+ guests</option>
                  </select>
<<<<<<< HEAD
                  {errMsg('guests')}
                </label>
              </div>
              <div className="form__row">
                <label className="field">
                  <span>Email <em>(optional)</em></span>
                  <input type="email" autoComplete="email" placeholder="you@example.com" {...field('email')} />
                  {errMsg('email')}
                </label>
                <label className="field">
                  <span>Occasion <em>(optional)</em></span>
                  <select {...field('occasion')}>
                    <option value="">Just dining</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Date night</option>
                    <option>Business meeting</option>
                    <option>Group celebration</option>
                  </select>
                </label>
              </div>
              <label className="field">
                <span>Special requests <em>(optional)</em></span>
                <textarea rows="3" maxLength={400} placeholder="Indoor or outdoor seating, dietary needs…" {...field('notes')} />
              </label>
              <button type="submit" className="btn btn--primary btn--block" disabled={sending}>
                {sending ? 'Sending…' : 'Send Booking Request'}
              </button>
              <p className="form__fine">Bookings are subject to availability and require confirmation from the outlet.</p>
=======
                  <Err k="guests" />
                </label>
              </div>
              <label className="field">
                <span>Occasion <em>(optional)</em></span>
                <select {...field('occasion')}>
                  <option value="">Just dining</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Date night</option>
                  <option>Business meeting</option>
                  <option>Group celebration</option>
                </select>
              </label>
              <label className="field">
                <span>Special requests <em>(optional)</em></span>
                <textarea rows="3" maxLength={400} placeholder="Seating preference, dietary needs…" {...field('notes')} />
              </label>
              <button type="submit" className="btn btn--primary btn--block" disabled={sending}>
                {sending ? 'Sending…' : 'Send Reservation Enquiry'}
              </button>
              <p className="form__fine">
                Reservations are subject to availability and require confirmation from the cafe.
              </p>
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
