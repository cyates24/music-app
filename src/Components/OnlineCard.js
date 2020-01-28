import React from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import Switch from "./Switch";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
export default function MyCard() {
  const classes = useStyles();

  return (
    <div className="cardrow">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Online Mode
          </Typography>
          <Typography variant="body2" component="p">
            Is this application connected to the internet?
          </Typography>
        </CardContent>

        <Switch />
      </Card>
    </div>
  );
}
