import hseBanner from '../../assets/hse-banner.jpg'
import driverManagement from '../../assets/driver-managment-hse.png'
import safetyTraining from '../../assets/saftey-traning-hse.png'
import greenFuture from '../../assets/green-future-hse.png'
import objectiveImg from '../../assets/objective-hse.png'
import vehicleImg from '../../assets/vehicle-hse.png'
import journeyRisk from '../../assets/journy-risk-hse.png'
import healthSafetyImg from '../../assets/healt-safety-hse.png'
import lifeConfined from '../../assets/heart-transplant 1.png'
import lifeHeight from '../../assets/harness 1.png'
import lifeAuthorization from '../../assets/duties 1.png'
import lifeIsolation from '../../assets/bolt 1.png'
import lifeLineFire from '../../assets/fire (1) 1.png'
import lifeBypass from '../../assets/informed-consent 1.png'
import lifeDriving from '../../assets/smart-car 1.png'
import lifeHotWork from '../../assets/fire 1.png'
import lifeMechanical from '../../assets/boom-lift 1.png'
import lifeFit from '../../assets/safety 1.png'
import executiveImg from '../../assets/executive-hse.png'

export default function HSE() {
  return (
    <>
      <section
        className="inner-hero"
        style={{ backgroundImage: `url(${hseBanner})` }}
      >
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          <div className="inner-hero-grid">
            <div className="inner-hero-left">
              <h1>
                Adhering to HSE
                <br />
                Guidelines
              </h1>
            </div>
            <div className="inner-hero-right">
              <p>
                We prioritize compliance with HSE guidelines, ensuring meticulous
                oversight of driver activities, efficient vehicle management,
                and strategic alignment of assets for a seamless operational
                framework. Ayro has a proactive stance, our company has
                implemented a digital application for conducting routine
                inspections, toolbox meetings, and scheduled audits, enhancing
                asset visibility for both management and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hse-driver">
        <div className="hse-driver-inner">
          <div className="hse-driver-media">
            <img src={driverManagement} alt="Driver management" />
          </div>
          <div className="hse-driver-content">
            <h2>Driver Management</h2>
            <ul>
              <li>Recruitment as per HSE control framework</li>
              <li>Fitness test before confirmation</li>
              <li>The maximum driver&apos;s age should be 55</li>
              <li>Planned professional &amp; safety driver&apos;s training</li>
              <li>Strict compliance with the life-saving rules</li>
              <li>Random drug and alcohol testing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hse-safety">
        <div className="hse-safety-inner">
          <h2>Prioritizing Driver Safety, Training, and Well-Being at Ayro</h2>
          <div className="hse-safety-line" />
          <div className="hse-safety-grid">
            <div className="hse-safety-copy">
              <p>
                At Ayro, our commitment to safety begins with comprehensive
                driver training. Our drivers undergo specialized training
                programs, including sessions conducted by the National Highway
                and Motorway Police (NHMP) and in-house training sessions to
                improve their driving skills. Ensuring the highest standards,
                our drivers are licensed professionals, equipped to navigate
                safely through authorized checkpoints, prioritizing legal
                compliance.
              </p>
              <p>
                We go the extra mile to care for our drivers. Regular rest stops
                at authorized locations ensure driver well-being during
                journeys. To safeguard their health, drivers undergo periodic
                health checkups conducted by the reputable hospitals in
                Pakistan.
              </p>
              <p>
                Our dedication to a secure and efficient transportation service.
                It is through these initiatives that our holistic approach to
                driver development, legal compliance, and health management
                reflects Ayro stands as a beacon of excellence, providing not
                just transportation but a commitment to the well-being and
                professionalism of our drivers.
              </p>
            </div>
            <div className="hse-safety-media">
              <img src={safetyTraining} alt="Safety training" />
            </div>
          </div>
        </div>
      </section>

      <section className="hse-dedication">
        <div className="hse-dedication-inner">
          <div className="hse-dedication-top">
            <div className="hse-dedication-left">
              <span className="hse-eyebrow">DEDICATION</span>
              <h3>
                On Schedule,
                <br />
                Every Mile
              </h3>
            </div>
            <div className="hse-dedication-right">
              <p>
                Our dedicated team works tirelessly to optimize routes,
                coordinate efficiently, and preemptively address potential
                challenges, guaranteeing a seamless flow of operations. Whether
                it is coal, limestone, or stone crush in transit, PTC stands as
                a reliable logistics partner and promises on-time delivery,
                reinforcing our commitment to excellence in the transportation
                industry.
              </p>
            </div>
          </div>

          {/* <div className="hse-dedication-divider" /> */}

          <div className="hse-sustain">
            <div className="hse-sustain-head">
              <div />
              <div className="hse-sustain-title">
                <span className="hse-eyebrow">SUSTAINABILITY</span>
                <h3>Working for a green future</h3>
              </div>
            </div>

            <div className="hse-sustain-divider" />

            <div className="hse-sustain-body">
              <div className="hse-sustain-media">
                <img src={greenFuture} alt="Working for a green future" />
              </div>
              <div className="hse-sustain-content">
                <div className="hse-sustain-copy">
                  <p>
                    In our commitment to a greener future, our fleet is equipped
                    with trucks that strictly adhere to emissions standards,
                    actively working to minimize air pollution. By employing
                    fuel-efficient engines, we strive to significantly lower our
                    carbon footprint and contribute meaningfully to a more
                    sustainable environment. Our dedication to environmental
                    responsibility goes beyond compliance; it&apos;s a proactive
                    effort to lead in eco-conscious transportation. We recognize
                    the urgency of addressing climate change, and our choice of
                    sustainable practices reflects our commitment to being part
                    of the solution.
                  </p>
                  <p>
                    Through continuous improvements in fuel efficiency and
                    emission reduction, we aim to set a standard for
                    environmentally conscious logistics. Each journey is an
                    opportunity to not only meet the logistical needs of our
                    clients but also to actively participate in building a
                    healthier, more sustainable future for generations to come.
                    Our pledge is clear: responsible logistics can indeed be a
                    driving force for positive environmental impact, and we are
                    proud to lead the charge toward a greener horizon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hse-assets">
        <div className="hse-assets-inner">
          <div className="hse-assets-row">
            <div className="hse-assets-text">
              <h3>Assets &amp; Objectives</h3>
              <ul>
                <li>
                  Material safety data sheet maintained identifying the hazards
                  associated with the handling of products
                </li>
                <li>
                  Waste disposal is dealt with considering the effects on the
                  environment and is transferred to a SEPA registered waste
                  disposal vendor
                </li>
                <li>
                  Emergency responses are outlined in case of any mishap and
                  availability of ERP equipment is ensured 24/7
                </li>
              </ul>
            </div>
            <div className="hse-assets-media">
              <img src={objectiveImg} alt="Assets and objectives" />
            </div>
          </div>

          <div className="hse-assets-row hse-assets-row--reverse">
            <div className="hse-assets-media">
              <img src={vehicleImg} alt="Vehicle and equipment management" />
            </div>
            <div className="hse-assets-text">
              <h3>Vehicle &amp; Equipment Management</h3>
              <ul>
                <li>
                  To ensure the availability of all the safety equipment with
                  the vehicles
                </li>
                <li>
                  Necessary documents like HSE, route maps, etc. are available
                  with the drivers
                </li>
                <li>
                  PPEs are checked regularly to ensure all items are available
                  and fit for use
                </li>
                <li>
                  Training of staff on usage of PPEs are conducted
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="hse-risk">
        <div className="hse-risk-inner">
          <div className="hse-risk-top">
            <div className="hse-risk-title">
              <h3>
                Journey Risk
                <br />
                Management
              </h3>
            </div>
            <div className="hse-risk-list">
              <ul>
                <li>
                  Route hazard mapping involves physical surveys and
                  identification of authorized and unauthorized routes. Vehicle
                  inspections are carried out before every trip as per the
                  checklist.
                </li>
                <li>
                  Spot checks, while vehicles are on the route, are carried out
                  by supervisors randomly.
                </li>
                <li>
                  Usage of mobile phones and seat belts are checked along with
                  speed limit, driver fatigue, cabin sanitary conditions, etc.
                </li>
                <li>
                  Necessary maintenance of the vehicle is carried out after
                  every trip.
                </li>
                <li>
                  Authorized rest areas and parking are communicated to the
                  driver to be followed strictly.
                </li>
              </ul>
            </div>
          </div>

          <div className="hse-risk-divider" />

          <div className="hse-risk-media">
            <img src={journeyRisk} alt="Journey risk management" />
          </div>

          <div className="hse-risk-divider" />

          <div className="hse-risk-bottom">
            <div className="hse-risk-bottom-title">
              <h3>Spot Checks</h3>
            </div>
            <div className="hse-risk-bottom-copy">
              <p>
                At Ayro we prioritize exceptional service delivery and strict
                adherence to standards. To maintain these high standards, we
                regularly conduct spot checks across all operational areas.
                These spot checks ensure that every aspect of our operations
                meets our rigorous standards, guaranteeing the safety and
                satisfaction of both our employees and customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hse-policy">
        <div className="hse-policy-inner">
          <h2>Health, Safety &amp; Environment</h2>
          <div className="hse-policy-divider" />
          <div className="hse-policy-grid">
            <div className="hse-policy-media">
              <img src={healthSafetyImg} alt="Health, Safety and Environment" />
            </div>
            <div className="hse-policy-list">
              <ul>
                <li>
                  Ensure that all the drivers and vehicles are 100% fit and
                  well equipped.
                </li>
                <li>
                  Develop &amp; implement programs to improve the conduct of
                  business activities in line with HSE Consideration.
                </li>
                <li>
                  Conduct / Participate in training and safety campaigns to
                  increase awareness about safety. Avoid all activities, which
                  may affect the employees of the company as well as the
                  general public and the environment.
                </li>
                <li>
                  Maintain safe and healthy working conditions with the latest
                  technology.
                </li>
                <li>
                  Identify &amp; control Health, Environment &amp; Safety
                  hazards stemming from its operation.
                </li>
                <li>
                  Encourage those who contribute to improving HSE performance.
                </li>
                <li>
                  Work constructively with customers/clients, government
                  agencies, and others to evaluate and develop realistic laws
                  and standards to protect public health, safety, and the
                  environment.
                </li>
                <li>
                  To adopt a proactive approach to deal with unsafe acts and
                  emergencies.
                </li>
                <li>
                  Ensure that all the employees of Pakistan Tankers Company
                  comply with their policies and make a firm commitment that
                  the safety and security of people, environment and assets
                  will be their foremost priority.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="hse-life">
        <div className="hse-life-inner">
          <h2>Life Saving Rules</h2>
          <div className="hse-life-grid">
            <article className="hse-life-card">
              <img src={lifeConfined} alt="Confined space" />
              <span>Confined Space</span>
            </article>
            <article className="hse-life-card">
              <img src={lifeHeight} alt="Working at height" />
              <span>Working at Height</span>
            </article>
            <article className="hse-life-card">
              <img src={lifeAuthorization} alt="Work authorization" />
              <span>Work Authorization</span>
            </article>
            <article className="hse-life-card">
              <img src={lifeIsolation} alt="Energy isolation" />
              <span>Energy Isolation</span>
            </article>
            <article className="hse-life-card">
              <img src={lifeLineFire} alt="Line of fire" />
              <span>Line of Fire</span>
            </article>
            <article className="hse-life-card">
              <img src={lifeBypass} alt="Bypassing safety controls" />
              <span>Bypassing Safety Controls</span>
            </article>
            <article className="hse-life-card">
              <img src={lifeDriving} alt="Driving" />
              <span>Driving</span>
            </article>
            <article className="hse-life-card">
              <img src={lifeHotWork} alt="Hot work" />
              <span>Hot Work</span>
            </article>
            <article className="hse-life-card">
              <img src={lifeMechanical} alt="Safe mechanical lifting" />
              <span>Safe Mechanical Lifting</span>
            </article>
            <article className="hse-life-card">
              <img src={lifeFit} alt="Fit for duty" />
              <span>Fit for Duty</span>
            </article>
          </div>

          <div className="hse-life-exec">
            <div className="hse-life-exec-media">
              <img src={executiveImg} alt="Executive visits" />
            </div>
            <div className="hse-life-exec-content">
              <h3>
                Executive Visits
                <br />
                &amp; Engagement
                <br />
                Initiatives
              </h3>
              <p>
                Regular and surprise visits of the higher management,
                interaction with the captains and base staff for the
                appreciation and objective setting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
