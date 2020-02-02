import React, { Component } from "react";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import AppBar from "./Components/AppBar";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false
  };

  onLogin = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <AppBar />
          <Login />
          <button className="loginButton" onClick={this.onLogin}>
            {" "}
            Submit{" "}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <AppBar />
          <Dashboard />
        </div>
      );
    }
  }
}

//PUSH ALL ACTIONS AT THE BOTTOM OF THE DASHBOARD IN THE "NOTIFICATIONS TAB"

export default App;
