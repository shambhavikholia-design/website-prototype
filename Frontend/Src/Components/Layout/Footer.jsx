import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mdr">MDR</span>
            <span className="footer__logo-connects">Connects</span>
          </div>
          <p className="footer__brand-tagline">REPROCESS. RELY. PROTECT.</p>
          <p className="footer__brand-desc">
            Bringing clarity, compliance, and confidence to every stage of the
            medical device reprocessing cycle.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__col-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/standards">Standards</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

      
        <div className="footer__col">
          <h4 className="footer__col-title">Contact</h4>
          <p>info@mdrconnects.com</p>
          <p>+1 (800) MDR-SAFE</p>
          <p>123 MedTech Drive, Suite 400<br />Boston, MA 02101</p>
        </div>
      </div>

   
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} MDRConnects. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
