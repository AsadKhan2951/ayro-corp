import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import footerLogo from '../../assets/ayro-footer-logo.png'
import iconFacebook from '../../assets/Facebook.png'
import iconInstagram from '../../assets/Instagram.png'
import iconX from '../../assets/X.png'
import iconLinkedIn from '../../assets/LinkedIn.png'
import iconYoutube from '../../assets/Youtube.png'
import arrowBlack from '../../assets/btn-arrow-black.png'

export default function Footer() {
  const location = useLocation()
  const hideContact = location.pathname === '/contact'
  const hideFaq = location.pathname === '/contact'
  const [isMobile, setIsMobile] = useState(false)
  const [openSections, setOpenSections] = useState({
    quick: true,
    services: true,
    visit: true
  })

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)')
    const update = (event) => {
      setIsMobile(event.matches)
    }
    update(media)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setOpenSections({ quick: false, services: false, visit: false })
    } else {
      setOpenSections({ quick: true, services: true, visit: true })
    }
  }, [isMobile])

  const toggleSection = (key) => {
    if (!isMobile) return
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      {!hideFaq && (
        <section className="faq-section">
          <div className="faq-inner">
            <div className="faq-left">
              <span className="faq-label">(FAQs)</span>
              <h2>
                Everything you may
                <br />
                need to know
              </h2>
              <p>
                All insights into our expertise provided in easily digestible
                nuggets. No question too big or small - ask away!
              </p>
              <button className="faq-cta" type="button">
                More Question
                <span className="faq-dot">
                  <img src={arrowBlack} alt="" />
                </span>
              </button>
            </div>

            <div className="faq-right">
              <div className="faq-card">
                <div className="faq-item active">
                  <div className="faq-question">
                    <span className="faq-icon">Ã—</span>
                    <span>What tanker capacities are available?</span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">+</span>
                    <span>
                      What type of cement transportation services do you offer?
                    </span>
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">+</span>
                    <span>
                      Are your cement transport operations monitored and tracked?
                    </span>
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">+</span>
                    <span>Do you supply potable and non-potable water?</span>
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">+</span>
                    <span>
                      What materials can be transported using your tipping
                      trailers?
                    </span>
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">+</span>
                    <span>What is the load capacity of your tipping trailers?</span>
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">+</span>
                    <span>How do you ensure safety during loading and unloading?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {!hideContact && (
        <section className="contact-section">
          <div className="contact-inner">
            <div className="contact-left">
              <h2>
                Send us
                <br />
                your details
              </h2>
              <p>
                We're excited to connect with you! Fill out the form below, and
                let's embark on the journey build your dream office space!
              </p>
            </div>

            <form className="contact-form">
              <div className="contact-row">
                <label>
                  Name
                  <input type="text" />
                </label>
                <label>
                  Last Name
                  <input type="text" />
                </label>
              </div>

              <label>
                Email
                <input type="email" />
              </label>

              <label>
                Tanker
                <input type="text" />
              </label>

              <label>
                Phone No.
                <input type="tel" />
              </label>

              <label>
                Message
                <textarea rows="4" />
              </label>

              <button className="contact-submit" type="button">
                Submit
                <span className="contact-dot">
                  <img src={arrowBlack} alt="" />
                </span>
              </button>
            </form>
          </div>
        </section>
      )}

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={footerLogo} alt="Ayro Corp" />
              <p>
                AYRO Corp delivers reliable transport solutions across tipping
                trailers, water tankers, and bulk logistics. We focus on safety,
                precision, and on-time operations to keep critical projects moving.
              </p>
            </div>

            <div className={`footer-column footer-accordion ${openSections.quick ? 'is-open' : ''}`}>
              <button
                className="footer-accordion-toggle"
                type="button"
                onClick={() => toggleSection('quick')}
                aria-expanded={openSections.quick}
              >
                <span className="footer-accordion-title">Quick Links</span>
                <span className="footer-accordion-icon" aria-hidden="true">
                  {openSections.quick ? '−' : '+'}
                </span>
              </button>
              <ul className="footer-accordion-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/intelligence">Ayro Intelligence</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className={`footer-column footer-accordion ${openSections.services ? 'is-open' : ''}`}>
              <button
                className="footer-accordion-toggle"
                type="button"
                onClick={() => toggleSection('services')}
                aria-expanded={openSections.services}
              >
                <span className="footer-accordion-title">Services</span>
                <span className="footer-accordion-icon" aria-hidden="true">
                  {openSections.services ? '−' : '+'}
                </span>
              </button>
              <ul className="footer-accordion-list">
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/trailers">Tipping Trailers</Link></li>
              </ul>
            </div>

            <div className={`footer-column footer-visit footer-accordion ${openSections.visit ? 'is-open' : ''}`}>
              <button
                className="footer-accordion-toggle"
                type="button"
                onClick={() => toggleSection('visit')}
                aria-expanded={openSections.visit}
              >
                <span className="footer-accordion-title">Visit Us</span>
                <span className="footer-accordion-icon" aria-hidden="true">
                  {openSections.visit ? '−' : '+'}
                </span>
              </button>
              <ul className="footer-accordion-list">
                <li>
                  <span className="visit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M5.5 10.2c0 5.1 6.5 10.8 6.5 10.8s6.5-5.7 6.5-10.8a6.5 6.5 0 1 0-13 0Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
                  CWS-1V-001325, 26th Floor, Amber Gem Tower, Ajman
                </li>
                <li>
                  <span className="visit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7.5 4.5h3l1 4-2 1.5a12 12 0 0 0 4.5 4.5l1.5-2 4 1v3a2 2 0 0 1-2 2A13 13 0 0 1 5.5 6.5a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  0508881375
                </li>
                <li>
                  <span className="visit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <path
                        d="m4 7 8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
                  WhatsApp Us
                </li>
                <li>
                  <span className="visit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 6h16v12H4z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <path
                        d="m4 7 8 5 8-5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
                  info@ayrocorp.ae
                </li>
              </ul>
              <div className="footer-socials">
                <img src={iconFacebook} alt="Facebook" />
                <img src={iconInstagram} alt="Instagram" />
                <img src={iconX} alt="X" />
                <img src={iconLinkedIn} alt="LinkedIn" />
                <img src={iconYoutube} alt="YouTube" />
              </div>
            </div>
          </div>

          <div className="footer-divider border-reveal" data-border-reveal />

          <div className="footer-bottom">
            <span>Copyright (c) 2026 All Rights Reserved. Powered by rad.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
