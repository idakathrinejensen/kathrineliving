import { useState, useEffect } from 'react'
import './IndtrykReferencer.css'
import { Link } from 'react-router-dom'

import image1 from '../assets/billeder/entre.jpg'
import image2 from '../assets/billeder/levendelys.jpg'
import image3 from '../assets/billeder/skrivebord.jpg'
import image4 from '../assets/billeder/tapetcloseup.jpeg'
import image5 from '../assets/billeder/tapetvægsoveværelse.jpeg'
import image6 from '../assets/billeder/_HEY4208.jpg'
import image7 from '../assets/billeder/værelse.jpg'
import image8 from '../assets/billeder/citronplakat.jpeg'
import image9 from '../assets/billeder/badeværelse.jpg'
import image10 from '../assets/billeder/vase.jpg'
import image11 from '../assets/billeder/arbejdsbord.jpg'
import image12 from '../assets/billeder/håndvask.jpeg'
import image13 from '../assets/billeder/hvideogguldmøbler.jpeg'
import image14 from '../assets/billeder/sæbeholder.jpeg'
import image15 from '../assets/billeder/skrivebordsdimser.jpg'
import image16 from '../assets/billeder/spisebord.jpg'
import image17 from '../assets/billeder/vase.jpg'
import image18 from '../assets/billeder/levendelysivindue.jpg'
import image19 from '../assets/billeder/buketoglampe.jpg'
import image20 from '../assets/billeder/børneværelse.jpg'
import image21 from '../assets/billeder/agapanthus.png'
import image22 from '../assets/billeder/bambussofa.jpg'
import image23 from '../assets/billeder/brændeovn.jpg'
import image24 from '../assets/billeder/badeværelsesbord.jpeg'
import image25 from '../assets/billeder/blomster.jpeg'
import image26 from '../assets/billeder/bad.jpg'
import image27 from '../assets/billeder/grønstemning.jpeg'
import image28 from '../assets/billeder/køkken.jpeg'
import image29 from '../assets/billeder/fliser.png'
import image30 from '../assets/billeder/livingroom.jpg'
import image31 from '../assets/billeder/maling.jpeg'
import image32 from '../assets/billeder/vindueskarm.png'
import image33 from '../assets/billeder/vinterindretning.png'
import image34 from '../assets/billeder/malerprojekt.png'
import image35 from '../assets/billeder/IMG_5048.jpeg'
import image36 from '../assets/billeder/guldblomsterholdere.jpeg'
import image37 from '../assets/billeder/drengeværelse.jpg'
import image38 from '../assets/billeder/blomster.jpeg'


function IndtrykReferencer() {
    const content = [
        { type: 'image', content: image1 },
        { type: 'image', content: image2 },
        { type: 'image', content: image3 },
        {
            type: 'review',
            content: {
                quote: 'Jeg kan på det varmeste anbefale Anne Kathrine. Hun har hjulpet os med at finde frem til vores helt egen stil i vores lejlighed.',
                text: 'Det var vigtigt for os, at vores personlige ejendele blev en del af indretningen. Anne Kathrine var utrolig dygtig til at se muligheder, vi ikke selv havde overvejet. Hun lytter, inspirerer og har givet os et hjem, der føles som \'os\'.',
                author: 'J. Jørgensen'
            }
        },
        { type: 'image', content: image4 },
        { type: 'image', content: image5 },
        { type: 'image', content: image6 },
        {
            type: 'review',
            content: {
                quote: 'Vores stue blev ikke udnyttet optimalt, så vi havde brug for at få professionel hjælp til at få den bedste udnyttelse af stuen.',
                text: 'Kathrine Living viste sig at være rette person til opgaven. Hun var hurtig til at fange, hvilken type af møbler vi var interesserede i, og hun havde gode forslag både til indretning og til det, der gør en stue hyggelig. Vi kan varmt anbefale Kathrine Living.',
                author: 'M. Poulsen'
            }
        },
        { type: 'image', content: image7 },
        { type: 'image', content: image8 },
        { type: 'image', content: image9 },
        { type: 'image', content: image10 },
        {
            type: 'review',
            content: {
                quote: 'Jeg manglede ideer til indretning af hele min lejlighed og valgte Kathrine Living efter en række samtaler med flere udbydere.',
                text: 'Anne Kathrine gav mig masser af inspiration til indretning, farvesammensætning og strukturer. Hun er en dygtig og kompetent indretter, som er lydhør overfor egne ønsker og har en pragmatisk tilgang til tingene.',
                author: 'J. Lohff'
            }
        },
        { type: 'image', content: image11 },
        { type: 'image', content: image12 },
        { type: 'image', content: image13 },
        {
            type: 'review',
            content: {
                quote: 'Og tak for vildt god hjælp, det er jeg så glad for. Det var lige det jeg ønskede. Og det kan meget vel være jeg kontakter dig igen :-).',
                text: '',
                author: 'H. Soegaard'
            }
        },
        { type: 'image', content: image14 },
        { type: 'image', content: image15 },
        { type: 'image', content: image16 },
        {
            type: 'review',
            content: {
                quote: 'Tusind tak for en behagelig og professionel behandling. Vi er så glade for det vi fik lavet.',
                text: '',
                author: 'P. Frost'
            }
        },
        { type: 'image', content: image17 },
        { type: 'image', content: image18 },
        { type: 'image', content: image19 },
        { type: 'image', content: image20 },
        { type: 'image', content: image21 },
        { type: 'image', content: image22 },
        { type: 'image', content: image23 },
        { type: 'image', content: image24 },
        { type: 'image', content: image25 },
        { type: 'image', content: image26 },
        { type: 'image', content: image27 },
        { type: 'image', content: image28 },
        { type: 'image', content: image29 },
        { type: 'image', content: image30 },
        { type: 'image', content: image31 },
        { type: 'image', content: image32 },
        { type: 'image', content: image33 },
        { type: 'image', content: image34 },
        { type: 'image', content: image35 },
        { type: 'image', content: image36 },
        { type: 'image', content: image37 },
        { type: 'image', content: image38 }
    ]

    const [colCount, setColCount] = useState(3)

    // Handle responsive column counts matching your CSS media queries
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setColCount(2)
            } else {
                setColCount(3)
            }
        }

        // Run once on mount
        handleResize()
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Distribute items into columns to maintain visual left-to-right ordering
    const columns = Array.from({ length: colCount }, () => [] as typeof content)
    content.forEach((item, index) => {
        columns[index % colCount].push(item)
    })

    return (
        <main className="projects-page">
            <div className="projects-grid">
                {columns.map((col, colIndex) => (
                    <div className="masonry-column" key={colIndex}>
                        {col.map((item, itemIndex) => {
                            if (item.type === 'image') {
                                return (
                                    <div className="project-image" key={`${colIndex}-${itemIndex}`}>
                                        <img src={item.content as string} alt="" />
                                    </div>
                                )
                            }

                            const review = item.content as {
                                quote: string
                                text: string
                                author: string
                            }

                            return (
                                <article className="project-review" key={`${colIndex}-${itemIndex}`}>
                                    <div className="project-review-inner">
                                        <blockquote>"{review.quote}"</blockquote>
                                        {review.text && <p>{review.text}</p>}
                                        <p className="project-review-author">- {review.author}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                ))}
            </div>

            <section className="reviews-contact">
                <h2>Skal du også have hjælp til din indretning?</h2>
                <Link to="/kontakt" className="button">
                    Kontakt Kathrine Living
                </Link>
            </section>
        </main>
    )
}

export default IndtrykReferencer