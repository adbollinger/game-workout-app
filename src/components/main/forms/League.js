import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class League extends Component {
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
            assists: 0,
            towers: 0,
            dragons: 0,
            barons: 0,
            win: false
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
        this.results.pushups = Math.ceil(this.state.kills * 0.5) + this.state.deaths + Math.ceil(this.state.dragons * 1.5) + Math.ceil(this.state.barons * 2.5) + (this.state.win ? 2 : 4);
        this.results.situps = this.state.assists + this.state.deaths + Math.ceil(this.state.dragons * 3.5) + Math.ceil(this.state.barons * 5.5) + (this.state.win ? 4 : 6);
        this.results.squats = this.state.towers * 6 + (this.state.win ? 12 : 16);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
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
                            <InputGroup.Text id="assists">Enemy Assists</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="assists"
                            type="number"
                            min="0"
                            placeholder="0"
                            aria-label="0"
                            aria-describedby="assists"
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
                        />
                    </InputGroup>

                    <Form.Check
                        custom
                        name="win"
                        type='checkbox'
                        id={`victory`}
                        label={`Did you win the game?`}
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

export default League;