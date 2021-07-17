import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../_actions';

import DataTable from 'react-data-table-component';

const Leaderboard = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.userReducer.users);
    const loading = useSelector(state => state.userReducer.loading);

    useEffect(() => {
        dispatch(userActions.getUsers());
    }, []);

    const getColumns = () => {
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

    const getData = (users) => {
        const data = [];

        users.forEach(user => {
            data.push({
                ...user,
                total: user.pushups + user.situps + user.squats
            });
        });

        return data;
    }

    return (
        <div>
            <div className="users">
                {
                    <React.Fragment>
                        {!users && loading && <em> Loading </em>}
                        {users &&
                            <DataTable
                                theme="dark"
                                title="Remaining workouts"
                                columns={getColumns()}
                                fixedHeader={users.length > 20}
                                data={getData(users)}
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
export default Leaderboard;
