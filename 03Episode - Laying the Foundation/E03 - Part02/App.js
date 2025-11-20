import React from "react";
import ReactDOM from "react-dom";

// React.createElement => Object => Render to DOM => HTML Element (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🔥🚀"
);

console.log(heading); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
