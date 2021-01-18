import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./store.js";
import Account from './components/account/Account.js';
import HomePage from './components/HomePage';
import MainRouter from './components/main/MainRouter';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/account" component={Account} />            
            <Route path="/home" component={MainRouter} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
