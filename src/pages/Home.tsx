import "./Home.css"
import { Link } from 'react-router-dom'
import frontImage from "../assets/inspiration/rumdelerNY.jpg"
import secondFront from "../assets/_HEY4208.jpg"

function Home() {
    return (
        <main>
            <section className="hero">
                <img src={frontImage} alt="Tapetvæg" />
                <div className="hero-overlay"></div>
                <div className="hero-text">
                    <h1>Create your <br></br> dream home</h1>
                    <p>Professional interior design with a Scandinavian touch</p>
                </div>
            </section>


            <section className="help-section">
                <div className="help-image">
                    <img src={secondFront} alt="Skrivebordsindretning" />
                </div>
                <div className="help-content">
                    <h2>Inspiration or help with your interior design</h2>
                    <p>
                        Do you need inspiration, advice or help creating a home that feels like yours?
                    </p>
                    <p>
                        I offer both in-person and online meetings, 
                        where together we find the right solution for your home.
                    </p>
                    <Link to="/hvordan-og-pris" className="button">Read more</Link>
                </div>
            </section>

            <section className="contact-section">
                <h2>Help with interior design for your home</h2>
                <p>
                    Feel free to get in touch at:
                    <br />
                    <a href="tel:29447048">29 44 70 48</a>
                    <br />
                    <a href="mailto:akj@kathrineliving.dk">
                        akj@kathrineliving.dk
                    </a>
                </p>
                <Link to='/kontakt' className="button">CONTACT</Link>
            </section>
        </main>
    )
}

export default Home