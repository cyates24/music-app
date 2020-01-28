import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import VolumeSwitch from "./VolumeSwitch";

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
            Master volume
          </Typography>
          <Typography variant="body2" component="p">
            Overides all other volume settings in this application
          </Typography>
        </CardContent>
        <VolumeSwitch />
      </Card>
    </div>
  );
}
