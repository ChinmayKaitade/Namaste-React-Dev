/*
 *
 * <div id="parent" >
 *       <div id="child1" >
 *          <h1>I am h1 tag</h1>
 *          <h1>I am Sibling of h1 tag</h1>
 *       </div>
 *       <div id="child2" >
 *          <h1>I am h1 second tag</h1>
 *          <h1>I am Sibling of second h1 tag</h1>
 *       </div>
 * </div>
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am Sibling of h1 tag"),
    React.createElement("h1", {}, "This is Namaste React 🚀"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 second tag"),
    React.createElement("h1", {}, "I am Sibling of second h1 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log("Parent", parent);
