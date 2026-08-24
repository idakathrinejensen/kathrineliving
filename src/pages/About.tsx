import './Om.css'
import profileImage from '../assets/IMG_6554.jpeg'
import {Link} from 'react-router-dom'


function About() {
    return (
        <main className="about-page">

            <section className="about-person">
                <div className="about-image">
                    <img src={profileImage} alt="Anne Kathrine fra Kathrine Living"/>
                </div>
                <div className="about-content">
                    <h2>
                        Interior design with personality, aesthetics, and an eye for detail
                    </h2>
                    <p>
                        Kathrine Living specialises in interior design and home styling for both private clients and businesses. 
                        Since 2008, I have helped clients create beautiful, personal, and functional spaces based on their individual needs, style, and personality.
                    </p>
                    <p>
                        Kathrine Living was founded in 2008 by interior designer and home stylist Anne Kathrine.
                        I have always had a great passion for interior design and follow new trends, materials, colours, 
                        and developments within interiors and home design with great interest. 
                        For me, however, good interior design is not about following trends at all costs 
                        - it is about creating a cohesive space that feels right and stands the test of time.

                    </p>
                </div>
            </section>

            <section className="why-section">
                <div className="why-content">
                    <h2>Thinking about refreshing your home or business?</h2>
                    <p>
                        You are always welcome to get in touch for a no-obligation conversation about your ideas and wishes. Contact me at:
                    </p>
                    <div className="about-contact">
                        <a href="tel:29447048">
                            +45 29 44 70 48
                        </a>
                        <a href="mailto:akj@kathrineliving.dk">
                            akj@kathrineliving.dk
                        </a>
                    </div>
                <Link
                    to='/contact'
                    className="button"
                >
                    CONTACT
                </Link>
                
                </div>
            </section>
        </main>
    )
}

export default About