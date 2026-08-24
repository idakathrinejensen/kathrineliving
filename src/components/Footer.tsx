import { Link, useLocation } from "react-router-dom"
import './Footer.css'

function Footer() {
    const location = useLocation();

    const isEnglish =
        location.pathname.startsWith('/home') ||
        location.pathname === '/reviews-and-references' ||
        location.pathname === '/how-and-price' ||
        location.pathname === '/what-customers-say' ||
        location.pathname === '/about' ||
        location.pathname === '/contact' ||
        location.pathname === '/inspiration-en';

    const lang = isEnglish ? 'en' : 'da';

    return (
        <footer>
            <div className="footer-inner">

                <div className="footer-column">
                    <h3>{lang === 'en' ? 'Useful Links' : 'Nyttige Links'}</h3>

                    <Link to={lang === 'en' ? '/reviews-and-references' : '/indtryk-og-referencer'}>
                        {lang === 'en' ? 'Reviews and References' : 'Indtryk og referencer'}
                    </Link>

                    <Link to={lang === 'en' ? '/how-and-price' : '/hvordan-og-pris'}>
                        {lang === 'en' ? 'How and Price' : 'Hvordan og pris'}
                    </Link>

                    <Link to={lang === 'en' ? '/about' : '/om'}>
                        {lang === 'en' ? 'About' : 'Om'}
                    </Link>

                    <Link to={lang === 'en' ? '/contact' : '/kontakt'}>
                        {lang === 'en' ? 'Contact' : 'Kontakt'}
                    </Link>
                </div>

                <div className="footer-column">
                    <h3>{lang === 'en' ? 'Address' : 'Adresse'}</h3>
                    <p>Kathrine Living</p>
                    <p>St. Stendamsvej 5</p>
                    <p>3400 Hillerød</p>
                </div>

                <div className="footer-column">
                    <h3>{lang === 'en' ? 'Social links' : 'Sociale links'}</h3>

                    <a
                        href="https://www.instagram.com/kathrineliving/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>

                    <a
                        href="https://www.facebook.com/Kathrineliving"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer