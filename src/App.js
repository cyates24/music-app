import React, { Component } from "react";
import Dashboard from "./Components/Dashboard";
import Login from './Components/Login'
import AppBar from './Components/AppBar'

class App extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <div>
        <AppBar/>
       { this.state.loggedIn ? <Dashboard /> : (
         <Login/>
       )}
      </div>
    );
  }
}

export default App;
