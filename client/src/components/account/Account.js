import React from "react";
import { Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";

import Login from "./Login";

const Account = () => {
  return (
    <div className="App-body">
      <Route path="/account/login" component={Login} />
      <Route path="/account/create" component={CreateAccount} />
    </div>
  );
};

export default Account;