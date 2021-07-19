import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Results = (props) => {

    const renderValues = (title, values) => {
        if (typeof values === 'undefined') {
            return;
        }

        return (
            <div className="col-6">
                <h2>{title}</h2>
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
        );
    }

    return (
        <div className="container">
            <form>
                <div className="row">
                    { renderValues('From this match', props.values) }
                    { renderValues('Total', props.totalValues) }
                    
                </div>

                <Button className="mt-5 mb-3" onClick={() => props.onReset()}>Reset</Button>
            </form>
        </div>
    )
    
}

export default Results;