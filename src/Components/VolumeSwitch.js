import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";

class VolumeSwitch extends Component {
  state = { 
    volume: 0
   };




  volumeChange = (prevState) => {
    if (this.state.volume >= 80 && prevState.volume < 80)
    this.noteChanger("Listening to music at a high volume could cause long-term hearing loss.");
    // let volume = value.target.textContent;
    // this.setState({ volume });
    // console.log(value);
    // if (volume > 80) {
    //   this.noteChanger(
    //     "Listening to music at high volume could cause long-term hearing loss."
    //   );
    // }
  };

  render() {
    return (
      <div className="card">
        <Slider
          aria-label="custom thumb label"
          defaultValue={20}
          valueLabelDisplay="auto"
          marks
          step={10}
          min={10}
          max={100}
          // value = {this.state.volume}
        />
      </div>
    );
  }
}
export default VolumeSwitch;
