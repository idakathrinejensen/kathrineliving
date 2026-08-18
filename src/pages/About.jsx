import './Om.css'
import motherImage from '../assets/IMG_6554.jpeg'

function About() {
    return (
        <main className="about-page">

            <section className="about-person">
                <div className="about-image">
                    <img src={motherImage} alt="Anne Kathrine fra Kathrine Living"/>
                </div>
                <div className="about-content">
                    <h2>
                        Indretning med personlighed
                    </h2>
                    <p>
                        Kathrine Living har speciale indenfor
                        indretningsdesign og hjælper både private
                        og erhverv.
                    </p>
                    <p>
                        Firmaet blev stiftet i 2008 af indretningsdesigner
                        og boligstylist Anne Kathrine.
                    </p>
                    <p>
                        Med mange års erfaring inden for indretning
                        hjælper Kathrine Living med at skabe personlige
                        løsninger, der passer til både hjemmet og dem,
                        der bor i det.
                    </p>
                    <div className="about-contact">
                        <p>Kontakt mig endelig på:</p>
                        <a href="tel:29447048">
                            29 44 70 48
                        </a>
                        <a href="mailto:akj@kathrineliving.dk">
                            akj@kathrineliving.dk
                        </a>
                    </div>
                    <p className="contact-invitation">
                        og lad os uforpligtende tage en snak om
                        dine tanker.
                    </p>
                </div>
            </section>

            <section className="why-section">
                <div className="why-content">
                    <h2>Hvorfor vælge Kathrine Living?</h2>
                    <p>
                        Med Kathrine Living får du personlig
                        indretningshjælp, der passer til dig,
                        så du kan føle dig hjemme.
                    </p>
                    <p>
                        Udgangspunktet for indretningshjælpen er,
                        at vi gennem samtale og "nye øjne" finder frem
                        til din personlige indretningsstil – gerne med
                        et tvist, du ikke så komme.
                    </p>
                    <p>
                        Kathrine Living er uafhængig af møbelbutikker
                        og andre leverandører, men kan hjælpe med at
                        indhente fordelagtige tilbud på eventuelle
                        nyindkøb.
                    </p>
                </div>
            </section>

            <section className="about-quote">
                <blockquote>
                    "Et hjem er mere end blot et sted at bo. Det er dér, livet udfolder sig."
                </blockquote>
                <p>
                    Derfor handler indretning ikke kun om møbler
                    og farver - det handler om at skabe rum,
                    hvor liv og æstetik smelter sammen.
                </p>
                <p className="quote-ending">
                    Så det føles som et hjem for dig.
                </p>
            </section>

            <section className="about-contact-section">
                <h2>Skal vi skabe dit hjem sammen?</h2>
                <a
                    href="mailto:akj@kathrineliving.dk"
                    className="button"
                >
                    Kontakt Kathrine Living
                </a>
            </section>
        </main>
    )
}

export default About