import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';

import Login from './Login';

class Account extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div className="App-body">
                <Route path="/account/login" component={Login} />
                <Route path="/account/create" component={CreateAccount} />
            </div>
        )
    }
}

export default Account;

