import heroVideo from '../../assets/Dubai, UAE.mp4'
import heroLogo from '../../assets/ayro-video-title.png'
import homeAboutImg from '../../assets/home-about-us-img.png'
import tippingVideo from '../../assets/Tipping trailer.mp4'
import waterVideo from '../../assets/Water tanker.mp4'
import cementVideo from '../../assets/Cement.mp4'
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
import hseGradient from '../../assets/bg-gradient.png'
import arrowWhite from '../../assets/btn-arrow-white.png'
import arrowBlack from '../../assets/btn-arrow-black.png'
import whyAyroImg from '../../assets/why-ayro.png'
import DotGrid from '../components/reactbits/DotGrid/DotGrid'

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <img className="hero-logo" src={heroLogo} alt="Ayro Corp" />
        <div className="hero-content">
          <div className="hero-left">
            <h1>Safety-first operations</h1>
          </div>
          <div className="hero-right">
            <p>
              Modern logistics solutions in the UAE delivering construction, infrastructure, and industrial transport with efficiency, safety, and reliability.
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
          <div className="home-about">
            <div className="home-about-media">
              <img src={homeAboutImg} alt="AYRO logistics fleet" />
            </div>
            <div className="home-about-content">
              <h2>About us</h2>
              <p className="home-about-subtitle">
                A Modern Logistics Company Built on
                <br />
                Proven Foundations
              </p>
              <div className="home-about-line" />
              <p className="home-about-copy">
                AYRO Corp is a UAE-based logistics company delivering high-capacity
                transport solutions for construction and infrastructure projects.
                Established in 2025, AYRO brings forward the operational discipline,
                safety culture, and professionalism of its sister concern, Pakistan
                Tankers. While operating independently in the UAE market, our
                standards reflect cross-border expertise. Different companies. Same
                mindset. Same commitment to excellence.
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

          <div className="service-card service-reveal">
            <div className="service-image">
              <video
                src={tippingVideo}
                autoPlay
                muted
                loop
                playsInline
              />
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

          <div className="service-card service-reveal">
            <div className="service-image">
              <video
                src={waterVideo}
                autoPlay
                muted
                loop
                playsInline
              />
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

          <div className="service-card service-reveal">
            <div className="service-image">
              <video
                src={cementVideo}
                autoPlay
                muted
                loop
                playsInline
              />
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

      <section className="why-ayro">
        <div className="why-ayro-inner">
          <div className="why-ayro-media">
            <img src={whyAyroImg} alt="Why AYRO" />
          </div>
          <div className="why-ayro-content">
            <h2>Why AYRO</h2>
            <ul>
              <li>Modern fleet equipped with premium hydraulic systems</li>
              <li>Strict HSE compliance and safety-first operations</li>
              <li>Experienced operators and trained drivers</li>
              <li>UAE-focused operational infrastructure</li>
              <li>Backed by cross-border legacy standards</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hse-section" style={{ backgroundImage: `url(${hseBg})` }}>
        <div className="hse-angle" aria-hidden="true" />
        <DotGrid
          className="hse-dotgrid"
          dotSize={6}
          gap={32}
          baseColor="#1f2b6d"
          activeColor="#9fb5ff"
          proximity={140}
          speedTrigger={120}
          shockRadius={220}
          shockStrength={4}
          maxSpeed={4200}
          resistance={850}
          returnDuration={1.3}
        />
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
            <div className="hse-tile hse-img-1 reveal-fade-up" data-reveal>
              <img src={hse1} alt="HSE gallery 1" />
            </div>
            <div className="hse-tile hse-img-2 hse-tile--raised reveal-fade-up" data-reveal>
              <img src={hse2} alt="HSE gallery 2" />
            </div>
            <div className="hse-tile hse-img-3 reveal-fade-up" data-reveal>
              <img src={hse3} alt="HSE gallery 3" />
            </div>
            <div className="hse-tile hse-img-4 reveal-fade-up" data-reveal>
              <img src={hse4} alt="HSE gallery 4" />
            </div>
            <div className="hse-tile hse-img-5 reveal-fade-up" data-reveal>
              <img src={hse5} alt="HSE gallery 5" />
            </div>
            <div className="hse-tile hse-img-6 hse-cta-tile reveal-fade-up" data-reveal>
              <img src={hse6} alt="HSE gallery 6" />
            </div>
            <div className="hse-tile hse-img-7 reveal-fade-up" data-reveal>
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
              AYRO Intelligence is our next-generation AI engine designed specifically for the transportation and logistics sector. Built on real operational challenges, AYRO Intelligence enables transport businesses to run smarter, faster, and more proactively in an industry where time, safety, cost, and precision define success.
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



    </>
  )
}

