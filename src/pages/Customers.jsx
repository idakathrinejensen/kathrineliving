import './Kunderne.css'

function Kunderne() {
    return (
        <main className="reviews-page">

            <section className="reviews-intro">
                <h1>E Hvad siger kunderne?</h1>
                <p>
                    Her kan du læse nogle af de oplevelser og anbefalinger,
                    Kathrine Living har fået fra tidligere kunder.
                </p>
            </section>

            <section className="reviews-section">
                <div className="reviews-grid">

                    {/* M. POULSEN */}
                    <article className="review-card">
                        <blockquote>
                            "Vores stue blev ikke udnyttet optimalt, så vi
                            havde brug for at få professionel hjælp til at
                            få den bedste udnyttelse af stuen."
                        </blockquote>
                        <p>
                            Kathrine Living viste sig at være rette person
                            til opgaven.
                        </p>
                        <p>
                            Hun var hurtig til at fange, hvilken type af
                            møbler vi var interesseret i, og hun havde gode
                            forslag både til indretning og til det, der gør
                            en stue hyggelig.
                        </p>
                        <p>
                            Vi kan varmt anbefale Kathrine Living.
                        </p>
                        <p className="review-author">-M. Poulsen</p>
                    </article>

                    {/* JANE LOHFF */}
                    <article className="review-card">
                        <blockquote>
                            "Jeg manglede ideer til indretning af hele min
                            lejlighed og valgte Kathrine Living efter en
                            række samtaler med flere udbydere."
                        </blockquote>
                        <p>
                            Anne Kathrine gav mig masser af inspiration til
                            indretning, farvesammensætning og strukturer.
                        </p>
                        <p>
                            Hun er en dygtig og kompetent indretter. Hun er
                            lydhør overfor egne ønsker og har en pragmatisk
                            tilgang til tingene, og hun yder service til
                            meget konkurrencedygtige priser.
                        </p>
                        <p>
                            Hun var hurtig til at komme med forslag til
                            indretning mv., og hun har været sød til at
                            følge op efter projektet var afsluttet.
                        </p>
                        <p>
                            De varmeste anbefalinger herfra.
                        </p>
                        <p className="review-author">-J. Lohff</p>
                    </article>

                    
                    {/* JETTE HENNINGS JØRGENSEN */}
                    <article className="review-card">
                        <blockquote>
                            "Jeg kan på det varmeste anbefale Anne Kathrine.
                            Hun har hjulpet os med at finde frem til vores
                            helt egen stil i vores lejlighed."
                        </blockquote>
                        <p>
                            Det var vigtigt for os, at vores personlige
                            ejendele blev en del af indretningen, og her var
                            Anne Kathrine utrolig dygtig til at se muligheder,
                            vi ikke selv havde overvejet.
                        </p>
                        <p>
                            Hun lytter, inspirerer og har givet os et hjem,
                            der føles som 'os'. Så mangler du hjælp til at
                            finde frem til din stil, hjælp til at se nye
                            muligheder og hjælp til at få det hele til at gå
                            op i en højere enhed, så er Anne Kathrine den
                            rette at gå til.
                        </p>
                        <p className="review-author">- J. Jørgensen</p>
                    </article>

                    {/* H. SOEGAARD */}
                    <article className="review-card">
                        <blockquote>
                            "Og tak for vildt god hjælp, det er jeg så glad
                            for. Det var lige det jeg ønskede. Og det kan
                            meget vel være jeg kontakter dig igen :-)."
                        </blockquote>
                        <p className="review-author">- H. Soegaard</p>
                    </article>

                    {/* P. FROST */}
                    <article className="review-card">
                        <blockquote>
                            "Tusind tak for en behagelig og professionel
                            behandling. Vi er så glade for det vi fik lavet."
                        </blockquote>
                        <p className="review-author">- P. Frost</p>
                    </article>

                </div>
            </section>

            <section className="reviews-contact">
                <h2>Skal du også have hjælp til din indretning?</h2>
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

export default Kunderne