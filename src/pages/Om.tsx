import './Om.css'
import profileImage from '../assets/billeder/IMG_6554.jpeg'
import {Link} from 'react-router-dom'


function Om() {
    return (
        <main className="about-page">

            <section className="about-person">
                <div className="about-image">
                    <img src={profileImage} alt="Anne Kathrine fra Kathrine Living"/>
                </div>
                <div className="about-content">
                    <h2>
                        Indretning med personlighed, æstetik og blik for detaljen
                    </h2>
                    <p>
                        Kathrine Living specialiserer sig i indretningsdesign 
                        og boligstyling for både private og erhverv. 
                        Siden 2008 har jeg hjulpet kunder med at skabe smukke, personlige og funktionelle hjem, 
                        der tager udgangspunkt i den enkelte kundes behov, stil og personlighed.
                    </p>
                    <p>
                        Kathrine Living blev grundlagt i 2008 af indretningsdesigner og boligstylist Anne Kathrine.
                        Jeg har altid haft en stor passion for indretning og design og følger interesseret med i nye tendenser, materialer, farver og strømninger inden for bolig og interiør. 
                        For mig handler god indretning dog ikke om at følge trends for enhver pris - men om at skabe en helhed, der føles rigtig, og som holder over tid.

                    </p>
                </div>
            </section>

            <section className="why-section">
                <div className="why-content">
                    <h2>Har du tanker om at forny dit hjem eller din virksomhed?</h2>
                    <p>
                        Du er altid velkommen til at kontakte mig til en uforpligtende snak om dine idéer og ønsker. Kontakt mig på:
                    </p>
                    <div className="about-contact">
                        <a href="tel:29447048">
                            29 44 70 48
                        </a>
                        <a href="mailto:akj@kathrineliving.dk">
                            akj@kathrineliving.dk
                        </a>
                    </div>
                <Link
                    to='/kontakt'
                    className="button"
                >
                    KONTAKT
                </Link>
                
                </div>
            </section>
        </main>
    )
}

export default Om