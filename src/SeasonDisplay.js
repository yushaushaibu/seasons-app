import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth);
  const text = season === "winter" ? "Burr, it is chilly!" : "Let's hit the beach!";
  const iconName = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-top massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-bottom massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
