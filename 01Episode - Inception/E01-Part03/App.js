// const heading = React.createElement("h1", {}, "Hello World from React!");

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello World from React!"
);

console.log(heading); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
