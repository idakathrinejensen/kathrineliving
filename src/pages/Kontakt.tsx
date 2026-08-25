import { useEffect, useState, type ChangeEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Kontakt.css";

function Kontakt() {
    const [state, handleSubmit] = useForm("xvkpjoka");

    const [isLoading, setIsLoading] = useState(false);
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
                    Tak for din henvendelse, jeg vender snart tilbage!
                </p>
            </div>
        );
    }

    return (
        <div className="contact-page">
            <div className="contact-form">
                <h1>Kontakt</h1>

                <form onSubmit={handleSubmit} className="form-items">
                    <label
                        htmlFor="name"
                        className="form-item label"
                    >
                        Navn
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
                        Mail
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
                        Telefon
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
                    />

                    <label
                        htmlFor="contactPreference"
                        className="form-item label"
                    >
                        Hvordan vil du helst kontaktes?
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
                            Vælg kontaktform
                        </option>
                        <option value="email">Mail</option>
                        <option value="phone">Telefon</option>
                    </select>

                    <label
                        htmlFor="message"
                        className="form-item label"
                    >
                        Besked
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
                        prefix="Besked"
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
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Kontakt;