import { useEffect, useRef, useState } from 'react'
import innerBanner from '../../assets/inner-hero-banner.jpg'
import missionSkyline from '../../assets/about-isolated-dubai-img.png'
import visionImage from '../../assets/about-burj-img.png'
import teamMemberOne from '../../assets/about-emp-img.png'
import teamMemberTwo from '../../assets/about-emp-img-2.png'

export default function About() {
  const timelineScrollRef = useRef(null)
  const timelineTrackRef = useRef(null)
  const timelineInnerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineSlides = [
    {
      year: '2018',
      title: 'Our story',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      year: '2019',
      title: 'Our story',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      year: '2020',
      title: 'Our story',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      year: '2021',
      title: 'Our story',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      year: '2022',
      title: 'Our story',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      year: '2023',
      title: 'Our story',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      year: '2024',
      title: 'Our story',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
  ]

  const teamTop = [
    {
      name: 'Muteeb Qureshi',
      role: 'Chief Executive Officer',
      image: teamMemberOne
    },
    {
      name: 'Muteeb Qureshi',
      role: 'Chief Executive Officer',
      image: teamMemberTwo
    }
  ]

  const teamBottom = [
    {
      name: 'Muteeb Qureshi',
      role: 'Chief Executive Officer',
      image: teamMemberOne
    },
    {
      name: 'Muteeb Qureshi',
      role: 'Chief Executive Officer',
      image: teamMemberOne
    },
    {
      name: 'Muteeb Qureshi',
      role: 'Chief Executive Officer',
      image: teamMemberTwo
    }
  ]

  const scrollToIndex = (index) => {
    const scrollEl = timelineScrollRef.current
    const track = timelineTrackRef.current
    const inner = timelineInnerRef.current
    if (!scrollEl || !track || !inner) return
    if (timelineSlides.length <= 1) return
    const totalScroll = scrollEl.offsetHeight - window.innerHeight
    const progress = index / (timelineSlides.length - 1)
    const target = scrollEl.offsetTop + totalScroll * progress
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  useEffect(() => {
    const scrollEl = timelineScrollRef.current
    const track = timelineTrackRef.current
    const inner = timelineInnerRef.current
    if (!scrollEl || !track || !inner) return undefined

    let rafId = 0
    const isMobile = () => window.innerWidth <= 900

    const getStickyHeight = () => {
      const stickyEl = scrollEl.querySelector('.timeline-sticky')
      return stickyEl ? stickyEl.offsetHeight : window.innerHeight
    }

    const setScrollHeight = () => {
      if (isMobile()) {
        scrollEl.style.height = 'auto'
        return
      }
      const maxTranslate = Math.max(track.scrollWidth - inner.clientWidth, 0)
      const stickyHeight = getStickyHeight()
      scrollEl.style.height = `${stickyHeight + maxTranslate}px`
    }

    const update = () => {
      if (isMobile()) {
        track.style.transform = 'translate3d(0, 0, 0)'
        setActiveIndex(0)
        return
      }
      const maxTranslate = Math.max(track.scrollWidth - inner.clientWidth, 0)
      const stickyHeight = getStickyHeight()
      const totalScroll = scrollEl.offsetHeight - stickyHeight
      const progress = totalScroll > 0
        ? Math.min(
            Math.max((window.scrollY - scrollEl.offsetTop) / totalScroll, 0),
            1
          )
        : 0
      track.style.transform = `translate3d(${-maxTranslate * progress}px, 0, 0)`
      if (timelineSlides.length > 1) {
        const index = Math.round(progress * (timelineSlides.length - 1))
        setActiveIndex(index)
      } else {
        setActiveIndex(0)
      }
    }

    const onScroll = () => {
      if (isMobile()) return
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        update()
        rafId = 0
      })
    }

    const onResize = () => {
      setScrollHeight()
      update()
    }

    setScrollHeight()
    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [timelineSlides.length])

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
                Welcome to The Vertical, where reliability meets excellence in
                the heart of Pakistan&apos;s growing industrial landscape. We
                are a one-stop solution for water tankers, tipping trailers,
                and cement bulkers, committed to delivering high-performance
                transport solutions that support construction, infrastructure,
                and industrial operations with efficiency and trust.
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

      <section className="mission-section">
        <div className="mission-inner">
          <div className="mission-text">
            <div className="mission-heading">
              <h3>Our mission</h3>
              <div className="mission-divider" />
            </div>
            <p>
              Our mission is to deliver reliable and efficient transport
              solutions through water tankers, tipping trailers, and cement
              bulkers. Backed by a skilled team in logistics, operations, and
              fleet management, we are committed to upholding the highest
              standards of quality and safety, ensuring timely deliveries, and
              supporting the growth of construction and industrial projects with
              complete customer satisfaction.
            </p>
          </div>
        </div>
        <div className="mission-skyline" aria-hidden="true">
          <img src={missionSkyline} alt="" />
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-inner">
          <div className="vision-grid">
            <div className="vision-image" aria-hidden="true">
              <img src={visionImage} alt="" />
            </div>
            <div className="vision-content">
              <div className="vision-heading">
                <h3>Vision</h3>
                <div className="vision-line" />
              </div>
              <p>
                Our vision is to become a trusted leader in transport and
                logistics services, setting industry benchmarks through
                dependable water tankers, tipping trailers, and cement bulkers.
                We aim to support Pakistan&apos;s construction and industrial
                growth by delivering safe, timely, and high-quality transport
                solutions driven by operational excellence and customer trust.
              </p>
            </div>
          </div>

          <div className="story-block">
            <h3>Our story</h3>
            <div className="story-line" />
            <p>
              Our story is built on a commitment to reliable transport
              solutions through water tankers, tipping trailers, and cement
              bulkers. Driven by expertise and trust, we continue to support
              Pakistan&apos;s construction and industrial sectors with safe,
              timely, and efficient operations.
            </p>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="timeline-scroll" ref={timelineScrollRef}>
          <div className="timeline-sticky">
            <div className="timeline-inner" ref={timelineInnerRef}>
              <div className="timeline-track" ref={timelineTrackRef}>
                {timelineSlides.map((slide, index) => (
                  <article
                    key={`${slide.year}-${index}`}
                    className={`timeline-slide ${index === 0 ? 'is-outline' : ''}`}
                  >
                    <div className="timeline-top">
                      <span className="timeline-year">{slide.year}</span>
                    </div>
                    <h4>{slide.title}</h4>
                    <p>{slide.text}</p>
                  </article>
                ))}
              </div>
              <div className="timeline-dots">
                {timelineSlides.map((slide, index) => (
                  <button
                    key={`${slide.year}-dot`}
                    type="button"
                    className={`timeline-dot ${index === activeIndex ? 'is-active' : ''}`}
                    onClick={() => scrollToIndex(index)}
                    aria-label={`Go to ${slide.year}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-inner">
          <div className="team-top">
            <div className="team-intro">
              <h3>The skill & soul behind our projects</h3>
              <div className="team-intro-line" />
              <p>
                Meet the visionaries, planners, and technologists who bring
                innovative visions to life.
              </p>
            </div>
            <div className="team-grid team-grid-top">
              {teamTop.map((member, index) => (
                <article key={`team-top-${index}`} className="team-card">
                  <img src={member.image} alt={member.name} />
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="team-divider" />

          <div className="team-grid team-grid-bottom">
            {teamBottom.map((member, index) => (
              <article key={`team-bottom-${index}`} className="team-card">
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
