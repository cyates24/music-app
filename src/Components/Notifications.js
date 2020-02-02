import React from "react";

const Notifications = ({ notifs }) => {
  return (
    <div className="notifications">
      <h2>Notifications:</h2>
      <ul>
        {notifs.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Notifications;