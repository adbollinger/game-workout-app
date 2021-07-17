import React, { useState } from 'react';
import { userActions } from '../../_actions';

import { useSelector, useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

const CreateAccount = (props) => {
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const loading = useSelector(state => state.userReducer.loading);
    const user = useSelector(state => state.userReducer.user);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name,
            password,
            pushups: 0,
            situps: 0,
            squats: 0,
        };

        setSubmitted(true);

        dispatch(userActions.addUser(user));
    }

    const returnHome = () => {
        props.history.push('/');
    }
    
    return (
        <div>
            <Button onClick={returnHome} className="mb-3">Go back</Button>
            <Form onSubmit={handleSubmit} className="card-view">
                <Form.Group controlId="name">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                    Submit
                </Button>

                { submitted && !user && !loading &&
                    <Form.Text className="text-muted">
                        There was an issue creating your account.
                    </Form.Text>
                }
            </Form>
        </div>
    )
}

export default withRouter(CreateAccount);
