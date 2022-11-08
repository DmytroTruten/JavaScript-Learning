import { animals } from "./animals";
import React from "react";
import { ReactDOM } from "react-dom";

const title = "";
const background = (
  <div>
    <img className="background" src="./images/ocean.jpg" alt="ocean" />
  </div>
);
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
