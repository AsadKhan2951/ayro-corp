import { Link } from 'react-router-dom'
import logo from '../../assets/ayro-corp-logo.png'
import arrowWhite from '../../assets/btn-arrow-white.png'

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link className="logo" to="/">
          <img src={logo} alt="Ayro Corp" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/services">Our Services +</Link>
          <Link className="nav-link intelligence" to="/intelligence">
            <span className="nav-star">✦</span>
            Ayro Intelligence
          </Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
        <Link className="nav-cta" to="/contact">
          Contact Us
          <span className="nav-cta-icon">
            <img src={arrowWhite} alt="" />
          </span>
        </Link>
      </div>
    </nav>
  )
}
