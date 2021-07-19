import React, { useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const League = (props) => {

    const results = {
        pushups: 0,
        situps: 0,
        squats: 0
    };

    const [inputs, setInputs] = useState({
        kills: 0,
        deaths: 0,
        assists: 0,
        towers: 0,
        dragons: 0,
        barons: 0,
        win: false
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

        if (form.checkValidity()) {
            setResults();
            props.onFormSubmit(results);
        }
    }

    const setResults = () => {
        results.pushups = Math.ceil(inputs.kills * 0.5) + inputs.deaths + Math.ceil(inputs.dragons * 1.5) + Math.ceil(inputs.barons * 2.5) + (inputs.win ? 2 : 4);
        results.situps = inputs.assists + inputs.deaths + Math.ceil(inputs.dragons * 3.5) + Math.ceil(inputs.barons * 5.5) + (inputs.win ? 4 : 6);
        results.squats = inputs.towers * 6 + (inputs.win ? 12 : 16);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="kills">Enemy Kills</InputGroup.Text>
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
                        <InputGroup.Text id="assists">Enemy Assists</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="assists"
                        type="number"
                        min="0"
                        placeholder="0"
                        aria-label="0"
                        aria-describedby="assists"
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="towers">Towers Enemy Has Destroyed</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="towers"
                        type="number"
                        min="0"
                        placeholder="0"
                        aria-label="0"
                        aria-describedby="towers"
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="dragons">Dragons Enemy Has Killed</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="dragons"
                        type="number"
                        min="0"
                        placeholder="0"
                        aria-label="0"
                        aria-describedby="dragons"
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="barons">Barons Enemy Has Killed</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="barons"
                        type="number"
                        min="0"
                        placeholder="0"
                        aria-label="0"
                        aria-describedby="barons"
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <Form.Check
                    custom
                    name="win"
                    type='checkbox'
                    id={`victory`}
                    label={`Did you win the game?`}
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

export default League;