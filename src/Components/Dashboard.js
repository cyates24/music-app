import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import Switch from "@material-ui/core/Switch";
import Notifications from "./Notifications";
import VolumeCard from "../Components/VolumeCard";

class Dashboard extends Component {
  state = {
    isOnline: true,
    notifications: []
  };

  noteChanger = notes => {
    let notifications = this.state.notifications;
    this.setState({
      notifications: [...notifications, notes]
    });
  };

  onlineSwitch = () => {
    let isOnline = !this.state.isOnline;
    this.setState({ isOnline });
    if (isOnline === false) {
      this.noteChanger(
        "Your application is offline. You wont be able to share or stream music to other devices"
      );
    }
    if (isOnline === true) {
      this.noteChanger("Your application is online!");
    }
  };

  render() {
    return (
      <div className="wholeThang">
        <div className="cardrow">
          <Card className="card">
            <CardContent>
              <Typography variant="h5" component="h2">
                Online Mode
              </Typography>
              <Typography variant="body2" component="p">
                Is this application connected to the internet?
              </Typography>
            </CardContent>
            <CardActions>
              <Switch
                color="primary"
                checked={this.state.isOnline}
                onChange={this.onlineSwitch}
              />
            </CardActions>
          </Card>
          <VolumeCard />
        </div>
        <h3>System Notifications:</h3>
        <Notifications notifs={this.state.notifications} />
      </div>
    );
  }
}

export default Dashboard;
