// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     abc: "xyz",
//   },
//   "Hello World From React! - CDN Link"
// );

// console.log(heading); // Object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// Nested Structure 🔥🚀

/*
 *
 * <div id="parent" >
 *       <div id="child" >
 *          <h1>I am h1 tag</h1>
 *       </div>
 * </div>
 *
 *
 */

// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   React.createElement(
//     "div",
//     {
//       id: "child",
//     },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );

// console.log("Parent :", parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// NOTE : React Element is (Object) --> HTML (Browser Understands)

// Nested Siblings Structure 🔥🚀

/*
 *
 * <div id="parent" >
 *       <div id="child" >
 *          <h1>I am h1 tag</h1>
 *          <h1>I am Sibling of h1 tag</h1>
 *       </div>
 * </div>
 *
 *
 */

// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   React.createElement(
//     "div",
//     {
//       id: "child",
//     },
//     [
//       React.createElement("h1", {}, "I am h1 tag"),
//       React.createElement("h1", {}, "I am Sibling of h1 tag"),
//     ]
//   )
// );

// console.log("Parent :", parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am Sibling of h1 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 second tag"),
    React.createElement("h1", {}, "I am Sibling of second h1 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log("Parent", parent);
