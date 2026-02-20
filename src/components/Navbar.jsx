import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/ayro-corp-logo.png'
import arrowWhite from '../../assets/btn-arrow-white.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav className={`site-nav ${isSticky ? 'is-sticky' : ''}`}>
      <div className="nav-inner">
        <Link className="logo" to="/">
          <img src={logo} alt="Ayro Corp" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <div className="nav-dropdown">
            <Link className="nav-link nav-dropdown-toggle" to="/services">
              Our Services
              <span className="nav-plus">+</span>
            </Link>
            <div className="nav-dropdown-menu" aria-label="Our Services">
              <Link to="/trailers">Tipping Trailers</Link>
            </div>
          </div>
          <Link className="nav-link intelligence" to="/intelligence">
            <span className="nav-star">*</span>
            Ayro Intelligence
          </Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
        <Link className="nav-cta" to="/contact">
          Contact Us
          <span className="nav-cta-icon">
            <img src={arrowWhite} alt="" />
          </span>
        </Link>
        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-header">
          <img src={logo} alt="Ayro Corp" />
          <button
            className="mobile-close"
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            x
          </button>
        </div>
        <div className="mobile-menu-body">
          <Link to="/" className="mobile-link">Home</Link>
          <div className="mobile-divider" />
          <Link to="/about" className="mobile-link">About</Link>
          <div className="mobile-divider" />
          <div className="mobile-group">
            <span className="mobile-label">Services</span>
            <Link to="/services" className="mobile-sublink">All</Link>
            <Link to="/trailers" className="mobile-sublink">Tipping Trailers</Link>
          </div>
          <div className="mobile-divider" />
          <Link to="/intelligence" className="mobile-link">Ayro Intelligence</Link>
          <div className="mobile-divider" />
          <Link to="/contact" className="mobile-link">Contact</Link>
        </div>
        <div className="mobile-menu-footer">
          <Link className="mobile-cta" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}


