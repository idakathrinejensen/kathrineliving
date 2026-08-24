import { Link } from "react-router-dom"
import './HvordanPris.css'
import online from "../assets/inspiration/farvemoodboard.png"
import gavekort from "../assets/inspiration/tapetcloseup.jpeg"

function HvordanPris() {
    return (
        <main className="how-page">

            <section className="how-intro">
                <h1>
                    Indretning med udgangspunkt i dig,
                    dit hjem og dine behov.
                </h1>
                <p>
                    Af og til kan det være svært at finde den røde tråd
                    i indretningen. Måske er du lige flyttet, har brug
                    for at få møblerne til at fungere i de nye omgivelser,
                    eller trænger hjemmet til at blive ryddet op og
                    gentænkt.
                </p>
                <p>
                    Kathrine Living tilbyder personlig indretningshjælp
                    og skræddersyede løsninger, der tager udgangspunkt
                    i din personlige stil, ønsker og behov.
                </p>
            </section>

            <section className="service-section">
                <div className="service-image">
                    <div className="image-placeholder">
                        <img src={online} alt="Online indretning" />
                    </div>
                </div>
                <div className="service-content">
                    <h2>
                        Online indretning
                    </h2>
                    <p>
                        Passer det bedre ind i din eller jeres kalender,
                        at vi mødes online, så kan det sagtens lade sig gøre.
                    </p>
                    <p>
                        Kathrine Living hjælper dig med skræddersyede
                        indretningsløsninger, der er tilpasset din personlige
                        stil, ønsker og behov.
                    </p>
                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ time</small>
                    </div>
                    <p>
                        Kontakt Kathrine Living og lad os lave en aftale
                        på et tidspunkt, der passer dig eller jer.
                    </p>
                </div>
            </section>

            <section className="service-section gift-section">
                <div className="service-content">
                    <h2>Gavekort til indretningshjælp</h2>
                    <p>
                        Glæd en du holder af eller skriv det på
                        din egen ønskeseddel.
                    </p>
                    <h3>
                        En gave til hjemmet - og til den, der gerne vil have nye idéer
                    </h3>
                    <p>
                        Med et gavekort til indretningshjælp får modtageren personlig sparring og inspiration til sit hjem. 
                        Måske er der et rum, der trænger til nye idéer, en ny bolig, der skal indrettes, 
                        eller bare brug for et friskt blik på den indretning, man allerede har.
                    </p>
                    <p>
                        Sammen finder vi frem til muligheder og løsninger, der passer til hjemmet, behovene og den personlige stil.
                    </p>
                     <p>
                        Gavekortet lyder på et besøg på 1 time. Hvis der er andre ønsker til hvad gavekortet skal lyde på, så finder vi ud af det.
                        Gavekortet sendes som pdf på mail, klar til at du selv kan printe ud og pakke fint ind. 
                        Modtager af gavekortet kontakter Kathrine Living for at drøfte ønsker, behov og aftale tidspunkt.
                    </p>
                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ time</small>
                    </div>
                    <a href="mailto:akj@kathrineliving.dk" className="button">Bestil gavekort</a>
                </div>
                <div className="service-image">
                    <div className="image-placeholder">
                        <img src={gavekort} alt="Gavekort" />
                    </div>
                </div>
            </section>

            <section className="how-contact">
                <h2>Skal vi tage en snak?</h2>
                <p>
                    Ring eller skriv til Kathrine Living
                    <br />
                    og fortæl om dine ønsker og behov.
                </p>
                <div className="contact-details">
                    <a href="tel:29447048">
                        29 44 70 48
                    </a>
                    <a href="mailto:akj@kathrineliving.dk">
                        akj@kathrineliving.dk
                    </a>
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

export default HvordanPris