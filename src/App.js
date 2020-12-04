import React from "react";
import "./styles.css";

import { Route, Switch, Redirect } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSignup from "./components/Admin/AdminSignup";
import AgentLogin from "./components/Agent/AgentLogin";
import Home from "./components/Home";
import Adminuser from "./components/Admin/Adminuser";
export default function App() {
  return (
    <>
      <Switch>
        <Route path="/adminlogin" exact component={AdminLogin} />
        <Route path="/adminuser" exact component={Adminuser} />
        <Route path="/adminsignup" exact component={AdminSignup} />
        <Route path="/agentlogin" exact component={AgentLogin} />
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}
