import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TabsView from './forms/TabsView';
import Leaderboard from './Leaderboard';
import Navbar from './Navbar';

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <div className="App-body main">
                        <Switch>
                            <Route exact path="/home" component={TabsView} />
                            <Route path="/home/leaderboard" component={Leaderboard} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
export default MainRouter;
