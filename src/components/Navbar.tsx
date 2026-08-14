import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/logo/KathrineLiving_logo_pos.png';
import closeIcon from '../assets/icons/close.svg';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <Link to="/">
        <img src={logo} alt="Kathrine Living" height="100" />
      </Link>

      <div className="nav-links">
        <Link to="/inspiration">Inspiration</Link>
        <Link to="/hvordan-og-pris">Hvordan og pris</Link>
        <Link to="/det-siger-kunderne">Det siger kunderne</Link>
        <Link to="/om">Om</Link>
        {!menuOpen && (
            <Link to="/kontakt" className="nav-contact">
                KONTAKT
            </Link>
            )}
      </div>

      <div
        ref={burgerRef}
        className="burger-menu d-flex d-md-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
                <img className="close-icon" src={closeIcon} height="100" />

            ) : (
                <span className="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            )}
        </div>

      <div ref={menuRef} className={`mobile-menu ${menuOpen ? 'show-menu' : ''}`}>
        <Link to="/inspiration">Inspiration</Link>
        <Link to="/hvordan-og-pris">Hvordan og pris</Link>
        <Link to="/det-siger-kunderne">Det siger kunderne</Link>
        <Link to="/om">Om</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}

export default Navbar;