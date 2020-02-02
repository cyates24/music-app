import React, { Component } from "react";
import LoginBox from '../Components/LoginBox'


class Login extends Component {
  render() {
    return (
      <form>
        <div className="field">
         <LoginBox />
        </div>
      </form>
    );
  }
}


export default Login;
