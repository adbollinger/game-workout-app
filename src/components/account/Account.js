import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';

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
                <Route path="/account/create" component={CreateAccount} />
            </React.Fragment>
        )
    }
}

export default Account;

