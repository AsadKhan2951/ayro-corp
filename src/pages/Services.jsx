import innerBanner from '../../assets/inner-hero-banner.jpg'
import serviceOne from '../../assets/our-serivce-1.jpg'
import serviceTwo from '../../assets/our-serivce-2.jpg'
import serviceThree from '../../assets/Hse-img-7.png'
import arrowBlack from '../../assets/btn-arrow-black.png'

export default function Services() {
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
              <h1>
                Our Full Range of
                <br />
                Services
              </h1>
            </div>
            <div className="inner-hero-right">
              <p>
                Our all-in services make the process easy and enjoyable from
                start to finish. Let&apos;s talk about the possibilities!
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
                Reliable and efficient water transportation solutions designed
                to meet commercial and industrial demands.
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
              <img src={serviceThree} alt="Cement bulker" />
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
    </>
  )
}
