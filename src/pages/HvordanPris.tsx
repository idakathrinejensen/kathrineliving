import { Link } from "react-router-dom"
import "./HvordanPris.css"
import sparringImage from "../assets/billeder/farvemoodboard.png"
import stepsIndretningImage from "../assets/billeder/tapetvægsoveværelse.jpeg"
import gavekortImage from "../assets/billeder/vintagelampe.png"
import oprydningImage from "../assets/billeder/levendelysivindue.jpg"
import salgImage from "../assets/billeder/spisebord.jpg"

function HvordanPris() {
    return (
        <main className="how-page">

            <section className="how-intro">
                <h1>
                    Har du brug for hjælp
                    til din indretning?
                </h1>

                <p>
                    Uanset om du mangler et frisk blik, konkret sparring
                    eller praktisk hjælp til at komme videre, kan Kathrine
                    Living hjælpe dig. 
                </p>

                <p>
                    Herunder kan du læse om de forskellige måder, jeg kan
                    hjælpe dig på, og hvad det koster.
                </p>
            </section>

            <section className="service-navigation">
                <a href="#sparring">Sparring</a>
                <a href="#indretningshjaelp">Indretningshjælp</a>
                <a href="#gavekort">Gavekort</a>
                <a href="#oprydningshjaelp">Oprydningshjælp</a>
                <a href="#boligklartilsalg">Bolig klar til salg</a>
            </section>

            {/* SPARRING */}
            <section className="service-section" id="sparring">

                <div className="service-image">
                    <img
                        src={sparringImage}
                        alt="Sparring om indretning"
                    />
                </div>

                <div className="service-content">
                    <h2>Sparring</h2>

                    <p>
                        Er du gået i stå med indretningen af dit hjem,
                        og mangler du input for at få indretningen til
                        at falde på plads?
                    </p>

                    <p>
                        Det behøver ikke altid være en stor indretningsopgave.
                        Nogle gange er det en enkelt udfordring eller et rum,
                        du ikke helt kan få til at fungere. Her kan en times
                        sparring være det, der får dig videre.
                    </p>

                    <p>
                        Vi mødes hjemme hos dig og tager udgangspunkt i dine
                        ønsker, behov og de udfordringer, du oplever. Sammen
                        ser vi på mulighederne, og jeg kommer med idéer,
                        konkrete løsninger og inspiration, som du kan arbejde
                        videre med.
                    </p>

                    <p>
                        Hvis der er behov for tilkøb af yderligere hjælp,
                        kan det også lade sig gøre.
                    </p>

                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ time</small>
                    </div>

                    <Link to="/kontakt" className="button">
                        KONTAKT
                    </Link>
                </div>

            </section>

            {/* INDRETNINGS HJÆLP */}
            <section
                className="service-section service-section-reverse"
                id="indretningshjaelp"
            >

                <div className="service-content">
                    <h2>Indretningshjælp</h2>

                    <p>
                        Har du brug for hjælp til at få din indretning
                        til at fungere, både praktisk og æstetisk?
                    </p>

                    <p>
                        Måske mangler du inspiration, er i tvivl om farver
                        og møbler, eller har et rum, der bare ikke helt
                        fungerer. Måske har du arvet nogle møbler, der ikke
                        helt passer ind, men som har stor affektionsværdi
                        for dig.
                    </p>

                    <p>
                        Kathrine Living tager udgangspunkt i dit hjem,
                        din stil og dine ønsker, og sammen finder vi frem
                        til løsninger, der passer til dig og dit hjem.
                    </p>

                    <p>
                        Passer det bedre ind i din kalender at mødes online,
                        kan det også lade sig gøre.
                    </p>

                    <div className="process">
                        <h3>Sådan foregår det</h3>

                        <div className="process-step">
                            <span>1</span>

                            <div>
                                <h4>Før mødet</h4>

                                <p>
                                    Vi aftaler et tidspunkt, hvor jeg kommer
                                    hjem til dig. For at få mest muligt ud af
                                    vores tid sammen, må du gerne forberede dig.
                                </p>

                                <ul>
                                    <li>
                                        Notér, hvad der ikke fungerer i din
                                        nuværende indretning.
                                    </li>

                                    <li>
                                        Overvej, hvad du gerne vil ændre,
                                        og hvilke behov indretningen skal opfylde.
                                    </li>

                                    <li>
                                        Find gerne 4 til 5 billeder fra fx
                                        boligmagasiner, Instagram eller Pinterest,
                                        som viser farver, møbler, stemninger eller
                                        detaljer, du kan lide.
                                    </li>

                                    <li>
                                        Overvej dit budget, hvis der fx skal
                                        ændres på farver, belysning, møbler
                                        eller andre elementer.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="process-step">
                            <span>2</span>

                            <div>
                                <h4>Hos dig</h4>

                                <p>
                                    Vi mødes hjemme hos dig og gennemgår dine
                                    ønsker og udfordringer. Sammen ser vi på
                                    rummene og taler om mulighederne, lige fra
                                    farver og møbler til belysning, materialer
                                    og indretning.
                                </p>

                                <p>
                                    Mødet varer typisk cirka 1,5 time.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <span>3</span>

                            <div>
                                <h4>Efter mødet</h4>

                                <p>
                                    Efter vores møde samler jeg op på de idéer
                                    og løsninger, vi har drøftet, og sender dig
                                    konkrete forslag, du kan arbejde videre med.
                                </p>

                                <p>
                                    Du får også links og henvisninger til
                                    relevante produkter, så du har et konkret
                                    udgangspunkt for at føre idéerne ud i livet.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="service-summary">
                        En enkel og personlig indretningshjælp, der giver dig
                        inspiration, konkrete idéer og et godt udgangspunkt
                        for at komme videre med dit hjem.
                    </p>

                    <div className="price">
                        <span>2.400 kr.</span>
                    </div>

                    <Link to="/kontakt" className="button">
                        KONTAKT
                    </Link>
                </div>

                <div className="service-image">
                    <img
                        src={stepsIndretningImage}
                        alt="Indretningshjælp"
                    />
                </div>

            </section>

            {/* GAVEKORT */}
            <section className="service-section gift-section" id="gavekort">

                <div className="service-image">
                    <img
                        src={gavekortImage}
                        alt="Gavekort til indretningshjælp"
                    />
                </div>

                <div className="service-content">
                    <h2>Gavekort til indretningshjælp</h2>

                    <p>
                        Glæd en du holder af, eller skriv det på din egen
                        ønskeseddel.
                    </p>

                    <p>
                        Med et gavekort til indretningshjælp får modtageren
                        personlig sparring og inspiration til sit hjem.
                        Måske er der et rum, der trænger til nye idéer,
                        en ny bolig, der skal indrettes, eller bare brug
                        for et friskt blik på den indretning, man allerede har.
                    </p>

                    <p>
                        Sammen finder vi frem til muligheder og løsninger,
                        der passer til hjemmet, behovene og den personlige stil.
                    </p>

                    <p>
                        Gavekortet lyder på et besøg på 1 time. Er der andre
                        ønsker til, hvad gavekortet skal lyde på, finder vi
                        ud af det sammen.
                    </p>

                    <p>
                        Gavekortet sendes som pdf på mail, klar til at du selv
                        kan printe ud og pakke fint ind. Modtager af gavekortet
                        kontakter Kathrine Living for at drøfte ønsker, behov
                        og aftale tidspunkt.
                    </p>

                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ time</small>
                    </div>

                    <a
                        href="mailto:akj@kathrineliving.dk"
                        className="button"
                    >
                        BESTIL GAVEKORT
                    </a>
                </div>

            </section>

            {/* OPRYDNING */}
            <section
                className="service-section service-section-reverse"
                id="oprydningshjaelp"
            >

                <div className="service-content">
                    <h2>Oprydningshjælp</h2>

                    <p>
                        Få hjælp til at skabe struktur og overblik i hverdagen.
                    </p>

                    <p>
                        Det kan være svært at overskue, hvor man skal begynde,
                        i en travl hverdag, hvor der trænger til at blive ryddet
                        op og skabt mere orden.
                    </p>

                    <p>
                        Kathrine Living hjælper dig med at få overblik, finde
                        en god rækkefølge og skabe en enkel struktur for,
                        hvordan du kommer i gang, uden at det hele behøver
                        at blive gjort på én gang.
                    </p>

                    <p>
                        Sammen finder vi systemer og rutiner, der passer til
                        dig, din hverdag og dit hjem, så det bliver lettere
                        at holde orden fremover.
                    </p>

                    <p>
                        Målet er ikke et perfekt hjem, men at gøre det mere
                        overskueligt at komme i gang og nemmere at holde fast i.
                    </p>

                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ time</small>
                    </div>

                    <Link to="/kontakt" className="button">
                        KONTAKT
                    </Link>
                </div>

                <div className="service-image">
                    <img
                        src={oprydningImage}
                        alt="Oprydningshjælp"
                    />
                </div>

            </section>

            {/* BOLIG KLAR TIL SALG */}
            <section
                className="service-section"
                id="boligklartilsalg"
            >

                <div className="service-image">
                    <img
                        src={salgImage}
                        alt="Bolig klar til salg"
                    />
                </div>

                <div className="service-content">
                    <h2>Bolig klar til salg</h2>

                    <p>
                        Står du over for at skulle sælge din bolig, og vil du
                        gerne have, at den bliver set med "køberøjne", inden
                        der bliver taget billeder til salgsopstillingen?
                    </p>

                    <p>
                        Førstehåndsindtrykket betyder meget. Salgsbillederne
                        er det første, der skal fange en potentiel købers
                        interesse og give lyst til at se boligen.
                    </p>

                    <p>
                        Gode og indbydende billeder skal gerne vække
                        nysgerrighed og få køberen til at tænke:
                        "Her vil jeg gerne bo."
                    </p>

                    <p>
                        Når man har boet i sin bolig i længere tid, bliver
                        man naturligt vant til, hvordan den ser ud. Man
                        lægger måske ikke længere mærke til de ting, der
                        fylder, eller de små detaljer, som en udefrakommende
                        vil se med det samme.
                    </p>

                    <p>
                        Et blik udefra kan gøre en forskel. Kathrine Living
                        hjælper dig med at se boligen med "køberøjne" og skabe
                        overblik over, hvad der kan justeres, fjernes eller
                        fremhæves, så boligens kvaliteter træder tydeligere frem.
                    </p>

                    <p>
                        Det handler om at skabe luft, ro og balance, så boligen
                        fremstår indbydende og viser sig fra sin bedste side.
                        Sammen finder vi ud af, hvad der giver mening at tage
                        fat på inden fotograferingen, og hvad du roligt kan lade være.
                    </p>

                    <p>
                        Målet er at skabe en bolig, der giver køberen lyst
                        til at komme indenfor og se mere.
                    </p>

                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ time</small>
                    </div>

                    <Link to="/kontakt" className="button">
                        KONTAKT
                    </Link>
                </div>

            </section>

            {/* CONTACT */}
            <section className="how-contact">
                <h2>Skal vi tage en snak?</h2>

                <p>
                    Ring eller skriv til Kathrine Living,
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

                    <Link to="/kontakt" className="button">
                        KONTAKT
                    </Link>
                </div>
            </section>

        </main>
    )
}

export default HvordanPris