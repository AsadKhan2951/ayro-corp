import innerBanner from '../../assets/inner-hero-banner.jpg'
import arrowBlack from '../../assets/btn-arrow-black.png'

export default function Contact() {
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
              <h1>Contact Us</h1>
            </div>
            <div className="inner-hero-right">
              <p>
                Let us hear from you. Reach out to us with any questions or
                projects. We are here to hear from you.
              </p>
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
              We&apos;re excited to connect with you! Fill out the form below,
              and let&apos;s embark on the journey build your dream office
              space!
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

      <section className="contact-map">
        <div className="contact-map-inner">
          <iframe
            title="Ayro Corp Location"
            src="https://www.google.com/maps?q=E%20Street%2C%20Block%204%2C%20Clifton%2C%20Karachi&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
