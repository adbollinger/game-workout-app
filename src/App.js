//import logo from './logo.svg';
import './App.css';
import './styles/forms.scss';
import './styles/tabs.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./store.js";
import Navbar from './components/Navbar.js';
import TabsView from './components/forms/TabsView.js';
import Account from './components/account/Account.js';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={TabsView} />
              <Route path="/account" component={Account} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
