import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import video1 from "./assets/video1.webm";
import video2 from "./assets/video2.webm";
import "./App.css";

const MyComponent = () => {
  const [overlap, setOverlap] = useState(false);

  const handleDrag = () => {
    const div1 = document.querySelector(".end");
    const div2 = document.getElementById('dragme');
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();

    if (rect1.left < rect2.right) {
      setOverlap(true);
      console.log("Divs are overlapping!");
    } else {
      setOverlap(false);
    }
  };

  return (
    <div id="main">
      <video id="video1" src={video1} style={{ opacity: overlap ? 0 : 1 }} autoPlay loop muted></video>
      <video id="video2" src={video2} autoPlay loop muted></video>
      <div id="container">
      <Draggable 
        bounds="#container" 
        axis="x" 
        onDrag={handleDrag}>
        <div id="dragme">
          <div className="cir"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="700"
            height="700"
            viewBox="0 0 700 700"
          >
            <defs>
              <style>
                {`.cls-1, .cls-3 {
                      fill: none;
                    }
                    .cls-1 {
                      stroke: #ff9823;
                      stroke-linecap: round;
                      stroke-width: 20px;
                      stroke-dasharray: 1081;
                    }
                    .cls-2 {
                      stroke: none;
                    }`}
              </style>
            </defs>
            <g id="Ellipse_1" data-name="Ellipse 1" className="cls-1">
              <circle className="cls-2" cx="350" cy="350" r="350" />
              <circle className="cls-3" cx="350" cy="350" r="342.5" />
            </g>
          </svg>
        </div>
        </Draggable>
        <div className="end-reach">
          <div className="on-cir" style={{ backgroundColor: overlap ? '#fff' : 'orange' }}></div>
        </div>
        <div className="end"></div>
        
      </div>
    </div>
  );
};

export default MyComponent;
