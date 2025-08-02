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
