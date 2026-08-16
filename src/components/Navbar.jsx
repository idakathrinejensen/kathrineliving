import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/logo/KathrineLiving_logo_pos.png'

function Navbar () {
    const [scrolled, setScrolled] = useState(false)
    const [isSelected, setSelected] = useState(false)

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

            <div className="nav-links">
                <Link to="/inspiration">Inspiration</Link>
                <Link to="/hvordan-og-pris">Hvordan og pris</Link>
                <Link to="/det-siger-kunderne">Det siger kunderne</Link>
                <Link to="/om">Om</Link>
                <div className='language-toggle'>
                    <button className='language-button'>DA</button>
                    <div className='divider'>/</div>
                    <button className='language-button'>EN</button>
                </div>
                <Link to="/kontakt" className="nav-contact">KONTAKT</Link>
            </div>
        </nav>
    )
}

export default Navbar