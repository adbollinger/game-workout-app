import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Results extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="pushups">Pushups</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="pushups"
                            type="number"
                            value={this.props.values.pushups}
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
                            value={this.props.values.situps}
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
                            value={this.props.values.squats}
                            aria-describedby="squats"
                            readOnly
                        />
                    </InputGroup>
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