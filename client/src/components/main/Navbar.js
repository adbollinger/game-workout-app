import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'


import WorkoutModal from './WorkoutModal';
import { authActions, userActions } from '../../_actions';
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {
    const dispatch = useDispatch();

    const [showWorkoutModal, setShowWorkoutModal] = useState('');
    const [initialized, setInitialized] = useState(false);

    const isLoggedIn = useSelector(state => state.authReducer.loggedIn);
    const loading = useSelector(state => state.authReducer.loading);
    const user = useSelector(state => state.authReducer.user);
    const updatedUser = useSelector(state => state.userReducer.user);

    useEffect(() => {
        dispatch(authActions.getUser());

        if (initialized && !loading && !isLoggedIn) {
            props.history.push('/account/login');
        }

        setInitialized(true);
    }, [isLoggedIn]);

    const handleWorkoutModalClose = () => {
        setShowWorkoutModal(false);
    }

    const handleWorkoutModalSubmit = (results) => {
        const values = {
            pushups: -results.pushups,
            situps: -results.situps,
            squats: -results.squats,
            name: user.name
        };

        dispatch(userActions.updateWorkout(values));
    }

    const handleLogout = () => {
        dispatch(authActions.logout());
    }

    const handleSelect = (key) => {
        if (key === 'logout') {
            handleLogout();
        }
    }

    return (
        <div>
            <Nav
                className="App-navbar align-content-center"
                activeKey="active"
                onSelect={(selectedKey) => handleSelect(selectedKey)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Workouts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home/leaderboard">Leaderboard</Nav.Link>
                </Nav.Item>
                <div className="flex-grow-1"></div>
                <NavDropdown title={user.name || ''} id="nav-dropdown">
                        <NavDropdown.Item eventKey="logout">Log out</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Button className="mr-3" onClick={() => setShowWorkoutModal(true)}>Submit workout</Button>
                </Nav.Item>
            </Nav>
            <WorkoutModal showModal={showWorkoutModal} results={updatedUser} handleClose={handleWorkoutModalClose} handleSubmit={handleWorkoutModalSubmit} />
        </div>
    )
}
export default withRouter(Navbar);
