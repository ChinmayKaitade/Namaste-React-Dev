import React from "react";
import ReactDOM from "react-dom/client";

//** React Element **//
const heading = (
  <h1 id="heading" className="head" tabIndex={"1"}>
    Namaste React using JSX! 🚀
  </h1>
);

console.log("Heading", heading); // Object

//** React Component **//
const Title = () => {
  return <h1>Title Component! 🚀</h1>;
};

//** React Functional Component **//
const HeadingComponent = () => {
  return (
    <>
      <Title />

      <h1>Namaste React Functional Component!</h1>
    </>
  );
};

const HeadingComponent2 = () => (
  <h1>Namaste React Functional Component! without Return</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
