import { Link } from "react-router-dom"
import './Footer.css'

function Footer () {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-column">
                    <h3>Nyttige Links</h3>
                    <Link to="/inspiration">Inspiration</Link>
                    <Link to="/hvordan-og-pris">Hvordan og pris</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </div>
                <div className="footer-column">
                    <h3>Adresse</h3>
                    <p>Kathrine Living</p>
                    <p>St. Stendamsvej 5</p>
                    <p>3400 Hillerød</p>

                </div>
                <div className="footer-column">
                    <h3>Sociale links</h3>
                    <a href="https://www.instagram.com/kathrineliving/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/Kathrineliving" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
               
    )
}

export default Footer