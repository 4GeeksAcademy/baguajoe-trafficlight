import React, { useState } from "react";



function TrafficLight() {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
    console.log(`${selectedColor} light selected`);
  };

  return (
    <div id="trafficTop">
      <div id="container">
        <div
          className={`light red ${color === "red" ? "glow" : ""}`}
          onClick={() => handleClick("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "glow" : ""}`}
          onClick={() => handleClick("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "glow" : ""}`}
          onClick={() => handleClick("green")}
        ></div>
      </div>
    </div>
  );
}


export default TrafficLight;
