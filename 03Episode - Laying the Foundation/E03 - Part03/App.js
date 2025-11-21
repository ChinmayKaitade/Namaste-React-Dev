import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => Render to DOM => HTML Element (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🔥🚀"
);

console.log("Heading", heading); // Object

// ** JSX (transpiled before it reaches the JS) - PARCEL - Babel **//

//** JSX Code **// --> HTML-like or XML-like syntax
const jsxHeading = <h1 id="heading">Namaste React using JSX! 🚀</h1>;
console.log("JSX Heading", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
