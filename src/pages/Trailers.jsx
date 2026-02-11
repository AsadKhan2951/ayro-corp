import { useEffect, useRef, useState } from 'react'
import innerBanner from '../../assets/inner-hero-banner.jpg'
import innerBannerCommitted from '../../assets/committed-bg.jpg'
import tippingOne from '../../assets/tipping-trailers-img-1.jpg'
import tippingTwo from '../../assets/tipping-trailers-img-2.png'
import tippingThree from '../../assets/tipping-trailers-img-3.png'

export default function Trailers() {
  const tippingItems = [
    {
      image: tippingOne,
      alt: 'Tipping trailer service 1'
    },
    {
      image: tippingTwo,
      alt: 'Tipping trailer service 2'
    },
    {
      image: tippingThree,
      alt: 'Tipping trailer service 3'
    }
  ]

  const sliderItems = [
    {
      image: tippingOne,
      alt: 'Tipping truck service highlight 1',
      text:
        'We believe in the transformative power of reliable tipping truck services to drive efficient transport. Guided by innovation and a commitment to excellence, we ensure smooth operations and build trust with every client.'
    },
    {
      image: tippingThree,
      alt: 'Tipping truck service highlight 2',
      text:
        'Heavy-duty tipping trailer operations supporting construction, infrastructure, and material handling projects with consistent on-time delivery and dependable logistics.'
    },
    {
      image: tippingTwo,
      alt: 'Tipping truck service highlight 3',
      text:
        'Our fleet is optimized for safe, efficient hauling and streamlined site operations, delivering strong outcomes for complex transport requirements.'
    },
    {
      image: tippingOne,
      alt: 'Tipping truck service highlight 4',
      text:
        'Modern tipping solutions engineered for durability, minimizing downtime and keeping critical projects on schedule.'
    },
    {
      image: tippingThree,
      alt: 'Tipping truck service highlight 5',
      text:
        'Reliable, well-maintained trailers that support large-scale material movement with safety and precision.'
    },
    {
      image: tippingTwo,
      alt: 'Tipping truck service highlight 6',
      text:
        'Smart logistics planning ensures efficient routing and dependable delivery for high-volume transport needs.'
    },
    {
      image: tippingOne,
      alt: 'Tipping truck service highlight 7',
      text:
        'Dedicated operators and robust fleets deliver consistent results across demanding transport environments.'
    }
  ]

  const sliderTrackRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideStep, setSlideStep] = useState(0)

  useEffect(() => {
    const track = sliderTrackRef.current
    if (!track) return undefined

    const updateMetrics = () => {
      const slides = Array.from(track.querySelectorAll('.tipping-slide'))
      if (slides.length === 0) return
      const width = slides[0].offsetWidth
      const step =
        slides.length > 1
          ? slides[1].offsetLeft - slides[0].offsetLeft
          : width
      setSlideStep((prev) => (prev !== step ? step : prev))
    }

    updateMetrics()
    const observer = new ResizeObserver(updateMetrics)
    observer.observe(track)
    window.addEventListener('resize', updateMetrics)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateMetrics)
    }
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches || slideStep === 0) return undefined
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderItems.length)
    }, 3800)
    return () => window.clearInterval(id)
  }, [sliderItems.length, slideStep])

  return (
    <>
      <section
        className="inner-hero"
        style={{ backgroundImage: `url(${innerBanner})` }}
      >
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          <div className="inner-hero-grid">
            <div className="inner-hero-left">
              <h1>Tipping Trailers</h1>
            </div>
            <div className="inner-hero-right">
              <p>
                Our expert team focuses on efficient operations, fleet
                management, and logistics planning for tipping trailers,
                ensuring safe transport, timely deliveries, and cost-effective
                solutions that maximize value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tipping-details">
        <div className="tipping-inner">
          <p className="tipping-intro">
            Providing reliable tipping trailer services for the efficient
            transportation of construction materials, ensuring safe operations,
            timely delivery, and optimized logistics.
          </p>

          {tippingItems.map((item, index) => (
            <div key={item.alt}>
              <div className="tipping-label">Tipping Trailers</div>
              <div className="tipping-divider" />
              <div className="tipping-item">
                <div className="tipping-image">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="tipping-copy">
                  <p>
                    Heavy-duty tipping trailer operations supporting
                    construction, infrastructure, and material handling
                    projects.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="tipping-showcase"
        style={{ backgroundImage: `url(${innerBannerCommitted})` }}
      >
        <div className="tipping-showcase-overlay" />
        <div className="tipping-showcase-inner">
          <div className="tipping-showcase-top">
            <h2>
              Committed to excellence, we deliver reliable
              tipping truck services for efficient and
              dependable material transport.
            </h2>
            <p>
              Vibrant reflections of our success story await. Join us as we
              drive the journey of reliable tipping truck operations,
              supporting impactful projects and building strong possibilities
              for the road ahead.
            </p>
          </div>
          <div className="tipping-showcase-line" />
        </div>

        <div className="tipping-slider">
          <div
            className="tipping-slider-track"
            ref={sliderTrackRef}
            style={{ transform: `translateX(${-activeSlide * slideStep}px)` }}
          >
            {sliderItems.map((item, index) => (
              <div
                key={item.alt}
                className={`tipping-slide ${index === activeSlide ? 'is-active' : ''}`}
              >
                <img src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="tipping-showcase-caption">
          <p>{sliderItems[activeSlide]?.text}</p>
        </div>
      </section>

      <div className="trailers-faq-divider" aria-hidden="true" />
      <section className="trailers-faq">
        <div className="trailers-faq-inner">
          <div className="trailers-faq-left">
            <h2>
              Reasons to Choose our
              <br />
              Investment Consultancy
              <br />
              Services
            </h2>
            <p>
              Our team is dedicated to crafting innovative solutions that
              empower you to reach your financial objectives and navigate the
              complexities of the investment landscape with confidence.
            </p>
          </div>
          <div className="trailers-faq-right">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={`faq-card-${index}`} className="trailers-faq-card">
                <div className="trailers-faq-header">
                  <span className="trailers-faq-icon">×</span>
                  <span>Expert Guidance</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
