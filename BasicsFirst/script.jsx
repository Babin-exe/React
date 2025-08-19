import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "This is a children lol"),
    React.createElement("h2", {}, "This is a children lol"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//React functional component
const FComponent = () => (
  <h1>This is a h1 tag created using functional component</h1>
);

const Show = function hehe() {
  return (
    <div>
      <h1>This is my function that i will like to render</h1>
    </div>
  );
};

//React class Component

root.render(<FComponent />);
root.render(<Show />);
