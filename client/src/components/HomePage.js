import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

const HomePage = (props) => {
    const navigate = (location) => {
        props.history.push(location);
    }
    
    return (
        <div id="home_page">
            <Button className="login-button" variant="outline-primary" onClick={() => navigate('/account/login')}>Login</Button>

            <div className="container">
                <Row>
                    <Col className="text">
                        <h1>Game workouts</h1>
                        <h5>Input your stats for a match and we'll give you a workout so you can stay active while you play.</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => navigate('/account/create')}>Get started</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(HomePage);
