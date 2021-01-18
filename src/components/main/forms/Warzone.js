import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Warzone extends Component {
    static propTypes = {
        prop: PropTypes.object
    }

    results = {
        pushups: 0,
        situps: 0,
        squats: 0
    };

    constructor(props) {
        super();

        this.state = {
            kills: 0,
            deaths: 0,
            damage: 0,
            gulag: false
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? Boolean(target.checked) : Math.max(0, Number(target.value));
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() !== false) {
            this.setResults();
            this.props.onFormSubmit(this.results);
        }
    }

    setResults = () => {
        this.results.pushups = this.state.deaths * 2 + (this.state.gulag ? 3 : 0);
        this.results.situps = this.state.deaths * 3 + (this.state.gulag ? 5 : 0);
        this.results.squats = this.state.deaths * 8 + (this.state.gulag ? 10 : 0);

        let killModifier;
        if (this.state.kills <= 1) {
            killModifier = 5;
        } else if (this.state.kills <= 3) {
            killModifier = 4;
        } else if (this.state.kills <= 5) {
            killModifier = 3;
        } else if (this.state.kills <= 9) {
            killModifier = 2;
        } else {
            killModifier = 1;
        }

        let damageModifier;
        if (this.state.damage <= 1000) {
            damageModifier = 5;
        } else if (this.state.damage <= 2000) {
            damageModifier = 4;
        } else if (this.state.damage <= 3000) {
            damageModifier = 3;
        } else if (this.state.damage <= 4000) {
            damageModifier = 2;
        } else {
            damageModifier = 1;
        }

        this.results.pushups = this.results.pushups + (2 * killModifier) + (2 * damageModifier);
        this.results.situps = this.results.situps + (3 * killModifier) + (3 * damageModifier);
        this.results.squats = this.results.squats + (5 * killModifier) + (5 * damageModifier);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
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
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
                        />
                    </InputGroup>

                    <Form.Check
                        custom
                        name="gulag"
                        type='checkbox'
                        id={`gulag`}
                        label={`Did you die in the gulag?`}
                        onChange={this.handleInputChange}
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
}

export default Warzone;