import heroImg from '../../assets/Hero-Banner.jpg'
import truckImg from '../../assets/drawing-truck.png'
import serviceOne from '../../assets/our-serivce-1.jpg'
import serviceTwo from '../../assets/our-serivce-2.jpg'
import hseLeft from '../../assets/tuck-img-left.png'
import hseRight from '../../assets/tuck-img-right.png'
import hseBg from '../../assets/bg-blue-img.jpg'
import hse1 from '../../assets/Hse-img-1.png'
import hse2 from '../../assets/Hse-img-2.png'
import hse3 from '../../assets/Hse-img-3.png'
import hse4 from '../../assets/Hse-img-4.png'
import hse5 from '../../assets/Hse-img-5.png'
import hse6 from '../../assets/Hse-img-6.png'
import hse7 from '../../assets/Hse-img-7.png'
import intelligenceImg from '../../assets/intelligence-img.jpg'
import footerLogo from '../../assets/ayro-footer-logo.png'
import iconFacebook from '../../assets/Facebook.png'
import iconInstagram from '../../assets/Instagram.png'
import iconX from '../../assets/X.png'
import iconLinkedIn from '../../assets/LinkedIn.png'
import iconYoutube from '../../assets/Youtube.png'
import hseGradient from '../../assets/bg-gradient.png'
import arrowWhite from '../../assets/btn-arrow-white.png'
import arrowBlack from '../../assets/btn-arrow-black.png'

export default function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-left">
            <h1>Safety-first operations</h1>
          </div>
          <div className="hero-right">
            <p>
              We've built our reputation by taking even the boldest visions and
              making them achievable realities.
            </p>
            <button className="hero-cta" type="button">
              Contact Us
              <span className="hero-cta-icon">
                <img src={arrowWhite} alt="" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="section-inner">
          <div className="section-top">
            <h2>
              Build to hold
              <br />
              Ambition
            </h2>
            <div className="stat-cards">
              <div className="stat-card">
                <div className="stat-value">150+</div>
                <div className="stat-label">Lorem ipsum</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">150+</div>
                <div className="stat-label">Lorem ipsum</div>
              </div>
            </div>
          </div>

          <p className="section-lead">
            Our water tanker services redefine reliability through a seamless
            blend of efficiency, safety, and performance.
          </p>

          <div className="section-bottom">
            <div className="truck-wrap">
              <img src={truckImg} alt="Water tanker truck" />
            </div>
            <div className="about-block">
              <div className="about-title">
                <span>About us</span>
                <span
                  className="about-line border-reveal"
                  data-border-reveal
                />
              </div>
              <p>
                Established in 2025, the company builds on a strong foundation
                of experience through its close linkage with its sister concern,
                Pakistan Tankers. While operating as a separate entity, it
                carries forward the same mindset, standards, and disciplined
                operational approach. The prestige and legacy developed over
                years of trusted service seamlessly extend across borders. With
                shared values and a commitment to professionalism, both
                organizations reflect consistency and reliability. This
                cross-border heritage reinforces trust while embracing modern,
                efficient operations. Positioned in Dubai, the company
                represents a blend of proven expertise and forward-thinking
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-services">
        <div className="services-inner">
          <div className="services-heading">
            <h2>Our Services</h2>
            <p>
              We provide reliable and efficient transportation solutions to
              meet industry needs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src={serviceOne} alt="Tipping trailers" />
            </div>
          </div>
          <div className="service-meta border-reveal-bottom" data-border-reveal>
              <div>
                <h3>Tipping Trailers</h3>
                <p>
                  Heavy-duty tipping trailer operations supporting construction,
                  infrastructure, and material handling projects.
                </p>
              </div>
              <button className="learn-more" type="button">
                Learn More
                <span className="learn-dot">
                  <img src={arrowBlack} alt="" />
                </span>
              </button>
            </div>

          <div className="service-card">
            <div className="service-image">
              <img src={serviceTwo} alt="Water tanker" />
            </div>
            
          </div>
          <div className="service-meta border-reveal-bottom" data-border-reveal>
              <div>
                <h3>Water Tanker</h3>
                <p>
                  Reliable and efficient water transportation solutions
                  designed to meet commercial and industrial demands.
                </p>
              </div>
              <button className="learn-more" type="button">
                Learn More
                <span className="learn-dot">
                  <img src={arrowBlack} alt="" />
                </span>
              </button>
            </div>

          <div className="service-card">
            <div className="service-image">
              <img src={hse7} alt="Cement bulker" />
            </div>
            
          </div>
          <div className="service-meta border-reveal-bottom" data-border-reveal>
              <div>
                <h3>Cement Bulker</h3>
                <p>
                  Safe and precise bulk cement transportation ensuring timely
                  delivery for large-scale developments.
                </p>
              </div>
              <button className="learn-more" type="button">
                Learn More
                <span className="learn-dot">
                  <img src={arrowBlack} alt="" />
                </span>
              </button>
            </div>
        </div>
      </section>

      <section className="hse-section" style={{ backgroundImage: `url(${hseBg})` }}>
        <div className="hse-angle" aria-hidden="true" />
        <div className="hse-slat hse-slat-left" aria-hidden="true">
          <img src={hseLeft} alt="" />
        </div>
        <div className="hse-slat hse-slat-right" aria-hidden="true">
          <img src={hseRight} alt="" />
        </div>
        <div className="hse-inner">
          <div className="hse-text">
            <h2>HSE (Health, Safety &amp; Environment)</h2>
            <p>
              We place strong emphasis on compliance with HSE guidelines,
              maintaining strict oversight of driver conduct, effective vehicle
              management, and strategic asset utilization to ensure reliable and
              safe operations.
            </p>
            <p>
              With a proactive approach, the company has implemented a digital
              application to manage routine inspections, toolbox talks, and
              scheduled audits. This system enhances transparency, improves
              operational control, and provides greater asset visibility for
              both management and stakeholders.
            </p>
          </div>

          <div className="hse-gallery">
            <div className="hse-tile hse-img-1">
              <img src={hse1} alt="HSE gallery 1" />
            </div>
            <div className="hse-tile hse-img-2">
              <img src={hse2} alt="HSE gallery 2" />
            </div>
            <div className="hse-tile hse-img-3">
              <img src={hse3} alt="HSE gallery 3" />
            </div>
            <div className="hse-tile hse-img-4">
              <img src={hse4} alt="HSE gallery 4" />
            </div>
            <div className="hse-tile hse-img-5">
              <img src={hse5} alt="HSE gallery 5" />
            </div>
            <div className="hse-tile hse-img-6 hse-cta-tile">
              <img src={hse6} alt="HSE gallery 6" />
            </div>
            <div className="hse-tile hse-img-7">
              <img src={hse7} alt="HSE gallery 7" />
            </div>
            <div
              className="hse-gallery-gradient"
              style={{ backgroundImage: `url(${hseGradient})` }}
              aria-hidden="true"
            />
              <button className="hse-cta" type="button">
                View our stunning gallery
                <span className="hse-dot">
                  <img src={arrowWhite} alt="" />
                </span>
              </button>
          </div>
        </div>
      </section>

      <section
        className="intelligence-section"
        style={{ backgroundImage: `url(${intelligenceImg})` }}
      >
        <div className="intelligence-overlay" />
        <div className="intelligence-inner">
          <div className="intelligence-content">
            <h2>
              <span>AYRO</span> Intelligence
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="intelligence-cta" type="button">
              Learn More
              <span className="intelligence-dot">
                <img src={arrowWhite} alt="" />
              </span>
            </button>
          </div>
        </div>
      </section>

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
                  <span className="faq-icon">×</span>
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

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={footerLogo} alt="Ayro Corp" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s
              </p>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Hse</li>
                <li>Ayro Intelligence</li>
                <li>Faqs</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>Tipping Trailers</li>
                <li>Water Bowsers</li>
                <li>Cement Bulkers</li>
              </ul>
            </div>

            <div className="footer-column footer-visit">
              <h4>Visit Us</h4>
              <ul>
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
                  E Street, Block 4, Clifton, Karachi
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
                  0300 702 2061
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
                  info@yourinfo.com
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
            <span>
              Copyright © 2026 All Rights Reserved. Powered by rad.
            </span>
            <div className="footer-links">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies Settings</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
