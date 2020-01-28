import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import DropDown from "./DropDown";

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
            Sound quality
          </Typography>

          <Typography variant="body2" component="p">
            Manually controll the music quality in event of a poor connection
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
        <DropDown />
      </Card>
    </div>
  );
}
