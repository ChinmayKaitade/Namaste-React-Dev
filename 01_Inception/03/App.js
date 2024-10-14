const heading = React.createElement(
  "h1",
  {
    id: "heading",
    abc: "xyz",
  },
  "Hello World From React! - CDN Link"
);

console.log(heading); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
