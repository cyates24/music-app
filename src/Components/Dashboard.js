import React from "react";
import "../App.css";
import OnlineCard from "../Components/OnlineCard";
import VolumeCard from "../Components/VolumeCard";
import QualityCard from "../Components/QualityCard";

const Dashboard = () => {
  return (
    
    <div className="cardrow">
      <h1>Welcome User</h1>
      <OnlineCard />
      <VolumeCard />
      <QualityCard />
      <h3>System Notifications:</h3>
    </div>
  );
};

export default Dashboard;
