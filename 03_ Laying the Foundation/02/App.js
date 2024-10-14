import React from "react";
import ReactDOM from "react-dom/client";

const elem = <h1>React Elem</h1>;

// React Element ✅
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX⚡
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {elem}
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
