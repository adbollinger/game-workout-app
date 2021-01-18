import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';

import Login from './Login';

class Account extends Component {
    static propTypes = {
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/account/login" component={Login} />
                    <Route path="/account/create" component={CreateAccount} />
                </Switch>
            </Router>
        )
    }
}

export default Account;

