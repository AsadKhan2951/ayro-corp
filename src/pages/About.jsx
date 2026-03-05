import innerBanner from '../../assets/inner-hero-banner.jpg'
import ourValueImg from '../../assets/our-value.png'

export default function About() {
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
              <h1>About us</h1>
            </div>
            <div className="inner-hero-right">
              <p>
                AYRO Corp was established in 2025 to serve the growing infrastructure and construction sector of the UAE with dependable, high-capacity transport solutions. AYRO is connected to its sister concern, Pakistan Tankers — a respected family business known for operational excellence and industry prestige. The same discipline. The same safety standards. The same professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-company">
        <div className="about-company-inner">
          <h2>About our company</h2>
          <div className="about-company-line" />
          <p>
            With a team of experienced professionals in logistics, operations,
            and fleet management, we prioritize quality, safety, and customer
            satisfaction in every assignment. Our modern fleet of water tankers,
            tipping trailers, and cement bulkers reflects our commitment to
            delivering reliable transport solutions, equipped to meet industry
            standards, ensure timely deliveries, and support large-scale
            construction and industrial projects.
          </p>
        </div>
      </section>
      <section className="about-mv">
        <div className="about-mv-inner">
          <div className="about-mv-card">
            <span>Our Mission</span>
            <div className="about-mv-line" />
            <p>
              To deliver reliable, safe, and scalable logistics solutions that
              support infrastructure growth across the UAE while maintaining
              uncompromising operational standards.
            </p>
          </div>
          <div className="about-mv-divider" />
          <div className="about-mv-card">
            <span>Our Vision</span>
            <div className="about-mv-line" />
            <p>
              To become a leading logistics and bulk transport provider in the
              UAE by combining operational excellence with intelligent
              technology. We aim to integrate AI-driven logistics systems to
              enhance efficiency, fleet management, predictive maintenance, and
              route optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-inner">
          <div className="about-values-media">
            <img src={ourValueImg} alt="Our values" />
          </div>
          <div className="about-values-content">
            <h3>Values</h3>
            <ul>
              <li>Safety First</li>
              <li>Operational Discipline</li>
              <li>Integrity in Every Contract</li>
              <li>Environmental Responsibility</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
