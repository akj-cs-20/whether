import "./DetermineSeason.css";
import React from "react";

const getSeason = function (lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default function DetermineSeason(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "summer" ? "Let's heat the beach !" : "Burr, It's chilly";
  const icon = "summer" ? "sun" : "snowflake";
  return (
    <div className={`season-display ${season}`}>
      <i className={`left-icon icon ${icon} massive`}></i>
      <h1 className="text">{text}</h1>
      <i className={`right-icon icon ${icon} massive`}></i>
    </div>
  );
}
