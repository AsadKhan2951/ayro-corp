import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
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

    if (targets.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
    </BrowserRouter>
  )
}

export default App
