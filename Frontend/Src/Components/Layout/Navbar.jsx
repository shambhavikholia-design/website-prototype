import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home',       path: '/' },
    { label: 'About Us',   path: '/about' },
    { label: 'Resources',  path: '/resources' },
    { label: 'Standards',  path: '/standards' },
    { label: 'Contact',    path: '/contact' },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar__logo">
        <div className="navbar__logo-icon">✦</div>
        <div className="navbar__logo-text">
          <span className="navbar__logo-mdr">MDR</span>
          <span className="navbar__logo-connects">Connects</span>
          <p className="navbar__logo-tagline">REPROCESS. RELY. PROTECT.</p>
        </div>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link to="/contact" className="navbar__cta">
        Get Started
      </Link>

      {/* Hamburger for mobile */}
      <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
