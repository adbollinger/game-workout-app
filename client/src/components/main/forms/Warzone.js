import React, { useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Warzone = (props) => {
    const results = {
        pushups: 0,
        situps: 0,
        squats: 0
    };

    const [inputs, setInputs] = useState({
        kills: 0,
        deaths: 0,
        damage: 0,
        gulag: false
    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? Boolean(target.checked) : Math.max(0, Number(target.value));
        const name = target.name;

        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() !== false) {
            setResults();
            props.onFormSubmit(results);
        }
    }

    const setResults = () => {
        results.pushups = inputs.deaths * 2 + (inputs.gulag ? 3 : 0);
        results.situps = inputs.deaths * 3 + (inputs.gulag ? 5 : 0);
        results.squats = inputs.deaths * 8 + (inputs.gulag ? 10 : 0);

        let killModifier;
        if (inputs.kills <= 1) {
            killModifier = 5;
        } else if (inputs.kills <= 3) {
            killModifier = 4;
        } else if (inputs.kills <= 5) {
            killModifier = 3;
        } else if (inputs.kills <= 9) {
            killModifier = 2;
        } else {
            killModifier = 1;
        }

        let damageModifier;
        if (inputs.damage <= 1000) {
            damageModifier = 5;
        } else if (inputs.damage <= 2000) {
            damageModifier = 4;
        } else if (inputs.damage <= 3000) {
            damageModifier = 3;
        } else if (inputs.damage <= 4000) {
            damageModifier = 2;
        } else {
            damageModifier = 1;
        }

        results.pushups = results.pushups + (2 * killModifier) + (2 * damageModifier);
        results.situps = results.situps + (3 * killModifier) + (3 * damageModifier);
        results.squats = results.squats + (5 * killModifier) + (5 * damageModifier);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="kills">Your Kills</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="kills"
                        type="number"
                        min="0"
                        placeholder="0"
                        aria-label="0"
                        aria-describedby="kills"
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="deaths">Your Deaths</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="deaths"
                        type="number"
                        min="0"
                        placeholder="0"
                        aria-label="0"
                        aria-describedby="deaths"
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="damage">Your Damage</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="damage"
                        type="number"
                        min="0"
                        placeholder="0"
                        aria-label="0"
                        aria-describedby="damage"
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <Form.Check
                    custom
                    name="gulag"
                    type='checkbox'
                    id={`gulag`}
                    label={`Did you die in the gulag?`}
                    onChange={handleInputChange}
                    style={{
                        height: '28px',
                        lineHeight: '22px'
                    }}
                />
                <Button className="mt-5 mb-3" type="submit">What's my workout?</Button>
            </Form>
        </div>
    );
}

export default Warzone;