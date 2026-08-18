import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAlternatePath } from '../routeMap'
import './Navbar.css'
import logo from '../assets/logo/KathrineLiving_logo_pos.png'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const isEnglish =
        location.pathname.startsWith('/home') ||
        location.pathname === '/inspiration-en' ||
        location.pathname === '/how-and-price' ||
        location.pathname === '/what-customers-say' ||
        location.pathname === '/about' ||
        location.pathname === '/contact'

    const lang = isEnglish ? 'en' : 'da'

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const switchLanguage = (targetLang) => {
        const newPath = getAlternatePath(location.pathname, targetLang)
        navigate(newPath)
    }

    return (
        <nav className={scrolled ? 'scrolled' : ''}>

            <Link to={lang === 'en' ? '/home' : '/'}>
                <img src={logo} alt="Kathrine Living" height="100" />
            </Link>

            <div className="nav-links">

                <NavLink
                    to={lang === 'en' ? '/inspiration-en' : '/inspiration'}
                    className={({ isActive }) =>
                        `${isActive ? 'selected' : ''}`
                    }
                >
                    Inspiration
                </NavLink>

                <NavLink
                    to={lang === 'en' ? '/how-and-price' : '/hvordan-og-pris'}
                    className={({ isActive }) => isActive ? 'selected' : ''}
                >
                    {lang === 'en' ? 'How and price' : 'Hvordan og pris'}
                </NavLink>

                <NavLink
                    to={lang === 'en' ? '/what-customers-say' : '/det-siger-kunderne'}
                    className={({ isActive }) => isActive ? 'selected' : ''}
                >
                    {lang === 'en' ? 'What customers say' : 'Det siger kunderne'}
                </NavLink>

                <NavLink
                    to={lang === 'en' ? '/about' : '/om'}
                    className={({ isActive }) => isActive ? 'selected' : ''}
                >
                    {lang === 'en' ? 'About' : 'Om'}
                </NavLink>

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

                <NavLink
                    to={lang === 'en' ? '/contact' : '/kontakt'}
                    className={({ isActive }) =>
                        `nav-contact ${isActive ? 'selected' : ''}`
                    }
                >
                    {lang === 'en' ? 'CONTACT' : 'KONTAKT'}
                </NavLink>

            </div>
        </nav>
    )
}

export default Navbar