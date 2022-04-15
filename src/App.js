import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { history } from "./redux/configureStore";
import "./App.css";
import { Main, Login, SignUp, Channel, MessagePage } from "./pages";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/main" exact component={Main} />
          <Route path="/user/login" exact component={Login} />
          <Route path="/user/signup" exact component={SignUp} />
          {/* <Route path="/channel/:id" component={Channel} />
          <Route path="/dm" component={MessagePage} /> */}
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
