import './HvordanPris.css'

function HvordanPris() {
    return (
        <main className="how-page">

            {/* INTRO */}
            <section className="how-intro">

                <h1>
                    Indretning med udgangspunkt i dig,
                    dit hjem og dine behov.
                </h1>

                <p className="intro-text">
                    Af og til kan det være svært at finde den røde tråd
                    i indretningen. Måske er du lige flyttet, har brug
                    for at få møblerne til at fungere i de nye omgivelser,
                    eller trænger hjemmet til at blive ryddet op og
                    gentænkt.
                </p>

                <p className="intro-text">
                    Kathrine Living tilbyder personlig indretningshjælp
                    og skræddersyede løsninger, der tager udgangspunkt
                    i din personlige stil, ønsker og behov.
                </p>
            </section>


            {/* ONLINE INDRETNING */}
            <section className="service-section">

                <div className="service-content">
                    <p className="eyebrow">INDRETNINGSDESIGN</p>

                    <h2>Online indretning</h2>

                    <p>
                        Passer det bedre ind i din eller jeres kalender,
                        at vi mødes online, så kan det sagtens lade sig gøre.
                    </p>

                    <p>
                        Vi taler om dine ønsker, behov og idéer og finder
                        sammen frem til en løsning, der passer til dig og
                        dit hjem.
                    </p>

                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ time</small>
                    </div>

                    <p>
                        Kontakt Kathrine Living og lad os lave en aftale
                        på et tidspunkt, der passer dig eller jer.
                    </p>

                    <a href="mailto:akj@kathrineliving.dk" className="button">
                        Kontakt
                    </a>
                </div>

            </section>


            {/* GAVEKORT */}
            <section className="gift-section">

                <div className="gift-content">
                    <p className="eyebrow">GAVEKORT</p>

                    <h2>Gavekort til indretningshjælp</h2>

                    <p className="gift-intro">
                        Glæd en du holder af – eller skriv det på
                        din egen ønskeseddel.
                    </p>

                    <p>
                        Et gavekort til indretningsrådgivning er en god
                        mulighed, hvis man står i en situation, hvor det
                        kan være svært at finde den røde tråd i indretningen.
                        Det kan også være, hvis man lige er flyttet og har
                        brug for hjælp til at få møblerne til at passe ind
                        i de nye omgivelser.
                    </p>

                    <div className="gift-price">
                        <span>850 kr.</span>
                        <small>for 1 times besøg</small>
                    </div>

                    <p>
                        Gavekortet gælder for et besøg på 1 time inden for
                        en radius på 30 km fra Hillerød.
                    </p>

                    <p>
                        Hvis der er andre ønsker til, hvad gavekortet
                        skal lyde på, finder vi selvfølgelig ud af det.
                    </p>

                    <p>
                        Gavekortet sendes som PDF på mail – klar til,
                        at du selv kan printe det ud og pakke det fint ind.
                        Modtageren af gavekortet kontakter Kathrine Living
                        for at drøfte ønsker, behov og aftale tidspunkt.
                    </p>

                    <a href="mailto:akj@kathrineliving.dk" className="button">
                        Bestil gavekort
                    </a>
                </div>

            </section>


            {/* CONTACT */}
            <section className="how-contact">

                <p className="eyebrow">KONTAKT</p>

                <h2>Skal vi tage en snak?</h2>

                <p>
                    Ring eller skriv til Kathrine Living
                    <br />
                    og fortæl om dine ønsker og behov.
                </p>

                <div className="contact-details">
                    <a href="tel:29447048">29 44 70 48</a>
                    <a href="mailto:akj@kathrineliving.dk">
                        akj@kathrineliving.dk
                    </a>
                </div>

            </section>

        </main>
    )
}

export default HvordanPris