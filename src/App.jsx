import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Trailers from './pages/Trailers'
import Contact from './pages/Contact'
import Intelligence from './pages/Intelligence'

function BorderRevealObserver() {
  const location = useLocation()

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll('[data-border-reveal]')
    )

    const serviceTargets = Array.from(
      document.querySelectorAll('.service-reveal')
    )

    const revealTargets = Array.from(
      document.querySelectorAll('[data-reveal]')
    )

    if (
      targets.length === 0 &&
      serviceTargets.length === 0 &&
      revealTargets.length === 0
    )
      return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains('service-reveal')) {
            entry.target.classList.toggle('is-revealed', entry.isIntersecting)
            entry.target.classList.toggle('is-hidden', !entry.isIntersecting)
            return
          }

          if (entry.target.hasAttribute('data-reveal')) {
            entry.target.classList.toggle('is-revealed', entry.isIntersecting)
            return
          }

          entry.target.classList.toggle('is-revealed', entry.isIntersecting)
        })
      },
      {
        threshold: 0.35,
      }
    )

    targets.forEach((target) => {
      target.classList.remove('is-revealed')
      observer.observe(target)
    })

    serviceTargets.forEach((target) => {
      target.classList.remove('is-revealed', 'is-hidden')
      observer.observe(target)
    })

    revealTargets.forEach((target) => {
      target.classList.remove('is-revealed')
      observer.observe(target)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return null
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <BorderRevealObserver />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trailers" element={<Trailers />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
