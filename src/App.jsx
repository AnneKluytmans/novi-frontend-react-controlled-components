import React, {useState} from 'react';
import './App.css';

function App() {
    const [formState, setFormState] = useState ({
        name: '',
        age: 0,
        comments: '',
        newsletter: false,
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="name-field">
                    Naam:
                    <input
                        type="text"
                        id="name-field"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="age-field">
                    Leeftijd:
                    <input
                    type="text"
                    id="age-field"
                    name="age"
                    value={formState.age}
                    onChange={handleChange}
                    />
                </label>
            </fieldset>
            <fieldset>
                <legend>Jouw review</legend>

                <label htmlFor="comments-field">
                    Opmerkingen:
                    <textarea
                    id="comments-field"
                    name="comments"
                    value={formState.comments}
                    onChange={handleChange}
                    placeholder="Wat vond je van het recept?"
                    rows="3"
                    cols="30"
                    >
                    </textarea>
                </label>

                <label htmlFor="newsletter_field">
                    <input
                        type="checkbox"
                        id="newsletter_field"
                        name="newsletter"
                        value={formState.newsletter}
                        onChange={handleChange}
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>

                <button type="submit">Versturen</button>
            </fieldset>
        </form>
    );
}

export default App;
