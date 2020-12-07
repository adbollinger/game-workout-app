import React, { Component } from 'react';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';

import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateAccount extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            submit: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: this.state.name,
            pushups: 0,
            situps: 0,
            squats: 0,
        };

        this.setState({
            submit: true
        })

        this.props.addUser(user);
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                        Submit
                    </Button>
                    { this.state.submit && !this.users && (this.users && !this.users.loading) &&
                        <Form.Text className="text-muted">
                            There was an issue creating your account.
                        </Form.Text>
                    }
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { users, auth } = state;
    const { user } = auth;
    return { users, user }
};

const actions = {
    addUser: userActions.addUser
}

export default connect(mapStateToProps, actions)(CreateAccount);
