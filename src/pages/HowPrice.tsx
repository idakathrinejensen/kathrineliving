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
                </div>
            </section>

            <section className="service-section gift-section">
                <div className="service-content">
                    <h2>Gift voucher for interior design assistance</h2>
                    <p>
                        Treat someone you care about or add it to your own wish list.
                    </p>
                    <h3>
                        A gift for the home - and for anyone looking for fresh ideas
                    </h3>
                    <p>
                        With a gift voucher for interior design assistance, the recipient gets personal advice and inspiration for their home. 
                        Perhaps there's a room that needs a fresh perspective, a new home that needs to be furnished, 
                        or simply a desire for a fresh pair of eyes on the space they already have.
                    </p>
                    <p>
                        Together, we explore ideas and solutions that suit the home, the recipient's needs and their personal style.
                    </p>
                     <p>
                        The gift voucher covers a one-hour visit. If you would like the voucher to cover a different amount of time, we can arrange that too. 
                        The gift voucher is sent as a PDF by email, ready for you to print and wrap beautifully yourself. 
                        The recipient then contacts Kathrine Living to discuss their wishes and needs and arrange a suitable time.
                    </p>
                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ hour</small>
                    </div>
                    <a href="mailto:akj@kathrineliving.dk" className="button">Order gift voucher</a>
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
                    <a
                    href="mailto:akj@kathrineliving.dk"
                    className="button"
                    >
                    CONTACT
                </a>
                </div>
            </section>
        </main>
    )
}

export default HowPrice