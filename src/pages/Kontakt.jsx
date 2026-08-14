import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Kontakt () {

    const [state, handleSubmit] = useForm("mbgrkbrw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div>
            <h1>Kontakt</h1>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                />
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Kontakt