import { useEffect, useState, type ChangeEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Kontakt.css";

function Contact() {
    const [state, handleSubmit] = useForm("xvkpjoka");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [isFilled, setIsFilled] = useState({
        name: false,
        email: false,
        phone: false,
        contactPreference: false,
        message: false,
    });

    function handleFilled(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const newValue = e.target.value;
        const fieldName = e.target.name;

        setIsFilled((prev) => ({
            ...prev,
            [fieldName]: newValue.length > 0,
        }));
    }

    useEffect(() => {
        const allFilled =
            isFilled.name &&
            isFilled.email &&
            isFilled.phone &&
            isFilled.contactPreference &&
            isFilled.message;

        setIsButtonDisabled(!allFilled);
    }, [isFilled]);

    if (state.succeeded) {
        return (
            <div className="contact-page">
                <p className="form-completed">
                    Thanks for your enquiry, I'll get back to you soon!
                </p>
            </div>
        );
    }

    return (
        <div className="contact-page">
            <div className="contact-form">
                <h1>Contact</h1>

                <form onSubmit={handleSubmit} className="form-items">
                    <label
                        htmlFor="name"
                        className="form-item label"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        className="form-item input"
                        onChange={handleFilled}
                        onBlur={handleFilled}
                        autoFocus
                        required
                    />

                    <label
                        htmlFor="email"
                        className="form-item label"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-item input"
                        onChange={handleFilled}
                        onBlur={handleFilled}
                        required
                    />

                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <label
                        htmlFor="phone"
                        className="form-item label"
                    >
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="form-item input"
                        onChange={handleFilled}
                        onBlur={handleFilled}
                        required
                        inputMode="tel"
                        pattern="[0-9+ ()-]+"
                    />

                    <label
                        htmlFor="contactPreference"
                        className="form-item label"
                    >
                        How would you prefer to be contacted?
                    </label>
                    <select
                        id="contactPreference"
                        name="contactPreference"
                        className="form-item input"
                        onChange={handleFilled}
                        onBlur={handleFilled}
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>
                            Select contact method
                        </option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>

                    <label
                        htmlFor="message"
                        className="form-item label"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        className="form-item input message"
                        onChange={handleFilled}
                        onBlur={handleFilled}
                        required
                        minLength={10}
                    />

                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button
                        type="submit"
                        className={
                            isButtonDisabled || state.submitting
                                ? "submit-button-disabled"
                                : "submit-button-enabled"
                        }
                        disabled={isButtonDisabled || state.submitting}
                    >
                        {state.submitting ? (
                        <>
                            <span className="loading-spinner"></span>
                            Sending...
                        </>
                    ) : (
                        "Submit"
                    )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;