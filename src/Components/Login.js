import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = ({ onLogin }) => {
  return (
    <form className="loginField" noValidate autoComplete="off">
      <TextField className="textField" label="Username*" />
      <TextField className="textField" label="Password*" />
      <Button className = 'logButton'variant="contained" color="primary" onClick={onLogin}>
        Log in
      </Button>
    </form>
  );
};

export default Login;
