import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import VolumeSwitch from "../Components/VolumeSwitch";

class VolumeCard extends Component {
  noteChanger = notes => {
    let notifications = this.state.notifications;
    this.setState({
      notifications: [...notifications, notes]
    });
  };
render(){
  return (
    <div className="cardrow">
      <Card className='card'>
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
}}
export default VolumeCard

