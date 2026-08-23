import './Inspiration.css'
import {Link} from 'react-router-dom'


import image1 from '../assets/inspiration/entre.jpg'
import image2 from '../assets/inspiration/levendelys.jpg'
import image3 from '../assets/inspiration/skrivebord.jpg'
import image4 from '../assets/inspiration/tapetcloseup.jpeg'
import image5 from '../assets/inspiration/tapetvægsoveværelse.jpeg'
import image6 from '../assets/inspiration/blomster.jpeg'
import image7 from '../assets/inspiration/værelse.jpg'
import image8 from '../assets/inspiration/citronplakat.jpeg'
import image9 from '../assets/inspiration/badeværelse.jpg'
import image10 from '../assets/inspiration/vase.jpg'
import image11 from '../assets/inspiration/arbejdsbord.jpg'
import image12 from '../assets/inspiration/håndvask.jpeg'
import image13 from '../assets/inspiration/hvideogguldmøbler.jpeg'
import image14 from '../assets/inspiration/sæbeholder.jpeg'
import image15 from '../assets/inspiration/skrivebordsdimser.jpg'
import image16 from '../assets/inspiration/spisebord.jpg'
import image17 from '../assets/inspiration/vase.jpg'
import image18 from '../assets/inspiration/levendelysivindue.jpg'
import image19 from '../assets/inspiration/buketoglampe.jpg'
import image20 from '../assets/inspiration/børneværelse.jpg'
import image21 from '../assets/inspiration/agapanthus.png'
import image22 from '../assets/inspiration/bambussofa.jpg'
import image23 from '../assets/inspiration/brændeovn.jpg'
import image24 from '../assets/inspiration/badeværelsesbord.jpeg'
import image25 from '../assets/inspiration/blomster.jpeg'
import image26 from '../assets/inspiration/bad.jpg'
import image27 from '../assets/inspiration/grønstemning.jpeg'
import image28 from '../assets/inspiration/køkken.jpeg'
import image29 from '../assets/inspiration/fliser.png'
import image30 from '../assets/inspiration/livingroom.jpg'
import image31 from '../assets/inspiration/maling.jpeg'
import image32 from '../assets/inspiration/vindueskarm.png'
import image33 from '../assets/inspiration/vinterindretning.png'
import image34 from '../assets/inspiration/malerprojekt.png'
import image35 from '../assets/inspiration/rumdelerNY.jpg'
import image36 from '../assets/inspiration/guldblomsterholdere.jpeg'
import image37 from '../assets/inspiration/drengeværelse.jpg'

function Inspiration() {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17, 
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,
        image34,
        image35,
        image36,
        image37
    ]

    return (
        <main className="projects-page">
            <div className="projects-grid">
                {images.map((image, index) => (
                    <div className="project-image" key={index}>
                        <img src={image} alt=""/>
                    </div>
                ))}
            </div>

            <section className="reviews-contact">

                <h2>
                    Skal du også have hjælp til din indretning?
                </h2>

                <Link
                    to='/contact'
                    className="button"
                >
                    Contact Kathrine Living
                </Link>

            </section>
        </main>
    )
}

export default Inspiration