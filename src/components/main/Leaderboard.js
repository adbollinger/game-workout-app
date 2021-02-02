import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

import Table from 'react-bootstrap/Table';
import DataTable from 'react-data-table-component';

class Leaderboard extends Component {
    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        userReducer: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getUsers();
    }

    getColumns() {
        return [
            {
                name: "Name",
                selector: "name",
                sortable: false
            },
            {
                name: "Pushups",
                selector: "pushups",
                sortable: true
            },
            {
                name: "Situps",
                selector: "situps",
                sortable: true
            },
            {
                name: "Squats",
                selector: "squats",
                sortable: true
            },
        ];
    }

    getHeader() {
        return {
            fixedHeader: true
        }
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
                                <DataTable
                                    title="Remaining workouts"
                                    columns={this.getColumns()}
                                    fixedHeader={users.length > 20}
                                    data={users}
                                />
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
