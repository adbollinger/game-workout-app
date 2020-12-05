import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import '../styles/navbar.scss';


import WorkoutModal from './WorkoutModal';
import { authActions } from '../_actions';

class Navbar extends Component {
    static propTypes = {
        prop: PropTypes.object
    }

    constructor() {
        super();
        this.state = {
            showWorkoutModal: false
        }
    }

    handleWorkoutModalClose() {
        this.setState({ showWorkoutModal: false });
    }

    handleWorkoutModalSubmit(results) {
        console.log(results);
        // Handle the submit?
    }

    handleLogout() {
        this.props.logout();
    }

    renderRightSide() {
        if (this.props.user == null || this.props.user == '') {
            return (
                <Nav.Item>
                    <Nav.Link href="/account/login">Login</Nav.Link>
                </Nav.Item>
            )
        } else {
            return (
                <React.Fragment>
                    <NavDropdown title={this.props.user} id="nav-dropdown">
                        <NavDropdown.Item eventKey="logout">Log out</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Button className="mr-3" onClick={() => { this.setState({ showWorkoutModal: true }) }}>Submit workout</Button>
                    </Nav.Item>
                </React.Fragment>
            )
        }
    }

    handleSelect(key) {
        if (key == 'logout') {
            this.handleLogout();
        }
    }

    render() {
        return (
            <div>
                <Nav
                    className="App-navbar align-content-center"
                    activeKey="active"
                    onSelect={(selectedKey) => { this.handleSelect(selectedKey) }}
                >
                    <Nav.Item>
                        <Nav.Link href="/">Workouts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/account/leaderboard">Leaderboard</Nav.Link>
                    </Nav.Item>
                    <div className="flex-grow-1"></div>
                    {this.renderRightSide()}
                </Nav>
                <WorkoutModal showModal={this.state.showWorkoutModal} handleClose={this.handleWorkoutModalClose.bind(this)} handleSubmit={this.handleWorkoutModalSubmit.bind(this)} />
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
    logout: authActions.logout
}

export default connect(mapStateToProps, actions)(Navbar);
