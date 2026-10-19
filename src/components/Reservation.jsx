import { useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { business } from '../data/siteContent.js'

const today = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

const empty = { name: '', phone: '', email: '', date: '', time: '', guests: '2', occasion: '', notes: '' }

function validate(v) {
  const e = {}
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

export default function Reservation() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(null)
  const [sending, setSending] = useState(false)

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
      const first = ev.currentTarget.querySelector(`[name="${Object.keys(e)[0]}"]`)
      first?.focus()
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
  const Err = ({ k }) => (err(k) ? <span className="field__err" id={`r-${k}-err`}>{errors[k]}</span> : null)

  const prettyDate = (d) =>
    new Date(`${d}T00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <section className="section reserve" id="reserve">
      <div className="container reserve__grid">
        <div className="reserve__intro">
          <Reveal><p className="eyebrow">Reservations</p></Reveal>
          <Reveal delay={80}><h2 className="section-title">Save us a table?</h2></Reveal>
          <Reveal delay={140}>
            <p className="lead">
              Send a reservation enquiry and the team will get back to you to confirm availability.
            </p>
          </Reveal>
          <Reveal delay={200} className="notice">
            <Icon name="clock" size={20} />
            <p>
              <strong>This is an enquiry, not a confirmed booking.</strong> Your table is reserved only once the cafe
              confirms it with you by phone or message.
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
              <h3>Enquiry received — thank you, {submitted.name.split(' ')[0]}!</h3>
              <p className="success__summary">
                Table for <strong>{submitted.guests}</strong> on <strong>{prettyDate(submitted.date)}</strong> at{' '}
                <strong>{submitted.time}</strong>
                {submitted.occasion && <> · {submitted.occasion}</>}
              </p>
              <p className="success__warn">
                <strong>Not yet confirmed.</strong> The cafe will contact you on {submitted.phone} to confirm your
                reservation. For a faster answer, please call.
              </p>
              <p className="demo-flag">Demo prototype — this enquiry was not actually sent.</p>
              <div className="btn-row btn-row--center">
                <a href={business.phoneHref} className="btn btn--primary"><Icon name="phone" size={17} /> Call to confirm</a>
                <button type="button" className="btn btn--outline" onClick={reset}>New enquiry</button>
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form__row">
                <label className="field">
                  <span>Full name *</span>
                  <input type="text" autoComplete="name" placeholder="Your name" {...field('name')} />
                  <Err k="name" />
                </label>
                <label className="field">
                  <span>Phone *</span>
                  <input type="tel" autoComplete="tel" inputMode="tel" placeholder="98XXXXXXXX" {...field('phone')} />
                  <Err k="phone" />
                </label>
              </div>
              <label className="field">
                <span>Email <em>(optional)</em></span>
                <input type="email" autoComplete="email" placeholder="you@example.com" {...field('email')} />
                <Err k="email" />
              </label>
              <div className="form__row form__row--3">
                <label className="field">
                  <span>Date *</span>
                  <input type="date" min={today()} {...field('date')} />
                  <Err k="date" />
                </label>
                <label className="field">
                  <span>Time *</span>
                  <input type="time" step="900" {...field('time')} />
                  <Err k="time" />
                </label>
                <label className="field">
                  <span>Guests *</span>
                  <select {...field('guests')}>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
                    <option value="15">13–20 guests</option>
                    <option value="25">20+ guests</option>
                  </select>
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
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
