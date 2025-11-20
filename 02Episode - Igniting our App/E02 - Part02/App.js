// Example-1 //
/**
 *
 * <div id="parent">
 *      <div id="child">
 *           <h1>Namaste React 🚀...</h1>
 *           <h2>I am h2 tag...</h2>
 *      </div>
 *      <div id="child2">
 *           <h1>I am h1 tag...</h1>
 *           <h2>I am h2 tag...</h2>
 *      </div>
 * </div>
 */

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React 🚀"),
    React.createElement("h1", {}, "I am h2 tag Child..."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag Child2..."),
    React.createElement("h1", {}, "I am h2 tag Child2..."),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);
