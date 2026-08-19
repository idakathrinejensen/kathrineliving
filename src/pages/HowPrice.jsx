import './HvordanPris.css'
import online from "../assets/inspiration/farvemoodboard.png"
import gavekort from "../assets/inspiration/tapetcloseup.jpeg"

function HowPrice() {
    return (
        <main className="how-page">

            <section className="how-intro">
                <h1>
                    English Indretning med udgangspunkt i dig,
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
                    <a href="mailto:akj@kathrineliving.dk" className="button">KONTAKT</a>
                </div>
            </section>

            <section className="service-section gift-section">
                <div className="service-content">
                    <h2>Gavekort til indretningshjælp</h2>
                    <p>
                        Glæd en du holder af eller skriv det på
                        din egen ønskeseddel.
                    </p>
                    <p>
                        Af og til står man i en situation, hvor det kan
                        være svært at finde den røde tråd i indretningen.
                        Eller man lige er flyttet og har brug for hjælp
                        til at få møblerne til at passe ind i de nye
                        omgivelser.
                    </p>
                    <p>
                        Det kan også være, at der er behov for hjælp
                        til oprydning, fordi man har fået for mange
                        ting ind i hjemmet.
                    </p>
                    <div className="price">
                        <span>850 kr.</span>
                        <small>for 1 times besøg</small>
                    </div>
                    <p>
                        Gavekortet gælder for et besøg på 1 time inden
                        for en radius på 30 km fra Hillerød.
                    </p>
                    <p>
                        Hvis der er andre ønsker til, hvad gavekortet
                        skal lyde på, finder vi selvfølgelig ud af det.
                    </p>
                    <p>
                        Gavekortet sendes som PDF på mail - klar til,
                        at du selv kan printe det ud og pakke det fint ind.
                        Modtageren af gavekortet kontakter Kathrine Living
                        for at drøfte ønsker, behov og aftale tidspunkt.
                    </p>
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
                </div>
            </section>
        </main>
    )
}

export default HowPrice