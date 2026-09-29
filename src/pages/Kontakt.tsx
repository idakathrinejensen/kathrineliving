import { useEffect, useState, type ChangeEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Kontakt.css";

function Kontakt() {
    const [state, handleSubmit] = useForm("xvkpjoka");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [contactPreference, setContactPreference] = useState("");

    const [isFilled, setIsFilled] = useState({
        firstName: false,
        lastName: false,
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
            isFilled.firstName &&
            isFilled.lastName &&
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
                        htmlFor="firstName"
                        className="form-item label"
                    >
                        Fornavn
                    </label>

                    <input
                        id="firstName"
                        name="firstName"
                        className="form-item input"
                        onChange={handleFilled}
                        onBlur={handleFilled}
                        autoFocus
                        required
                    />

                    <label
                        htmlFor="lastName"
                        className="form-item label"
                    >
                        Efternavn
                    </label>

                    <input
                        id="lastName"
                        name="lastName"
                        className="form-item input"
                        onChange={handleFilled}
                        onBlur={handleFilled}
                        required
                    />

                    <label
                        htmlFor="city"
                        className="form-item label"
                    >
                        By
                    </label>

                    <input
                        id="city"
                        name="city"
                        className="form-item input"
                        onChange={handleFilled}
                        onBlur={handleFilled}
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
                        pattern="[0-9+ ()-]+"
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
                        onChange={(e) => {
                            handleFilled(e);
                            setContactPreference(e.target.value);
                        }}
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

                    {contactPreference === "phone" && (
                        <>
                            <label
                                htmlFor="callTime"
                                className="form-item label"
                            >
                                Hvornår er det et godt tidspunkt at ringe?
                            </label>

                            <input
                                id="callTime"
                                name="callTime"
                                className="form-item input"
                                placeholder="F.eks. hverdage mellem 8 og 9"
                                onChange={handleFilled}
                                onBlur={handleFilled}
                            />
                        </>
                    )}

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
                            isButtonDisabled || state.submitting
                                ? "submit-button-disabled"
                                : "submit-button-enabled"
                        }
                        disabled={isButtonDisabled || state.submitting}
                    >
                        {state.submitting ? (
                        <>
                            <span className="loading-spinner"></span>
                            Sender...
                        </>
                    ) : (
                        "Send"
                    )}
                </button>
                </form>
            </div>
        </div>
    );
}

export default Kontakt;