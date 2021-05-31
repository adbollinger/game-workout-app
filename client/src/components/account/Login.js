import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { authActions } from '../../_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Login extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        user: PropTypes.object
    }

    constructor() {
        super();
        this.state = {
            name: "",
            password: ""
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() !== false && this.state.name !== '') {
            this.props.login(this.state.name, this.state.password);
        }
    }

    render() {
        if (!this.props.loading && this.props.user.name) {
            this.props.history.push('/home');
        }

        return (
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit} className="card-view">
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
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
                        />
                    </InputGroup>

                    <Button className="mt-5 mb-3" type="submit">Login</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { userReducer, authReducer } = state;
    const { user } = authReducer;
    return { userReducer, user }
};

const actions = {
    login: authActions.login
}

export default compose(
    withRouter,
    connect(mapStateToProps, actions)
)(Login);