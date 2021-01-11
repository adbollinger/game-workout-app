import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'


import WorkoutModal from './WorkoutModal';
import { authActions, userActions } from '../_actions';

class Navbar extends Component {
    static propTypes = {
        prop: PropTypes.object
    }

    constructor() {
        super();
        this.state = {
            showWorkoutModal: false,
            //results: null
        }
    }

    componentDidMount() {
        this.props.getUser();
    }

    handleWorkoutModalClose() {
        this.setState({
            showWorkoutModal: false,
            results: null
        });
    }

    handleWorkoutModalSubmit(results) {
        const { user } = this.props;
        const { name } = user;

        const values = {
            pushups: -results.pushups,
            situps: -results.situps,
            squats: -results.squats,
            name
        };

        this.props.updateWorkout(values);
    }

    handleLogout() {
        this.props.logout();
    }

    renderRightSide() {
        if (typeof this.props.user === 'undefined' || !this.props.user.name) {
            return (
                <React.Fragment>
                    <Nav.Item>
                        <Nav.Link href="/account/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/account/create">Create account</Nav.Link>
                    </Nav.Item>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <NavDropdown title={this.props.user.name || ''} id="nav-dropdown">
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
        if (key === 'logout') {
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
                <WorkoutModal showModal={this.state.showWorkoutModal} results={this.props.userReducer.user} handleClose={this.handleWorkoutModalClose.bind(this)} handleSubmit={this.handleWorkoutModalSubmit.bind(this)} />
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
    getUser: authActions.getUser,
    logout: authActions.logout,
    updateWorkout: userActions.updateWorkout
}

export default connect(mapStateToProps, actions)(Navbar);
