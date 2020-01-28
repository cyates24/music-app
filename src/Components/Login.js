import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input className = 'loginBox' type="text"/>
      <input className = 'loginBox2' type="text"/>
      <Button variant="contained" color="secondary">
        Login
      </Button>
    </div>
  );
}

export default Login;
