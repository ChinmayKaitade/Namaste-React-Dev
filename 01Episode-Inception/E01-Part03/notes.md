const heading = React.createElement("h1", {}, "Hello World from React!");

what is use of {} in above line

---

```
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello World from React!"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```
when we console.log(heading) we get Object

---
