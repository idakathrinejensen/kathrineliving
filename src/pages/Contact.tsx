import { useEffect, useState, type ChangeEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Kontakt.css";

function Contact() {
    const [state, handleSubmit] = useForm("xvkpjoka");

    const [isLoading, setIsLoading] = useState(false);
    const [usernameExists, setUsernameExists] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [isFilled, setIsFilled] = useState({
        name: false,
        email: false,
        message: false,
    });

    const [isValidated, setIsValidated] = useState({
        name: true,
        email: true,
        message: true,
    });

    function handleFilled(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const newValue = e.target.value;
        const fieldName = e.target.name;

        setIsFilled((prev) => ({
            ...prev,
            [fieldName]: newValue.length > 0,
        }));

        setIsValidated((prev) => ({
            ...prev,
            [fieldName]: newValue.length > 0,
        }));
    }

    useEffect(() => {
        const allFilled =
            isFilled.name &&
            isFilled.email &&
            isFilled.message;

        setIsButtonDisabled(!allFilled);
    }, [isFilled, usernameExists]);

    if (state.succeeded) {
        return (
            <div className="contact-page">
                <p className="form-completed">
                    Thanks for writing, I'll get back to you soon!
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
                    />

                    <label
                        htmlFor="email"
                        className="form-item label"
                    >
                        Email Address
                    </label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-item input"
                        onChange={handleFilled}
                        onBlur={handleFilled}
                    />

                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

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
                    />

                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button
                        type="submit"
                        className={
                            isButtonDisabled
                                ? "submit-button-disabled"
                                : "submit-button-enabled"
                        }
                        disabled={isButtonDisabled || isLoading}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;