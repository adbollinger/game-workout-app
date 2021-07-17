import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const WorkoutModal = (props) => {
    const propTypes = {
        showModal: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired
    }

    const [pushups, setPushups] = useState(0);
    const [situps, setSitups] = useState(0);
    const [squats, setSquats] = useState(0);

    const { results, handleSubmit, handleClose } = props;

    return (
        <Modal key={props.showModal} show={props.showModal} onHide={handleClose} size="lg">
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
                                value={pushups}
                                aria-describedby="pushups"
                                onChange={(e) => setPushups(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="situps">Situps</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="situps"
                                type="number"
                                value={situps}
                                aria-describedby="situps"
                                onChange={(e) => setSitups(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="squats">Squats</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="squats"
                                type="number"
                                value={squats}
                                aria-describedby="squats"
                                onChange={(e) => setSquats(e.target.value)}
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
                <Button variant="primary" onClick={() => { handleSubmit({pushups, situps, squats}) }}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
    
}

export default WorkoutModal;