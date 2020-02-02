import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import Switch from "@material-ui/core/Switch";
import Notifications from "./Notifications";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";

class Dashboard extends Component {
  state = {
    isOnline: true,
    notifications: [],
    volume: 20
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

  volumeChange = (e, value) => {
    this.setState({ volume: value });
  };

  qualityChange = (e, value) => {
    this.setState({ quality: e.target.value });
    if (this.state.quality !== 1)
      this.noteChanger(
        "Music quality is degraded. Increase quality if your connection allows it."
      );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.volume >= 80 && prevState.volume < 80) {
      this.noteChanger(
        "Listening to music at a high volume could cause long-term hearing loss."
      );
    }
  }

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
          <div className="cardrow">
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Master volume
                </Typography>
                <Typography variant="body2" component="p">
                  Overides all other volume settings in this application
                </Typography>
              </CardContent>
              <CardActions>
                <Slider
                  aria-label="custom thumb label"
                  defaultValue={20}
                  valueLabelDisplay="auto"
                  marks
                  step={10}
                  min={10}
                  max={100}
                  value={this.state.volume}
                  onChange={this.volumeChange}
                />
              </CardActions>
            </Card>
          </div>
          <div className="cardrow">
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Sound quality
                </Typography>

                <Typography variant="body2" component="p">
                  Manually controll the music quality in event of a poor
                  connection
                </Typography>
              </CardContent>
              <CardActions>
                <Select
                  value={this.state.quality}
                  onChange={this.qualityChange}
                >
                  <MenuItem value={3}>High</MenuItem>
                  <MenuItem value={2}>Medium</MenuItem>
                  <MenuItem value={1}>Low</MenuItem>
                </Select>
              </CardActions>
            </Card>
          </div>
        </div>

        <Notifications notifs={this.state.notifications} />
      </div>
    );
  }
}

export default Dashboard;
