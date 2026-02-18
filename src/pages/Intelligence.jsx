import heroBanner from '../../assets/ayro-intelligence-hero-banner.png'
import truckWire from '../../assets/ayro-intelligence-truck-img.png'
import svgLine from '../../assets/svg-line.svg'
import transportationImg from '../../assets/transporation-industry.png'
import waveImg from '../../assets/3d-animated-img.png'
import legacyImg from '../../assets/legacy-operation.jpg'
import futureImg from '../../assets/future-transpotaion.jpg'

export default function Intelligence() {
  return (
    <>
      <section
        className="intelligence-hero"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="intelligence-hero-overlay" aria-hidden="true" />
        <div className="intelligence-hero-content">
          <div className="intelligence-hero-body">
            <h1>
              Powering the Future of
              <br />
              Transportation Through
              <br />
              Artificial Intelligence
            </h1>
            <p className="intelligence-subtitle">
              The transportation industry is evolving
              <br />
              — and so is AYRO.
            </p>
            <p className="intelligence-copy">
              AYRO Intelligence is our next-generation AI engine designed
              specifically for the transportation and logistics sector. Built on
              real operational challenges, AYRO Intelligence enables transport
              businesses to run smarter, faster, and more proactively in an
              industry where time, safety, cost, and precision define success.
            </p>
          </div>
        </div>
      </section>

      <section className="intelligence-exists">
        <div className="intelligence-exists-inner">
          <div className="exists-left">
            <div className="exists-copy">
              <h2>
                Why AYRO
                <br />
                Intelligence Exists
              </h2>
              <div className="exists-divider" />
              <p>
                Traditional systems report what already happened. AYRO
                Intelligence predicts what&apos;s about to happen. By combining
                operational data, fleet behavior, environmental factors, and
                performance patterns, AYRO Intelligence transforms daily
                operations into actionable insights — allowing companies to move
                from reaction to anticipation.
              </p>
            </div>
            <img className="exists-truck" src={truckWire} alt="" />
          </div>

          <div className="exists-line" aria-hidden="true">
            <img src={svgLine} alt="" />
            {/* <span className="line-scan" /> */}
          </div>

          <div className="exists-right">
            <article className="exists-card is-featured">
              <div className="exists-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 18L18 6M10 6h8v8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3>Rising operational costs</h3>
                <p>
                  Operational costs are spiraling. Fuel, maintenance, and hidden
                  inefficiencies bleed margins dry.
                </p>
              </div>
            </article>

            <article className="exists-card">
              <div className="exists-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 7v5l3 2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3>Tight delivery timelines</h3>
                <p>
                  Operational costs are spiraling. Fuel, maintenance, and hidden
                  inefficiencies bleed margins dry.
                </p>
              </div>
            </article>

            <article className="exists-card">
              <div className="exists-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 4l7 3v5c0 4.2-2.6 7.2-7 8-4.4-.8-7-3.8-7-8V7l7-3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 12.5l2 2 3.5-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3>Safety and compliance pressures</h3>
                <p>
                  Operational costs are spiraling. Fuel, maintenance, and hidden
                  inefficiencies bleed margins dry.
                </p>
              </div>
            </article>

            <article className="exists-card">
              <div className="exists-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 7h14v5c0 4.5-3 7.6-7 8-4-.4-7-3.5-7-8V7Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12h6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3>Asset underutilization</h3>
                <p>
                  Operational costs are spiraling. Fuel, maintenance, and hidden
                  inefficiencies bleed margins dry.
                </p>
              </div>
            </article>

            <article className="exists-card">
              <div className="exists-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 7.5v2.5m0 4v2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8.5 15.5l-1.5 1.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.5 15.5l1.5 1.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3>Reactive decision-making</h3>
                <p>
                  Operational costs are spiraling. Fuel, maintenance, and hidden
                  inefficiencies bleed margins dry.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="intelligence-delivers">
        <div className="intelligence-delivers-inner">
          <h2>What AYRO Intelligence Delivers</h2>

          <div className="delivers-grid">
            <article className="deliver-card">
              <div className="deliver-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 18h6m-5-2v-1m4 1v-1"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.5 9.5a4.5 4.5 0 1 1 9 0c0 1.7-.8 2.6-1.7 3.4-.6.6-.8 1.2-.8 2.1h-4c0-.9-.2-1.5-.8-2.1-.9-.8-1.7-1.7-1.7-3.4Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Smarter Operations</h3>
              <p>
                AYRO Intelligence monitors fleet activity and operations in real
                time, identifying inefficiencies early to optimize dispatch,
                improve asset use, and streamline daily performance.
              </p>
            </article>

            <article className="deliver-card">
              <div className="deliver-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 14a8 8 0 1 1 16 0"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 12l3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="16.5"
                    r="1.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              <h3>Faster, Data-Driven Decisions</h3>
              <p>
                No more decisions based on assumptions or delayed reports. AYRO
                Intelligence delivers real-time insights for confident,
                data-driven decisions across operations, planning, and growth.
              </p>
            </article>

            <article className="deliver-card">
              <div className="deliver-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 4l7 3v5c0 4.2-2.6 7.2-7 8-4.4-.8-7-3.8-7-8V7l7-3Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 12.5l2 2 3.5-4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Proactive Risk &amp; Safety Intelligence</h3>
              <p>
                Safety is not an afterthought — it&apos;s built into the system.
                AYRO Intelligence helps identify risk patterns related to driver
                behavior, equipment usage, and operational stress points,
                enabling preventive action instead of incident response.
              </p>
            </article>

            <article className="deliver-card deliver-card--wide">
              <div className="deliver-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 8v4l3 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M4 12h2m12 0h2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Predictive Maintenance &amp; Asset Health</h3>
              <p>
                Heavy transport assets demand precision. AYRO Intelligence
                monitors performance indicators to anticipate maintenance needs,
                reduce downtime, and extend asset life — protecting both revenue
                and reliability.
              </p>
            </article>

            <article className="deliver-card">
              <div className="deliver-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <ellipse
                    cx="12"
                    cy="7"
                    rx="6"
                    ry="3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M6 7v4c0 1.7 2.7 3 6 3s6-1.3 6-3V7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M6 11v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              <h3>Cost Optimization at Scale</h3>
              <p>
                AYRO Intelligence uncovers hidden cost drivers across routes,
                fuel, downtime, and assets — reducing waste without compromising
                service quality.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="intelligence-built">
        <img className="built-wave" src={waveImg} alt="" aria-hidden="true" />
        <div className="intelligence-built-inner">
          <div className="built-copy">
            <h2>
              Built for the
              <br />
              Transportation
              <br />
              Industry
            </h2>
            <p className="built-subtitle">
              AYRO Intelligence is designed with a deep understanding of:
            </p>
            <ul className="built-list">
              <li>Tipping trailers and bulk transport operations</li>
              <li>Water tanker logistics and scheduling</li>
              <li>Cement bulkers and high-capacity asset movement</li>
              <li>Safety, compliance, and environmental responsibility</li>
            </ul>
            
          </div>
          

          <div className="built-image">
            <img src={transportationImg} alt="Transportation industry" />
          </div>
        </div>
        <p className="built-footnote">
              It reflects the operational DNA of AYRO — precision,
              accountability, and scale — while introducing a new layer of
              intelligence that elevates how transport businesses operate in the
              field.
            </p>
      </section>

      <section
        className="intelligence-legacy"
        style={{ backgroundImage: `url(${legacyImg})` }}
      >
        <div className="legacy-overlay" aria-hidden="true" />
        <div className="legacy-inner">
          <div className="legacy-content">
            <h2>
              From Legacy Operations
              <br />
              to Intelligent Mobility
            </h2>
            <p>
              AYRO brings with it the operational experience and mindset of a
              proven transportation legacy, linked to its sister concern Pakistan
              Tankers, while operating with a modern, forward-looking approach in
              the UAE market.
            </p>
            <p className="legacy-subtitle">
              AYRO Intelligence represents the natural evolution of that legacy:
            </p>
            <ul className="legacy-list">
              <li>Same values</li>
              <li>Same professionalism</li>
              <li>A smarter, AI-driven future</li>
            </ul>
            <p className="legacy-footnote">
              This initiative ensures that AYRO — and the businesses it serves —
              remain future-ready in an increasingly data-driven world.
            </p>
          </div>
        </div>
      </section>

      <section className="intelligence-future">
        <div className="future-inner">
          <div className="future-image">
            <img src={futureImg} alt="Future transportation" />
          </div>
          <div className="future-content">
            <h2>
              Shaping the Future
              <br />
              of Transportation
            </h2>
            <p className="future-subtitle">The future of transportation will be:</p>
            <ul className="future-list">
              <li>Predictive, not reactive</li>
              <li>Intelligent, not manual</li>
              <li>Proactive, not delayed</li>
            </ul>
            <div className="future-divider" />
            <p className="future-commit">
              AYRO Intelligence is our
              <br />
              commitment to that future.
            </p>
            <p className="future-note">
              As the transportation industry moves toward smarter infrastructure
              and AI-assisted operations, AYRO Intelligence positions businesses
              to lead — not follow — the transformation.
            </p>
          </div>
        </div>

        <div className="future-cta">
          <div>
            <h3>AYRO Intelligence</h3>
            <p>Intelligence that moves you forward</p>
          </div>
          <button type="button" className="future-cta-btn">
            Talk to our experts
            <span className="future-cta-icon">↗</span>
          </button>
        </div>
      </section>
    </>
  )
}
