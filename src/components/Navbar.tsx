import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getAlternatePath } from '../routeMap';
import './Navbar.css';
import logo from '../assets/logo/KathrineLiving_logo_pos.png';
import closeIcon from '../assets/icons/close.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  // Determine current language from URL
  const isEnglish =
    location.pathname.startsWith('/home') ||
    location.pathname === '/reviews-and-references' ||
    location.pathname === '/how-and-price' ||
    location.pathname === '/what-customers-say' ||
    location.pathname === '/about' ||
    location.pathname === '/contact';

  const lang = isEnglish ? 'en' : 'da';

  // Close mobile menu when clicking outside
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
      if (window.innerWidth >= 769) {
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

  // Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Switch language while keeping the equivalent page
  const switchLanguage = (targetLang: 'da' | 'en') => {
    const newPath = getAlternatePath(location.pathname, targetLang);

    
    navigate(newPath);
  };

  // Close mobile menu after navigation
  const handleMobileNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>

      {/* Logo */}
      <Link to={lang === 'en' ? '/home' : '/'} onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Kathrine Living" height="100" />
      </Link>

      {/* Desktop navigation */}
      <div className="nav-links">

        <NavLink
          to={lang === 'en' ? '/reviews-and-references' : '/indtryk-og-referencer'}
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          {lang === 'en' ? 'Reviews and References' : 'Indtryk og referencer'}
        </NavLink>

        <NavLink
          to={lang === 'en' ? '/how-and-price' : '/hvordan-og-pris'}
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          {lang === 'en' ? 'How and Price' : 'Hvordan og pris'}
        </NavLink>

        <NavLink
          to={lang === 'en' ? '/about' : '/om'}
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          {lang === 'en' ? 'About' : 'Om'}
        </NavLink>

        {/* Language toggle */}
        <div className="language-toggle">
          <button
            className={`language-button ${lang === 'da' ? 'selected' : ''}`}
            onClick={() => switchLanguage('da')}
          >
            DA
          </button>

          <div className="divider">/</div>

          <button
            className={`language-button ${lang === 'en' ? 'selected' : ''}`}
            onClick={() => switchLanguage('en')}
          >
            EN
          </button>
        </div>

        {/* Desktop contact button */}
        {!menuOpen && (
          <NavLink
            to={lang === 'en' ? '/contact' : '/kontakt'}
            className={({ isActive }) =>
              `nav-contact ${isActive ? 'selected' : ''}`
            }
          >
            {lang === 'en' ? 'CONTACT' : 'KONTAKT'}
          </NavLink>
        )}

      </div>

      {/* Burger / close button */}
      <div
        ref={burgerRef}
        className="burger-menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? (
          <img
            className="close-icon"
            src={closeIcon}
            alt="Close menu"
          />
        ) : (
          <span className="burger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        )}
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? 'show-menu' : ''}`}
      >
        <NavLink
          to={lang === 'en' ? '/' : '/indtryk-og-referencer'}
          onClick={handleMobileNavigation}
        >
          {lang === 'en' ? 'Reviews and References' : 'Indtryk og referencer'}
        </NavLink>

        <NavLink
          to={lang === 'en' ? '/how-and-price' : '/hvordan-og-pris'}
          onClick={handleMobileNavigation}
        >
          {lang === 'en' ? 'How and Price' : 'Hvordan og pris'}
        </NavLink>

        <NavLink
          to={lang === 'en' ? '/about' : '/om'}
          onClick={handleMobileNavigation}
        >
          {lang === 'en' ? 'About' : 'Om'}
        </NavLink>

        <NavLink
          to={lang === 'en' ? '/contact' : '/kontakt'}
          onClick={handleMobileNavigation}
        >
          {lang === 'en' ? 'Contact' : 'Kontakt'}
        </NavLink>

        {/* Mobile language toggle */}
        <div className="language-toggle mobile-language-toggle">
          <button
            className={`language-button ${lang === 'da' ? 'selected' : ''}`}
            onClick={() => switchLanguage('da')}
          >
            DA
          </button>

          <div className="divider">/</div>

          <button
            className={`language-button ${lang === 'en' ? 'selected' : ''}`}
            onClick={() => switchLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;