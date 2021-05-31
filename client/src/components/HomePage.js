import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {


    constructor() {
        super();

        this.state = {
            redirect: ''
        }
    }

    goToLogin() {
        this.setState({ redirect: '/account/login' });
    }

    goToCreateAccount() {
        this.setState({ redirect: '/account/create' });
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            this.props.history.push(redirect);
        }
        return (
            <div id="home_page">
                <Button className="login-button" variant="outline-primary" onClick={this.goToLogin.bind(this)}>Login</Button>

                <div className="container">
                    <Row>
                        <Col className="text">
                            <h1>Game workouts</h1>
                            <h5>Input your stats for a match and we'll give you a workout so you can stay active while you play.</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={this.goToCreateAccount.bind(this)}>Get started</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage);
