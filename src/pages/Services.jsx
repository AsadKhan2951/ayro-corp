import innerBanner from '../../assets/our-service-top-banner.png'
import serviceOne from '../../assets/our-serivce-1.png'
import serviceTwo from '../../assets/our-serivce-2.png'
import serviceThree from '../../assets/our-serivce-3.png'
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
                Tri-Axle and 2-Axle tipping trailers designed for efficient bulk
                material transport.
              </p>
              <ul className="service-list">
                <li>Equipped with HYVA hydraulic jacks</li>
                <li>Loading capacity up to 45 CBM</li>
                <li>Suitable for construction materials and bulk transport</li>
              </ul>
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
                Sweet and Salt water supply for construction, industrial, and
                site operations.
              </p>
              <span className="service-label">Available capacities:</span>
              <ul className="service-list">
                <li>10,000 gallons</li>
                <li>5,000 gallons</li>
              </ul>
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
              <p>Bulk cement transportation solutions.</p>
              <span className="service-label">Available capacities:</span>
              <ul className="service-list">
                <li>40 tons</li>
                <li>50 tons</li>
                <li>70 tons</li>
              </ul>
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
