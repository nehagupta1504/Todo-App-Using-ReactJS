import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./User";
import reportWebVitals from "./reportWebVitals";
import Visit from "./Visit";
import notFound from "./notFound";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/visit">Visit</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/visit" component={Visit} />
      <Route component={notFound} />
      {/* on no path notfound will be shown */}
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
