import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard/" component={Index} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
