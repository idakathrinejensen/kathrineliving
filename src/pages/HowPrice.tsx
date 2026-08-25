import {Link} from 'react-router-dom'
import './HvordanPris.css'
import online from "../assets/billeder/farvemoodboard.png"
import gavekort from "../assets/billeder/tapetcloseup.jpeg"

function HowPrice() {
    return (
        <main className="how-page">

            <section className="how-intro">
                <h1>
                    Interior design based on you,
                    your home and your needs.
                </h1>
                <p>
                    Sometimes it can be difficult to create a cohesive look in your home.
                    Perhaps you have just moved, need help making your furniture work in your new surroundings,
                    or your home simply needs to be decluttered and rethought.
                </p>
                <p>
                    Kathrine Living offers personal interior design assistance
                    and tailored solutions based on your personal style,
                    wishes and needs.
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
                        Online interior design
                    </h2>
                    <p>
                        If it works better for you or your schedule
                        to meet online, that is absolutely possible.
                    </p>
                    <p>
                        Kathrine Living helps you with tailored
                        interior design solutions adapted to your personal
                        style, wishes and needs.
                    </p>
                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ hour</small>
                    </div>
                    <p>
                        Contact Kathrine Living and let's arrange a time
                        that works for you.
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
                <h2>Shall we have a chat?</h2>
                <p>
                    Call or write to Kathrine Living
                    <br />
                    and tell us about your wishes and needs.
                </p>
                <div className="contact-details">
                    <a href="tel:29447048">
                        +45 29 44 70 48
                    </a>
                    <a href="mailto:akj@kathrineliving.dk">
                        akj@kathrineliving.dk
                    </a>
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

export default HowPrice