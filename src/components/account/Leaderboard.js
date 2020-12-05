import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Leaderboard extends Component {
    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { users } = this.props.user;
        console.log(users);
        return (
            <div>
                <h1>Account page</h1>
                <div className="users">
                    {
                        users.map(({ name, pushups, situps, squats }) => (
                            <div className="user">
                                <span>{name}</span>
                                <span>{pushups}</span>
                                <span>{situps}</span>
                                <span>{squats}</span>
                            </div>
                        ))
                    }
                </div>
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
    getUsers: userActions.getUsers
}

export default connect(mapStateToProps, actions)(Leaderboard);
