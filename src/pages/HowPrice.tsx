import { Link } from "react-router-dom"
import "./HvordanPris.css"
import sparringImage from "../assets/billeder/farvemoodboard.png"
import salgImage from "../assets/billeder/stuetræmøbel.jpg"
import gavekortImage from "../assets/billeder/vintagelampe.png"
import oprydningImage from "../assets/billeder/levendelysivindue.jpg"
import stepsIndretningImage from "../assets/billeder/spisebord.jpg"

function HowPrice() {
    return (
        <main className="how-page">

            <section className="how-intro">
                <h1>
                    Do you need help
                    with your interior?
                </h1>

                <p>
                    Whether you need a fresh perspective, specific advice
                    or practical help to move forward, Kathrine Living
                    can help you.
                </p>

                <p>
                    Below you can read about the different ways I can
                    help you and what it costs.
                </p>
            </section>

            <section className="service-navigation">
                <a href="#sparring">Advice</a>
                <a href="#interior-assistance">Interior design assistance</a>
                <a href="#gift-voucher">Gift voucher</a>
                <a href="#decluttering">Decluttering assistance</a>
                <a href="#home-ready-for-sale">Home ready for sale</a>
            </section>

            {/* ADVICE */}
            <section className="service-section" id="sparring">

                <div className="service-image">
                    <img
                        src={sparringImage}
                        alt="Interior design advice"
                    />
                </div>

                <div className="service-content">
                    <h2>Advice</h2>

                    <p>
                        Have you got stuck with the interior design of your home,
                        and are you looking for some input to make everything
                        come together?
                    </p>

                    <p>
                        It doesn't always have to be a major interior design project.
                        Sometimes it's a single challenge or a room that you
                        can't quite get to work. In those cases, an hour of
                        advice may be just what you need to move forward.
                    </p>

                    <p>
                        We meet at your home and take your wishes, needs and
                        challenges as our starting point. Together, we look at
                        the possibilities, and I provide ideas, practical
                        solutions and inspiration that you can continue
                        working with.
                    </p>

                    <p>
                        If you need additional help, further assistance can
                        also be arranged.
                    </p>

                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ hour</small>
                    </div>

                    <Link to="/contact" className="button">
                        CONTACT
                    </Link>
                </div>

            </section>

            {/* INTERIOR DESIGN ASSISTANCE */}
            <section
                className="service-section service-section-reverse"
                id="interior-assistance"
            >

                <div className="service-content">
                    <h2>Interior design assistance</h2>

                    <p>
                        Do you need help making your interior work,
                        both practically and aesthetically?
                    </p>

                    <p>
                        Perhaps you need inspiration, are unsure about colours
                        and furniture, or have a room that simply isn't working.
                        Maybe you have inherited some furniture that doesn't
                        quite fit in, but has great sentimental value to you.
                    </p>

                    <p>
                        Kathrine Living takes your home, your style and your
                        wishes as a starting point, and together we find
                        solutions that suit you and your home.
                    </p>

                    <p>
                        If it fits better into your schedule to meet online,
                        that is also possible.
                    </p>

                    <div className="process">
                        <h3>How it works</h3>

                        <div className="process-step">
                            <span>1</span>

                            <div>
                                <h4>Before the meeting</h4>

                                <p>
                                    We agree on a time when I will come to your
                                    home. To get as much as possible out of our
                                    time together, you are welcome to prepare
                                    beforehand.
                                </p>

                                <ul>
                                    <li>
                                        Note down what isn't working in your
                                        current interior.
                                    </li>

                                    <li>
                                        Consider what you would like to change
                                        and what needs the interior should meet.
                                    </li>

                                    <li>
                                        Feel free to find 4 to 5 images from
                                        e.g. interior magazines, Instagram or
                                        Pinterest that show colours, furniture,
                                        moods or details that you like.
                                    </li>

                                    <li>
                                        Consider your budget if, for example,
                                        you are thinking about changing colours,
                                        lighting, furniture or other elements.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="process-step">
                            <span>2</span>

                            <div>
                                <h4>At your home</h4>

                                <p>
                                    We meet at your home and go through your
                                    wishes and challenges. Together, we look
                                    at the rooms and talk about the possibilities,
                                    from colours and furniture to lighting,
                                    materials and layout.
                                </p>

                                <p>
                                    The meeting typically lasts around 1.5 hours.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <span>3</span>

                            <div>
                                <h4>After the meeting</h4>

                                <p>
                                    After our meeting, I gather the ideas and
                                    solutions we have discussed and send you
                                    concrete suggestions that you can continue
                                    working with.
                                </p>

                                <p>
                                    You will also receive links and recommendations
                                    for relevant products, giving you a concrete
                                    starting point for bringing the ideas to life.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="service-summary">
                        Simple and personal interior design assistance that gives
                        you inspiration, concrete ideas and a good starting point
                        for moving forward with your home.
                    </p>

                    <div className="price">
                        <span>2,400 kr.</span>
                    </div>

                    <Link to="/contact" className="button">
                        CONTACT
                    </Link>
                </div>

                <div className="service-image">
                    <img
                        src={stepsIndretningImage}
                        alt="Interior design assistance"
                    />
                </div>

            </section>

            {/* GIFT VOUCHER */}
            <section className="service-section gift-section" id="gift-voucher">

                <div className="service-image">
                    <img
                        src={gavekortImage}
                        alt="Gift voucher for interior design assistance"
                    />
                </div>

                <div className="service-content">
                    <h2>Gift voucher for interior design assistance</h2>

                    <p>
                        Treat someone you care about, or add it to your own
                        wish list.
                    </p>

                    <p>
                        With a gift voucher for interior design assistance,
                        the recipient gets personal advice and inspiration
                        for their home. Perhaps there is a room that needs
                        some fresh ideas, a new home that needs to be furnished,
                        or simply a need for a fresh perspective on the home
                        they already have.
                    </p>

                    <p>
                        Together, we find possibilities and solutions that
                        suit the home, the needs and the recipient's personal style.
                    </p>

                    <p>
                        The gift voucher covers a one-hour visit. If you have
                        other wishes for what the gift voucher should cover,
                        we can work that out together.
                    </p>

                    <p>
                        The gift voucher is sent as a PDF by email, ready for
                        you to print and wrap beautifully yourself. The recipient
                        then contacts Kathrine Living to discuss their wishes
                        and needs and arrange a suitable time.
                    </p>

                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ hour</small>
                    </div>

                    <a
                        href="mailto:akj@kathrineliving.dk"
                        className="button"
                    >
                        ORDER GIFT VOUCHER
                    </a>
                </div>

            </section>

            {/* DECLUTTERING */}
            <section
                className="service-section service-section-reverse"
                id="decluttering"
            >

                <div className="service-content">
                    <h2>Decluttering assistance</h2>

                    <p>
                        Get help creating structure and an overview in your
                        everyday life.
                    </p>

                    <p>
                        In a busy everyday life, it can be difficult to know
                        where to start when things need to be decluttered
                        and more order needs to be created.
                    </p>

                    <p>
                        Kathrine Living helps you get an overview, find a good
                        order in which to tackle things and create a simple
                        structure for getting started, without everything
                        having to be done at once.
                    </p>

                    <p>
                        Together, we find systems and routines that suit you,
                        your everyday life and your home, making it easier
                        to keep things organised going forward.
                    </p>

                    <p>
                        The goal is not a perfect home, but to make it more
                        manageable to get started and easier to maintain.
                    </p>

                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ hour</small>
                    </div>

                    <Link to="/contact" className="button">
                        CONTACT
                    </Link>
                </div>

                <div className="service-image">
                    <img
                        src={oprydningImage}
                        alt="Decluttering assistance"
                    />
                </div>

            </section>

            {/* HOME READY FOR SALE */}
            <section
                className="service-section"
                id="home-ready-for-sale"
            >

                <div className="service-image">
                    <img
                        src={salgImage}
                        alt="Home ready for sale"
                    />
                </div>

                <div className="service-content">
                    <h2>Home ready for sale</h2>

                    <p>
                        Are you preparing to sell your home and would you like
                        it to be viewed through "a buyer's eyes" before the
                        photos for the sales listing are taken?
                    </p>

                    <p>
                        First impressions matter. The listing photos are the
                        first thing that needs to catch a potential buyer's
                        attention and make them want to see the home.
                    </p>

                    <p>
                        Good and inviting photos should ideally spark curiosity
                        and make the buyer think:
                        "I would like to live here."
                    </p>

                    <p>
                        When you have lived in your home for a long time,
                        you naturally become used to how it looks. You may
                        no longer notice the things that take up space or
                        the small details that an outside perspective will
                        notice immediately.
                    </p>

                    <p>
                        An outside perspective can make a difference. Kathrine
                        Living helps you see your home through "a buyer's eyes"
                        and helps you see what could be adjusted,
                        removed or highlighted so that the qualities of the
                        home become clearer.
                    </p>

                    <p>
                        It is about creating space, calm and balance, so the
                        home feels inviting and shows itself at its best.
                        Together, we figure out what makes sense to focus on
                        before the photography and what you can safely leave
                        as it is.
                    </p>

                    <p>
                        The goal is to create a home that makes the buyer
                        want to come inside and see more.
                    </p>

                    <div className="price">
                        <span>750 kr.</span>
                        <small>/ hour</small>
                    </div>

                    <Link to="/contact" className="button">
                        CONTACT
                    </Link>
                </div>

            </section>

            {/* CONTACT */}
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
                        to="/contact"
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