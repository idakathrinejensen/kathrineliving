import './Kunderne.css'

function Kunderne() {
    return (
        <main className="reviews-page">

            {/* INTRO */}
            <section className="reviews-intro">

                <h1>Hvad siger kunderne?</h1>

                <p>
                    Det vigtigste er, at du føler dig hjemme.
                    Her kan du læse, hvad nogle af Kathrine Livings
                    kunder har sagt om deres oplevelse.
                </p>
            </section>


            {/* FEATURED REVIEW */}
            <section className="featured-review">

                <div className="featured-review-content">

                    <h2>Jette Hennings Jørgensen</h2>

                    <blockquote>
                        Jeg kan på det varmeste anbefale Anne Kathrine.
                        Hun har hjulpet os med at finde frem til vores
                        helt egen stil i vores lejlighed.
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

                </div>

            </section>


            {/* SHORT REVIEW */}
            <section className="short-review">

                <blockquote>
                    "Og tak for vildt god hjælp, det er jeg så glad for.
                    Det var lige det jeg ønskede. Og det kan meget vel
                    være jeg kontakter dig igen :-)."
                </blockquote>

                <p>— H. Soegaard</p>

            </section>


            {/* CUSTOMER REVIEWS */}
            <section className="reviews-section">

                <div className="reviews-heading">
                    <p className="eyebrow">KUNDERNE FORTÆLLER</p>

                    <h2>
                        Personlig hjælp,
                        der kan mærkes
                    </h2>
                </div>


                <div className="reviews-grid">

                    <article className="review-card">

                        <blockquote>
                            "Tusind tak for en behagelig og professionel
                            behandling. Vi er så glade for det vi fik lavet."
                        </blockquote>

                        <p className="review-author">
                            — P. Frost
                        </p>

                    </article>


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

                        <p className="review-author">
                            — M. Poulsen
                        </p>

                    </article>


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

                        <p className="review-author">
                            — Jane Lohff
                        </p>

                    </article>

                </div>

            </section>


            {/* CONTACT */}
            <section className="reviews-contact">

                <p className="eyebrow">KATHRINE LIVING</p>

                <h2>
                    Skal du også have hjælp
                    til din indretning?
                </h2>

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