import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Results extends Component {
    render() {
        const { values, totalValues } = this.props;
        return (
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-6">
                            <h2>From this match</h2>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="pushups">Pushups</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="pushups"
                                    type="number"
                                    value={values.pushups}
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
                                    value={values.situps}
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
                                    value={values.squats}
                                    aria-describedby="squats"
                                    readOnly
                                />
                            </InputGroup>
                        </div>
                        <div className="col-6">
                            <h2>Total</h2>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="pushups">Pushups</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="pushups"
                                    type="number"
                                    value={totalValues.pushups}
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
                                    value={totalValues.situps}
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
                                    value={totalValues.squats}
                                    aria-describedby="squats"
                                    readOnly
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <Button className="mt-5 mb-3" onClick={() => this.props.onReset()}>Reset</Button>
                </form>
            </div>
        )
    }
}

Results.propTypes = {
    values: PropTypes.object.isRequired,
    onReset: PropTypes.func.isRequired
}

export default Results;