import { Link } from "react-router-dom"
import './Footer.css'

function Footer () {
    return (
        <footer>
            <div className="footer-logo">
                <p>Kathrine Living</p>
                <p>Professionel indretningshjælp</p>
            </div>
            <div className="footer-links">
                <Link to="/projekter">Projekter</Link>
                <Link to="/hvordan-og-pris">Hvordan & Pris</Link>
                <Link to="/kontakt">Kontakt</Link>
            </div>
            <div className="footer-contact">
                <p>akj@kathrineliving.dk</p>
                <p>Instagram</p>
            </div>
        </footer>
               
    )
}

export default Footer