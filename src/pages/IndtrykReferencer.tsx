import { useState, useEffect } from 'react'
import './IndtrykReferencer.css'
import { Link } from 'react-router-dom'

import image1 from '../assets/billeder/entre.jpg'
import image2 from '../assets/billeder/levendelys.jpg'
import image3 from '../assets/billeder/skrivebord.jpg'
import image5 from '../assets/billeder/tapetvægsoveværelse.jpeg'
import image6 from '../assets/billeder/_HEY4208.jpg'
import image7 from '../assets/billeder/værelse.jpg'
import image8 from '../assets/billeder/citronplakat.jpeg'
import image9 from '../assets/billeder/badeværelse.jpg'
import image14 from '../assets/billeder/sæbeholder.jpeg'
import image15 from '../assets/billeder/skrivebordsdimser.jpg'
import image16 from '../assets/billeder/spisebord.jpg'
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
import image34 from '../assets/billeder/malerprojekt.png'
import image35 from '../assets/billeder/IMG_5048.jpeg'
import image37 from '../assets/billeder/drengeværelse.jpg'
import image38 from '../assets/billeder/blomster.jpeg'

import stairsImage from '../assets/billeder/gårpåtrappen.jpeg'
import diningRoomImage from '../assets/billeder/kundespisestue.jpeg'
import woodenFurnitureImage from '../assets/billeder/stuetræmøbel.jpg'

import showroom1 from '../assets/billeder/showroom/5D272B12-8CD4-49BC-A086-C24F769FBE87_1_105_c.jpeg'
import showroom2 from '../assets/billeder/showroom/59E25A35-E99F-4D20-93EB-1D8FC2C45536_1_105_c.jpeg'
import showroom3 from '../assets/billeder/showroom/5487CE15-7E94-458B-8D23-56FD4D293605_1_102_o.jpeg'
import showroom4 from '../assets/billeder/showroom/9268CDA7-FAC1-4516-ADAB-1C43491396AF_1_102_o.jpeg'
import showroom5 from '../assets/billeder/showroom/A1A24E88-4342-4E02-9920-71CA9EC8DA84_1_105_c.jpeg'
import showroom6 from '../assets/billeder/showroom/B19A08CD-4908-4ECD-8AEA-A2FE10FDA6B7_1_105_c.jpeg'
import showroom7 from '../assets/billeder/showroom/C4F569D8-0857-4C18-9451-F40B5EB351F7_1_105_c.jpeg'
import showroom8 from '../assets/billeder/showroom/CA525CAD-994D-49FE-A7CA-9B4745794886_1_105_c.jpeg'
import showroom9 from '../assets/billeder/showroom/D4D75FC4-BB83-4C27-8CDF-9C6F67864BCC_1_105_c.jpeg'
import showroom10 from '../assets/billeder/showroom/FBCA33A6-2695-40BC-96AA-CB5EE4D95084_1_105_c.jpeg'


function IndtrykReferencer() {
    const content = [
        { type: 'image', content: image1 },
        { type: 'image', content: image2 },
        { type: 'image', content: stairsImage },

        {
            type: 'review',
            content: {
                quote: 'Og tak for vildt god hjælp, det er jeg så glad for. Det var lige det jeg ønskede. Og det kan meget vel være jeg kontakter dig igen :-).',
                text: '',
                author: 'H. Soegaard'
            }
        },

        { type: 'image', content: image3 },
        { type: 'image', content: image5 },
        { type: 'image', content: image6 },

        {
            type: 'review',
            content: {
                quote: 'Jeg kan på det varmeste anbefale Anne Kathrine. Hun har hjulpet os med at finde frem til vores helt egen stil i vores lejlighed.',
                text: 'Det var vigtigt for os, at vores personlige ejendele blev en del af indretningen. Anne Kathrine var utrolig dygtig til at se muligheder, vi ikke selv havde overvejet. Hun lytter, inspirerer og har givet os et hjem, der føles som \'os\'.',
                author: 'J. Jørgensen'
            }
        },

        { type: 'image', content: image7 },
        { type: 'image', content: image8 },
        { type: 'image', content: image9 },

        {
            type: 'review',
            content: {
                quote: 'Vores stue blev ikke udnyttet optimalt, så vi havde brug for at få professionel hjælp til at få den bedste udnyttelse af stuen.',
                text: 'Kathrine Living viste sig at være rette person til opgaven. Hun var hurtig til at fange, hvilken type af møbler vi var interesserede i, og hun havde gode forslag både til indretning og til det, der gør en stue hyggelig. Vi kan varmt anbefale Kathrine Living.',
                author: 'M. Poulsen'
            }
        },

        { type: 'image', content: image14 },
        { type: 'image', content: image15 },
        { type: 'image', content: image16 },

        {
            type: 'review',
            content: {
                quote: 'Jeg manglede ideer til indretning af hele min lejlighed og valgte Kathrine Living efter en række samtaler med flere udbydere.',
                text: 'Anne Kathrine gav mig masser af inspiration til indretning, farvesammensætning og strukturer. Hun er en dygtig og kompetent indretter, som er lydhør overfor egne ønsker og har en pragmatisk tilgang til tingene.',
                author: 'J. Lohff'
            }
        },

        { type: 'image', content: diningRoomImage },
        { type: 'image', content: woodenFurnitureImage },
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
        { type: 'image', content: image34 },
        { type: 'image', content: image35 },
        { type: 'image', content: image37 },
        { type: 'image', content: image38 }
    ]

    const showroomImages = [
        showroom1,
        showroom2,
        showroom3,
        showroom4,
        showroom5,
        showroom6,
        showroom7,
        showroom8,
        showroom9,
        showroom10
    ]

    const [colCount, setColCount] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setColCount(2)
            } else {
                setColCount(3)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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

            <section className="showroom-section">
                <h2>Showroom</h2>

                <div className="showroom-grid">
                    {showroomImages.map((image, index) => (
                        <div className="project-image" key={index}>
                            <img src={image} alt="" />
                        </div>
                    ))}
                </div>
            </section>

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