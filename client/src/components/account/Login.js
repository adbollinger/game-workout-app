import React, { useState, useEffect } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { authActions } from '../../_actions';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.userReducer.loading);
    const isLoggedIn = useSelector(state => state.authReducer.loggedIn);

    useEffect(() => {
        dispatch(authActions.getUser());

        if (!loading && isLoggedIn) {
            props.history.push('/home');
        }
    }, [isLoggedIn]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() !== false && name !== '') {
            dispatch(authActions.login(name, password));
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit} className="card-view">
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="name">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="name"
                        type="text"
                        placeholder=""
                        aria-label="0"
                        aria-describedby="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="password">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="password"
                        type="password"
                        placeholder=""
                        aria-label="0"
                        aria-describedby="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>

                <Button className="mt-5 mb-3" type="submit">Login</Button>
            </Form>
        </div>
    )
    
}

export default withRouter(Login);