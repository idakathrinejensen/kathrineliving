import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar () {
    return (
        <nav>
            <Link to="/">Kathrine Living</Link>
            <div>
                <Link to="/">Projekter</Link>
                <Link to="/about">Kontakt</Link>
            </div>
        </nav>
    )
}

export default Navbar