import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/logo/KathrineLiving_logo_pos.png'

function Navbar () {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <Link to="/">
                <img src={logo} alt="Kathrine Living" height="100"/>
            </Link>
            <div>
                <Link to="/projekter">Projekter</Link>
                <Link to="/hvordan-og-pris">Hvordan og pris</Link>
                <Link to="/det-siger-kunderne">Det siger kunderne</Link>
                <Link to="/kontakt">Kontakt</Link>
            </div>
        </nav>
    )
}

export default Navbar