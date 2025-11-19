// Example-1 //
/**
 *
 * <div id="parent">
 *      <div id="child">
 *           <h1>I am h1 tag..</h1>
 *      </div>
 * </div>
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 tag..")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(parent);

// root.render(parent);

// **************************************** //
// **************************************** //

// Example-2 //
/**
 *
 * <div id="parent">
 *      <div id="child">
 *           <h1>I am h1 tag..</h1>
 *           <h2>I am h2 tag..</h2>
 *      </div>
 * </div>
 */

// const parent1 = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag..."),
//     React.createElement("h2", {}, "I am h2 tag..."),
//   ])
// );

// **************************************** //
// **************************************** //

// Example-3 //
/**
 *
 * <div id="parent">
 *      <div id="child">
 *           <h1>I am h1 tag..</h1>
 *           <h2>I am h2 tag..</h2>
 *      </div>
 *      <div id="child2">
 *           <h1>I am h1 tag..</h1>
 *           <h2>I am h2 tag..</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag Child..."),
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
