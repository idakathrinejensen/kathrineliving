import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/Kathrine Living_logo_pos.ai.png'

function Navbar () {
    return (
        <nav>
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