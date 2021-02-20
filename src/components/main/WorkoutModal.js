import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class WorkoutModal extends Component {
    static propTypes = {
        showModal: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state = {
            pushups: 0,
            situps: 0,
            squats: 0
        };
    }



    handleInputChange = (event) => {
        const target = event.target;
        const value = Number(target.value); // TODO -  Math.max(0, Number(target.value));
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { results, handleSubmit, handleClose } = this.props;
        
        return (
            <Modal key={this.props.showModal} show={this.props.showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Submit a workout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className={results === undefined ? "col-12" : "col-6"}>
                            <h4>Your completed workout</h4>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="pushups">Pushups</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="pushups"
                                    type="number"
                                    value={this.state.pushups}
                                    aria-describedby="pushups"
                                    onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="situps">Situps</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="situps"
                                    type="number"
                                    value={this.state.situps}
                                    aria-describedby="situps"
                                    onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="squats">Squats</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="squats"
                                    type="number"
                                    value={this.state.squats}
                                    aria-describedby="squats"
                                    onChange={this.handleInputChange}
                                />
                            </InputGroup>
                        </div>
                        {results &&
                            <div className="col-6">
                                <h4>Your remaining workout</h4>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="pushups">Pushups</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        name="pushups"
                                        type="number"
                                        value={results.pushups}
                                        aria-describedby="pushups"
                                        readOnly
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="situps">Situps</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        name="situps"
                                        type="number"
                                        value={results.situps}
                                        aria-describedby="situps"
                                        readOnly
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="squats">Squats</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        name="squats"
                                        type="number"
                                        value={results.squats}
                                        aria-describedby="squats"
                                        readOnly
                                    />
                                </InputGroup>
                            </div>
                        }
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmit(this.state) }}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default WorkoutModal;