import React from "react";
import ReactDOM from "react-dom/client";

//** React Element **//
const heading = (
  <h1 id="heading" className="head" tabIndex={"1"}>
    Namaste React using JSX! 🚀
  </h1>
);

//! console.log("Heading", heading); // Object

//** React Component **//
const Title = () => {
  return (
    <>
      <h1>Title Component! 🚀</h1>
    </>
  );
};

const number = 1000;

//** React Functional Component **//
const HeadingComponent = () => {
  return (
    <>
      <Title />

      <h1>Sample JavaScript JSX Code!</h1>

      <h2>{number}</h2>

      {console.log("Console is Running...")}
    </>
  );
};

//** Some Cool Things You Should Know **//
const data = api.getData(); //! Suppose these API sends some malicious data, now we are putting this into our JSX code
//? If this code is injected into JSX in your system, these can be done by attackers these attack are called as cross-side scripting -> Attacker sends some data, when you run that code into your system, basically it was a JavaScript so it executes into your browser attacker gets permission to READ Browsers data localStorage, sessionStorage, caches, cookies, also get information from your Laptop
//* Here JSX Prevents these types of attackers attacks it sanitizes the malicious data and takes are of suspicious data
const UserData = () => {
  return (
    <>
      {Title()}
      <Title />
      <h1>User Sample Data: {data}</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
