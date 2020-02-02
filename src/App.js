import React, { Component } from "react";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import NavBar from './Components/NavBar';
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
          <NavBar/>
          <Login onLogin={this.onLogin}/>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar />
          <Dashboard />
        </div>
      );
    }
  }
}

//PUSH ALL ACTIONS AT THE BOTTOM OF THE DASHBOARD IN THE "NOTIFICATIONS TAB"

export default App;
