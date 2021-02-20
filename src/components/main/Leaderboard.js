import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

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
            {
                name: "Total",
                selector: "total",
                sortable: true
            },
        ];
    }

    getHeader() {
        return {
            fixedHeader: true
        }
    }

    getData(users) {
        const data = [];

        users.forEach(user => {
            data.push({
                ...user,
                total: user.pushups + user.situps + user.squats
            });
        });

        return data;
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
                                    data={this.getData(users)}
                                    defaultSortFieldId={5}
                                    defaultSortAsc={false}
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
