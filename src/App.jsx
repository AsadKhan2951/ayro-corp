import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Trailers from './pages/Trailers'
import Contact from './pages/Contact'
import Intelligence from './pages/Intelligence'

function App() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
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
