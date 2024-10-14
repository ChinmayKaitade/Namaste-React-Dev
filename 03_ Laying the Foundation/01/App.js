import React from "react";
import ReactDOM from "react-dom";

// React Element ✅
// React.createElement --> Object --> When we render element on to the DOM then it becomes HTML Element

// const heading = React.createElement(
//   "h1",
//   { id: "header" },
//   "Namaste React 🚀❤️‍🔥"
// );
// console.log(heading); // Object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // HTML Element

// JSX ✅ --> html or xml like syntax
const jsxheading = <h1 className="jsx-header">Namaste React Using JSX⚡</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading); // HTML Element
console.log(jsxheading); // Object
