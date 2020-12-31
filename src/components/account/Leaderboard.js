import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

import Table from 'react-bootstrap/Table';

class Leaderboard extends Component {
    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        userReducer: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { users } = this.props.userReducer;
        return (
            <div>
                <div className="users">
                    {
                        <React.Fragment>
                            {users && users.loading && <em> Loading </em>}
                            {users &&
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Pushups</th>
                                            <th>Situps</th>
                                            <th>Squats</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(({_id, name, pushups, situps, squats}) => (
                                            <tr className="user" key={_id}>
                                                <td>{name}</td>
                                                <td>{pushups}</td>
                                                <td>{situps}</td>
                                                <td>{squats}</td>
                                            </tr>
                                        ))}
                                </tbody>
                                </Table>
                            }
                        </React.Fragment>
                    }
                </div>
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
    getUsers: userActions.getUsers
}

export default connect(mapStateToProps, actions)(Leaderboard);
