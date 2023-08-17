//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();

let customStyle = {
  color: ""
};

function getTime() {
  const morning = time < 12;
  const afternoon = time < 18;
  const evening = time < 24;

  if (morning) {
    customStyle.color = "red";
    return "Good Morning!";
  }
  if (afternoon) {
    customStyle.color = "green";
    return "Good Afternoon!";
  }
  if (evening) {
    customStyle.color = "blue";
    return "Good Evening!";
  }
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {getTime()}
  </h1>,
  document.getElementById("root")
);
