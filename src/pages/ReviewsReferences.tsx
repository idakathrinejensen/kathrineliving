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

function ReviewsReferences() {
    const content = [
        { type: 'image', content: image1 },
        { type: 'image', content: image2 },
        { type: 'image', content: image3 },
        {
            type: 'review',
            content: {
                quote: 'I highly recommend Anne Kathrine. She helped us discover our own unique style for our apartment.',
                text: 'It was important to us that our personal belongings became part of the interior. Anne Kathrine was incredibly skilled at seeing possibilities we hadn’t considered ourselves. She listens, inspires, and has given us a home that truly feels like \'us\'.',
                author: 'J. Jørgensen'
            }
        },
        { type: 'image', content: image4 },
        { type: 'image', content: image5 },
        { type: 'image', content: image6 },
        {
            type: 'review',
            content: {
                quote: 'Our living room wasn’t being used to its full potential, so we needed professional help to make the most of the space.',
                text: 'Kathrine Living turned out to be the right person for the job. She quickly understood the type of furniture we were interested in and had great suggestions for both the layout and the details that make a living room feel cosy. We highly recommend Kathrine Living.',
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
                quote: 'I was looking for ideas for the interior design of my entire apartment and chose Kathrine Living after speaking with several different providers.',
                text: 'Anne Kathrine gave me plenty of inspiration for interior design, colour combinations, and textures. She is a skilled and knowledgeable interior designer who listens carefully to her clients’ wishes and takes a pragmatic approach to things.',
                author: 'J. Lohff'
            }
        },
        { type: 'image', content: image11 },
        { type: 'image', content: image12 },
        { type: 'image', content: image13 },
        {
            type: 'review',
            content: {
                quote: 'And thanks for the amazing help, I am so happy about that. It was just what I wanted. And it might very well be that I will contact you again :-).',
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
                quote: 'Thank you very much for a pleasant and professional treatment. We are so happy with what we had done.',
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
                <h2>Would you like help with your interior styling as well?</h2>
                <Link to="/kontakt" className="button">
                    Contact Kathrine Living
                </Link>
            </section>
        </main>
    )
}

export default ReviewsReferences