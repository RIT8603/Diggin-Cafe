import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import { business } from '../data/siteContent.js'

const links = [
  { href: '#reviews', label: 'Reviews' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#outlets', label: 'Outlets' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Body scroll is locked while the drawer is open, so unlock before jumping to the section.
  const close = (e) => {
    if (!open) return
    const href = e.currentTarget.getAttribute('href')
    e.preventDefault()
    setOpen(false)
    document.body.style.overflow = ''
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', href)
  }

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="logo" aria-label="DIGGIN CAFE home" onClick={close}>
          <span className="logo__mark"><Icon name="leaf" size={18} /></span>
          <span className="logo__text">DIGGIN<span>CAFE</span></span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href ? 'is-active' : ''} onClick={close}>
              {l.label}
            </a>
          ))}
          <div className="nav__mobile-extra">
            <a href={business.phoneHref} className="nav__phone">
              <Icon name="phone" size={16} /> {business.phoneDisplay}
            </a>
            <a href="#reserve" className="btn btn--primary" onClick={close}>Reserve a Table</a>
          </div>
        </nav>

        <div className="nav__actions">
          <a href={business.phoneHref} className="nav__call" aria-label={`Call ${business.phoneDisplay}`}>
            <Icon name="phone" size={17} />
          </a>
          <a href="#reserve" className="btn btn--primary btn--sm nav__cta">Reserve</a>
          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
