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
import hseGradient from '../../assets/bg-gradient.png'
import arrowWhite from '../../assets/btn-arrow-white.png'
import arrowBlack from '../../assets/btn-arrow-black.png'
import { motion } from 'motion/react'
import BlurText from '../components/reactbits/BlurText/BlurText'
import DotGrid from '../components/reactbits/DotGrid/DotGrid'

export default function Home() {
  const revealUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }
    }
  }

  const cardStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 }
    }
  }

  const cardReveal = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }
    }
  }

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
            <motion.h2
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5, once: false }}
            >
              Build to hold
              <br />
              Ambition
            </motion.h2>
            <motion.div
              className="stat-cards"
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: false }}
            >
              <motion.div className="stat-card" variants={cardReveal}>
                <div className="stat-value">150+</div>
                <div className="stat-label">Lorem ipsum</div>
              </motion.div>
              <motion.div className="stat-card" variants={cardReveal}>
                <div className="stat-value">150+</div>
                <div className="stat-label">Lorem ipsum</div>
              </motion.div>
            </motion.div>
          </div>

          <BlurText
            className="section-lead"
            text="Our water tanker services redefine reliability through a seamless blend of efficiency, safety, and performance."
            delay={80}
            animateBy="words"
            direction="top"
            threshold={0.25}
          />

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

          <div className="service-card service-reveal">
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

          <div className="service-card service-reveal">
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

          <div className="service-card service-reveal">
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



    </>
  )
}

