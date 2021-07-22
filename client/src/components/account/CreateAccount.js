import React, { useState, useEffect } from 'react';
import { authActions, userActions } from '../../_actions';

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
    const isLoggedIn = useSelector(state => state.authReducer.loggedIn);

    useEffect(() => {
        if (user) {
            dispatch(authActions.login(name, password));
        }

        if (isLoggedIn) {
            props.history.push('/home');
        }
    }, [user, isLoggedIn]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name,
            password
        };

        setSubmitted(true);

        dispatch(userActions.addUser(user));
    }

    return (
        <div id="account_page">
            <Button onClick={() => props.history.push('/')} className="back-button">Go back</Button>
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
