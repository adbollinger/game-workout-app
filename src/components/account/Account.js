import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Leaderboard from './Leaderboard';
import Login from './Login';

class Account extends Component {
    static propTypes = {
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/account/leaderboard" component={Leaderboard}/>
                <Route path="/account/login" component={Login} />
            </React.Fragment>
        )
    }
}

export default Account;

