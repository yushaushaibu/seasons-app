import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!' ,
        iconName: 'sun'
    },
    winter: {
        text: 'burr, it\'s chilly!',
        iconName: 'snowflake'
    }
}

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]  

//   const text = season === "winter" ? "Jane, it's chilly!" : "Let's hit the beach!";
//   const iconName = season === "winter" ? "snowflake" : "sun";

  return (
        <div className={`season-display ${season}`}>
            <i className={`icon massive ${iconName} icon-left`} />
            <h1>{text}</h1>
            <i className={`icon massive ${iconName} icon-right`} />
        </div>
  );
};


export default SeasonDisplay;
