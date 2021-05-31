import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import TabsView from './forms/TabsView';
import Leaderboard from './Leaderboard';
import Navbar from './Navbar';

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="App-body main">
                    <Route exact path="/home" component={TabsView} />
                    <Route path="/home/leaderboard" component={Leaderboard} />
                </div>
            </div>
        )
    }
}
export default MainRouter;
