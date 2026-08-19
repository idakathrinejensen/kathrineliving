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
                    <h1>E Skab dit drømmehjem</h1>
                    <p>Professionel indretning med hjertet i det skandinaviske</p>
                </div>
            </section>


            <section className="help-section">
                <div className="help-image">
                    <img src={secondFront} alt="Skrivebordsindretning" />
                </div>
                <div className="help-content">
                    <h2>Inspiration eller hjælp til din indretning</h2>
                    <p>
                        Har du brug for inspiration, sparring eller hjælp til
                        at skabe et hjem, der føles som dit?
                    </p>
                    <p>
                        Jeg tilbyder både fysiske og online møder, hvor vi
                        sammen finder den rette løsning til dit hjem.
                    </p>
                    <Link to="/hvordan-og-pris" className="button">Læs mere</Link>
                </div>
            </section>

            <section className="contact-section">
                <p className="eyebrow">KONTAKT</p>
                <h2>Hjælp til indretning af hjemmet</h2>
                <p>
                    Kontakt gerne på
                    <br />
                    <a href="tel:29447048">29 44 70 48</a>
                    <br />
                    <a href="mailto:akj@kathrineliving.dk">
                        akj@kathrineliving.dk
                    </a>
                </p>
                <a href="mailto:akj@kathrineliving.dk" className="button">KONTAKT</a>
            </section>
        </main>
    )
}

export default Home