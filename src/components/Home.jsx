import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircle";

import { Link } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import AgentLogin from "./Agent/AgentLogin";
import { Typography } from "@material-ui/core";
export default function Home() {
  return (
    <>
      <div className="App">
        <h1 style={{ color: "blue" }}>Welcome to Spritle travel Agency</h1>
      </div>
      <div className="account">
        <div>
          <IconButton
            component={Link}
            to="/adminlogin"
            onClick={() => <AdminLogin />}
            aria-label="show Admin"
            color="inherit"
          >
            <AccountCircleTwoToneIcon
              color="primary"
              style={{ fontSize: 80 }}
            />
          </IconButton>
          <div className="accounthome">
            <Typography>Admin</Typography>
          </div>
        </div>
        <div>
          <IconButton
            component={Link}
            to="/agentlogin"
            onClick={() => <AgentLogin />}
            aria-label="show Admin"
            color="inherit"
          >
            <AccountCircleTwoToneIcon
              color="secondary"
              style={{ fontSize: 80 }}
            />
          </IconButton>
          <div className="accounthome">
            <Typography>Agent</Typography>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
